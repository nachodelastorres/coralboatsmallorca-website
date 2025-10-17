'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import ErrorMsg from '../error-msg';
import { useTranslation } from 'react-i18next';


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { t, ready } = useTranslation('common');

  const schema = yup.object().shape({
    firstName: yup.string().required(t('premium.contact_page.form_error_first_name')),
    lastName: yup.string().required(t('premium.contact_page.form_error_last_name')),
    email: yup
      .string()
      .email(t('premium.contact_page.form_error_email_invalid'))
      .required(t('premium.contact_page.form_error_email')),
    phone: yup.string().required(t('premium.contact_page.form_error_phone')),
    subject: yup.string().required(t('premium.contact_page.form_error_subject')),
    message: yup
      .string()
      .min(5, t('premium.contact_page.form_error_message_min'))
      .required(t('premium.contact_page.form_error_message')),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const translatedMessage = t('premium.contact_page.form_success');
        console.log('Success message:', translatedMessage);
        setSuccessMessage(translatedMessage);
        reset();
        setTimeout(() => setSuccessMessage(null), 15000);
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row g-4">
        <div className="col-sm-6">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              {t('premium.contact.name')}
            </label>
            <input
              type="text"
              placeholder={t('premium.contact.name')}
              {...register('firstName')}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
                textTransform: 'capitalize',
              }}
              className="contact-input"
            />
            <ErrorMsg msg={errors.firstName?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              {t('premium.contact.surname')}
            </label>
            <input
              type="text"
              placeholder={t('premium.contact.surname')}
              {...register('lastName')}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
                textTransform: 'capitalize',
              }}
              className="contact-input"
            />
            <ErrorMsg msg={errors.lastName?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
                textTransform: 'none',
              }}
              className="contact-input contact-input-email"
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              {t('premium.contact.tel')}
            </label>
            <input
              type="text"
              placeholder={t('premium.contact.tel')}
              {...register('phone')}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
              }}
              className="contact-input"
            />
            <ErrorMsg msg={errors.phone?.message || ''} />
          </div>
        </div>
        <div className="col-12">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              {t('premium.contact.subject')}
            </label>
            <input
              type="text"
              placeholder={t('premium.contact.subject')}
              {...register('subject')}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
                textTransform: 'none',
              }}
              className="contact-input contact-input-subject"
            />
            <ErrorMsg msg={errors.subject?.message || ''} />
          </div>
        </div>
        <div className="col-12">
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
              }}
            >
              {t('premium.contact.message')}
            </label>
            <textarea
              placeholder={t('premium.contact.message')}
              {...register('message')}
              rows={6}
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                outline: 'none',
                resize: 'vertical',
                textTransform: 'none',
              }}
              className="contact-input contact-input-message"
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div
          style={{
            marginTop: '25px',
            padding: '18px 25px',
            background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
            border: '2px solid #86efac',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '1.3rem' }}></i>
            <span style={{ color: '#166534', fontWeight: '600', fontSize: '1.05rem' }}>{successMessage}</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        style={{
          marginTop: '25px',
          width: '100%',
          padding: '16px 35px',
          background: 'linear-gradient(135deg, #0891b2, #0e7490)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '1.05rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)',
        }}
        className="contact-submit-btn"
      >
        <i className="fa-solid fa-paper-plane" style={{ marginRight: '10px' }}></i>
        {t('premium.contact.send_message')}
      </button>

      <style jsx>{`
        .contact-input:focus {
          border-color: #0891b2;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .contact-input-email {
          text-transform: none !important;
        }

        .contact-input-subject::first-letter {
          text-transform: uppercase !important;
        }

        .contact-input-subject {
          text-transform: none !important;
        }

        .contact-input-message::first-letter {
          text-transform: uppercase !important;
        }

        .contact-input-message {
          text-transform: none !important;
        }

        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8, 145, 178, 0.4);
        }

        .contact-submit-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
