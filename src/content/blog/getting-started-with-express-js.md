---
title: Getting Started with Express.js
description: "Express.js, or simply Express, is a back end web application
  framework for building RESTful APIs with Node.js, released as free and
  open-source software under the MIT License. It is designed for building web
  applications and APIs. "
tags: ["coding", "javascript"]
date: 2023-07-30T07:12:11.112Z
---

You should have a basic understanding in HTML, CSS, Javascript before starting with express.js. You should have a code editor setup with you like vs code or neovim. You should have node.js installed.

## Project Setup

Create a folder in which your express app will be present
Open your code editor in that folder.

Run `npm init -y` in your terminal  
It will initialize a node js project by creating a package.json file. One suggesstion, remove the name from your package.json since we are using it to manage our scripts it doesn't matter.

```json
{
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "MIT"
}
```

Now, we will install some dependencies (packages) into our project.  
We will install express.js and nodemon to run a developement server.

```
npm i express
```

```
npm i -D nodemon
```

After installing these packages, add this to package.json. By doing this when we type `npm run dev` in terminal, our developement server will start running.

```json
"scripts": {
    "dev": "nodemon server.js"
},
```

Now are package.json will look like this, (version might defer doesn't matter)

```json
{
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
```

Now, go ahead and create an index.js file, which will act as an entry point of our application.

## Hello World Example

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

You will need this code in every single project, I use this as my starting point to for building my projects.

First we import express into our index.js file.  
`const express = require('express')`

After importing express into our project, we create an instance of express.  
`const app = express()`

Then we define on which port will our express app will be running on.  
`const port = 3000`

To create a route in express. We use the instance of express with built-in functions like get() for get request, post() for post request.
It takes two parameters, first is the route path like '/' or '/admin' etc. Second is an asynchronous callback function which takes req (request) and res (response) as parameters. Here, I have used arrow function syntax you can use classic function keyword syntax as well. req is used for accessing data which the user has sent while making the request and res is used to send data from server to client.

```js
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
```

Now to run this app, we need to use the port, so we write

```js
app.listen(port, () => {
  console.log(`Example app running on port ${port}`);
});
```

Now run `npm run dev` to see your application running on localhost:3000

## Basic Routing

We have already seen this basic example

```js
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
```

This is how we use path parameters (dynamic routes)

```js
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id: id });
});
```

Using req.params we can access the value of path parameters.
In the above example, if user goes to /user/123 then value of id will be 123.

Now, we will see how a post request is made in express and how to access data from request body.

```js
app.post("/user/new", (req, res) => {
  const { username, password } = req.body;
  res.send({ username: username });
});
```
