const withTM = require("next-transpile-modules")(["@productplan/atlas"]);

module.exports = withTM({
  reactStrictMode: true,
});
