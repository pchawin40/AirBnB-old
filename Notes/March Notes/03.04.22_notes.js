/*****************************************
 *             Monday Quiz
 ****************************************/

//? Q1: What is the difference between context and scope?
//! Scope is function-based while context is object-based
// E: Every function invocation has both a scope and a context associated with it
// Fundamentally, scope is function-based while context is object-based

//? Q2: What is the correct syntax used to create a template literal?
//! Backticks
// E: To create a template literal, instead of single quotes (') or double quotes ("), 
// use grave character, also known as the backticks (`)

//? 1. Eliminate unnecessary words from the question
//? 2. Write down everything you don't understand about the problem
//? 3. Write down a specific question
//? 4. Write down everything you do understand about the problem
//? Q3: The 4 steps above for the 15 minute rule for upcoming up with a question are all jumbled.
//? What is the correct step order for the 15 minute rule?
//! A:
//! 1. Write down everything you do understand about the problem 
//! 2. Write down everything you don't understand about the problem
//! 3. Write down a specific question
//! 4. Eliminate unnecessary words from the question
// E: You should write you do know for the problem first. Then, identify any gaps of confusion by 
// identifying what you don't know about the problem. Based on your gaps of knowledge, you can 
// come up with a specific question to bridge those gaps. Finally, eliminate any unnecessary words
// from the question after you come up with it.

//? Q4. Identify what you should do when you get stuck on a coding problem.
//? Attempt to change every possible variable until you get closer to your solution
//? Check official documentation
//? Look up error messages
//? Give up
//? Discuss with your peer
//? Ask an instructor for help right away
//? Read error messages and logs to isolate the bug
//? Review relevant sections of the readings
//! A:
//! Check official documentation
//! Look up error messages
//! Discuss with your peer
//! Read error messages and logs to isolate the bug
//! Review relevant sections of the readings
// E: When you're on your own as a developer in the real world, you won't have an instructor readily available
// to answer all your questions when you get stuck on a problem. Debugging a problem is a skill you need to
// hone here so that you can become a great developer who can tackle any problem. To debug a problem, isolate
// the problem, look up any error messages, check documentation, review any relevant readings to see if there's 
// anything you missed. If you encounter a tough bug when pair programming or during after hours, ask your peers
// if they have a solution to the problem you have. Once you have attempted to do all of the above, then come
// up with a great question to ask an instructor. Also, remember to never give up and have a positive mindset!
// With enough persistence, you will solve the problem!

//? Q5. Which of the following are traits of a GREAT coding questions?
//? Clear
//? Unblocks you from understanding the problem
//? Specific
//? Can be answered with minimal effort
//? Has lots of coding terminology
//? Includes everything you DO understand about the problem
//? Shows effort
//? Includes code
//? Concise
//? Vague
//? Includes everything you DON'T understand about the problem
//! A:
//! Clear
//! Unblocks you from understanding the problem
//! Specific
//! Can be answered with minimal effort
//! Shows effort
//! Concise
// E: A great coding question is specific, concise, clear, shows effort, unblocks you from understanding the problem,
// and can be answered by an instructor or a mentor with minimal effort. It takes time to perfect the skill of asking
// great questions. But you won't be able to gain this skill without practicing! Practice coming up with a great
// questions for discussion time.

//? Q6. Identify the best coding question below for a student to ask an instructor about recursion during discussion
//? - How do I know if I should use recursion for a given problem if it doesn't tell me to up front? I also don't understand
//? how to approach recursive algorithms.Once I do come up with a solution, how do I know if it's valid and I'm hitting the base case?
//? - How can I tell when recursion is appropriate for a given problem? If it is, how do I come up with a recursive solution?
//? - My recursive function is broken. Can you tell me what's wrong with it?
//? - How can I tell when recursion is appropriate for a given problem? If it is, how do I approach coming up with a recursive solution?
//? - How do I know if I should use recursion for a given problem if it doesn't tell me to up front? I also don't understand how to approach
//?  recursive algorithms.
//! A: How can I tell when recursion is appropriate for a given problem? If it is, how do I approach coming up with a recursive solution?
// E: The best coding question from the selection is the most specific to the problem that the student is trying to solve. Referring
// to the recursion problem that the student is having trouble with will also help the instructor give the best answer by using that example
// to show a difficult concept, such as approaching a recursive algorithm in action

//? Q7: What is the maximum amount of time you should spend coming up with a great question?
//? 10 minutes
//? 30 minutes
//? 1 day
//? 1 hour
//? 15 minutes
//? 5 minutes
//! A: 15 minutes
// E: Once you encounter a coding problem, take 10-15 minutes to try to solve it yourself. If you still can't solve it, spend a maximum
// of 15 minutes coming up with a great coding question to ask an instructor or a mentor. When coming up with the question, you may
// actually solve the problem!

//? Q8: What is the goal of refactoring code?
//? To make the code work as intended.
//? To make the code more readable and maintainable.
//? To make the code shorter.
//? To make the code execute faster.
//! A: To make the code more readable and maintainable
//E: Refactoring is the process of editing already working code to be more readable and maintainable

//? let arr = [1, 2, 4, 19];  // Amir's numbers
//?  let arr2 = [3, 5, 7, 10]; // Maria's numbers
//?  
//?  arr[0] = arr[0] * 4;
//?  arr[1] = arr[1] * 2;
//?  arr[2] = arr[2] * 4;
//?  arr[3] = arr[3] * 2;
//?  
//?  arr2[0] = arr2[0] * 4;
//?  arr2[1] = arr2[1] * 2;
//?  arr2[2] = arr2[2] * 4;
//?  arr2[3] = arr2[3] * 2;
//? 
//?  ```js
//?  describe("sum()", function() {
//?    it("should return ________", function() {
//?      assert.equal(sum([2, 4]), 6);
//?    });
//?  });
//? Q9: Most likely, what should the it statement say?
//! A: The sum of the elements in its input array
// E: Given that the name of the function is sum, it's reasonable to assume that the function is calculating
// a sum. Based on the assert statement, the input is an array, and the result is the sum of the elements
// within the array

//? Q10: Identify what you should do when you get stuck on a coding problem? (multiple)
//? Ask an instructor for help right away
//? Look up error messages
//? Read error messages and logs to isolate the bug
//? Attempt to change every possible variable until you get closer to your solution
//? Check official documentation
//? Discuss with your peer
//? Review relevant sections of the readings
//? Give up
//! A: 
//! Look up error messages; 
//! Read error messages and logs to isolate the bug
//! Check official documentation
//! Discuss with your peer
//! Review relevant sections of the readings
// E: When you're on your own as a developer in the read world, you won't have an instructor readily available to answer
// all your questions when you get stuck on a problem. Debugging a problem is a skill that you need to hone here so that
// you can become a great developer who can tackle any problem. To debug a problem, isolate the problem, look up any
// error messages, check documentation, review any relevant readings to see if there's anything you missed. If you
// encounter a tough bug when pair programming or during after hours, ask your peers if they have a solution to the 
// problem you have. Once you have attempted to do all of the above, then come up with a great question to ask an instructor.
// Also, remember to never give up and have a positive mindset! With enough persistence, you will solve the problem!

/*****************************************
 *         Homework for Tuesday
 ****************************************/
//? function buyAndSellStock(numBuy, numSell) {
//?     // buy stock code
//? 
//?     // sell stock code
//? 
//?     // calculate profit code
//? }
//? Q1: In the psueudocode above, does the function follow the single-responsibility principle?
//! A: No, the function is responsibility for handling too many different operations
// E: The function can easily be broken down into three different functions and extracted. It is currently
// handling three different operations

//? const VOWELS = ['a','e','i','o','u'];
//? const exclaimVowels = function(word) {
//?     let exclamations = '';
//?   for (let i = 0; i < word.length; i++) {
//?       const char = word[i];
//?       if (VOWELS.includes(char)) {
//?         exclamations += '!';
//?     }
//?   }
//?   return word + exclamations;
//? }
//? const exclaimWords = function(sentence) {
//?     const words = sentence.split(' ');
//?   const newWords = [];
//?   for (let i = 0; i < words.length; i++) {
//?       const word = words[i];
//?       newWords.push(exclaimVowels(word));
//?   }
//?   return newWords.join(' ');
//? };
//? console.log(exclaimWords("Hello World")); // Hello!! World!
//? console.log(exclaimWords("Don't Repeat Yourself")); // Don't! Repeat!!! Yourself!!!
//? Q2: True or False: The exclaimWords(sentence) function above applies the DRY Principle.
//! True
//E: True: the exclaimWords(sentence) function has no repeating patterns. The exclaimVowels(word)
// function also has no repeating patterns.

//? Q3: What is the result of DRYing your code up (multiple)?
//? It is longer than before.
//? It is less verbose.
//? It is easier to understand.
//? It is shorter than before.
//! A:
//! It is less verbose
//! It is easier to understand
// E: The main goal of DRY is to make the code more maintanble and easy to understand. Sometimes the 
// number of lines of code ends up being longer; however, it may just save you lines in the future if
// if new things need to be added

//? const maxValue = function(nums) {
//?   let max = null;
//? 
//?   for (let i = 0; i < nums.length; i++) {
//?     const num = nums[i];
//? 
//?     if (max === null || num > max) {
//?       max = num;
//?     }
//?   }
//? 
//?   return max;
//? };
//? Q4: Should the Single Responsibility Principel be applied to refactor this code?
//! A: No, the tasks being performed are simple enough and aren't repeated
// E: If tasks are small enough, there's no need to extract them into a helper function, given that they aren't
// repeatedly paired with other operations

/*****************************************
 *            Tuesday Quiz
 ****************************************/

//? const choosePrimes = function(nums) {
//?   const primes = [];
//? 
//?   for (let i = 0; i < nums.length; i++) {
//?     const num = nums[i];
//? 
//?     if (num > 1) {
//?       let j = 2;
//?       while(j < num && num % j !== 0) {
//?         j++
//?       }
//? 
//?       if (j === num) {
//?         primes.push(num);
//?       }
//?     }
//?   }
//? 
//?   return primes;
//? }
//? 
//? console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
//? console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
//? Q1: True or False: The choosePrimes(nums) function above applies the Single-Responsibility Principle.
//! False
// E: False: the choosePrimes(nums) function is trying to loop through all the numbers in the nums array, and
// for each number, check if it's a prime number. If it is, add into the array. The code for checking if a
// single number is prime is an additional responsibility that the function should not be doing and should
// be extracted to its own helper function.

//? const maxValue = function(nums) {
//?   let max = null;
//? 
//?   for (let i = 0; i < nums.length; i++) {
//?     const num = nums[i];
//? 
//?     if (max === null || num > max) {
//?       max = num;
//?     }
//?   }
//? 
//?   return max;
//? };
//? 
//? console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
//? console.log(maxValue([-2, -3, -7, 3 ])); // 3
//? console.log(maxValue([])); // null
//? Q2: True or False: The maxValue(nums) function above applies the Single Responisbility Principle
//! True
// E: True: The maxValue(nums) function has one responsibility which is to find the maximum value in the array. Although
// it may seem like it's doing two responsibilities, looping through the array and reassigning the maximum value if necessary,
// reassining the max value is such a small responsibility that it would be silly to extract it into its own helper function.
// It's already easy to read the function as it is. There is no other complex responsibility that needs to be extracted into a 
// helper function

//? Q3: Identify the most accurate phrase for defining the Single-Responsibility Principle.
//! A function should do one thing and do it well
//E: A single JavaScript should do one thing and do it well. The funciton should not have multiple responsibilities.

//? Q4: What are some reasons for applying the Single-Responsibility Principle to your code?
//? Limits the impact of changing your code on other code that depends on yours
//? Gives your code more responsibility
//? Makes your code easier to write
//? Makes your code more maintainable
//? Makes the problem that the code is trying to solve easier to solve
//? Makes your code easier to read
//! A:
//! Limit the impact of changing your code on the other code that depend on yours
//! Makes your code more maintainable
//! Makes your code easier to read
// E: The Single-Responsibility Principle makes your code more maintainable, easier to read, and limits the impact of changing
// your code on other code that depends on yours. It does not always make your code initially easier to write, and it may not make
// the code easier to solve at first. You should be applying the principle during code refactors. Once you get really comfortable
// with the principel, you can start applying it when initially solving the problem.

//? function maxInColumn(matrix, col) {
//?   let colMax = matrix[0][col];
//? 
//?   for (let row = 1; row < height ; row++) {
//?     if (matrix[row][col] > colMax) {
//?       colMax = matrix[row][col];
//?     }
//?   }
//?   return colMax;
//? }
//? 
//? function maxPerColumn(matrix) {
//?   const height = matrix.length;
//?   const width = matrix[0].length;
//? 
//?   const result = [];
//?   for (let col = 0; col < width ; col++) {
//?     result.push(maxInColumn(matrix, col));
//?   }
//? 
//?   return result;
//? }
//?
//? const matrix = [[ 5,  9, 21],
//?                 [ 9, 19,  6],
//?                 [12, 14, 15]];
//? console.log(maxPerColumn(matrix)); // [12, 19, 21]
//? Q5: True or False: The maxPerColumn(matrix) function above applies the Single-Responsibility Principle
//! A: True
// E: True. The maxPerColumn(matrix) function has one responsibility which is to add the maximum number in each column in the result
// array. The maxPerColumn(matrix) function is not finding the maximum number in the column. That responsibility is fulfilled by the
// maxInColumn(matrix, col) helper function which the maxPerColumn(matrix) function calls

//? const repeatEachCharThrice = function(str) {
//?   let newStr = '';
//? 
//?   for (let i = 0; i < str.length; i++) {
//?     const char = str[i];
//?     newStr += char + char + char;
//?   }
//? 
//?   return newStr;
//? };
//? 
//? console.log(repeatEachCharThrice("Hello")); // HHHeeellllllooo
//? Q6: True or False: The repeatEachCharThrice(str) function above applies the DRY Principle?
//! A: False
// E: False: The repeatEachCharThrice(str) function has a repeating pattern when adding each character to the new
// string three times, char + char + char. How would you change the code to repeat each character four times 
// instead of three? How about 100 times?

//? What are some reasons for applying the DRY Principle to your code?
//? Makes your code repeatable
//? Your code will be easier to write
//! Makes your code easier to debug
//! Makes your code more maintainable
// Your code will be easier to read
//! Changing your code when the problem changes will introduce fewer errors
//? Q7: What are some reasons for applying the DRY Principle to your code?
// E: The DRY Principle when applied doesn't always make your code easier to read or write. It definitely make the
// repetitive patterns in yuor code easier to debug and change, which makes your code more maintainable.

//? const checkOddElements = function (nums) {
//?   const result = [];
//? 
//?   for (let i = 0; i < nums.length; i++) {
//?     const num = nums[i];
//?     if (num % 2 === 0) {
//?       result.push(false);
//?     } else if (num % 2 === 1) {
//?       result.push(true);
//?     }
//?   }
//? 
//?   return result;
//? }
//? 
//? console.log(checkOddElements([5, 2, 3, 6, 4, 1])); // [true, false, true, false, false, true]
//? Q8: True or False: The checkOddElements(nums) function above applies the DRY Principle
//! A: False
// E: False, the checkOddElements(nums) function has a repeating pattern that may not be so obvious. For
// each element in the nums array, it is checking if the element is even. If it is, then it adds false to 
// the result array. It is also checking if the element is odd, and if it is, then it adds true to the result
// array. These two conditionals are actually repeititive patterns. Each is checking the opposite condition and 
// pushing the boolean of the opposite condition into the result array. So you can eliminate this pattern by 
// condensing these opposite conditions into one line of code, result.push(num % 2 === 1). This makes the problem
// that the code is solving very obvious when you read the code for the first time

//? Q9: Identify the most accurate phrase for defining the DRY Principle.
//! Pattern repetition should be abstracted to avoid redundancy

//? // E: Pattern repetition should be avoided in code. If you see a pattern in a section of code, you can abstract
//? // it into a set of code that can be used in place of the pattern
//? 
//? const VOWELS = ['a','e','i','o','u'];
//? 
//? const exclaimVowels = function(word) {
//?   let exclamations = '';
//? 
//?   for (let i = 0; i < word.length; i++) {
//?     const char = word[i];
//?     if (VOWELS.includes(char)) {
//?       exclamations += '!';
//?     }
//?   }
//? 
//?   return word + exclamations;
//? }
//? 
//? 
//? const exclaimWords = function(sentence) {
//?   const words = sentence.split(' ');
//? 
//?   const newWords = [];
//?   for (let i = 0; i < words.length; i++) {
//?     const word = words[i];
//?     newWords.push(exclaimVowels(word));
//?   }
//? 
//?   return newWords.join(' ');
//? };
//? 
//? console.log(exclaimWords("Hello World")); // Hello!! World!
//? console.log(exclaimWords("Don't Repeat Yourself")); // Don't! Repeat!!! Yourself!!!
//? Q10: True or False: The exclaimWords(sentence) function does applies the DRY Principle.
//! A: True
// E: True; the exclaimWords(sentence) function has no repeating patterns. The exclaimVowels(word)
// function also has no repeating patterns

//? // ./greetings/goodbye.js
//? const ciao = 'Ciao';
//? const goodbye = 'Goodbye!';
//? const peace = 'Peace!';
//? 
//? module.exports = { ciao, goodbye, peace };
//? 
//? 
//? File structure:
//? .
//? ├── greetings
//? │   └── goodbye.js
//? └── sayings
    //? └── index.js
//? 
//? Q11: How do you import the goodbye variable and use it in the sayings/index.js file?
//! A: const { goodbye } = require("../greetings/goodbye");
// E: goodbye is exported as a nested item in an object from ./greetings/goodbye.js. It is nested in an
// object when exported, so it needs to be destructured when imported

//? // ./greetings/index.js
//? const hola = 'Hola';
//? const nihao = 'Nihao';
//? const konichiwa = 'Konichiwa';
//? 
//? module.exports = { hola, nihao, konichiwa };
//? 
//? 
//? File structure:
//? .
//? ├── greetings
//? |   ├── index.js
//? │   └── goodbye.js
//? └── sayings
//?     └── index.js
//? 
//? Q12: How do you import the konichiwa variable and use it in sayings/index.js file? (Select all that apply.)
//! A: 
//! const { konichiwa } = require("../greetings/index");
//! const { konichiwa } = require("../greetings");
// E: konichiwa is exported as a nested item in an object from ./greetings/index.js. It is nested in an object when exported,
// so it needs to be destructued when imported. It can be imported as a folder module because the file that it is in is called
// index.js. You can specify the index in the required file path, or you can omit it.

//? Q13: Identify some benefits of using commonJS modules. (Select all that apply.)
//? Separate code into multiple files
//? Group code by responsibility
//? See all the code for an application in one file
//? Can easily export your code for other developers to use as a package
//? Can easily import other developers' code into your application
//! A: 
//! Separate code into multiple files
//! Group code by responsibility
//! Can easily export your code for other developers to use as a package
//! Can easily import other developers' code into your application
// E: CommonJS modules enable you to import and export code (i.e., modules) from one file to another with relative ease, leading to
// the benefits marked above.

//? // ./operations.js
//? const Calculator = require('./calculator');
//? Q14: Using the example above, what is valid syntax for exporting the Calculator variable from the calculator.js?
//! A: 
//! module.exports = Calculator // if variable, don't use { }
// E: Calculator is expected to be top-level export

//? // ./greetings/hello-world.js
//? const helloWorld = 'Hello World!';
//? 
//? module.exports = helloWorld;
//? 
//? 
//? File structure:
//? .
//? ├── greetings
//? │   └── hello-world.js
//? └── phrases.js
//? 
//? Q15: How do you import the helloWorld variable and use it in the phrases.js file?
//! A:
//! const helloWorld = require("./greetings/hello-world");
// E: helloWorld is top-level exported item from ./greetings/hello-world.js. It is not nested in an object 
// when exported, so it doesn't need to be destructed when imported.

//? // ./operations.js
//? const { add, subtract } = require('./calculator');
//? Q16: Using the example above, what is valid syntax for exporting the add variable from the calculator.js?
//! exports.add = (num1, num2) => {}
// E: add is expected to be a nested export in an object. It is not the top-level export, and it is not the only nested export

/*****************************************
 *     Homework for Wednesday Quiz
 ****************************************/
//? // 1
//? module.exports = {
//?     func1,
//?     func2
//? }
//? 
//? // 2
//? module.exports = func1, func2;
//? 
//? // 3
//? exports.func1 = func1;
//? exports.func2 = func2;
//? Q1: Which of the above correctly export func1 and func2? Select all that apply
//! A:
//! 1. module.exports = {
//!   func1,
//!   func2
//! }
//!
//! 3. exports.func1 = func1;
//! exports.func2 = func2;
// E: module.exports is an object. 1 is shorthand for assinging the key as the name of the functions/variables and setting the value
// as the actual functions/variables, while 3 is setting them manually. exports is synonymous with modulee.xports but when using the latter,
// only 1 statement should be used as it results in the default export

//? class Restaurant {
//?     constructor() {
//?         this.capacity = 30;             // 1 <-- Property
//?         this.menu = {
//?             burgers: ['hamburger', 'cheeseburger', 'double cheeseburger', 'bacon cheeseburger'],
//?             salads: ['caesar', 'greek', 'fruit', 'chicken']
//?         };
//?         this.orderQueue = [];
//?     }
//? 
//?     seatCustomer() {
//?         // ...                          // 2 <-- Method
//?     }
//? 
//?     takeOrder() {
//?         // ...
//?     }
//? 
//?     completeOrder() {
//?         // ...
//?     }
//? }
//? 
//? const restaurant = new Restaurant();    // 3 <-- Instance
//? Q2: Name the above class-related components?
//! A: 
//! 1 - properties
//! 2 - method
//! 3 - instance
// E: Instance properties are often declared within the constructor of a class, methods are functions
// that can be called on instances, and instances are instances of a class that can be interacted with independent
// of other instances

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q3: Given the code above, what will calling Person.greet() do?
//! A: throw an error; not static method
// E: The greet method can only be called on an instance of Person, not on the Person class itself. Since greet
// is neither a method or a property on the class, it will be undefined. If you try to call undefined like
// a funciton, JavaScript will throw an error. So calling Person.greet will throw a TypeError: Person.greet
// is not a function

//? class Car {
//?   constructor(brand, model) {
//?     this.brand = 'Honda';
//?     this.model = 'Civic';
//?   }
//? 
//?   carInfo() {
//?     return `${this.brand} ${this.model}`;
//?   }
//? }
//? 
//? const merc = new Car('Mercedes', 'C-Class');
//? console.log(merc.carInfo());
//? Q4: Given the code aboe, what will be printed to the console?
//! A: Honda Civic
// E: The constructor sets brand to 'Honda' and model to Civic regardless of what the user inputs. Also, remember
// using template literals respect whitespace

//? class coffee {
//?     constructor(type) {
//?         this.type = type;
//?     }
//? }
//? 
//? let latte = coffee('latte');
//? let coldBrew = coffee('cold brew');
//? let mach = coffee('macchiato');
//? 
//? latte.size = 'large';
//? Q5: What is wrong in the code above? Select all that apply:
//! A: The class name should begin with a capital letter (e.g. Coffee).
// E: Class names should be capitalized as a general convention although it is not mandatory. This helps other
// developers identify the classes more easily. The new keyword is used to create new instances of a class; coffee is not
// a function so it cannot be called without the new keyword.

/*****************************************
 *          Wednesday Quiz
 ****************************************/
//? Q1. Given the following problem scenario, decide whether OOP is a good way to approach the problem. I want to calculate
//? an estimate of how much air circulation a house with 4 people living inside of it needs. Should I use OOP to solve this problem?
//! A: Yes
// E: This is a challenging problem. You need to know a lot of information about each entity involved in the problem, like what the size
// and volume of air in the house are. How much air circulation does each of the rooms in the house needs. How much air does 4 people as 
// opposed to 1 person living in the house needs, etc. OOP is perfect for this problem because you can model each entity in the problem 
// to keep track of its own data and calculations and ue the models to put the data together to solve the smaller problems needed to solve
// the larger one.

//? Q2. Identify the best phrase that defines OOP
//! A: OOP is an approach to solving problems by creating interfaces with object models
// E: Each of the phrases describes an aspect of OOP. But the phrase that best captures the entirety of OOP is "OOP is an approach to
// solving problems by creating interfaces with object models." By applying OOP, you can break down a problem into smaller problems by grouping
// specific actions and properties into object models that can interact with each other.

//? Q3. OOP is the best way to solve any complex problem.
//! A: False
// E: OOP is just one of the ways to approach solving complex problems. It used to be the go-to way of solving complex problems, but you can
// still solve complex problems using functions. You can still learn how to design your functions well to keep your code easy to read and maintain
// by applying the principles used in OOP. So even though you may not see OOP used as often anymore, it's still a great way to learn how to write
// great code.

//? Q4. Given the following problem scenario, decide whether OOP is a good way to approach the problem. I want to sum up all the elements in an array.
//? Should I use OOP to solve this problem?
//! A: No
// E: You can use OOP, but it would be overkill for such a simple problem. Instead, you can just use a funciton to achieve solving the problem faster.
// If you use OOP for such a simple problem, it may actually make the problem less maintanable and readable.

//? Q5. Given the following problem scenario, decide whether OOP is a good way to approach the problem. I want to create a game of Rock, Paper, Scissors.
//? Should I use OOP to solve this problem?
//! A: Maybe
// E: As you saw the other day, you can create a game of Rock, Paper, Scissors without using OOP. You can just use functions. If the game becomes more 
// complex, you may want to consider using OOP as an appraochg to creating the game. For example, if you want to create a two-person game, not just an AI,
// or if you want to make the AI more robust, or if you want to upgrade it from being a terminal game to an actual computer application, the problem
// can be complex enough to warrant using OOP.

//? Q6. Given the following problem scenario, decide whether to use a class or an object. I want to store the name, price, and amount of my products
//? that I am selling. I'll be creating, removing, and updating the price and amounts regularly. I'll also be offering the discounted prices for the products
//? sometimes. Should I use a class or an object?
//! A: Class
// E: A JavaScript class seems like the best way to model the products. An interface created using methods on the class to simulate updating the product amounts
// and prices will be eaiser to read and maintain than repeating those frequent operations on JavaScript objects.

//? Q7: Identify the correct features of a JavaScript class.
//? Properties of a class are used to model data of the class
//? An instance of a class is the blueprint of the class
//? A constructor of a class creates an instance of the class
//? Methods of a class are used to read and manipulate the modeled data
//? An instance of a class is a specific object made from the class
//? A class doesn't expose the code for the properties and methods
//? A constructor of a class creates the properties and methods of the class
//! A:
//! Properties of a class are used to model data of the class
//! An instance of a class is the blueprint of the class
//! A constructor of a class creates an instance of the class
//! Methods of a class are used to read and manipulate the modeled data
// E: Properties capture data, methods are actions to read and manipulate the properties. A class is like a blueprint or model for instances of the class
// The constructor function is used to create a new instance of the class

//? Q8: Given the following problem scenario, decide whether to use a class or an object. I want to store the name and time that a person clocked
//? in and out for work.I'll be calculating the total work hours for each person at the end of the week. Should I use a class or an object?
//! A: Object
// E: Since only one operation is performed on the data every once in a while, it won't be hard to read or maintain the code if the data is stored in a
// JavaScript object. Also, the data is not complex with only two or three properties. Using a JavaScript class is fine in this situation, but is not
// necessary.

//? Q9: True or False: You should always use JavaScript classes instead of JavaScript objects to model data.
//! A: False
// E: JavaScript classes are overkill if you are modeling simple data that only need a few operations performed on it once in a while.
// JavaScript classes are just like JavaScript objects, except you can organize more complex data and perform operations easier with
// JavaScript classes. For simple data that need one or two operations performed on it in its lifetime. JavaScript objects may be a better 
// way to model your data.

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = 'Caleb';
//?   }
//? 
//?   greet() {
//?     // this?
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q10: Given the code above, what will this inside of the greet() method be when executing
//? kristen.greet()?
//! A: kristen
// E: The this keyword or the context in the greet() method when called on an object will be the
// object that it was called on

//? Q11: Given a JavaScript class of Person, what method on the class of Person will happen when executing new Person()?
//! A: JavaScript will invoke the constructor() method on the person class
// E: JavaScript will invoke the constructor() function on the Person class when executing new Person() if there are
// any arguments passed into Person(), JavaScript will pass those arguments into the constructor()

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q12: Given the code above, what will calling kristen.greet() do?
//! A: print "Kristen says hello!"
// E: The greet method will read the firstName property on the instance of the class that it was called on. Then it will print
// the value of the firstName + "says hello!"

//? class Person {
//?   constructor(firstName) {
//?     // this?
//?     this.firstName = 'Caleb';
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q13: Given the code above, what will this inside of constructor() function be when executing 
//! A: The newly created instance of the Person class
// E: The this keyword or the context in the constructor() method when creating a new instance of a class with the new keyword
// will be the instance of the class being created

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q14: Given the code above, what will caling Person.greet() do?
//! A: throw an error
// E: The greet method can only be called on an instance of Person, not on the Person class itself. Since greet is neither a method or 
// a property on the class, it will be undefined. If you try to call undefined like a function, JavaScript will throw an error. 
// So calling Person.greet will throw a TypeError: Person.greet is not a function

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = 'Caleb';
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q15: Given the code aboev, what will kristen.firstName return?
//! A: "Caleb"
// E: When kristen is initialized to a new Person, the constructor (firstName) function will assign the firstName property on the new
// Person to be "Calen", not "Kristen" that was passed in.

//? Q16: Given a JavaScript class of Person, what method on the class of Person will happen when executing Person()?
//! A: JavaScript will throw an error
// E: JavaScript will throw a TypeError: Class constructor Person cannot be invoked without 'new'. To create a new instance of a class
// you need to add the new keyword in front of the class invocation, ex: new Person()

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = 'Caleb';
//?   }
//? 
//?   greet() {
//?     console.log(`${this.firstName} says hello!`);
//?   }
//? }
//? 
//? const kristen = new Person('Kristen');
//? Q17: Given the code above, what will Person.firstName return?
//! A: undefined
// E: The firstName property will be set on an instance of a Person when created. The firstName property is not on the class itself.

//? Q18: Identify use cases of inheritance
//? To create a hierarchy of classes.
//? To overwrite methods of the class.
//? To provide a common interface for multiple similar classes.
//? To allow a class to use another class' methods and variables.
//! A: 
//! To create a hierarchy of classes
//! To provide a common interface for multiple similar classes
//! To allow a class to use another class' methods and variables
// E: Inheritance can be used to provide a common interface for multiple classes which need to use the same methods and variables.
// It can also provide a natural hierarchy of data. When a class inherits from another class, it gains access to that other class'
// method and variables. It it not used to overwrite methods of a class.

//? class Fruit {
//?   constructor(color, taste) {
//?     this.color = color;
//?     this.taste = taste;
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.constructor.name}.`);
//?   }
//? }
//? 
//? class Apple extends Fruit {
//?   constructor() {
//?     super('red', 'sweet');
//?   }
//? }
//? 
//? const orange = new Fruit('orange', 'tangy');
//? const apple = new Apple();
//? Q19: Given the code above, what will orange.eat() do?
//! A: print "You ate a Fruit"
// E: orange is an instance of the Fruit class. Therefore, it can call the eat method defined on the Fruit class. The context
// or the this keyword inside of the eat method will be orange. Since the name of the constructor function for the orange instance is 
// "Fruit", it will print "You ate a Fruit".

//? class Fruit {
//?   constructor(color, taste) {
//?     this.color = color;
//?     this.taste = taste;
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.constructor.name}.`);
//?   }
//? }
//? 
//? class Apple extends Fruit {
//?   constructor() {
//?     super('red', 'sweet');
//?   }
//? }
//? 
//? const orange = new Fruit('orange', 'tangy');
//? const apple = new Apple();
//? Q20: Given the code above, what will apple.eat() do?
//! A: print "You ate a Apple."
// E: The Apple class inherits the eat instance methods from the Fruit class. So when you call eat() on an instance of an Apple, it will
// call the eat() method on the Fruit class. However, the context or the this keyword inside the eat() will be the Apple instance. Since 
// the name of the constructor function for the Apple instance is "Apple", it will print, "You ate a Apple"

//? class Fruit {
//?   constructor(color, taste) {
//?     this.color = color;
//?     this.taste = taste;
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.constructor.name}.`);
//?   }
//? }
//? 
//? class Apple extends Fruit {
//?   constructor() {
//?     super('red', 'sweet');
//?   }
//? }
//? 
//? const apple = new Apple();
//? Q21: Given the code above, what will apple.color evaluate to?
//! A: 'red'
// E: When a new Apple is initialized, the constructor() method for the Apple class will be called in Apple's constructor() function,
// it will call its parent's constructor function which is Fruit's constructor(color, taste) function by using the super keyword. 
// Invoking super with arguments will pass those arguments into the parent's constructor function. So Fruit's constructor function will
// be passed in "red" and "sweet" when a new Apple is created.

/*****************************************
 *      Homework for Thursday Quiz
 ****************************************/

//? class ClubMember {
//?   static clubMembers = [];
//? 
//?   static getClubMembers() {
//?     for(let i = 0; i < this.clubMembers.length; i++) {
//?         console.log(this.clubMembers[i]);
//?     }
//?   }
//? 
//?   static initiateMember(member) {
//?     console.log(`Welcome, ${member}!`);
//?     this.clubMembers.push(member);
//?   }
//? 
//?   constructor(name) {
//?     this.name = name;
//?     ClubMember.initiateMember(name);
//?   }
//? }
//? 
//? const larry = new ClubMember('Larry');
//? const pauline = new ClubMember('Pauline');
//? 
//? ClubMember.getClubMembers();
//? What gets printed by the above code?
//! A: print "Welcome, Larry!", "Welcome, Pauline!", "Larry", "Pauline" 
// E: When a new member is created, a log occurs that greets the new member. The
// getClubMembers static method is called which prints every member in the club
// individually

//? class Animal {
//?     constructor(name, weight) {
//?         this.name = name;
//?         this.weight = weight;
//?     }
//? }
//? 
//? // 1
//? class Rhino uses Animal {
//?     constructor(name, weight) {
//?         super(name, weight);
//?     }
//? }
//? 
//? // 2
//? class Hippo inherits Animal {
//?     constructor(name, weight) {
//?         this.name = name;
//?         this.weight = weight;
//?     }
//? }
//? 
//? // 3
//? class Giraffe extends Animal {
//?     constuctor(name, weight) {
//?         super(name, weight);
//?     }
//? }
//? Q2: Which of the above classes correctly inherits the Animal class?
//! A: 3 w/ "extends" keyword
// E: The keyword to inherit a class is extends

//? class Vehicle {
//?     constructor(color) {
//?         this.color = color;
//?     }
//? 
//?     pressHorn() {
//?         console.log('beep beep');
//?     }
//? }
//? 
//? class Truck extends Vehicle {
//?     constructor(color) {
//?         super(color);
//?     }
//? 
//?     pressHorn() {
//?         console.log('honk honk');
//?     }
//? }
//? 
//? class Bike extends Vehicle {
//?     constructor(color) {
//?         super(color);
//?     }
//? 
//?     pressHorn() {
//?         console.log('ding ding');
//?     }
//? }
//? 
//? let car = new Vehicle('red');
//? let truck = new Truck('black');
//? let bike = new Bike('light brown');
//? 
//? car.pressHorn();
//? truck.pressHorn();
//? bike.pressHorn();
//? Q3: What is printed by the above code?
//! A: "beep beep" "honk honk" "ding ding"
// E: Car is a base implementation of Vehicle so it will use Vehicle's pressHorn method.
// Truck and Bike override the method to implement their own behavior which does not affect
// the original Vehicle's method

//? class Smoothie { 
//?     constructor(flavor, size) {
//?         this.flavor = flavor;
//?         Smoothie.size = size;
//?     }
//? }
//? 
//? let stwbry = new Smoothie('strawberry', 'small');
//? let stwbry2 = new Smoothie('strawberry', 'small');
//? 
//? stwbry.size = 'large';
//? console.log(stwbry.size);
//? console.log(stwbry2.size);
//? Q4: What gets printed to the console by the code above?
//! A: "large" "undefined"
// E: The line stwbry.size = 'large'; only affects the first instance of Smoothie and is creating a new
// instance variable on just stwbry and not stwbry2. The static method variable Smoothie.size cannot
// be mutated through an instance unless there is a method that does this

//? class Animal {
//?   constructor(name, sound) {
//?     this.name = name;
//?     this.sound = sound;
//?   }
//? 
//?   speak() {
//?     console.log(this.sound);
//?   }
//? }
//? 
//? class Dog extends Animal {
//?   speak() {
//?     console.log('bark bark');
//?   }
//? }
//? 
//? const fluffy = new Dog('Fluffy', 'woof');
//? fluffy.speak();
//? Q5: Which OOP principle(s) is/are being demonstrated above? Select all that apply:
//! A: 
//! Inheritance(Dog inherit from Animal); 
//! Polymorphism(speak modify from Animal);
//! Encapsulation(creating a new instance and putting it into fluffy)
// E: All the principles are being used here. Encapsulation of class-specific properties/methods, inheritance of a parent class
// by a parent class, polymorphic behavior by a child class (reimplementation fo the speak method)

/*****************************************
 *            Thursday Quiz
 ****************************************/

//? Q1: Identify correct use cases for static methods
//? The code in the method can be used by all instance methods.
//? The class does not need any instance methods.
//? The code in the method is not dependent on any instances.
//? The method is in a utility class like Math and should not be changed.
//? The code is not used often.
//! A:
//! The code in the method can be used by all instance methods
//! The code in the method is not dependent on any instances
//! The method is in a utility class like Math and should not be changed.
// E: Static methods are saved on the class itself. It is called on the class and does not know information about
// any instances of the class. Use a static method instead of an instance method if the code in the method does not need
// to know anything about an instance of the class. If the class is a utility class, then define static methods only. If there is 
// repeating code in multiple instance methods that isn't dependent on the instance, turn that code into a static method.

//? class Task {
//?   static taskList = [];
//? 
//?   static printTaskList() {
//?     console.log(this.taskList);
//?   }
//? 
//?   static addTask(task) {
//?     this.taskList.push(task);
//?   }
//? 
//?   constructor(taskDetail) {
//?     this.taskDetail = taskDetail;
//?     Task.addTask(this);
//?   }
//? }
//? 
//? const laundry = new Task('laundry');
//? Q2: Given the code above, what will laundry.printTaskList() do?
//! A: throw an error
// E: printTaskList() is a static method. It cannot be called on any instances of the Task class. It must be called on the Task class 
// itself.

//? class Task {
//?   static taskList = [];
//? 
//?   static printTaskList() {
//?     console.log(this.taskList);
//?   }
//? 
//?   static addTask(task) {
//?     this.taskList.push(task);
//?   }
//? 
//?   constructor(taskDetail) {
//?     this.taskDetail = taskDetail;
//?     Task.addTask(this);
//?   }
//? }
//? 
//? const laundry = new Task('laundry');
//? Q3: Given the code above, what will laundry.taskList evaluate to?
//! A: undefined
// E: taskList is a static variable that can only be accessed on the Task class itself. It cannot read on any instance of the class.

//? class Task {
//?   static taskList = [];
//? 
//?   static printTaskList() {
//?     console.log(this.taskList);
//?   }
//? 
//?   static addTask(task) {
//?     this.taskList.push(task);
//?   }
//? 
//?   constructor(taskDetail) {
//?     this.taskDetail = taskDetail;
//?     Task.addTask(this);
//?   }
//? }
//? 
//? const laundry = new Task('laundry');
//? Q4: Given the code above, what will Task.printTaskList() do?
//! A: print [Task { taskList: 'laundry' }]
// E: The taskList is a stic variable on the Task class that is initialized as an empty array. addTaskList(task) is a static method on the 
// Task class and gets calle by the constructor(taskDetail) method whenever a new Task instance gets created. The new Task instance
// gets passed into the addTaskList(task) method and that method will push that instance into the taskList array. When 
// Task.printTaskList() is called, it will print the taskList array. Since only one Task instance is created, it will print an
// array with one Task element.

//? class Fruit {
//?   constructor(color, taste) {
//?     this.color = color;
//?     this.taste = taste;
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.constructor.name}.`);
//?   }
//? }
//? 
//? class Apple extends Fruit {
//?   constructor() {
//?     super('red', 'sweet');
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.taste} Apple!`);
//?   }
//? }
//? 
//? const apple = new Apple();
//? const orange = new Fruit('orange', 'tangy');
//? Q5: Given the code above, what will orange.eat() do?
//! A: print "You ate a Fruit"
// E: orange is an instance of the Fruit class. It will use the eat method defined on the Fruit 
// class, not the Apple class

//? Q6: Identify use cases of polymorphism.
//? To allow a function to receive different types of parameters.
//? To allow a class to override a method on its parent class.
//? To allow a function to receive different orientations of parameters.
//? To redefine the methods of a class.
//? To reset the variables of a class.
//! A:
//! To allow a function to receive different type of parameters
//! To allow a class to override a method on its parent class
//! To allow a funciton to receive different orientation of parameters
// E: Polymorphism can refer to overloading or overriding an interface. Overloading a function is when you want
// a function to allow different configurations of inputs, have multiple input options, or receive different
// types of parameters, etc. Overriding a class method is when you want to override the static or instance
// methods inherited from a parent class

//? class Fruit {
//?   constructor(color, taste) {
//?     this.color = color;
//?     this.taste = taste;
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.constructor.name}.`);
//?   }
//? }
//? 
//? class Apple extends Fruit {
//?   constructor() {
//?     super('red', 'sweet');
//?   }
//? 
//?   eat() {
//?     console.log(`You ate a ${this.taste} Apple!`);
//?   }
//? }
//? 
//? const apple = new Apple();
//? Q7: Given the code above, what will apple.eat() do?
//! A: print "You ate a sweet Apple!"
// E: The apple class override the eat method of its parent class, and an instance of Apple will call the eat method
// defined on the Apple class, not the Fruit class. That's because JavaScript will look for a eat method on the Apple
// class before looking at the parent class for a method with that name.

/*****************************************
 *       Saturday Practice Assessment
 ****************************************/
//? Q1. Which of the following is are methods to approach OOP design ?
//! Design classes with intuitive interfaces
//! Eliminate unnecessary repetition with inheritance
//? Label _POJO_s with intuitive keys and values
//? Break down the problem into logical equations

//? Q2. What is a static method?
//! A method that is not connected to a particular object instance

//? class Dog extends Animal {
//?   constructor(name) {
//?     this.name = name;
//?     this.sound = 'woof';
//?   }
//? 
//?   speak() {
//?     return `${this.name} says '${this.sound}'`
//?   }
//? }
//? Q3. Which word represents the 'context' of the above class?
//! this

//? Q4. Which of the following are characteristics of polymorphism?
//! It can be achieved by overloading methods.
//! It allows different classes to be using the same interface.
//! It can be achieved by inheriting methods.
//! Its name means 'many shapes'.

//? Q5. Which of the following are characteristics of inheritance?
//? Inherited methods are used to override parent methods.
//? Inheritance is used to instantiate a clone of a parent object.
//! Inherited methods come from a parent class.
//! Class inheritance is achieved in JavaScript using the keyword extends.

//? function getChangedString(op, str) {
//?   if (op === 'reverse') {
//?     return str.split('').reverse().join('');
//?   } else if (op === 'double') {
//?     return [str, str].join('');
//?   } else if (op === 'widen') {
//?     return str.split('').join(' ');
//?   } else if (op === 'print') {
//?     console.log(str)
//?   } else {
//?     console.log('Operation not found');
//?   }
//? }
//? Q6. Which coding principle does the above code violate?
//! SRP
