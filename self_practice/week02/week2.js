const book={isbn:1234,isbn:768}
console.log(book); // object ที่ key ซ้ำจะเอา value ตัวสุดท้าย
 
const items = {
    book: {math: "calculus", english: "pathway"},
    game: {souls: "eldenring", sandbox: "roblox"}
} // nested object
 
const obj = {
    num : 1 , array : [0,1,2,3] , bool : true , nul : null ,  undef : undefined , funct : function(){return "hello"} , str : "item"
}
console.log(obj.num); // value ที่สามารถเก็บได้
 
function student(name,id) {
    this.name = name,
    this.id = id
}
 
let std1 = new student('unname', 1)
console.log(std1) // constructer
 
class Employee {
  constructor(name,department) {
    this.name = name;
    this.department = department;
  }
  changename(newname) {
    return this.name = newname
  }
}
let em1 = new Employee('dummy','sell')
 
const person = {
  name: false,
  greeting(){
    console.log("Hello, ", this.name)
  }
};
 
const me = Object.create(person);
me.name = "TON"
me.greeting() // object create

let point = {x:10,y:10}
let newPoint = point
newPoint.x = 30
console.log(point); // object เป็น mutable สามารถเปลี่ยนค่าข้างในได้ เพราะเป้นการอ้างถึง

//function to_compare_two_students
//if id and name are equally with incase sensitive then they are the same student, otherwise they are different.
const std3 ={id:1,name:'Somchai'}
const std4 ={id:1,name:'somchai'}
function  compareStudent(s1,s2){
    return s1.id === s2.id && s1.name.toLowerCase() === s2.name.toLowerCase()
}
console.log(compareStudent(std3,std4)) // การcompare ระหว่างobject ใช้วิธีการเทียบ property
 
//ทำข้อสามด้วย

 
const ex1 = {id:1 , name:"Som", address: {no: 111, city: "Bangkok"}}
let {name : fullname,id ,address : {city: myaddress}} = ex1
 
console.log(fullname);//som
console.log(id);//1
 
console.log(myaddress); // object destructuring เป็นการเทคนิคดึงค่า property ออกมาและการเปลี่ยนชื่อ property นั้นๆ
 
 
 
 
 