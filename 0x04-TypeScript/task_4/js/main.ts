import { Subjects} from './subjects';
import { cpp, Cpp } from './Cpp';
import { cTeacher, Teacher } from './Teacher';

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher = {
	experienceTeachingC: 10;
};

const cppCourse: Cpp = new cpp();
cppCourse.setTeacher(cTeacher);

const javaCourse: Java = new java();
javaCourse.setTeacher(cTeacher);




console.log('Course Name: C++');
console.log(cppCourse..getRequirements());
console.log(cppCourse.getAvailableTeacher());
