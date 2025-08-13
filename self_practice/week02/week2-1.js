const emptyObj = {}
if (JSON.stringify(emptyObj) === '{}')
    console.log('1. emptyobj is empty older'); //วิธีแรกในการเช็คว่าเป็นobject เปล่าใหม่คือแปลงเป็น json แล้วเช็คกับstring {} ว่าเท่ากันไหม

if (Object.keys(emptyObj).length === 0)
    console.log('2. emptyobj is empty older'); // เช็คความยาวของ key ถ้ามันเป็น 0 เท่ากับว่าเป็นobject เปล่า
    
//spread in obj

const obj1 = {food : 'rice' , drink : 'water'}
const obj2 = {food : 'noodles' , drink : 'soda'}

const cloneObj = {...obj1}
const clonewithReplace = {...obj1, food: 'burger'}
const mergettwoobj = {...obj1,...obj2}

console.log(cloneObj); //clone object
console.log(clonewithReplace); // clone object และเปลี่ยค่า property ข้างใน
console.log(mergettwoobj); // รวมobject เข้าด้วยกัน ถ้า key เหมือนกันจะเอา value ของตัวสุดท้าย


