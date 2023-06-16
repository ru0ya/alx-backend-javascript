const http = require('http');
const url = require('url');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = http.createServer(async (req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const pathname = parsedUrl.pathname;

	if (pathname === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end("Hello Holberton School!");
	} else if (pathname === '/students') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end("This is the list of our students");
		try {
			const students = await countStudents(DATABASE);
			res.end(`${students.join('\n')}`);
		} catch (error) {
			res.end(error.message);
		}
	} else {
		res.statusCode = 404;
		res.end();
	}
});

app.listen(port=1245, host='localhost');

module.exports = app;
