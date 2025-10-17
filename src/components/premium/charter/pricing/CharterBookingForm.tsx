'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ErrorMsg from '@/components/error-msg';
import { Resolver } from 'react-hook-form';


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  duration: string;
  guests: string;
  extras?: (string | undefined)[];
  message: string;
}

const CharterBookingForm = () => {
  const { t } = useTranslation('common');

  const schema = yup.object().shape({
    firstName: yup.string().required(t('premium.charter_pricing.form_error_first_name')),
    lastName: yup.string().required(t('premium.charter_pricing.form_error_last_name')),
    email: yup
      .string()
      .email(t('premium.charter_pricing.form_error_email_invalid'))
      .required(t('premium.charter_pricing.form_error_email')),
    phone: yup.string().required(t('premium.charter_pricing.form_error_phone')),
    date: yup.string().required(t('premium.charter_pricing.form_error_date')),
    duration: yup.string().required(t('premium.charter_pricing.form_error_duration')),
    guests: yup.string().required(t('premium.charter_pricing.form_error_guests')),
    extras: yup.array().of(yup.string()),
    message: yup.string().min(10, t('premium.charter_pricing.form_error_message_min')),
  });

  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<FormData>({
  resolver: yupResolver(schema) as Resolver<FormData>, // ✅ corrección
});


  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          subject: `Private Charter Booking Request - ${data.duration}`,
          message: `
CHARTER BOOKING REQUEST

Date: ${data.date}
Duration: ${data.duration}
Number of Guests: ${data.guests}

Extras Requested:
${data.extras && data.extras.length > 0 ? data.extras.join(', ') : 'None'}

Additional Message:
${data.message || 'No additional message'}
          `,
        }),
      });

      if (response.ok) {
        setSuccessMessage(t('premium.charter_pricing.form_success'));
        reset();
        setTimeout(() => setSuccessMessage(null), 15000);
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <section style={{ background: '#f8fafc', padding: '80px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('premium.charter_pricing.booking_label')}</span>
              <h2 className="premium-section-header__title">
                {t('premium.charter_pricing.booking_title')}
              </h2>
              <p className="premium-section-header__description">
                {t('premium.charter_pricing.booking_description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-lg-8 offset-lg-2">
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '50px',
              boxShadow: '0 10px 40px rgba(8, 145, 178, 0.1)'
            }}>
              {successMessage && (
                <div style={{
                  background: 'linear-gradient(135deg, #d1fae5, #ecfdf5)',
                  border: '2px solid #10b981',
                  borderRadius: '15px',
                  padding: '20px',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '2rem', color: '#10b981' }}></i>
                  <p style={{ margin: 0, color: '#065f46', fontSize: '1rem', lineHeight: '1.6' }}>
                    {successMessage}
                  </p>
                </div>
              )}

              <form onSubmit={onSubmit} noValidate>
                {/* Name Fields */}
                <div className="row" style={{ marginBottom: '25px' }}>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_first_name')} *
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      placeholder={t('premium.charter_pricing.form_first_name_placeholder')}
                    />
                    <ErrorMsg msg={errors.firstName?.message || ''} />
                  </div>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_last_name')} *
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem'
                      }}
                      placeholder={t('premium.charter_pricing.form_last_name_placeholder')}
                    />
                    <ErrorMsg msg={errors.lastName?.message || ''} />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="row" style={{ marginBottom: '25px' }}>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_email')} *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem'
                      }}
                      placeholder={t('premium.charter_pricing.form_email_placeholder')}
                    />
                    <ErrorMsg msg={errors.email?.message || ''} />
                  </div>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_phone')} *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem'
                      }}
                      placeholder={t('premium.charter_pricing.form_phone_placeholder')}
                    />
                    <ErrorMsg msg={errors.phone?.message || ''} />
                  </div>
                </div>

                {/* Charter Details */}
                <div className="row" style={{ marginBottom: '25px' }}>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_date')} *
                    </label>
                    <input
                      type="date"
                      {...register('date')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem'
                      }}
                    />
                    <ErrorMsg msg={errors.date?.message || ''} />
                  </div>
                  <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {t('premium.charter_pricing.form_duration')} *
                    </label>
                    <select
                      {...register('duration')}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="">{t('premium.charter_pricing.form_duration_placeholder')}</option>
                      <option value="3 hours">{t('premium.charter_pricing.form_duration_3h')}</option>
                      <option value="4 hours">{t('premium.charter_pricing.form_duration_4h')}</option>
                    </select>
                    <ErrorMsg msg={errors.duration?.message || ''} />
                  </div>
                </div>

                {/* Number of Guests */}
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                    {t('premium.charter_pricing.form_guests')} *
                  </label>
                  <input
                    type="number"
                    {...register('guests')}
                    min="1"
                    max="40"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '1rem'
                    }}
                    placeholder={t('premium.charter_pricing.form_guests_placeholder')}
                  />
                  <ErrorMsg msg={errors.guests?.message || ''} />
                </div>

                {/* Extras Selection */}
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                    {t('premium.charter_pricing.form_extras')}
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      background: '#f8fafc',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: '2px solid #e2e8f0'
                    }}>
                      <input
                        type="checkbox"
                        {...register('extras')}
                        value="Light Snack Appetizer (€4/person)"
                        style={{ marginRight: '12px', width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b' }}>
                        {t('premium.charter_pricing.form_extra_snack')}
                      </span>
                    </label>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      background: '#f8fafc',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: '2px solid #e2e8f0'
                    }}>
                      <input
                        type="checkbox"
                        {...register('extras')}
                        value="Traditional Tapas Meal (€10/person)"
                        style={{ marginRight: '12px', width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b' }}>
                        {t('premium.charter_pricing.form_extra_tapas')}
                      </span>
                    </label>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      background: '#f8fafc',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: '2px solid #e2e8f0'
                    }}>
                      <input
                        type="checkbox"
                        {...register('extras')}
                        value="Open Bar Package (€12/person)"
                        style={{ marginRight: '12px', width: '20px', height: '20px' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b' }}>
                        {t('premium.charter_pricing.form_extra_bar')}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Message */}
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                    {t('premium.charter_pricing.form_message')}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      textTransform: 'none'
                    }}
                    placeholder={t('premium.charter_pricing.form_message_placeholder')}
                  />
                  <ErrorMsg msg={errors.message?.message || ''} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '18px',
                    background: isSubmitting ? '#94a3b8' : 'linear-gradient(135deg, #0891b2, #0e7490)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>{t('premium.charter_pricing.form_submitting')}</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      <span>{t('premium.charter_pricing.form_submit')}</span>
                    </>
                  )}
                </button>

                <p style={{
                  marginTop: '20px',
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  {t('premium.charter_pricing.form_privacy')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterBookingForm;
