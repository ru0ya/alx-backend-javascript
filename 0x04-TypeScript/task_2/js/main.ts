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

	workDirectorsTasks(): string {
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


