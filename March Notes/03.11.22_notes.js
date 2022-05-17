
// class NameError extends Error {
//   constructor(...params) {
//     super(...params);

//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, NameError);
//     }

//     this.name = 'NameError';
//     this.message = 'There was a problem with the name';
//   }
// }

// try {
//   const name = 5;
//   if (typeof name !== 'string') {
//     throw new NameError('Name cannot be a string');
//   }
// } catch(e) {
//   console.log(e);
// }

// class NameError extends Error {
//   constructor(name = null, ...params) {
//     super(...params);

//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, NameError);
//     }

//     this.name = 'NameError';
//     this.message = this.message || `There was a problem with the name '${name}'`;
//   }
// }

// try {
//   const name = 5;
//   if (typeof name !== 'string') {
//     throw new NameError('Name cannot be a string');
//   }
// } catch(e) {
//   console.log(e);
// }

// class NameError extends Error {
//   constructor(...params) {
//     super(...params);

//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, NameError);
//     }

//     this.name = 'NameError';
//     this.message = this.message || 'There was a problem with the name';
//   }
// }

// try {
//   const name = 5;
//   if (typeof name !== 'string') {
//     throw new NameError('Name cannot be a string');
//   }
// } catch(e) {
//   console.log(e);
// }

//! ES5 Classes:
// constructor (ES5)
//? function Book(title, series, author) {
//?   this.title = title;
//?   this.series = series;
//?   this.author = author;
//? }

// name of construction function is capitalized
// function doesn't explicitly return a value
// this keyword references newly created object

// constructor(ES6)
//? class Book {
//?   constructor(title, series, author) {
//?     this.title = title;
//?     this.series = series;
//?     this.author = author;
//?   }
//? }

//! To declare static method using ES5
//? Book.getTitles = function(...books) {
//?   console.log(this); // Book class (constructor function)
//?   return books.map(book => book.title);
//? }

// cannot use arrow functions to define static function as context inside arrow function
// will not be the class itself, reason is because it is a lighter version of function() and it gives up
// their own context and access to the arguments variable
//? Book.getTitles = function(...books) {
//?   console.log(this); // Book class (constructor function)
//?   return books.map(book => book.title);
//? }
//? 
//? Book.getTitles = (...books) => {
//?   
//? }

//! Static variables: add it as a proeprty on the class like an object
//? Book.genres = ['fantasy', 'horror', 'classics', 'mystery'];

//! Adding instance methods in ES5: add as property on prototype property of the class
//? Book.prototype.toString = function() {
//?   return `${this.title} by ${this.author}`;
//? };

//! Monkey Patching: adding something to an existing class
//? String.prototype.helloWorld = function() {
//?   console.log("Hello World!");
//? }
//? 
//? const str = "";
//? str.helloWorld(); // => prints "Hello World!"



//! -------------------------------------------------
// class Dog extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.sound = 'woof';
//   }
// 
//   speak() {
//     return `${this.name} says '${this.sound}'`
//   }
// }
//? 1. Which word represents the 'context' of the above class?
//! this

//? 2. Which of these best describes TDD?
//! Creating test specs that describe the functionality of code to be written, then writing code to meet those tests

//? 3. Which of the following descriptions would throw a JavaScript ReferenceError?
//! Invoking a variable that has not been declared
// Invoking an instance method that has not been declared
// Invoking a function that has not been declared
// The code has an extra bracket {
// The code returns a variable but misspells the variable name

//? 4. Which of the following are true of "fat arrow" => functions?
//! Can sometimes omit the return keyword
//! Can sometimes omit {} around the code
// Introduced in the ES5 JavaScript engine
// Will establish context based on the scope where it was defined

// describe ('Mystery function', function () {
// 
//   it('should work correctly', function () {
// 
//     expect(mystery("antelope")).to.equal("ante");
// 
//     expect(mystery("bandicoot")).to.equal("bandi");
// 
//     expect(mystery("cheetah")).to.equal("cheetah");
// 
//     expect(mystery("dromedary")).to.equal("drome");
// 
//     expect(mystery("elephant")).to.equal("ele");
// 
//   });
// 
// });
//? 5. Based on these test specs, what should the mystery function do?
//! Return a shortened version of the input word
// Mutate the name of the input animal
// Generate a nickname for the given animal
// Return the first two syllables of the input word

//? class Dog {
//?   constructor(name) {
//?     this.name = name;
//?     this.sound = 'woof';
//?   }
//? 
//?   speak() {
//?     return `${this.name} says '${this.sound}'`
//?   }
//? }
//? 
//? let fido = new Dog("Fido");
//? let fidoSpeak = fido.speak;
//? 
//? 
//? console.log(fidoSpeak()); // ERROR
//? How would you fix the error in the code above?
//! speak cannot be used in this way
// apply name and sound to the fido instance
// call the speak method with name and sound as arguments
// bind the speak method to the fido instance
