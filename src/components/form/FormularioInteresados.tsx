'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import ErrorMsg from '../error-msg';

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  tipoExcursion: string;
  numeroDePersonas: number;
}

// ✅ Esquema de validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  apellidos: yup.string().required('El apellido es obligatorio'),
  email: yup
    .string()
    .email('Formato de email inválido')
    .required('El email es obligatorio'),
  telefono: yup.string().required('El número de teléfono es obligatorio'),
  tipoExcursion: yup.string().required('El tipo de excursión es obligatorio'),
  numeroDePersonas: yup
    .number()
    .min(1, 'Mínimo una persona')
    .max(45, 'Máximo 45 personas')
    .required('El número de personas es obligatorio'),
});

const FormularioInteresados = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // ✅ Estado para el mensaje de éxito
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log('🚀 Datos recogidos en el formulario:', data);
    try {
      const response = await fetch('/api/interesados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('🎉 ¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
        reset();

        // ✅ Eliminar el mensaje después de 5 segundos
        setTimeout(() => setSuccessMessage(null), 15000);
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row gx-20">
        {/* ✅ Nombre */}
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Nombre:"
              {...register('nombre')}
            />
            <ErrorMsg msg={errors.nombre?.message || ''} />
          </div>
        </div>

        {/* ✅ Apellidos */}
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Apellidos:"
              {...register('apellidos')}
            />
            <ErrorMsg msg={errors.apellidos?.message || ''} />
          </div>
        </div>

        {/* ✅ Email */}
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="email"
              placeholder="Email:"
              {...register('email')}
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>

        {/* ✅ Teléfono */}
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="tel"
              placeholder="Teléfono:"
              {...register('telefono')}
            />
            <ErrorMsg msg={errors.telefono?.message || ''} />
          </div>
        </div>

        {/* ✅ Tipo de excursión */}
        <div className="col-12 mb-20">
          <div className="it-contact-input-box">
            <select {...register('tipoExcursion')}>
              <option value="mañana">Mañana (10:30 - 13:30)</option>
              <option value="mediodía">Mediodía (14:00 - 17:00)</option>
              <option value="sunset">Atardecer (17:30 - 20:30)</option>
            </select>
            <ErrorMsg msg={errors.tipoExcursion?.message || ''} />
          </div>
        </div>

        {/* ✅ Número de personas */}
        <div className="col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="number"
              placeholder="Número de personas:"
              {...register('numeroDePersonas')}
              min={1}
              max={30}
            />
            <ErrorMsg msg={errors.numeroDePersonas?.message || ''} />
          </div>
        </div>
      </div>

      {/* ✅ Mensaje de éxito dinámico */}
      {successMessage && (
        <div style={{
          marginTop: '1rem',
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#E6F5EE', // Verde claro de la paleta
          color: '#6DA48F', // Verde marino
          borderRadius: '5px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          {successMessage}
        </div>
      )}

      {/* ✅ Botón */}
      <button type="submit" className="it-btn-primary">
        Enviar Información
      </button>
    </form>
  );
};

export default FormularioInteresados;
