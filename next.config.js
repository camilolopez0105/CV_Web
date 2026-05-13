/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProduction ? 'export' : undefined,
  basePath: isProduction ? '/CV_Web' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: isProduction,
}

module.exports = nextConfig