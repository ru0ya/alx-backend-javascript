namespace Subjects {
	export interface Teacher {
		experienceTeachingReac?t: number;
	}
	

	export React Class extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingReact > 0 ? 'Available Teacher: <first name of teacher>' : 'No available teacher';
		}
	}
}
