'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const { t } = useTranslation('common'); // Asegúrate de tener "cookie" en tu common.json
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
    });
    localStorage.setItem('cookie_consent', 'granted');
    setVisible(false);
  };

  const rejectCookies = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
    });
    localStorage.setItem('cookie_consent', 'denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      background: '#ffffff',
      color: '#333',
      padding: '1rem',
      borderTop: '1px solid #ccc',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <p style={{ maxWidth: '600px', marginBottom: '0.5rem' }}>
      {t('cookie.banner.text')}
      </p>
      🍪🍪🍪
      <a
        href="/docs/CoralBoats_Politica_Cookies.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '0.85rem', color: '#ED6A46', textDecoration: 'underline', marginBottom: '1rem' }}
      >
        {t('cookie.banner.link_text', 'Ver política de cookies')}
      </a>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={acceptCookies}
          style={{
            background: '#ED6A46',
            color: '#fff',
            padding: '0.5rem 1.2rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {t('cookie.banner.accept')}
        </button>
        <button
          onClick={rejectCookies}
          style={{
            background: '#ccc',
            color: '#333',
            padding: '0.5rem 1.2rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {t('cookie.banner.reject')}
        </button>
      </div>
    </div>
  );
}
