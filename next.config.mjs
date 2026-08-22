/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/liugou-blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/liugou-blog/' : '',
  images: { unoptimized: true },
};

export default nextConfig;
