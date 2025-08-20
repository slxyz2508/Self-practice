//. function declaration
function sum(a,b){
    return a+b;
}
console.log(typeof(sum)); //ได้type เป็น function
const x = sum // ใช้ตัวแปรแทนฟังกชันสามารถเรียกใช้งานได้
console.log(x(2,2));
 
//function expression(arrow)
const sum2=(a,b)=> a + b // returnค่าด้วยตัวมันเอง
console.log(sum2(4,3));

// function expression (annonymous function declaration )
const sum3 = function () {
  return a + b
}

//function can passs into another function
function test(value) {
  return value+7
}
function test2(value){
  return test(value)
}

console.log(test2(6)) //function ซ้อน function

 //we can assign function be varible
 function add(num1,num2) {
  return num1 + num2
 }
let ssum = add
let result1 = add(10,40)
let result2 = ssum(10,40)
console.log(result1,result2);

//return function as value of another function
function sayhi(){
  return 'hi'
}
function action(){
  return sayhi }
let dosomething = action()
console.log(dosomething()); //เรียกใช้function action จากนั้นเรียกใช้sayhi จาก() ที่มีอยู่

 
// arrow function ไม่สามารถใช้เป็น constructor ได้
//function สามารถ hoisting ได้ สามารถอ้างถึงการเรียกฟังกชันก่อนสร้างฟังกชันได้ ใช้กับ arrow และ expression ไม่ได้

//arugument object ใช้กับ arrow function ไม่ได้ ตัวมันคล้าย array มี range มี index แต่ไม่สามารถใช้ stringmethodได้

function dst(a,b,c){
  console.log(`length: ${arguments.length}`); // length ตามจำนวนparameter ที่รับมาไม่ใช่ที่เก็บได้
  
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
  console.log(arguments[3]); // 4
  
  console.log(a,b,c);
}

dst(1,2,3,4,5,10)



function sum(a) {
    let sum = 0
    for (let index = 0; index < arguments.length; index++) {
        const value = arguments[index];
        sum += value
    }
    return sum
}
console.log(sum(1,2,3,4,5)) // argument สามารถถูกแทนที่ได้