import { StaticImageData } from 'next/image';

export interface ITourDT {
  fhId: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  image: StaticImageData;
  title: string;
  title2: string;
  price: number;
  price2: number;
  price3: number;
  badgeTitle?: string;
  isFeature?: boolean;
  address: string;
  // rating: string;
  // review: string;
  duration: number;
  // travelerCount: number;
  detailsImg: StaticImageData;
  description?: string;
  // progresses: {
  //   title: string;
  //   value: string;
  // }[];
  btnText: string;
  checkIn?: string;
}
