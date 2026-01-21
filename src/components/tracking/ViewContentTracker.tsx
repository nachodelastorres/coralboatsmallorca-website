'use client';

import { useEffect, useRef } from 'react';
import { trackViewContent } from '@/lib/metaPixel';

interface ViewContentTrackerProps {
  tourName: string;
  tourSlug?: string;
}

/**
 * Client component to track ViewContent event on tour detail pages.
 * Fires once per tour when the component mounts.
 * If tourName changes to a different tour, it will fire again.
 */
const ViewContentTracker = ({ tourName, tourSlug }: ViewContentTrackerProps) => {
  const trackedTourRef = useRef<string | null>(null);

  useEffect(() => {
    // Guard: only fire if tourName is valid and different from last tracked
    if (!tourName || tourName.trim() === '') {
      return;
    }

    if (trackedTourRef.current === tourName) {
      return;
    }

    // Build extra params if slug is provided
    const extra: Record<string, unknown> = {};
    if (tourSlug) {
      extra.content_ids = [tourSlug];
    }

    trackViewContent(tourName, Object.keys(extra).length > 0 ? extra : undefined);
    trackedTourRef.current = tourName;
  }, [tourName, tourSlug]);

  // This component renders nothing
  return null;
};

export default ViewContentTracker;
