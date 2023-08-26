/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "miro.medium.com" },
      { hostname: "i.ytimg.com" },
    ],
  },
};

module.exports = nextConfig;
