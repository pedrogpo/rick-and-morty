/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
}

module.exports = nextConfig
