/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.ivivu.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.ivivu.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'online.gov.vn',
        port: '',
        pathname: '/Content/EndUser/LogoCCDVSaleNoti/**',
      },
    ],
  },
};

module.exports = nextConfig;
