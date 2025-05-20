/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ar', 'en', 'tr'],
    defaultLocale: 'ar',
    localeDetection: true,
  },
};

module.exports = nextConfig;