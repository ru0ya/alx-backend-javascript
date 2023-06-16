const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

app.listen(port=1245, host='localhost')

module.exports = app;
