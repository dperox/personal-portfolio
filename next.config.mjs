/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to enable dynamic OG images and route handlers
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
