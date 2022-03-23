const nextTranslate = require("next-translate");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      {
        source: `/sobre-nosotros`,
        destination: "/about",
      },
    ];
  },
};

module.exports = nextTranslate(nextConfig);
