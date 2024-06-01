const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = 1245;
const host = 'localhost';

app.listen(port, host);

module.exports = app;
