var student1 = {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};
var student2 = {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;
    row.appendChild(lastNameCell);
    var ageCell = document.createElement('td');
    ageCell.textContent = student.age;
    row.appendChild(ageCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
}
