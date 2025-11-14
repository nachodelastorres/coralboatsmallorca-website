// import { i18n } from './next-i18next.config.js';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   output: 'standalone',
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       config.externals.push('@prisma/client');
//     }
//     return config;
//   },
// };

// export default nextConfig;


import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   output: 'standalone',
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       config.externals.push('@prisma/client');
//     }
//     return config;
//   },
// };

// export default nextConfig;

// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   output: 'standalone',
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       config.externals.push('@prisma/client');
//     }
//     return config;
//   },
// };

// export default nextConfig;

const nextConfig = {
  reactStrictMode: true,
  // trailingSlash removed to prevent 3XX redirects in sitemap and canonical URLs
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client');
    }
    return config;
  },
  async redirects() {
    return [
      // Redirect /tour and /tours to main tours page
      {
        source: '/tour',
        destination: '/boat-tours-alcudia',
        permanent: true, // 301 redirect
      },
      {
        source: '/tours',
        destination: '/boat-tours-alcudia',
        permanent: true, // 301 redirect
      },
      {
        source: '/:lang(en|es|de|fr|it|ca)/tour',
        destination: '/:lang/boat-tours-alcudia',
        permanent: true, // 301 redirect
      },
      {
        source: '/:lang(en|es|de|fr|it|ca)/tours',
        destination: '/:lang/boat-tours-alcudia',
        permanent: true, // 301 redirect
      },
      // Redirect old tour-details URLs to new premium URLs (with locale support)
      {
        source: '/:lang(en|es|de|fr|it|ca)/tour-details/morning-tour',
        destination: '/:lang/alcudia-morning-boat-tour',
        permanent: true, // 301 redirect
      },
      {
        source: '/:lang(en|es|de|fr|it|ca)/tour-details/day-tour',
        destination: '/:lang/alcudia-morning-boat-tour',
        permanent: true, // 301 redirect
      },
      {
        source: '/:lang(en|es|de|fr|it|ca)/tour-details/sunset-tour',
        destination: '/:lang/alcudia-sunset-boat-tour',
        permanent: true, // 301 redirect
      },
      // Redirect without locale prefix
      {
        source: '/tour-details/morning-tour',
        destination: '/en/alcudia-morning-boat-tour',
        permanent: true,
      },
      {
        source: '/tour-details/day-tour',
        destination: '/en/alcudia-morning-boat-tour',
        permanent: true,
      },
      {
        source: '/tour-details/sunset-tour',
        destination: '/en/alcudia-sunset-boat-tour',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


