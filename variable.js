// 3 ways to name variables in javascript
var myName="faruk"// old way of naming var in js
//console.log(myName)
let myAge=30//modern way of naming variables
const myHeight= 5.4// for constant variables
// var is used when the value can change and you want to reassign it later
// let cannot be used to reassign the variable note: check on the difference of let and var in chatgpt
// take for example the asssigning of my name twice as will be done below
var myName="john"
//console.log(myName)
//as we can see in the o/p it gave faruk then john next if it was let it cannot happen as such it cannot be reassigned that is for let
// var allows multiple reassignment and redeclaration
// lt does not allow redeclaration
// learn about primitive and non primitive data types
// primitive data types are strings integers, boolean, null, undefined, symbol non primitive are the combination of two or more primitive data types example array function object.
// undefined example below
let something;// no value given yet
// null example below
let maybe=null;
//object example below
let myObject={name: "john", age: 30}; // has key value pairs just like in dictionary in python
let myArray=[1,2,3,"my name",{name: "john", age: 30}, ["brother","kyodai"]]//can have a combination of different data types
console.log(myArray[3])
//let is much preferred to use while declaring variables to avoid confusion 
