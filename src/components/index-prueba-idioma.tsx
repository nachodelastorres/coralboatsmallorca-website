'use client';

import { useTranslation } from 'next-i18next';

const PruebaIdiomas = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('book_now')}</button>
      <p>{t('about_us')}</p>
    </div>
  );
};

export default PruebaIdiomas;

