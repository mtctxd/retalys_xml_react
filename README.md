# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Startup guide

1. `npm i`
2. `npm run server`
3. `open another terminal`
4. `npm start`
5. `open your browser at http://localhost:3000`

## Main task

Given some data in XML format. Process that data and:
1. The total number of products
2. The names of the products (just write down a simple list, no need to be creative with formatting) 
3. For each product write down a list of its spare parts (not all products have them)

The script may look like, that will be possible to select three methods (links) according to the number of
the task and under each link there will be the individual statements.

## Technologies that i used

- React.JS
- Typescript
- React router
- Express JS
- xml2js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Runs the app in the development mode.\
Starts server [http://localhost:3001](http://localhost:3001) to view it in the browser.
There is one endpoint [/goods](http://localhost:3001/goods) that make request to server and return data as JS object.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
