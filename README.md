# React boilerplate

This project is based in RCA, and modified for supporting of redux, react-router, sass, json-server, TDD

##Installing

```
git clone git@github.com:moiguitarrock/react-boilerplate.git my-app
cd my-app
npm install
```

##Scaffolding

After the creation your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  config/
    jest/
      cssTransform.js
      fileTransform.js
    json-server/
      db.js
      db.json
      routes.json
    babel.dev.js
    babel.prod.js
    env.js
    eslint.js
    paths.js
    polyfills.js
    setupTests.js
    webpack.config.dev.js
    webpack.config.prod.js
  scripts/
    utils/
    build.js
    fake-api-server.js
    start.js
    test.js
  public/
  src/
    actions/
      index.js
    components/
      Guidelines/
        index.js
        Guidelines.js
        styles.scss
      index.js
    constants/
      index.js
    containers/
      App/
        index.js
        App.js
        App.test.js
        styles.scss
      index.js
    reducers/
      index.js
    styles/
      _config.scss
    config.js
    favicon.ico
    index.html
    routes.js
    .gitignore
    package.json
```

##Available scripts:

### `npm start`

For running in development environment

> npm start

### `npm build`

For building a optimized bundles and running in production

> npm run build

### `npm test`

For run the test identified by the extention *.test.js*

> npm run test

### `npm run fake-api-server`

For run the api fake server

> npm run fake-api-server

.
