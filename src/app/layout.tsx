import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat, Playfair_Display, Poppins } from 'next/font/google';
import './globals.scss';
import ReduxProvider from './redux-provider';
import I18nProvider from './i18n-provider';
import Script from 'next/script';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // si usas flechas
// import SalePopup from '@/components/SalePopup';




const glossAndBloom = localFont({
  src: [
    {
      path: '../../public/assets/fonts/gloss_and_bloom_font.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--it-ff-gloss',
});

const montserrat = Montserrat({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
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

// const glassAntiqua = Glass_Antiqua({
//   weight: ['400'],
//   subsets: ['latin'],
//   variable: '--it-ff-glass',
// });

export const metadata: Metadata = {
  title: 'Coral Boats – Mallorca Boat Tours',
  description: 'Explore the Bay of Alcudia on a classic boat. Hidden coves, crystal-clear waters and the Mediterranean breeze await you.',

  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-MNND63RC'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MNND63RC');`}
        </Script>
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `}
        </Script> 
        
            {/* Hotjar */}
        <Script id="hotjar-init" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6409982,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>


        {/* ✅ Script obligatorio de FareHarbor */}
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          strategy="lazyOnload"
        />

        {/* ✅ Datos estructurados para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coral Boats Mallorca",
              url: "https://www.coralboatsmallorca.com",
              logo: "https://www.coralboatsmallorca.com/assets/img/logo/favicon2.png",
              sameAs: [
                "https://www.instagram.com/coralboatsmallorca"
                // "https://www.facebook.com/tu_pagina"
              ]
            }),
          }}
        />
        <meta name="google-site-verification" content="QEQVoI6aQ5CBtg8FKcEvugtK_T0y6OVRbQoHG8ml79w" />

      </head>

      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${playfairDisplay.variable} ${poppins.variable}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNND63RC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ReduxProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ReduxProvider>

        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
          async
        />
        <div
          className="elfsight-app-00358d5e-8712-4992-abc8-72d9bd04e910"
          data-elfsight-app-lazy
        ></div>

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1209549273970070');
            fbq('track', 'PageView');
          `}
        </Script>
          
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1209549273970070&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* <SalePopup /> */}
        
      </body>
    </html>
  );
}

