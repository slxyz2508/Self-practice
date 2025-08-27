const words = ['apple','mango','orange','banana']
answer = []
const aword = words.forEach(function(word){
    if(word.startsWith('a')){
        answer.push(word)
    }
})
console.log(answer);
 
const employee = [{
    id: 'e1001',
    firstname : 'somchai',
    lastname : 'Jaidee'
},
{
    id: 'e1002',
    firstname : 'Pornchai',
    lastname : 'Deejai'
},
{
    id: 'e1005',
    firstname : 'Suda',
    lastname : 'Rakdee'
}
]
////ผมไม้มาดูแมวที่ห้อง
//013
 
let employeesName = employee.map(value => (value.firstname+" "+value.lastname).toUpperCase())
console.log(employeesName)
 
let findjai = employeesName.filter(word => word.includes('JAI'))
 
console.log(findjai);
 
 
const carts = [{
    productId: 1002,
    price: 10,
    amount: 5
},
{
    productId: 2005,
    price: 100,
    amount: 2
},
{
    productId: 5001,
    price: 5,
    amount: 4
}]
//total price = sumofproductprice * vat7%
 
const totalprice = carts.reduce(
  (sum,item) => sum + (item.price * item.amount) , 0
);
total_price = totalprice * 1.07
 
console.log(totalprice);
console.log(total_price.toFixed(2));
 
const nums = [2,4,6]
nums[nums.length] = 8 // push
nums.push(8)
console.log(nums);
nums.unshift(10) // เพิ่มไปด้านหน้าสุด
console.log(nums);
nums.pop()
console.log(nums); // ลบตัวท้ายสุด
nums.shift()
console.log(nums); //ลบตัวหน้าสุด
 
const fruits = ['apple','banana','orange']
// add cherry after banana
fruits.splice(2,0,'cherry','berry') // ตัวแรกคือ index ตัวสองคือจำนวนที่ลบ ตัวสามคือ value
console.log(fruits);
//delete cherry
fruits.splice(2,1)
console.log(fruits);
 //replace berry with mango
fruits.splice(2,1,'mango')
console.log(fruits);
 
const fruit = ['apple','orange','banana','mango','cherry']
console.log(fruit.slice(1)); //เอาตั้งแต่ตำแหน่งที่1 เป็นต้นไป เอาข้างหลังมาหมด
console.log(fruit.slice(0,3)); // เอาตั้งแต่ตำแหน่งที่ 0 ถึง 3-1
console.log(fruit.slice(2, 5)) //
console.log(fruit.slice(2)) //
console.log(fruit.slice(-3)) //
 
const f = ['apple','orange','banana','mango','cherry']
f.fill(undefined,1,3)
console.log(f);
f.fill(null,1) // ใส่ไปจนหมด
console.log(f);