import { useTranslation } from 'react-i18next';
import FaqOne from '../../faq/item/faq-one';

import faqImg from '@/assets/img/inner-page/discover/accordian-1-1.jpg';

const TourDetailsFaq = () => {
  const { t } = useTranslation('common');

  // ✅ Datos dinámicos traducidos desde el archivo JSON
  const faqData = [
    {
      id: 1,
      uuid: 'a',
      title: t('faq.q1_title'),
      description: t('faq.q1_description'),
      image: faqImg,
    },
    {
      id: 2,
      uuid: 'b',
      title: t('faq.q2_title'),
      description: t('faq.q2_description'),
      image: faqImg,
    },
    {
      id: 3,
      uuid: 'c',
      title: t('faq.q3_title'),
      description: t('faq.q3_description'),
      image: faqImg,
    },
    {
      id: 4,
      uuid: 'd',
      title: t('faq.q4_title'),
      description: t('faq.q4_description'),
      image: faqImg,
    },
    {
      id: 5,
      uuid: 'e',
      title: t('faq.q5_title'),
      description: t('faq.q5_description'),
      image: faqImg,
    },
  ];

  return (
    <div className="it-faq-area p-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-faq-wrap">
              <div className="it-custom-accordion it-custom-accordion-style-3">
                {/* ✅ Renderizar usando el componente existente */}
                <FaqOne faqs={faqData} preExpand="a" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsFaq;

// import FaqOne from '../../faq/item/faq-one';

// import faqImg from '@/assets/img/inner-page/discover/accordian-1-1.jpg';

// const faqData = [
//   {
//     id: 1,
//     uuid: 'a',
//     title: '¿Cómo llego a la zona de embarque?',
//     description: `El punto de encuentro es el muelle comercial del Puerto de Alcudia (Estación Marítima del Puero de Alcudia).
//                   Si pinchas en el icono de la ubicación que aparece un poco más arriba, te mostrará la ubicación exacta en Google Maps.
//                   Puedes llegar andando, en coche, taxi o bus. Si vienes en coche, hay un parking gratuito en la zona.`,
//     image: faqImg,
//   },
//   {
//     id: 2,
//     uuid: 'b',
//     title: '¿Dónde puedo dejar mis pertenencias cuando entro en el barco?',
//     description: `Contamos con estanterías en el barco donde puedes dejar tus pertenencias. 
//                   Y, si bien la tripulación se queda vigilante en el barco mientras los pasajeros disfrutan de la parada en la cala,
//                   no nos hacemos responsable de la perdida o daño de tus pertenencias.`,
//     image: faqImg,
//   },
//   {
//     id: 3,
//     uuid: 'c',
//     title: '¿Es necesario saber nadar?',
//     description: `No, no es necesario saber nadar para disfrutar de la excursión, pues el trayecto, las vistas y la gastronomía ya hacen de la excursión una actividad memorable.
//                   Asimimso, si se quiere disfrutar de la experiencia completa, se recomienda saber nadar.
//                   Contamos con múltiples chalecos salvavidas y objetos de flotación a bordo que podrás utilizar si lo necesitas. `,
//     image: faqImg,
//   },
//   {
//     id: 4,
//     uuid: 'd',
//     title: '¿Qué pasa si tengo alergias o intolerancias alimenticias?',
//     description: `Por favor, ponte en contacto con nosotros si tienes alergias o intolerancias alimenticias 
//                   para que podamos adaptar el menú a tus necesidades.`,
//     image: faqImg,
//   },
//   {
//     id: 5,
//     uuid: 'e',
//     title: '¿Puedo pagar en efectivo el ticket de la excursión?',
//     description: `Sí, podrás pagar en efectivo tanto el ticket de la excursión como cualquier otro producto que compres a bordo.
//                   Aunque recomendamos comprar el ticket online para reservar tu plaza, si decides pagar en efectivo, ponte en contacto 
//                   con nosotros para reservar tu plaza.`,
//     image: faqImg,
//   },
// ];

// const TourDetailsFaq = () => {
//   return (
//     <div className="it-faq-area p-relative">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="it-faq-wrap">
//               <div className="it-custom-accordion it-custom-accordion-style-3">
//                 <FaqOne faqs={faqData} preExpand="a" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TourDetailsFaq;
