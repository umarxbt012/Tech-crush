//1. Substring and slicing
//given const str="Nigeria is awesome";
//extract "Nigeria" using substring, "awesome"  using slice(), get "is" using slice
const str="Nigeria is awesome";
const naijText=str.substring(0,7);
console.log(naijText);
const awesome=str.slice(-7);
console.log(awesome);
const is=str.slice(8,10);
console.log(is);

//2. split
// Given const name="John, Jane, Doe";
//split into an array using comma , join with space: "John Jane Doe"
const name = "John,Jane,Doe";
const splitted= name.split(",");
console.log(splitted);
const joined=splitted.join(" ")
console.log(joined);
//given const path="/user/home/docs";
//split by / then get "home" using split and index
const path="/user/home/docs";
const splitPath=path.split("/");
const homeIndex=splitPath.indexOf("home");
console.log(homeIndex);
const home=console.log(splitPath[2]);

//3. Mix
//given const email="user@example.com";
//get username(user) using split()
//check if it's a .com domain using endswith()
//replace @ with AT
const email="user@example.com";
const splitEmail=email.split("@");
const username= splitEmail[0];
console.log(username);
if(email.endsWith(".com")){
    console.log("this is a .com domain")
}
else{
console.log("Not a .com domain");
}
const replEmail=email.replace("@","AT");
console.log(replEmail)