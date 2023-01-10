const {
  componentName,
} = require('./prompts.js');

module.exports = function (plop) {
  plop.setGenerator("components", {
    description: "generate boilerplate files for an Atlas component",
    prompts: [componentName],
    actions: [
      {
        type: "addMany",
        base: ".plop/templates/components",
        skipIfExists: true,
        destination: "./src/components/{{componentName}}",
        templateFiles: ".plop/templates/components/**/*",
      },
      {
        type: "addMany",
        base: ".plop/templates/examples/components",
        skipIfExists: true,
        destination: "../../apps/docs/examples/{{componentName}}",
        templateFiles: ".plop/templates/examples/components/**/*",
      },
      {
        type: "append",
        path: "./src/index.js",
        template: "export { default as {{componentName}} } from \"./src/components/{{componentName}}\";",
      }
    ],
  });
};
