/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CV_Web',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig