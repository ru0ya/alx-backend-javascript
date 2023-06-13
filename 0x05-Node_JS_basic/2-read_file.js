const fs = require('fs');

function countStudents(filePath){
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
		const students = content.split('\n').filter(line => line.trim() !== '');
		const studentCount = students.length;
		console.log(`Number of students: ${studentCount}`);

		const fields = new Map();
		students.forEach(student => {
			const field = student.split(',')[3].trim();
			if (fields.has(field)) {
				fields.set(field, fields.get(field) + 1);
			} else {
				fields.set(field, 1);
			}
		});
		fields.forEach((count, field) => {
			console.log(`Number of students in ${field}: ${count}`);
		});

		const firstNames = students.map(student => student.split(',')[0].trim());

		console.log('List of first names:', firstNames.join(', '));

		return studentCount;
	} catch(err) {
		console.error('Cannot load the database');
	}
}

module.exports = countStudents;
