# Getting Started with Appi React

Start the Appi Community Server

### `docker run -p 8099:8099 agardnerut/appi_community`

Clone this repo and then:

### `npm install` 

### `npm run start` 

This will get the example project up and running.

Additionally you can follow along with a step by step of how this project was created.

# Step by Step

Follow along here for the step by step walk through of each example that got us to the current repo.

Use [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to make a new boilerplate react app.

### `npx create-react-app appi-app`
### `cd appi-app`

Install the appi_react package.

### `npm install appi_react`

## Example 1: Appi Client, Login and Logout

See complete source in `src/examples/Example1.jsx`.

```js
import {loadBasic, login, logout} from 'appi_react'
...
```

This is how we import functions from the Appi library.

```js
    await loadBasic({});
...
```

`loadBasic()` loads the single threaded version of the library which will be ready to use once the returned promise resolves.

```js
    const result = await login("USER","PASSWORD","",false);
...
```

`login(username,password,token,remember)` starts an Appi session.

## Multithreading

Appi utilizes web features that required a higher level of security. This is done by enabling both these headers from your web server.

### `Cross-Origin-Embedder-Policy: require-corp`
### `Cross-Origin-Opener-Policy: same-origin`

We can do this in our dev environment by creating `src/setupProxy.js` and placing this inside:

```js
module.exports = function(app) {
    app.use(function (req, res, next) {
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};
```

Restart the dev sever for changes to take effect.

You now should be able to use loadAppi() instead of loadBasic(). Note: besides enabling multithreading, these functions are otherwise interchangeable.