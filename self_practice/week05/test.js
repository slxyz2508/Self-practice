// 1. transform individual export to export list and add exporting Book class

// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
import getStringLength,{ getLength,GPAAverage,BookManagement } from "./libs/utilities"

console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
const b1 = new Book(1234)
console.log(b1)
 