const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  i18n: {
    locales: ["ca", "es"],
    defaultLocale: "ca",
    localeDetection: false,
  },
  env: {
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
};

module.exports = nextConfig;
