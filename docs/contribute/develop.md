# Develop 🌐 Atlas

## Environment Setup

1. Clone the [Atlas Repository](https://github.com/productplan/atlas):
```
git clone git@github.com:ProductPlan/atlas.git
```

2. Install all dependencies with `yarn` (do not use `npm install`):
```
yarn
```

3. Start Atlas
```
yarn dev
```

After these steps are executed, a new browser window will oen on [http://localhost:8000/](http://localhost:8000/)

## Create a new Component

In order to create an Atlas component, you can use our [Plop](https://plopjs.com/) generators. First, you need to make sure you have `plop` installed and avaiable:

```
npm install -g plop
```

After this, you will be able to execute the `plop` command from the route of our project:

```
yarn plop
```

This command will:
- Create the Component folder and files.
- Create the example folder for your new component.
- Will export your component under `<atlas-react>/index.js`, for easy access and import under the rest of the project.

When selecting the name for your Component name, consider the following:
- The name should be, at least, 3 characters long.
- The name should not include the word "Component".

## Available Tasks

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn plop`

Create a new Atlas Component and examples (see above).
