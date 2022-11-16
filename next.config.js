/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: { buildActivityPosition: 'bottom-right' },
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
