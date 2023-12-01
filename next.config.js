/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "d218d58n4tyfby.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
