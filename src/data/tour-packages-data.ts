import { ITourDT } from '@/types/tour-packages-d-t';
import detailsImg from '@/assets/img/inner-page/discover/discover-1.jpg';
// import packageImg111 from '@/assets/img/home-1/featured/img/IMG_0906.jpg';
import packageImg111 from '@/assets/img/home-1/featured/img/01morning2.webp';
// import packageImg2 from '@/assets/img/home-1/featured/img/vertical-shot-beach-ibiza-boats-it.jpg';
import packageImg3 from '@/assets/img/home-1/featured/img/03sunset.webp';
// import packageImg3 from '@/assets/img/home-1/featured/img/insta2-1.5.jpg';
import packageImg2 from '@/assets/img/home-1/featured/img/IMG_5132.webp';

export const tourPackagesData = (): ITourDT[] => [
  {
    fhId: "627668",
    slug: 'morning-tour',
    metaTitle: 'morning_metaTitle',
    metaDescription: 'morning_metaDescription',
    image: packageImg111,
    title: 'morning_title', 
    title2: 'morning_excursion_title',
    price: 60,
    price2: 40,
    price3: 0,
    address: 'excursion_address',
    duration: 3,
    detailsImg: detailsImg,
    description: 'morning_excursion_description',
    btnText: 'book_now',
  },
  {
    fhId: "627681",
    slug: 'day-tour',
    metaTitle: 'day_metaTitle',
    metaDescription: 'day_metaDescription',
    image: packageImg2,
    title: 'day_title',
    title2: 'day_excursion_title',
    price: 60,
    price2: 40,
    price3: 0,
    address: 'excursion_address',
    duration: 3,
    detailsImg: detailsImg,
    description: 'day_excursion_description',
    btnText: 'book_now',
  },
  {
    fhId: "627686",
    slug: 'sunset-tour',
    metaTitle: 'sunset_metaTitle',
    metaDescription: 'sunset_metaDescription',
    image: packageImg3,
    title: 'sunset_title',
    title2: 'sunset_excursion_title',
    price: 65,
    price2: 45,
    price3: 0,
    address: 'excursion_address',
    duration: 3,
    detailsImg: detailsImg,
    description: 'sunset_excursion_description',
    btnText: 'book_now',
  },
];

