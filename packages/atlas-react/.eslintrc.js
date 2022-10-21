module.exports = {
  env: {
    jest: true,
  },
  root: true,
  plugins: ["prettier", "jsx-a11y"],
  extends: [
    "custom",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["node_modules", "dist"],
  rules: {
    "prettier/prettier": "warn",
  },
};
