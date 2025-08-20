//. function declaration
function Test(a,b){
    return a+b;
}
// console.log(typeof(Test));
// const x = Test
// console.log(x(1,2));
 
//function expression(arrow)
const sum2=()=> {
    return a + b
}
// function expression (annonymous function declaration )
const sum3 = function () {
  return a + b
}
//
 
const FunctionMain = (func) =>{
    return func(2)
}
console.log(FunctionMain(func=(e)=>e*e))
 
 function Test(x) {
  return x
}
function Test2(x) {
  return x + 50
}
 
console.log(Test(Test2)(10)) //console.log(Test2(10))
 
function sum(a) {
    let sum = 0
    for (let index = 0; index < arguments.length; index++) {
        const value = arguments[index];
        sum += value
    }
    return sum
}
console.log(sum(1,2,3,4,5))