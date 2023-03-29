/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  images: {
    domains: ['rickandmortyapi.com'],
  },
}

module.exports = nextConfig
