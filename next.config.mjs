/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    unoptimized: true, // For Netlify static export compatibility
  },
  // Netlify handles server-side rendering via @netlify/plugin-nextjs
};

export default nextConfig;
