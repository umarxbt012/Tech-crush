// function add(a, b) {
//     return a+b;
// }
// function subtract(a, b){
//     return a-b;
// }
// function multiply(a, b){
//     return a*b;
// }









// console.log("WELCOME TO MY TESTING JAVASCRIPT PROGRAM")
// console.log("here i will test various javascript method and functionalities")
// let username= prompt("enter your name: ")
// console.log("welcome " + username+ "to my testing program")
// let choice=("what would you like to test in my program, currently there's just basic methods and functionalities such as basic arithmetic operation, various string methods, array entry,enter a number 1-3 --->: ")
// // if(choice=="1"){

// // }
var numbers = [1, 2, 3, 4];

numbers.forEach(function printNumber(num) {
    console.log(num);
});
numbers.forEach(function showIndex(num, index) {
    console.log(`this is index ${index} of the array: ${num}`);
});
numbers.forEach(function showArray(num, index, arr) {
    console.log(arr);
});