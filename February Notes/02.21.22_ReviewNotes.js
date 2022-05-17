/* =========== */
/* Monday Quiz */
/* =========== */
// Q1. Which character is used to create a template literal?
// A: Backticks
// E: To create a template literal, instead of single quotes (') or double quotes ("), use the grave character, also known as the backtick(`)

// Q2. What is correct syntax used to interpolate variables or expresions into strings?
// A: ${}
// E: One of the main advantages you will gain by using template literals is the ability to interpolate variables or expressions into strings.
// Do this by denoting the values you'd like to interpolate by wrapping them within curly braces with a dollar sign in front (${})

// Q3. let string = `Let me teach you a lesson or ${1 + 1}!`;
// A: Let me teach you a lesson or 2!
// E: In a template literal, expressions wrapped in ${} are evaluated during runtime, the result is inserted into the string

/* ========================= */
/* Homework for Tuesday Quiz */
/* ========================= */

// Q1: 
// runCode(code){
//   runCode(code);
// }
//
// runCode("I code, you code, we all code!");
// Which of the following should you add to prevent an error from the above function? 
// A: A recursive step | A base case
// E: This function already has a recursive case, but it has no way of terminating nor anything helping it work towards that termination

// Q2: In a call stack, what is it called when only items can be removed from the top of the pile?
// A: popping
// E: At any point, the only item that can be removed is the top of the pile - refer to this as popping the top item from the stack

// Q3: In a call stack, what is it called when new items must be placed on top of the pile?
// A: pushing
// E: New items must be placed on top of the pile - refer to this as pushing a new item to the stack

// Q4: Describe what the recursive case is?
// A: The data state that causes a function to call itself
// E: The recursive case, as the name suggests, is the situation where the function recurses. This represents the data state that causes a function 
// to call itself.

// Q5: Describe what the base case is?
// A: The function runs once and ends
// E: The base describes the situation where data passed into our function is processed without any additional recursion. When the base case is executed, 
// the function run once and ends

/* ====================== */
/* Homework for Wednesday */
/* ====================== */
// function multiply(num1, num2) {
//   if (num2 == 0) return 0;
//   if (num2 = 1) return num1;

//   return num1 + multiply(num1, num2 - 1);
// }

// multiply(5, 3);
// Q1: Is the code snippet above recursive or iterative?
// A: Recursive
// E: The code is recursive because it has a base case, recursive step and the function moves closer to the base case with each call

// Q2: What are the characteristics that defines a recursive function?
// A: The function call itself; The function has an end state; The function moves closer to the base case with each call
// E: A recursive function must call itself, must have an end state, or base case, and must move towards that base case

// Q3: What will a recursive function that doesn't move toward the base case results in?
// A: An infinite loop that leads to stack overflow; Throws an error
// E: A recursive function that doesn't move toward the base case turns into an infinite loop that leads to stack overflow

// function printArrayIterative(arr) {
//   for (let i = 0; i < arr.length; i++) console.log(arr[i])
// }
//
// Q4: Is the code snippet above recursive or iterative?
// A: Iterative
// E: The code is iterating through the array

// Q5: In recursion, what is the condition for which the function will stop calling itself?
// A: Base case
// E: For recursion to end at some point, there always has to be a condition for which the function will not call itself. This
// condition is known as the base case.

/* ================= */
/* Thursday Homework */
/* ================= */

// Q: Which solution is better to implement when a problem can be divided into smaller problems with the same shep?
// A: Recursive solution
// E: Recursive solutions are sometimes better when the problem can clearly be subdivided into smaller problems with the same shape.
// Recursion allows you to handle these problems by solvign the smallest or simplest case, then building towards a full solution

/* ========================== */
/* Homework for Saturday Quiz */
/* ========================== */
// Q: Which of the following variable declarations cannot be reassigned?
// A: const
// E: A const variable cannot be reassigned - meaning that is we don't assign a value when a const variable is declared, we'd never be able to 
// assign a new value

/* ============= */
/* Saturday Quiz */
/* ============= */

/* ------------------------- */
/* Primitive Data Types Quiz */
/* ------------------------- */
// Q1: The object data type is immutable
// A: False
// E: JS Primitive Data Types are immutable - and an Object is not a primitive data type

// const cat = {
//   name: "Jet",
//   noise: function () {
//     console.log("MEOW");
//   }
// };
//
// Q2: The above noise function is a method of the cat object
// A: True
// E: A method is a function that belongs to an object. 

// Q3: The Object data type is the only JavaScript data type that has methods
// A: True
// E: The Object type is the only data type in JavaScript that has methods

// Q4: The String primitive data type has no methods
// A: True
// E: The Object type is the only data type in Javascript that has methods. The String Primitive data type
// is wrapped by a String object that has methods - but the String primitive itself has no methods

// Q5: Which of the following choices is a primitive data type in JavaScript?
// A: Symbol / Boolean / String / Undefined
// E: Every choice above is a primitive data type except for Object type and an Array. An Object is not a primitive
// data type in JavaScript and an array is a type of Object

/* -------------------------------- */
/* Falsey Values in JavaScript Quiz */
/* -------------------------------- */
// Q1: Select the falsey values in JavaScript from the list below
// undefined; 
// false; 
// NaN; 
// 0; 
// 0n; 
// null
// A: "" ;
// E: These are all falsey values in JavaScript. These are actually the seven falsey values in JavaScript. 0n is the 
// BigInt primitive data type's falsey value

// if (!"0") {
//   console.log("Hello!");
// } else if (!-42) {
//   console.log("Goodbye!");
// } else if (!-Infinity) {
//   console.log("Have a nice day!");
// } else {
//   console.log("We meet again");
// }
// Q2: What will be printed when the above code is run?
// A: "We meet again"
// E: The first three statements within the if... else block will evaluate as falsy because none of them are one of the 
// seven falsey value in JS (NaN, false, 0, "", 0n, undefined and null) and each is flipped by the bang(!) operator to false.
// As a result the code in the last black will run

// if ("false") console.log("Hello!")
// else if ([]) console.log("Goodbye!");
// else if ("") console.log("Have a nice day!");
// else console.log("party time is over");
// Q3: What will be printed when the above code is run?
// A: "Hello!" 
// E: The string "false" is still a non-empty string so when we hit our first conditional that condition will evaluate to true

// Q4: Which of the following will evaluate as falsey in JavaScript?
// {}
// 17
// ""
// []
//
// A: "" 
// E: An empty string will evalaute as falsey in JavaScript -- all the other answers are truthy

/* --------- */
/* IIFE Quiz */
/* --------- */
// Q1: What does IIFE stand for?
// A: Immediately-Invoked Function Expression
// E: IIFE stands for Immediately-Invoked Function Expression

// (function () {
//   const test = "Hello world!";
// })

// console.log(test); // ???
// Q2: What will be printed when the above code snippet is run?
// A: An error is thrown
// E: The variables defined within an IIFE are not available in an outer scope

// function() {
//   console.log("hello world!");
// } (); // ==> 'hello world!'
// Q3: True or False: The above IIFE syntax is correct
// A: False
// E: False. When we define an IIFE we need to wrap our anonymous function in the grouping operator before we invoke it.
// The above will give us a syntax error.

// Q4: A single IIFE can be invoked multiple times throughout an application
// A: False
// E: An IIFE is invoked once and then never again

// const result = (function () {
//   return "food";
// })();

// console.log(result); // ???
// Q5: What will be printed when the above code snippet is run?
// A: "food"
// E: "When an IIFE is assigned to a variable, the function will be invoked and then the return value of that function will
// be assigned to the variable name. So in the above example, result variable would have the value returned by the IIFE
// which in this case is food.

// Q6: IIFEs are one way to prevent the pollution of the global namespace by creating functions and variables that will disappear
// after the IIFE has been invoked
// A: True
// E: Variables and functions written within an IIFE cannot be accessed outside the function

/* -------------------- */
/* Variable Quiz Recall */
/* -------------------- */
// function dogParty() {
//   let dog = "Rupert";

//   if (true) let dog = "Fluffy";

//   return dog;
// }

// dogParty(); // ???
// Q1: What is the return value of the dogParty function above?
// A: "Rupert"
// E: Since let variables are block-scoped then the value of dog will not be overwritten within the block. Meaning that the dogParty function will
// return "Rupert"

// function dogParty() {
//   if (true) {
//     let dog = "Rupert";
//     const dog = "Fluffy";
//     var dog = "Poodle";
//   }

//   return dog;
// }

// dogParty(); // ???
// Q2: What is the return value of the dogParty function above?
// A: An error is thrown
// E: You cannot declare the same variable name twice, this causes a SyntaxError, even if you are declaring it with another keyboard

// let puppy;
// let newPuppy = "apples";
// Q3: In the above code snippet, what is the value of the puppy variable?
// A: undefined
// E: When you declare a variable with no value, the default value assigned to that variable is undefined

// function dogParty() {
//   var dog = "Rupert";

//   if (true) {
//     var dog = "Fluffy";
//   }

//   return dog;
// }

// dogParty(); // ???
// Q4: What is the return value of the dogParty function above?
// A: "Fluffy"
// E: Since var variables are function-scoped and can be re-assigned, the value of dog will be overwritten in the block within dogParty

// console.log(parrot);
// let parrot = "Hello!";
// Q: The above code will throw an error
// A: true
// E: When using the let keyword the variable will be in the temporal dead zone.Meaning that variable is not accessible until it is initialized with a value
// (even if that value is undefined)

// console.log(party);
// var party = "Party!";
// Q6: The above code will throw an error
// A: False
// E: When using the var keyword the declared variable name is hoisted. Meaning that though the value for the party variable is not assigned yet - the name of the
// variable is hoisted up to the top of the file and assigned to the value of undefined.

// const puppy = "Spot";
// puppy = "Rover";
// Q7: What will happen when the above code snippet is evaluated?
// A: An error will be thrown
// E: An error will be thrown because the const keyword does not allow the variable to be reassigned

// let kitty = "Mittens";
// kitty = "Apples";
// Q8: What will happen when the above code snippet is evaluated?
// A: The kitty variable will have the value of "Apples"
// E: The let keyword allows you to declare a variable and will allow you to reassign that value

// Q9: When declaring a variable without a keyword (var, let, const) which scope is it attached to?
// A: global scope
// E: Using a keyword when declaring a variable attached that variable to either the function or block's scope. 
// Without a keyword the variable will be declared in the global scope

// var zoo = "panda";

// if (true) {
//   console.log(zoo);
//   let zoo = "lion";
// }
// Q10: The above code will thrown an error
// A: True
// E: The error thrown by a let variable in the temporal dead zone takes precedence over any scope chaining that would attempt
// to go to the outer scope to find a value for the zoo variable

/* ----------------- */
/* Scope Quiz Recall */
/* ----------------- */
// function inner() {
//   let str = "hello";
//   return str;
// }

// function outer() {
//   let test = inner();
//   return test;
// }

// let result1 = outer();

// result2 = inner();

// result1 === result2; // ???
// Q1: What is the value of the final line of the snippet above (result1 === result2)?
// A: True
// E: No matter where inner is invoked it will always return the same result. This is because of lexical scoping.

// let puppy = "Shasta";

// function sayPuppy() {
//   console.log(puppy);
// }

// sayPuppy(); // ???
// Q2: What is the value logged inside the sayPuppy function?
// A: Shasta
// E: We declared a variable with let in the global scope. The sayPuppy function will have access to any variables within its local scope
// as well as any variables declared in outer scopes because of scope chaining

// function catSound() {
//   var sound = "meow";
//   return sound;
// }

// function dogSound() {
//   var sound = "bark";
//   return sound;
// }

// let noise1 = catSound();
// let noise2 = dogSound();

// noise1 === noise2; // ???
// Q3: The value of the last line in the code snippet above is: ________
// A: False
// E: Above we declared two different functio-scoped variables using var in catSound and dogSound. Since the var declared variables will be
// function-scoped they will return different values from their separate functions

// function sayPuppy() {
//   const puppy = "Wolfie";
//   return puppy;
// }

// sayPuppy(); // "Wolfie"

// console.log(puppy); // ????
// Q4: What is the value logged in the last line of the snippet above (console.log(puppy))?
// A: An Error is thrown
// E: Scope chaining allows an inner scope to reference an outer scope's variables but it will not allow an outer scope
// to access an inner scope's variables

// function letsJam() {
//   // letsJam's scope
//   let rand = 3;

//   if (true) {
//     const rand = 2;
//   }

//   if (true) {
//     let rand = 1;
//   }

//   if (true) {
//     const rand = "let's jam!";
//   }

//   return rand;
// }

// letsJam(); // ???

// Q5: The value returned by the letsJam function is _.
// A: 3
// E: The keywords let and const are block-scoped. Meaning that if a let or const is declared within a block {} that variable will stay
// within that block. In the above letsJam function the value returned will tbe the rand variable that was declared within the same outer
// scope - 3.

// // 1. ???
// let chicken = "bokbok";

// function farmTime() {
//   // 2. ???
//   console.log(chicken);

//   if (true) {
//     // 3. ???
//     let cow = "moo";
//   }
// }
// Q6: in the above code snippet, there are three scopes labeled with numbers. Below pick the correct answer for the same 
// name of each scope in order
// A: 1. Global Scope 2. Local/Function Scope 3. Block Scope
// E: The three scopes above are Global scope, Function scope, and Block scope in that order.


// function siren(message, volume) {
//     if (volume === 10) {
//         return;
//     }

//     console.log(message);
//     siren(message, volume + 1); // recursiveStep = ?
// }

// siren("WEE-OOO", 7); // should print "WEE-OOO", "WEE-OOO", "WEE-OOO"

// console.log(sayHello("Jeff"));

// function sayHello(name) {
//   return `Hello ${name}`;
// }

// function justDance(songs) {
//   if (!songs.length) {
//     return;
//   } else {
//     justDance(songs);
//   }
// }

// justDance(["I Wanna Dance With Somebody (Who Loves Me)"]);

if ("banana") {
  // 1
  console.log("here");
} else if ([]) {
  // 2
} else if ("") {
  // 3
} else {
  // 4
}
