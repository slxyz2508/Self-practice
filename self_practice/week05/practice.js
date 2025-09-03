const studentScore  = [
    { name: 'Alice', score:  85},
    { name: 'Bob', score: 92},
    { name: 'Charlie', score: 68},
    { name: 'David', score: 55},
    { name: 'Eve', score: 78}
]
function getPassingNames(students) {
  return students
    .filter(student => student.score >= 70)
    .map(student => student.name.toUpperCase());
}
const passingname = getPassingNames(studentScore);
console.log(passingname);
 
 