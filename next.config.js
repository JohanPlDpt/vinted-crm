/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables
  env: {
    // Add your environment variables here
  },

  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [];
  },

  // Rewrites
  async rewrites() {
    return [];
  },

  // Webpack config
  webpack: (config, { isServer }) => {
    return config;
  },

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // PoweredByHeader
  poweredByHeader: false,

  // Production source maps
  productionBrowserSourceMaps: false,

  // API routes
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },

  // Internationalization (optional - uncomment if needed)
  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  // },
};

module.exports = nextConfig;
