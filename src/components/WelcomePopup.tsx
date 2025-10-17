'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n' // Importa solo aquí si no tienes Provider global


function WelcomePopup() {
  const { t } = useTranslation('common')
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('welcomePopupShown')
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true)
        localStorage.setItem('welcomePopupShown', 'true')
      }, 10000) // ⏱ 10 segundos
      return () => clearTimeout(timer)
    }
  }, [])

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) return
    // Aquí iría tu lógica real de registro (API, Mailchimp, etc.)
    setIsSubmitted(true)
  }

  const handleClose = () => setShowPopup(false)

  if (!showPopup) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '24px',
        padding: '2rem',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        fontFamily: `'DM Sans', sans-serif`,
      }}>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            fontSize: '20px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#888',
          }}
        >×</button>

        {!isSubmitted ? (
          <>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ED6A46' }}>
              {t('popup.title')}
            </h2>
            <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', color: '#333' }}>
              {t('popup.subtitle')}
            </p>

            <input
              type="email"
              inputMode="email"
              placeholder={t('popup.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              required
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              style={{
                textTransform: 'none',
                padding: '0.75rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '12px',
                width: '100%',
                marginBottom: '1rem',
                fontSize: '1rem',
              }}
            />

            <button
              onClick={handleUnlock}
              disabled={!isValidEmail(email)}
              style={{
                backgroundColor: isValidEmail(email) ? '#ED6A46' : '#F0B8A7',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '16px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: isValidEmail(email) ? 'pointer' : 'not-allowed',
                transition: 'background 0.3s',
              }}
            >
              {t('popup.button')}
            </button>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#6DA48F' }}>
              {t('popup.successMessage')}
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
              {t('popup.codeMessage')}
            </p>
            <div style={{
              marginTop: '1.5rem',
              padding: '0.8rem 1.2rem',
              backgroundColor: '#E6C28B',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              letterSpacing: '1px',
              color: '#004E89',
              display: 'inline-block',
            }}>
              WELCOME25
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WelcomePopup
