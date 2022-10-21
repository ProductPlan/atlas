module.exports = {
  env: {
    jest: true,
  },
  root: true,
  plugins: ["prettier"],
  extends: ["custom", "eslint:recommended", "plugin:react/recommended"],
  ignorePatterns: ["node_modules", "dist"],
  rules: {
    "prettier/prettier": "warn",
  },
};
