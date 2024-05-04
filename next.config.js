/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  optimizeFonts: true,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      ["@lingui/swc-plugin", {}],
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader"
      }
    });

    return config;
  }
};

module.exports = nextConfig;
