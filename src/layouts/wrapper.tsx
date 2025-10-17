'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
// import ScrollToTop from '@/components/scroll-to-top/scroll-to-top';
import Preloader from '@/components/preloader/preloader';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min');
}

interface WrapperProps {
  children: React.ReactNode;
  scrollBackToTop?: boolean;
}

const Wrapper = ({ children, scrollBackToTop = true }: WrapperProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  // Initialize AOS and preloader setup
  useEffect(() => {
    //Initialize AOS
    AOS.init({
      once: true,
    });

    // Remove preloader after some delay or once content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Load to top whenever path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      {isLoading && <Preloader />}
      {!isLoading && children}
      {/* {scrollBackToTop && <ScrollToTop />} */}
      <ToastContainer />
    </React.Fragment>
  );
};
export default Wrapper;
