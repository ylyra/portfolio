/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'i.ytimg.com',
      },
    ],
  },
}

module.exports = nextConfig
