const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const port = 1245;
const host = 'localhost';

app.listen(port, host);

module.exports = app;
