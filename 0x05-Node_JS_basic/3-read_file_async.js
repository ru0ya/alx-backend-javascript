const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.trim().split('\n').map((item) => item.split(','));

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
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const firstNames = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
        }
      }

      resolve(studentCount);
    });
  });
}

module.exports = countStudents;
