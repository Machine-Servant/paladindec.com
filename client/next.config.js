/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages'],
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'c2.scryfall.com',
      'c1.scryfall.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
