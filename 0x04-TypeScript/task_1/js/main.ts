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

interface IStudent {
	firstName: string;
	lastName: string;
}

interface IStudentClass {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements IStudentClass {
	private firstName: string;
	private lastName: string;

	constructor(student: IStudent) {
		this.firstName = student.firstName;
		this.lastName = student.lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
