'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

interface IProps {
  isMobileMenu?: boolean;
}

const MenuItems = ({ isMobileMenu }: IProps) => {
  const [home, setHome] = useState<boolean>(false);
  const [tour, setTour] = useState<boolean>(false);
  const [destination, setDestination] = useState<boolean>(false);
  const [page, setPage] = useState<boolean>(false);
  const [blog, setBlog] = useState<boolean>(false);

  const openMobileMenu = (
    menu: 'home' | 'tour' | 'gallery' | 'blog' | 'contact'
  ): void => {
    if (menu === 'home') {
      setHome(!home);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'tour') {
      setHome(false);
      setTour(!tour);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'gallery') {
      setHome(false);
      setTour(false);
      setDestination(!destination);
      setPage(false);
      setBlog(false);
    } else if (menu === 'blog') {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'contact') {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobileMenu === true) {
      e.preventDefault();
    }
  };

  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <ul className="it-main-menu">
        <li>
          <Link href={getPath('/')}>{t('menu.home')}</Link>
        </li>
      <li className="has-dropdown">
        <Link href={getPath('/boat-tours-alcudia')} onClick={handleClick}>
          {t('menu.excursions')}
          <button
            className={`${
              tour
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('tour');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={tour ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link href={getPath('/alcudia-morning-boat-tour')}>{t('menu.morningTour')}</Link>
            <Link href={getPath('/alcudia-sunset-boat-tour')}>{t('menu.sunsetTour')}</Link>
            <Link href={getPath('/alcudia-private-boat-charter')}>{t('menu.privateTour')}</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={getPath('/gallery')}>{t('menu.gallery')}</Link>
      </li>
      <li>
        <Link href={getPath('/blog')}>{t('menu.blog')}</Link>
      </li>
      <li>
        <Link href={getPath('/contact')}>{t('menu.contact')}</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
