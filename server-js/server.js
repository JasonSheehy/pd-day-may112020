'use strict';

const express = require("express");
const User = require('./user');
const app = express();

app.get('/', (req, res) => {
  const newUser = User.generateUser();
  
  res.send('Hello World!');
});
app.listen(3020, () => {
  console.log('Server listening on port 3020');
});
