const words = ['apple','mango','orange','banana']
// words.reverse()
// console.log(words); // ปรับแก้ต้นฉบับ
// 1. annonymous arrow function
start_a_word = words.filter( word => word.startsWith('a'))
console.log(words);
console.log(start_a_word) // ไม่เก็บค่าต้อง log ตัวแปรหรือทั้งฟังก์ชัน
 
// 2. annonymous functuin declartion
 
const startBword = words.filter(function (word){
    return word.startsWith('b')
})
console.log(startBword);
 
// 3. named arrow function
const checkstartMword = (word) => word.startsWith('m')
const startMword = words.filter(checkstartMword)
console.log(startMword);
 // 4. named function declaration
 
 function checkstartOword(word){
    return word.startsWith('o')
 }
 const startOword = words.filter(checkstartOword)
 console.log(startOword);