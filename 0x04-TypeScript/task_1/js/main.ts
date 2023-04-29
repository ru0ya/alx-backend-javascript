interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	yearsofExperience?: number;
	[key: any]: any;
}

interface RequiredTeacher extends Teacher {
	fullTimeEmployee: boolean;
	location: string;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
	const firstLetter = firstName.charAt(0);
	return `${firstLetter}.${lastName}`
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName;
		this.lastName;
	}
}
