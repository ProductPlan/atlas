# Contribute to 🌐 Atlas

If you are a new 🌐 Atlas contributor, here you have some docs to start your journey:

- 📔 [Developer Docs](./develop.md)

## Monorepo

🌐 Atlas is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) made up of several different packages. These packages are under the `packages` folder or the `apps` folder.

If you want to contribute to Atlas, you will need to understand how the monorepo works. We use [Turboepo](https://turbo.build/repo) to handle the monorepo. You can read more about it in the [Turboepo docs](https://turbo.build/repo/docs).

Other links:

- https://monorepo.tools/
- https://circleci.com/blog/monorepo-dev-practices/
- https://turbo.build/repo/docs/handbook/what-is-a-monorepo

### Packages (under `packages`)

- `@productplan/atlas`: The core package, containing React components.
- `@productplan/atlas-styles`: Common styles, variables and `mixins` for Atlas.
- `@productplan/atlas-tokens`: The design tokens for Atlas.
- `@productplan/atlas-web-components`: The package containing the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for Atlas.

### Apps (under `apps`)

- `@productplan/atlas-docs`: The documentation site for Atlas.

## Web Components

Atlas has a set of Web Components that you can use in your projects and that will be wrapped as React components. Web Components are a set of standards that allow you to create custom HTML elements. You can read more about them in the [Mozilla Web Components docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

Our Web Components are built with [Preact](https://preactjs.com/) and under the `packages/atlas-web-components` folder.

### Why Web Components?

Web Components are a great way to create reusable components that can be used in any project. They are also very useful for creating components that can be used in any framework (React, Vue, Angular, etc.) or even in plain HTML.

For Atlas, we are using Web Components to core components that will hold all the logic and styles of the component. Then, we wrap these components in React components that will be used in our React projects.

These Web Components allow us to create local styles for each component, so we don't need to worry about styles leaking into other components or the global styles of the project.

### How to use Web Components

You can use Web Components in your projects by importing them from the `@productplan/atlas-web-components` package or by using the compiled version of the package. Some browsers don't support Web Components, so [you might need to use some Polyfills](https://www.webcomponents.org/polyfills) to make them work.

## Design Tokens

Design tokens are a set of values that define the design of a product. They are used to create a consistent design across all the components of the product. This way we can create a consistent design system that can be used in any project and that matches the design (Figma files) and the implementation (Web Components or React).

These design tokens are defined in the `@productplan/atlas-tokens` package under the `packages/atlas-tokens` folder.

Atlas uses [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to manage the design tokens. You can read more about them in the [Style Dictionary docs](https://amzn.github.io/style-dictionary/#/).

Other links:

- https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71
- https://www.uxpin.com/studio/blog/what-are-design-tokens/
