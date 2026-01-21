'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
// import ScrollToTop from '@/components/scroll-to-top/scroll-to-top';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min');
}

interface WrapperProps {
  children: React.ReactNode;
  scrollBackToTop?: boolean;
}

/**
 * Preloader como overlay - NO bloquea SSR
 * El contenido siempre se renderiza, el preloader solo lo cubre visualmente
 */
const PreloaderOverlay = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="preloader">
      <span></span>
      <span></span>
    </div>
  </div>
);

const Wrapper = ({ children, scrollBackToTop = true }: WrapperProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  // Initialize AOS and preloader setup
  useEffect(() => {
    // Initialize AOS
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
      {/* Preloader como OVERLAY: cubre visualmente pero NO bloquea el HTML */}
      {isLoading && <PreloaderOverlay />}

      {/* CRÍTICO SSR: children SIEMPRE se renderiza, incluso con isLoading=true */}
      {children}

      {/* {scrollBackToTop && <ScrollToTop />} */}
      <ToastContainer />
    </React.Fragment>
  );
};
export default Wrapper;
