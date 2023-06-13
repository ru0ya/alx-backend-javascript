process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?')

process.stdin.on('data', (input) => {
	console.log('Your name is:', input.trim());

	console.log('This important software is now closing ');
	process.exit();
});
