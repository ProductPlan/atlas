const withTM = require("next-transpile-modules")([
  "@productplan/atlas",
  "@productplan/atlas-web-components",
  "@productplan/atlas-tokens"
]);

module.exports = withTM({
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // These configuration allow us to compile the atlas-web-components
  // or the atlas-react with a watch
  experimental: {
    esmExternals: 'loose',
  },
});
