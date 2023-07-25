/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.finalfantasyxiv.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
