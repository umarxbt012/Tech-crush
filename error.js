//syntax error
//let add=(5+3
//reference error
//console.log(add)
//type error: when you use the incorrext data type for an operation
let num=25
//console.log(num.toUpperCase())
//try and catch are used in error handing to make sure your code runs gracefully
try{
    let result=10/0;
    console.log(result);
    undefinedFunction();
    console.log("this code will not run")

}catch(error){
    //occurs when something goes wrong
    console.log("An error occured "+ error.name, error.message, error.stack);
}
console.log("code continues here")


// try{
//     let age=25
//     console.log(age.length())
// }catch{
//     console.log("An error occured "+ error);
// }
