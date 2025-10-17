import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from '../../public/locales/en/common.json';
import common_es from '../../public/locales/es/common.json';
import common_de from '../../public/locales/de/common.json';
import common_fr from '../../public/locales/fr/common.json';
import common_it from '../../public/locales/it/common.json';
import common_ca from '../../public/locales/ca/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: common_en },
      es: { common: common_es },
      de: { common: common_de },
      fr: { common: common_fr },
      it: { common: common_it },
      ca: { common: common_ca },
    },
    fallbackLng: 'en',
    lng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya hace el escape de valores
    },
    compatibilityJSON: 'v3',
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false,
      wait: true,
      ssr: true,
     } // 👈 Habilitar SSR
  });

export default i18n;
