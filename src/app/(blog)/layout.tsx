import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display, Poppins } from 'next/font/google';
import ReduxProvider from '../redux-provider';
import I18nProvider from '../i18n-provider';
import '../globals.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--it-ff-primary',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--it-ff-playfair',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--it-ff-poppins',
});

// Legacy blog pages - these should 301 redirect via middleware
// This layout is minimal (no GTM/scripts) as a fallback safety measure
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegacyBlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* noindex as belt-and-suspenders - middleware should 301 before this renders */}
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${playfairDisplay.variable} ${poppins.variable}`}
      >
        <ReduxProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
