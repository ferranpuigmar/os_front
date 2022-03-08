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
};

module.exports = nextConfig;
