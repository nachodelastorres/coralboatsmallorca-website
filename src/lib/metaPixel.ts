/**
 * Meta Pixel Helper
 *
 * Safe wrapper for Facebook/Meta Pixel tracking.
 * The base pixel (PageView) is loaded in layout.tsx.
 * This helper provides additional event tracking.
 */

// Extend Window interface to include fbq and tracking flags
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _lastInitiateCheckout?: number;
  }
}

/** Throttle duration for InitiateCheckout (10 seconds) */
const INITIATE_CHECKOUT_THROTTLE_MS = 10000;

/**
 * Check if Meta Pixel is available
 */
function isFbqAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/**
 * Track ViewContent event for tour detail pages
 *
 * @param tourName - The name/title of the tour
 * @param extra - Optional additional parameters (e.g., content_ids)
 */
export function trackViewContent(
  tourName: string,
  extra?: Record<string, unknown>
): void {
  if (!isFbqAvailable()) {
    return;
  }

  if (!tourName || tourName.trim() === '') {
    return;
  }

  window.fbq!('track', 'ViewContent', {
    content_name: tourName,
    content_type: 'product',
    ...extra,
  });
}

/**
 * InitiateCheckout payload interface
 */
export interface InitiateCheckoutPayload {
  /** Tour name/title */
  contentName: string;
  /** FareHarbor item ID or tour slug */
  contentId: string;
  /** Price value (optional) */
  value?: number;
  /** Currency code (default: EUR) */
  currency?: string;
}

/**
 * Track InitiateCheckout event when user clicks book now
 * Includes throttle to prevent duplicate events within 10 seconds
 *
 * @param payload - Checkout data
 * @returns boolean - true if event was tracked, false if throttled/skipped
 */
export function trackInitiateCheckout(payload: InitiateCheckoutPayload): boolean {
  if (!isFbqAvailable()) {
    return false;
  }

  if (!payload.contentName || payload.contentName.trim() === '') {
    return false;
  }

  // Throttle: prevent duplicate events within 10 seconds
  const now = Date.now();
  if (window._lastInitiateCheckout && now - window._lastInitiateCheckout < INITIATE_CHECKOUT_THROTTLE_MS) {
    return false;
  }

  window._lastInitiateCheckout = now;

  const eventParams: Record<string, unknown> = {
    content_name: payload.contentName,
    content_type: 'product',
    content_ids: [payload.contentId],
  };

  // Add value and currency if provided
  if (payload.value !== undefined && payload.value > 0) {
    eventParams.value = payload.value;
    eventParams.currency = payload.currency || 'EUR';
  }

  // Add source URL
  if (typeof window !== 'undefined') {
    eventParams.event_source_url = window.location.href;
  }

  window.fbq!('track', 'InitiateCheckout', eventParams);
  return true;
}
