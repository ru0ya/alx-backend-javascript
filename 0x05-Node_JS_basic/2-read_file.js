const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const students = content.trim().split('\n').map((item) => item.split(','));

  const studentCount = students.length - 1;
  console.log(`Number of students: ${studentCount}`);

  const fields = {};

  students.forEach((student) => {
    const [firstName, , , field] = student.map((item) => item.trim());

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstName);
  });

  for (const field in fields) {
	  if (fields.hasOwnProperty(field)) {
		  const count = fields[field].length;
		  const firstNames = fields[field].join(', ');
		  console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
	  }
  }
}

module.exports = countStudents;
