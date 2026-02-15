'use client';

import { useTranslation } from 'react-i18next';
import DiscoverAlcudiaSEOSSR from './DiscoverAlcudiaSEOSSR';

const DiscoverAlcudiaSEO = () => {
  const { t } = useTranslation('common');

  const texts = {
    title: t('discoverAlcudia.title'),
    subtitle: t('discoverAlcudia.subtitle'),
    introP1: t('discoverAlcudia.introP1'),
    introP2: t('discoverAlcudia.introP2'),
    beachesTitle: t('discoverAlcudia.beachesTitle'),
    beachesP1: t('discoverAlcudia.beachesP1'),
    beachesP2: t('discoverAlcudia.beachesP2'),
    natureTitle: t('discoverAlcudia.natureTitle'),
    natureP1: t('discoverAlcudia.natureP1'),
    natureP2: t('discoverAlcudia.natureP2'),
    gastroTitle: t('discoverAlcudia.gastroTitle'),
    gastroP1: t('discoverAlcudia.gastroP1'),
    gastroP2: t('discoverAlcudia.gastroP2'),
    stayTitle: t('discoverAlcudia.stayTitle'),
    stayP1: t('discoverAlcudia.stayP1'),
    stayP2: t('discoverAlcudia.stayP2'),
    stat1Value: t('discoverAlcudia.stat1Value'),
    stat1Label: t('discoverAlcudia.stat1Label'),
    stat2Value: t('discoverAlcudia.stat2Value'),
    stat2Label: t('discoverAlcudia.stat2Label'),
    stat3Value: t('discoverAlcudia.stat3Value'),
    stat3Label: t('discoverAlcudia.stat3Label'),
    ctaText: t('discoverAlcudia.ctaText'),
    ctaButton: t('discoverAlcudia.ctaButton'),
    imgAltOldTown: t('discoverAlcudia.imgAltOldTown'),
    imgAltPlayaMuro: t('discoverAlcudia.imgAltPlayaMuro'),
    imgAltFormentor: t('discoverAlcudia.imgAltFormentor'),
    imgAltPuerto: t('discoverAlcudia.imgAltPuerto'),
    imgCaptionOldTown: t('discoverAlcudia.imgCaptionOldTown'),
    imgCaptionPlayaMuro: t('discoverAlcudia.imgCaptionPlayaMuro'),
    imgCaptionFormentor: t('discoverAlcudia.imgCaptionFormentor'),
    imgCaptionPuerto: t('discoverAlcudia.imgCaptionPuerto'),
  };

  return <DiscoverAlcudiaSEOSSR texts={texts} />;
};

export default DiscoverAlcudiaSEO;
