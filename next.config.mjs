/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/fsw-barber/:path*',
        destination: 'https://saas-barbearia-beige.vercel.app/:path*', 
      },
    ]
  },
};

export default nextConfig;