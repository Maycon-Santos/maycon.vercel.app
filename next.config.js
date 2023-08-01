/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/video/:path*',
        destination: 'https://drive.google.com/uc?id=:path*',
      },
    ]
  },
}

module.exports = nextConfig
