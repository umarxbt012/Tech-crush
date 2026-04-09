let customerName="John Akpa";
let customerAge= 25;
let bookTitle="The Days When Life Had Meaning";
let bookPrice=249.99;
let quantity=3;
let isStudent=true;

let totalPrice= quantity*bookPrice;
let isAdult= customerAge>18;
let buyingManyBooks= quantity>3;
let isBookFiveThousand= bookPrice===5000;
let customerOrder={
    "customer name": customerName,
    "book title ": bookTitle,
    "quantity ": quantity,
    "total price": totalPrice
};
console.log("customer name: "+ customerName);
console.log("total price: "+ totalPrice+ "$");
console.log("is customer an adult: "+ isAdult);
console.log("Buying more than 3 books: "+ buyingManyBooks);
console.log("Is book price equals to 5000: "+ isBookFiveThousand);
  