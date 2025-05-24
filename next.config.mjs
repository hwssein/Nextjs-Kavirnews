/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.kavirnews.hmohammadzadeh.host.webr.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
