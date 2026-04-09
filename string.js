// // string methods
// let str = "Hello, World!";
// // length of the string
// console.log(str.length); // 13
// // toUpperCase
// console.log(str.toUpperCase()); // "HELLO, WORLD!"
// // toLowerCase
// console.log(str.toLowerCase()); // "hello, world!"
// // includes
// console.log(str.includes("World")); // true
// // indexOf
// console.log(str.indexOf("o")); // 4
// // slice
// console.log(str.slice(0, 5)); // "Hello"
// // trim this removes whitespaces trim removes all whitespaces trimstart removes the ones in the beginning while trimend removes the on in the end
// let str1="   yo satoru       ";
// let trimStr=console.log("this is the string showing the usage of the .trim method on a string: "+str1.trim());
// let trimStartstr=console.log("this is the string showing the usage of the .trimstart method on a string: "+str1.trimStart())
// let trimEndstr=console.log("this is the string showing the usage of the .trimend method on a string: "+str1.trimEnd())
let testStr="coding is fun"
let result=testStr.substring(0,6);
// substring doesnt recognize negative numbers it will take any negative number as index 0
console.log(result)
//split
let color="red,green,blue,yellow"
const comma=color.split(",")
console.log(comma)
let joined=comma.join( " - ")
console.log(joined)
const num= "090397811151";
console.log(`number:${num.slice(-4).padStart(num.length,"#")}`)
// given const url="/api/v1/users"
// split by "/" and get v1 using array index
const url="/api/v1/users"
const splitUrl=url.split("/")
const v1=console.log(splitUrl[2])
let x
console.log(x)
