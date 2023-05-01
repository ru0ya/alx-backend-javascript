namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java Class extends Subject{
		getRequirements(): string {
			return "Here is the list of requirements for Java";
		}

		getAvailableTeacher(): string{
			return this.teacher.experienceTeachingJava > 0 ? "Available Teacher: <first name of teacher>" : "No available teacher";
		}
	}
}
