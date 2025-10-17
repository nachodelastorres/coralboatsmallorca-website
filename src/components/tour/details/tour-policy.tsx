// "use client";

// import { useState } from 'react';

// const TourPolicy = () => {
//   const [isPolicyOpen, setIsPolicyOpen] = useState(false);
//   const [isTermsOpen, setIsTermsOpen] = useState(false);

//   return (
//     <div className="it-custom-accordion">
//       {/* Dropdown Política de Cancelación */}
//       <div className="accordion-items">
//         <div className="accordion-header">
//           <button
//             className={`accordion-buttons ${isPolicyOpen ? '' : 'collapsed'}`}
//             onClick={() => setIsPolicyOpen(!isPolicyOpen)}
//             aria-expanded={isPolicyOpen}
//           >
//             Política de Cancelación
//           </button>
//         </div>
//         {isPolicyOpen && (
//           <div className="accordion-body">
//             <ol>
//               <li>
//                 <strong>Cancelación gratuita hasta 24 horas antes</strong><br />
//                 Si necesitas cancelar tu reserva, puedes hacerlo de forma gratuita hasta <strong>24 horas antes</strong> del inicio de la actividad.  
//                 Si cancelas con al menos 24 horas de antelación, recibirás el reembolso completo sin cargos adicionales.
//               </li>
//               <li>
//                 <strong>Modificaciones por condiciones meteorológicas o técnicas</strong><br />
//                 La seguridad y el bienestar de nuestros pasajeros son nuestra prioridad.   
//                 La ruta y los horarios de la excursión podrían verse afectados por <strong>condiciones meteorológicas adversas</strong> o <strong>motivos técnicos</strong>.  
//                 Si fuera necesario modificar o suspender la actividad por estas razones, te ofreceremos dos opciones:  
//                 <ul>
//                   <li>Reprogramar tu excursión para otro día sin coste adicional.</li>
//                   <li>Solicitar el <strong>reembolso completo</strong> del importe pagado.</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Suspensión de la actividad</strong><br />
//                 Si la actividad se cancela por razones ajenas al cliente (como condiciones meteorológicas o problemas técnicos), nos pondremos en contacto contigo lo antes posible para ofrecerte una solución.  
//                 Podrás elegir entre reprogramar la excursión o solicitar el reembolso completo.
//                 </li>
//               <li>
//                 <strong>Seguridad y experiencia agradable</strong><br />
//                 En Coral Boats, nuestra prioridad es ofrecerte una experiencia segura y agradable en el mar.  
//                 Si tienes alguna duda o necesitas más información, no dudes en ponerte en contacto con nosotros.
//                 </li>
//             </ol>
//           </div>
//         )}
//       </div>

//       {/* Dropdown Condiciones Generales */}
//       <div className="accordion-items">
//         <div className="accordion-header">
//           <button
//             className={`accordion-buttons ${isTermsOpen ? '' : 'collapsed'}`}
//             onClick={() => setIsTermsOpen(!isTermsOpen)}
//             aria-expanded={isTermsOpen}
//           >
//             Condiciones Generales
//           </button>
//         </div>
//         {isTermsOpen && (
//           <div className="accordion-body">
//             <ol>
//               <li>
//                 <strong>Punto de encuentro y puntualidad</strong><br />
//                 Se recomienda estar en el punto de encuentro con <strong>15 minutos de antelación</strong> al inicio de la actividad.  
//                 El barco partirá puntualmente a la hora programada. Si el cliente no se encuentra en el punto de encuentro a la hora indicada, perderá el derecho a participar en la actividad, sin posibilidad de reembolso o reprogramación.
//               </li>
//               <li>
//                 <strong>Derecho de admisión y seguridad a bordo</strong><br />
//                   El capitán de Coral Boats tiene la <strong>autoridad y responsabilidad</strong> de garantizar la seguridad de todos los pasajeros a bordo.  
//                   Por este motivo, se reserva el derecho de admisión o de permanencia en el barco si considera que la actitud o el estado de algún pasajero supone un riesgo para la seguridad de la tripulación o del resto de los pasajeros.
//               </li>
//               <li>
//                 <strong>Condiciones climáticas y técnicas</strong><br />
//                   La ruta y los horarios de la excursión podrían verse modificados por <strong>motivos meteorológicos o técnicos</strong>.  
//                   En caso de suspensión o modificación significativa, el cliente tendrá derecho a reprogramar la actividad o a solicitar el reembolso completo.  
//                   Coral Boats se compromete a mantener informados a los clientes sobre cualquier cambio que pudiera afectar a la experiencia reservada.
//                 </li>
//               <li>
//                 <strong>Responsabilidad a bordo</strong><br />
//                   Los pasajeros deben seguir en todo momento las <strong>instrucciones de la tripulación</strong> para garantizar una experiencia segura y agradable.  
//                   El cliente es responsable de sus objetos personales durante la actividad. Coral Boats no se hace responsable de pérdidas o daños de efectos personales durante la excursión.
//                 </li>
//             </ol>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TourPolicy;


"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TourPolicy = () => {
  const { t } = useTranslation('common');
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    
    <div className="container">
    <div className="col-12">
    <div className="it-custom-accordion">
      {/* ✅ Dropdown Política de Cancelación */}
      <div className="accordion-items">
        <div className="accordion-header">
          <button
            className={`accordion-buttons ${isPolicyOpen ? '' : 'collapsed'}`}
            onClick={() => setIsPolicyOpen(!isPolicyOpen)}
            aria-expanded={isPolicyOpen}
          >
            <span className="accordion-number">PC</span> 
            {t('policy.cancellation_title')}
          </button>
        </div>
        {isPolicyOpen && (
          <div className="accordion-body">
            <ol>
              <li>
                <strong>{t('policy.free_cancellation_title')}</strong><br />
                {t('policy.free_cancellation_text')}
              </li>
              <li>
                <strong>{t('policy.weather_modification_title')}</strong><br />
                {t('policy.weather_modification_text')}
                <ul>
                  <li>{t('policy.weather_modification_option1')}</li>
                  <li>{t('policy.weather_modification_option2')}</li>
                </ul>
              </li>
              <li>
                <strong>{t('policy.activity_suspension_title')}</strong><br />
                {t('policy.activity_suspension_text')}
              </li>
              <li>
                <strong>{t('policy.safety_title')}</strong><br />
                {t('policy.safety_text')}
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* ✅ Dropdown Condiciones Generales */}
      <div className="accordion-items">
        <div className="accordion-header">
          <button
            className={`accordion-buttons ${isTermsOpen ? '' : 'collapsed'}`}
            onClick={() => setIsTermsOpen(!isTermsOpen)}
            aria-expanded={isTermsOpen}
          >
            <span className="accordion-number">CG</span> 
            {t('terms.title')}
          </button>
        </div>
        {isTermsOpen && (
          <div className="accordion-body">
            <ol>
              <li>
                <strong>{t('terms.meeting_point_title')}</strong><br />
                {t('terms.meeting_point_text')}
              </li>
              <li>
                <strong>{t('terms.admission_right_title')}</strong><br />
                {t('terms.admission_right_text')}
              </li>
              <li>
                <strong>{t('terms.weather_conditions_title')}</strong><br />
                {t('terms.weather_conditions_text')}
              </li>
              <li>
                <strong>{t('terms.responsibility_title')}</strong><br />
                {t('terms.responsibility_text')}
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default TourPolicy;



