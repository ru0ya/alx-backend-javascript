const express = require('express');

const app = express();

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];
const port = 1245;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.send('This is the list of our students');
  try {
    const students = await countStudents(DATABASE);
    res.end(`${students.join('\n')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, host);

module.exports = app;
