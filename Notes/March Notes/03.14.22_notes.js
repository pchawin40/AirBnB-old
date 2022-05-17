// ? Why do we use TDD
// - Make expectations of the code clearer
// - Code is guaranteeded to be testable
// - Reduces unnecessary functionality
// - Easier collaboration
// - Code is more modular

// ? Typical edge cases of a problem are:
// - A maximum input
// - Invalid inputs
// - Very small inputs
// - Very large inputs
// - A minimum input

// ? When defining a custom error type, you should:
// - Call the constructor of the parent class using super
// - Set stack trace of error properly by using Error.captureStackTrace
// - Reassign name property to name of the class
// - Set any custom properties on the error instance

/********************************************
 *            Assessment Questions
 *******************************************/
//? Which of these is NOT a benefit of TDD?
//? (benefit) Test specs are more specific than written descriptions
// (benefit) Enforces DRY and SRP coding principles
//! Prevents future changes from breaking existing functionality
// (benefit) Ensures that tests exist for all core functionality

//? const addNums = (a, b) => a + b;
//? What is wrong with the code above?
// Missing the return keyword
// Missing {} around the code
// Cannot declare a function as a const
//! May not run in older JavaScript engines

//? describe("Mystery function", function () {
//?   it("should work correctly", function () {
//?     expect(mystery("apple")).to.equal("aelpp");
//? 
//?     expect(mystery("grape")).to.equal("aegpr");
//? 
//?     expect(mystery("orange")).to.equal("aegnor");
//? 
//?     expect(mystery("pear")).to.equal("aepr");
//?   });
//? });
//? Based on these test specs, what should the mystery function do?
// Randomly shuffle the letters in large fruit but ignore berries
// Randomly shuffle the letters in the word
//! Arrange the letters from the input string in alphabetical order
// Translate the input word into Latin

//? Which two of the following descriptions would throw a JavaScript SyntaxError?
//! The code has an extra bracket {
// Trying to invoke a variable that hasn't been assigned a value
// The code references a non-existent variable
//! A function is declared using funcion
// The code returns a variable but misspells the variable name

//? class User {
//?   constructor(firstName, lastName) {
//?     this.firstName = firstName;
//?     this.lastName = lastName;
//?   }
//? 
//?   fullName() {
//?     return `${this.firstName} ${this.lastName}`;
//?   }
//? }
//? 
//? let user = new User("Joe", "Schmoe");
//? let getName = user.fullName;
//? 
//? console.log(getName()); // ERROR
//? How would you fix the error in the code above?
// apply first and last names to the user instance
//! bind the getName method to the user instance
// call the getName method with first and last names as arguments
// getName cannot be used in this way

/********************************************
 *              Monday Quiz
 *******************************************/
//? What is the DRY principle?
// A principle that uses code repeatedly to achieve the same results.
// A principle that keeps the code easy to read.
//! A principle aimed to reduce repetition of patterns to avoid redundancy.
// A principle that writes everything twice.
// E: DRY is "a principle of software development aimed at reducing repetition of software patterns,
// replacing it with abstractions or using data normalization to avoid redundancy."

//? Select all that apply. What are the debugging basics?
//! Write tests that cover common use and edge cases
//! Use console.log() to debug malfunctioning code
//! Read the error message (if there is one)

//? Which keyword references a newly created object in a constructor using ES5 syntax?
//! this

/********************************************
 *              Monday Notes
 *******************************************/

// console.time(): built-in function for measuring how long an operations take
// console.time("Timer 1"); // start the timer
// console.timeLog("Timer 1"); // see how many seconds have elapsed
// console.timeEnd("Timer 1"); // stop timer

// startTime = Date.now();
// console.log(10000000);
// endTime = Date.now();

// console.log(startTime);
// console.log(endTime);

// console.log(`Runtime: ${endTime - startTime} ms`);
let increment = 100000;
let i = 0;
for (let n = increment; n <= 10 * increment; n += increment){
  startTime = Date.now();
  
  i += n;
  // console.log(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}

/********************************************
 *         Monday Quiz (Part 2)
 *******************************************/
//? Q1. Which of the following is an area where you can do serious damage to your computer?
//! memory crashes
//! modifying your filesystem
//! infinite loops
//! getting a FATAL ERROR
// E: One area where you can actually do serious damage to your computer is by modifying your
// filesystem.This includes creating or deleting important files on your hard drive, or 
// downloading malicious software from the internet.

//? Q2. How do you halt code execution?
//! ctrl + c
// What do you do if your code is running way too long? Maybe you have an infinite loop, 
// or your numbers are just way too big.At any time, you can halt code execution by typing ctrl + c.

//? Q3. Select all that apply. Which of the following methods can be used to measure how long an 
//? operation takes ?
//! Date.now()
// console.now
//! console.time()
// Date.time
// E: console.time() is a built-in function for measuring how long an operation takes. Type Date.now()
// into a Node terminal and you will receive a large integer. This nubmer represents the number of 
// milliseconds (1/1000th of a sceond) since the morning of January 1st, 1970, a time also known
// as the Unix Epoch

//? Q4. What is the first step in Polya's problem solving framework?
//! Understand the problem
// E: Understanding the requirements and constraints of a problem is the first step to solving it. 
// Understanding how your data structures work underneath the hood will help you choose tools that 
// make many problems easy.

//? Q5. Select all that apply. Which of the following statements are true about asking good questions?
//! It's specific.
//! It's clear and concise.
//! It shows that you've put work into it.
// E: A good question is specific, clear and concise and you have put work into trying to understand the problem.
