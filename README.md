# react-holiday-bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Applied eslint, prettier, bootstrap, styled-components, axios

## Folder Structure

| folder     | description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| components | Define common components that available to reuse in various places                   |
| modules    | Define some class as modules. Example: Rest API, AWS, currency format, string format |
| pages      | Define container components that used for each page                                  |
| routers    | Define routing processing                                                            |
| store      | Define entity that include dto, adapter, operation, reducer, types for each entity   |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Execute eslint to check eslint error

### `yarn lint:format`

Execute eslint and automatically fixes (in case possible)

### `yarn format`

Execute prettier to check error format

### `yarn format:fix`

Execute prettier to check and fixes error format
