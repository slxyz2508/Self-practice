// isArray check parameter is array or not
console.log(Array.isArray([])); // true
console.log(Array.isArray(['a',12,false])); // true
console.log(Array.isArray("[]")); // false
console.log(Array.isArray(new Array(2))); // true
console.log(Array.isArray(123)); // false
console.log(Array.isArray(false)); // false
console.log(Array.isArray('1')); // false
console.log(Array.isArray({})); // false
 
 
//concat is array method to concat 2 variable code instead using spread
const num1 = [1,3,5]
const num2 = [2,4,6]
const str = 'hello'
console.log([...num1, ...num2])
console.log(num1.concat(num2)); // [1,3,5,2,4,6]
;
 
//toString change array to string
console.log(num1.toString()); // 1,3,5
console.log(num1.join(".")); // change array to string and change , into the same parameter that input
// include check that array have value or include charecter in string
console.log(num1.includes(1)); //true
console.log(num1.includes(2)); //false
console.log(str.includes('lo')); //true
console.log(str.includes('hi')); //false
 
array1 = ['hello','hi','good morning']
array1.reverse() //dont keep value need to log
console.log(array1);
console.log(array1.reverse());
 
 
//sort
const month = ['March','jan','feb','Dec']
month.sort()
console.log(month);
 
const arr = [1,30,4,21,100000]
console.log(arr.sort((a, b) => a-b)) //น้อยไปมาก
console.log(arr.sort((a, b) => b-a)) //มากไปน้อย
 
 
const students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500104, name: "Pornsak", gpa: 3.8 },
]
//ผมไม้มาดูแมวที้ห้อง
// 013
const sortstudent = students.sort((a,b) => {
    let val1 = a.name[0].toUpperCase()
    let val2 = b.name[0].toUpperCase()
    if (val1 < val2){
        return -1
    }
    else if(val1>val2){
        return 1
    }
    return 0
})
console.log(sortstudent);
 
nnum = [1,2,3,4,5]
console.log(nnum.indexOf(5)); // หา index ของ value เรา
 