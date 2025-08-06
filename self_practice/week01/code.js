x = [5,'hello',true,'test'] // example array
console.log(x.length); // log array length
console.log(x[0]); // log first index
console.log(x[x.length-1]) // log last index
 
x.push({key:1,value:'item'},[3,'world',false]) // add new array and object in array
console.log(x); // show update array
 
for(let i = 0 ;  i < x.length ; i++){
    console.log(x[i])
} // loop item inside
x.pop() // shrink array
x.shift()
console.log(x);
let str = 'hello youtube' // create new array from spread
const strch = [...str]
console.log(strch);
 
const thearry = new Array() // create new array with construtor
console.log(thearry);
const thearry1 = new Array(3) // new array with empty value but have 3 index
console.log(thearry1);
const thearry2 = new Array(3,"js",99,true) // new array with member inside
console.log(thearry2);
 
const [a,b,...c] = [5,10,15,20,25] // deconstructing
console.log(c) //object
console.log(typeof c);
console.log(b) //integer
console.log(typeof b);
 
let letters = [...'Hello World']
console.log(letters)
let value = ''
for (let [index, letter] of letters.entries()){
    console.log(index, letter)
    if (index % 2 === 0)
        value += letter
}
console.log(`value: ${value}`)
 
console.log(letters.entries())