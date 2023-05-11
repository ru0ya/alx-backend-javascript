export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter(student => student.location === city)
    .map(student => {
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
