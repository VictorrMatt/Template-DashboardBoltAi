/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Adiciona source maps em desenvolvimento
    if (dev && !isServer) {
      config.devtool = "source-map";
    }
    return config;
  },
  // Otimizações de CSS
  optimizeFonts: false,
  experimental: {
    optimizeCss: true, // Habilita otimização CSS experimental
  },
};

module.exports = nextConfig;
