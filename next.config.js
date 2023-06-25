/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'i.ytimg.com'],
  },

  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
