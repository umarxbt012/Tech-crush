// QUESTION 1:
//given the array const number=[2,4,6,8,10]
//use foreach to print number multiplied by 2
const number=[2,4,6,8,10];
const newNo=number.forEach(function(num){
    console.log(num*2);
})



//QUESTION 2:
//given the array: const names=["esther","John","Ada","Mike"]
//use foreach to print the output n this format
//hello esther
//hello john
//....
const names=["esther","John","Ada","Mike"];
const greet=names.forEach(function(name){
    console.log(`Hello ${name}`);
})



//QUESTION 3:
//given the array: const nmubers=[1,2,3,4,5]
//use map() to create a new array that returns the square of the nmubers
const numbers=[1,2,3,4,5];
const square=numbers.map(function(no){
    return no*no;
})
console.log(square)
//QUESTION 4:
// GIVEN THE ARRAY: const prices=[100,200,300];
//USE MAP() TO CREATE A NEW ARRAY WWHERE A 10% DISCOUNT IS APPLIED
const prices=[100,200,300];
const discount=prices.map(function(price){
    return price*0.9;
    //used 0.9 as the approximate for the 10%
})
console.log(discount)//QUESTION 5: 
//GIVEN THE ARRAY: const nums=[5,12,8,20,3];
//use filter() to create a new array that contains numbers higher than 10
const nums=[5,12,8,20,3];
const greaterNum=nums.filter(function(value){
    return value>10
})
console.log(greaterNum);

//QUESTION 6:
// GIVEN THE ARRAY: const ages=[15,22,17,30,18]
//USE FILTER TO RETURN AGES THAT ARE 18 AND ABOVE
 const ages=[15,22,17,30,18];
 const isAdult=ages.filter(function(age){
     return age>=18;
    
 })
 console.log(isAdult);
//QUESTION 7:
 //GIVEN THE ARRAY: const values=[10,15,20,25,30]
 //FIRST USE FILTER() TO GET NUMBERS GREATER THAN 20
 //THEN USE MAP TO DOUBLE THE REMAINING NUMBER
 const values=[10,15,20,25,30];
const greaterVal=values.filter(function(x){
    return x>20;
  })
const result=greaterVal.map(function(z){
    return z*2;
  })
console.log(result);