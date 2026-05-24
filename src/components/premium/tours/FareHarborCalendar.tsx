'use client';

import { useEffect, useRef, useState } from 'react';

interface FareHarborCalendarProps {
  /**
   * FareHarbor item ID for a single tour (e.g. 674271 for the Morning Tour).
   * Omit it to show the account-wide calendar with all tours.
   */
  itemId?: string;
  /**
   * Restrict the account-wide calendar to these item IDs (comma-joined into
   * the `items` param). Only meaningful when itemId is omitted.
   */
  items?: string[];
  /** FareHarbor flow ID. Pass "" to omit the flow param (e.g. account calendar). */
  flow?: string;
  /** FareHarbor shortname (account) */
  shortname?: string;
  /** Append &full-items=yes (shows full item details in the calendar flow) */
  fullItems?: boolean;
  /** Height (px) shown before FareHarbor reports its real height */
  initialHeight?: number;
}

/**
 * Embeds the FareHarbor inline booking calendar for a given tour item.
 *
 * Why a raw <iframe> instead of FareHarbor's <script> embed:
 * the official calendar embed places its iframe with document.write(), which
 * only works while the HTML is being parsed. Injected after load (as React
 * must), modern browsers silently drop the document.write() and nothing
 * renders. So we render the iframe ourselves, reproducing the two things the
 * FareHarbor script does:
 *   1. A "fareharbor-embed:" window name that puts the page in embed mode
 *      (no site chrome) and tells it which embedId to report back.
 *   2. A "message" listener for the {type:'fareharbor.height'} postMessages
 *      the embedded page sends so the iframe grows/shrinks with its content.
 *
 * This is independent from the FH.open() popup used by BookingCTA; both coexist.
 */
const FareHarborCalendar = ({
  itemId,
  items,
  flow = '1382210',
  shortname = 'coralboatsmallorca',
  fullItems = false,
  initialHeight = 700,
}: FareHarborCalendarProps) => {
  // Built on the client only (needs window.location for parentUrl).
  const [embed, setEmbed] = useState<{ src: string; name: string; embedId: string } | null>(null);
  const [height, setHeight] = useState(initialHeight);
  const embedIdRef = useRef<string>('');

  useEffect(() => {
    const embedId = `fh-${itemId ?? 'all'}-${Math.random().toString(36).slice(2)}`;
    embedIdRef.current = embedId;

    const name =
      'fareharbor-embed:' +
      encodeURIComponent(
        JSON.stringify({
          isLightframed: false,
          parentUrl: window.location.href,
          embedId,
        })
      );

    // Path depends on what we're showing:
    //  - single item        -> items/{id}/calendar/
    //  - filtered item list  -> items/calendar/ (all-availability view) + items=
    //  - whole account       -> calendar/
    const hasItemsFilter = !itemId && !!items && items.length > 0;
    let path = 'calendar/';
    if (itemId) path = `items/${itemId}/calendar/`;
    else if (hasItemsFilter) path = 'items/calendar/';

    const query = [
      flow ? `flow=${flow}` : null,
      hasItemsFilter ? `items=${items!.join(',')}` : null,
      fullItems ? 'full-items=yes' : null,
      'fallback=simple',
    ]
      .filter(Boolean)
      .join('&');

    const src = `https://fareharbor.com/embeds/book/${shortname}/${path}?${query}`;

    setEmbed({ src, name, embedId });
  }, [itemId, items, flow, shortname, fullItems]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://fareharbor.com') return;

      let data: { type?: string; height?: number; embedId?: string };
      try {
        data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      if (
        data &&
        data.type === 'fareharbor.height' &&
        data.embedId === embedIdRef.current &&
        typeof data.height === 'number'
      ) {
        setHeight(data.height);
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Reserve the space during SSR / before the client builds the embed.
  if (!embed) {
    return <div className="fareharbor-calendar-embed" style={{ minHeight: initialHeight }} />;
  }

  return (
    <iframe
      className="fareharbor-calendar-embed"
      src={embed.src}
      name={embed.name}
      title="FareHarbor booking calendar"
      style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
    />
  );
};

export default FareHarborCalendar;
