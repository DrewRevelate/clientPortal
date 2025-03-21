/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ynkuozdffpsogpziaize.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ynkuozdffpsogpziaize.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Add transpilePackages if needed for external modules
  // transpilePackages: ['@supabase/auth-ui-react', '@supabase/auth-ui-shared']
};

module.exports = nextConfig;
