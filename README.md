# RESTful API with Node.js
## Built using Babel, Express and Mongoose

This repository is the final result of the series of posts [Building a REST API with Node.js](http://blog.mpayetta.com/node.js/2016/07/22/building-a-node-restful-api-intro-and-setup/)
listed in my [blog](http://blog.mpayetta.com).

Features like validation and unit testing are only implemented for some of the routes since the goal is to just provide
them as an example to develop any kind of RESTful API.

## Installation and running

The project depends on a mongodb instance that must be accessible, you can change the connection details in the
`config/env/development.js` and `config/env/test.js` for the testing database.

1. Clone this repository
2. `cd` into the cloned copy and run `npm install`
3. Run `gulp nodemon`
4. Try it in a console or in a browser window doing a `GET` to `http://localhost:3000/api/api-status`

## Unit testing

To run unit tests simply run `gulp mocha`.

