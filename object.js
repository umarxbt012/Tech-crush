// let obj={

// }
// let student={
//     name: "Ngozi Adeyemi",
//     age:21,
//     department:"Computer Science",
//     isEnrolled: true
// };
// console.log(student.name);
// console.log(student["age"])


// //object destructuring
// let employee={
//     name:"Tunde Balogun",
//     role:"Frontend Developer",
//     salary:45000,
//     city:"lagos"
// };
// //long way of destructuring
// let newName=employee.name;
// let newRole=employee.role;
// //shorter way of destructuring cleaner
// const{name, salary}=employee
// console.log(name)
// console.log(salary)
// //how to change key variables
// let courses={
//     CSC401:"Data Structures",
//     CSC402:"Algorithms",
//     CSC403:"Operating System",
//     CSC404:"Database Systems"
// }
// //map the former name to new name
// let{CSC401:CSC400}=courses
// //access the value of the now new name
// console.log(CSC400)

// //another example of changing the key variable
// let person={
//     name:"amina",
//     opay: true
// }
// let{opay:palmpay}=person
// console.log(palmpay)

// //spread and rest operator
// // spread opens up an array or objects and spread it items out
// //rest collects the remaining items into a new array or object
// let profile={
//     name:"ada",
//     age:22
// }
// //copy and add new properties
// let updatedProfile = {
//     ...profile,
//     city: "Abuja"
// };
// console.log(updatedProfile);

// // const { nombre, ...rest } = {
// //     nombre: "Emeka",
// //     age: 25,
// //     city: "Lagos"
// // };

// // console.log(nombre); // "Emeka"
// // console.log(rest);
// // // { age: 25, city: "Lagos" }

const user = {
    name : "Esther",
    password : "12345",
    isFemale : true,
    city : "Lagos",
    age : 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//for in
for (let key in user){
    console.log("these are the keys : " + key)
    console.log("these are the values : " + user[key])
   
}
// more example of for in
let car={
    make: "toyota",
    model:"camry",
    year:2020,
    color: "red"
}
for(let key in car){
    console.log(`${key} : ${car[key]}`)
}