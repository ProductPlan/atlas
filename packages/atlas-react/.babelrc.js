const moduleResolverPluginConfig = {
  alias: {
    '@components/(.*)$': './src/components/\\1',
    cwd: 'packagejson',
  }
};

let config = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": ">0.2%, not dead, not op_mini all"
      }
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "prismjs",
      {
        "languages": [
          "jsx"
        ],
        "theme": [
          "coy"
        ],
        "css": true
      }
    ],
    ['babel-plugin-module-resolver', moduleResolverPluginConfig]
  ]
};

module.exports = config;
