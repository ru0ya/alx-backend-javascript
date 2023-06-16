const express = require('express');
const app = express();

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

app.get('/',  (req, res) => {
	res.send('HelloHolberton School!');
});

app.get('/students', (req, res) => {
	res.send('This is the list of our students');
	try {
		const students = countStudents(DATABASE);
		res.end(`${students.join('\n')}`);
	} catch (error) {
		res.end(error.message);
	}

});

app.listen(port=1245, host='localhost');

module.exports = app;
