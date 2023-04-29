interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student= {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student2: Student = {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let studentsList = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

for (const student of studentsList) {
	const row = document.createElement('tr');

	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;
	row.appendChild(firstNameCell);

	const lastNameCell = document.createElement('td');
	lastNameCell.textContent = student.lastName;
	row.appendChild(lastNameCell);

	const ageCell = document.createElement('td');
	ageCell.textContent = student.age;
	row.appendChild(ageCell);

	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;
	row.appendChild(locationCell);

	table.appendChild(row);
}
	
