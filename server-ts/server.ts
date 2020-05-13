import express = require('express');
import * as User from './user';
const app = express();

app.get('/', (req, res) => {
  const newUser = User.generateUser();
  res.send(newUser);
});

app.listen(3020, () => {
  console.log('Server listening on port 3020');
});