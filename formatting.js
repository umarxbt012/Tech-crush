// Example input values
let name = "   adaeze obi   ";
let email = "Adaeze@GMAIL.com";
let phone = "08012345678";


// 🔹 1. Clean and format the name

// Remove extra spaces at the beginning and end
let cleanName = name.trim();

// Format the name properly
let formatted = cleanName
  .toLowerCase() // convert entire string to lowercase
  .split(" ")    // split string into array of words ["adaeze", "obi"]
  .map(word => 
    word[0].toUpperCase() + word.slice(1)
    // take first letter → uppercase
    // take the rest → keep as is
    // combine them → "Adaeze"
  )
  .join(" ");    // join array back into string "Adaeze Obi"


// 🔹 2. Validate email

// Check if email contains "@"
if (!email.includes("@")) {
  // If not, throw an error
  throw new Error("Invalid email address!");
}


// 🔹 3. Mask the phone number

// Take last 4 digits and hide the rest with "*"
let maskedPhone = phone
  .slice(-4)                     // get last 4 digits → "5678"
  .padStart(phone.length, "*"); // add "*" to the front → "*******5678"


// 🔹 4. Display results

console.log(`Name: ${formatted}`);                 // "Adaeze Obi"
console.log(`Email: ${email.toLowerCase()}`);      // "adaeze@gmail.com"
console.log(`Phone: ${maskedPhone}`);              // "*******5678"
