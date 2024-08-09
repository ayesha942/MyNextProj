/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'via.placeholder.com', 'picsum.photos', 'source.unsplash.com', 'placeimg.com'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
