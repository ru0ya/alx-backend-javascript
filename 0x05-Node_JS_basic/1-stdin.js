process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
	process.stdout.write('Your name is:' + input.trim() + '\n');

	process.stdout.write('This important software is now closing\n');
	process.exit();
});
