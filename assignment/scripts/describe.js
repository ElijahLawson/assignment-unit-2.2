// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Initialize a string variable with the value of 'Dane'
// Create a conditional determing if the value of variable name is equal to the value "Mary".
// If name is equal to 'Mary', log to the console "Hi, Mary!"
// If name is equal to anything else, log to the console "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Initialize a variable named "secret" with no initialized value.
// Initialize a variable named "code" with a number value of 123.
// Create a conditional determing if the value of variable "code" is equal to 123.
// If "code" is equal to 123, assign the string "super" to the variable "secret" and reassign "code" equal to its current value multiplied by 2
// If "code" is greater than 250, assign the string "duper" to the variable "secret"
// Log to the console the value of the variable "secret"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Initialize and declare three variables and their values: "isStudent" as true | age as 34 | zip as 55407
// Use a compound conditional to determine if boolean variable "isStudent" equals true and if num variable is greater than 8000
// If true, log to console "You're a student on the West Coast!"
//else if "isStudent" is equal to false OR "age" is less than thirty, log to console "What are your hobbies?"
//else if "isStudent" is equal to true, log to console "Welcome to Prime!"
//else, if none of the above if statements are true, log to console "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue' and and colorTwo should be set to 'red'
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo should additionally be set to 'purple'
  // colorTwo = 'purple;
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - the OR operator was used here when the AND operator was meant to be used.
// if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - If age was equal to minAge, in this case, they would be allowed entry, here they are not. Drop the equal sign and swap the conditional. Check if age is less than minAge.
//if (age < minAge) {
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

