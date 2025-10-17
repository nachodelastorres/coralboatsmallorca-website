import { StaticImageData } from 'next/image';

export interface IProductDT {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
  rating: string;
  badgeTitle?: string;
  images?: StaticImageData[];
  reviewCount: number;
  description: string;
  category: string;
  sku: string;
  tag: string;
  socials: {
    icon: string;
    link: string;
  }[];
  btnText?: string;
  isNew?: boolean;
  outOfStock?: boolean;
}
