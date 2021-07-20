const http = require('http');
const dotenv = require("dotenv").config();
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(process.env.PORT || 5000, hostname, () => {
  console.log('Server running at');
});