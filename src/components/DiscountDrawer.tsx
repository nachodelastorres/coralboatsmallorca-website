'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DiscountDrawer() {
  const { t } = useTranslation('common')
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Extraer el idioma de la URL (ej: /es/about -> es)
  const lang = pathname?.split('/')[1] || 'en'
  const toursUrl = `/${lang}/boat-tours-alcudia`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('CORAL15')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="discount-drawer-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`discount-drawer ${isOpen ? 'open' : ''}`}>
        {/* Tab (always visible) */}
        <button
          className="discount-drawer-tab"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('discountDrawer.tabLabel')}
        >
          <span className="tab-icon">🏷️</span>
          <span className="tab-text">-15%</span>
        </button>

        {/* Content panel */}
        <div className="discount-drawer-content">
          <button
            className="discount-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="discount-drawer-header">
            <span className="header-icon">🎉</span>
            <h3>{t('discountDrawer.title')}</h3>
          </div>

          <div className="discount-drawer-badge">
            <span className="badge-percent">15%</span>
            <span className="badge-off">OFF</span>
          </div>

          <p className="discount-drawer-subtitle">
            {t('discountDrawer.subtitle')}
          </p>

          <div className="discount-drawer-code">
            <span className="code-label">{t('discountDrawer.codeLabel')}</span>
            <div className="code-box">
              <span className="code-value">CORAL15</span>
              <button
                className="code-copy"
                onClick={handleCopy}
              >
                {copied ? '✓' : t('discountDrawer.copy')}
              </button>
            </div>
          </div>

          <div className="discount-drawer-urgency">
            <span className="urgency-icon">⚡</span>
            <span>{t('discountDrawer.urgency')}</span>
          </div>

          <Link
            href={toursUrl}
            className="discount-drawer-cta"
            onClick={() => setIsOpen(false)}
          >
            {t('discountDrawer.cta')}
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .discount-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 9998;
        }

        .discount-drawer {
          position: fixed !important;
          right: 0 !important;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          pointer-events: none;
          width: auto !important;
          height: auto !important;
          background: transparent !important;
        }

        .discount-drawer-tab {
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 48px;
          padding: 12px 8px;
          background: linear-gradient(135deg, #ED6A46 0%, #d45a38 100%);
          border: none;
          border-radius: 12px 0 0 12px;
          cursor: pointer;
          box-shadow: -4px 4px 15px rgba(237, 106, 70, 0.3);
          transition: all 0.3s ease;
        }

        .discount-drawer-tab:hover {
          width: 54px;
          box-shadow: -6px 6px 20px rgba(237, 106, 70, 0.4);
        }

        .tab-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .tab-text {
          color: white;
          font-weight: 800;
          font-size: 14px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 1px;
        }

        .discount-drawer-content {
          pointer-events: auto;
          position: absolute;
          right: 48px;
          top: 50%;
          transform: translateY(-50%) translateX(100%);
          width: 300px;
          background: white;
          border-radius: 16px 0 0 16px;
          padding: 24px;
          box-shadow: -8px 0 30px rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-out;
        }

        .discount-drawer.open {
          pointer-events: auto;
        }

        .discount-drawer.open .discount-drawer-content {
          transform: translateY(-50%) translateX(0);
          opacity: 1;
          visibility: visible;
        }

        .discount-drawer-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 28px;
          height: 28px;
          border: none;
          background: #f5f5f5;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .discount-drawer-close:hover {
          background: #e0e0e0;
          color: #333;
        }

        .discount-drawer-header {
          text-align: center;
          margin-bottom: 16px;
        }

        .header-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 8px;
        }

        .discount-drawer-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .discount-drawer-badge {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .badge-percent {
          font-size: 56px;
          font-weight: 800;
          color: #ED6A46;
          line-height: 1;
        }

        .badge-off {
          font-size: 24px;
          font-weight: 700;
          color: #ED6A46;
        }

        .discount-drawer-subtitle {
          text-align: center;
          font-size: 14px;
          color: #555;
          margin: 0 0 20px 0;
          line-height: 1.4;
        }

        .discount-drawer-code {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
        }

        .code-label {
          display: block;
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
          text-align: center;
        }

        .code-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border: 2px dashed #ED6A46;
          border-radius: 8px;
          padding: 8px 12px;
        }

        .code-value {
          font-size: 20px;
          font-weight: 800;
          color: #004E89;
          letter-spacing: 2px;
        }

        .code-copy {
          background: #ED6A46;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          min-width: 60px;
        }

        .code-copy:hover {
          background: #d45a38;
        }

        .discount-drawer-urgency {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          color: #666;
          margin-bottom: 16px;
        }

        .urgency-icon {
          font-size: 16px;
        }

        .discount-drawer-cta {
          display: block;
          width: 100%;
          background: linear-gradient(135deg, #ED6A46 0%, #d45a38 100%);
          color: white;
          text-align: center;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(237, 106, 70, 0.3);
        }

        .discount-drawer-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(237, 106, 70, 0.4);
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .discount-drawer {
            top: auto !important;
            bottom: 120px !important;
            transform: none !important;
          }

          .discount-drawer-tab {
            width: 40px;
            padding: 10px 6px;
          }

          .tab-icon {
            font-size: 16px;
          }

          .tab-text {
            font-size: 11px;
          }

          .discount-drawer-content {
            position: fixed !important;
            right: 0 !important;
            bottom: 0 !important;
            top: auto !important;
            left: 0 !important;
            width: 100% !important;
            max-height: 85vh;
            overflow-y: auto;
            transform: translateY(100%);
            border-radius: 20px 20px 0 0;
            padding: 24px 20px 30px;
          }

          .discount-drawer.open .discount-drawer-content {
            transform: translateY(0);
          }

          .badge-percent {
            font-size: 48px;
          }

          .badge-off {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}
