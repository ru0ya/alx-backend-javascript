interface DirectorInterface {
	workFromHome(): string;
	getToWork(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome() : string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getToWork(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	const parsedSalary = (typeof salary === 'number' ? salary : parseInt(salary));

	if (parsedSalary < 500) {
		return new Teacher();
	}
	else {
		return new Director();
	}
}

function isDirector(employee: Director | Teacher): employee is Director
{
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): Director | Teacher 
{
	if (employee instanceof Director){
		return employee.workDirectorTasks();
	}
	else if (employee instanceof Teacher){
		return employee.workTeacherTasks();
	}
}

let Subjects: 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === Math){
		return "Teaching Math";
	}
	else if (todayClass === History){
		return "Teaching History";
	}
}


