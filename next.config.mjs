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
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client');
    }
    return config;
  },
};

export default nextConfig;


