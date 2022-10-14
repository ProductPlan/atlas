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
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ],
    "@babel/preset-react"
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
