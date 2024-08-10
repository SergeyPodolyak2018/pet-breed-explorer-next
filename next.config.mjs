/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.thecatapi.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.thedogapi.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
