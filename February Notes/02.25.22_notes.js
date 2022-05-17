/* ------------------------ */
/* Homework for Monday Quiz */
/* ------------------------ */
// Q1: In a message queue, describe what dequeueing is?
// A: Items can only leave through the front of the queue
// E: Items can only leave through the front of the queue - referring to this as dequeuing an item

// Q2: Which of the following statements are true about asynchronous code?
// A: 
// (1) Asynchronous is the opposite of synchronous
// (2) There is no guarantee in the total order that commands are executed
// E: Asynchronous code has no guarantee in the order and is the opposite of synchronous code

// Q3: What method would you invoke to cancel a setTimeout function/
// A: clearTimeout()
// E: If you pass the data that is returned from setTimeout to clearTimeout, the timeout will be cancelled

// console.log("apple");

// setTimeout(function() {
//   console.log("banana");
// }, 5000);

// console.log("grape");
// Q4: In what order will the code snippet above print?
// A: apple, grape, banana
// E: The code will print `apple, grape, banana` because the setTimeotu function is asynchronous and won't
// execute until the set time has passed.

// let drink = function() {
//   console.log("water");
// };

// console.log("lemonade");
// drink();
// console.log("tea");
// Q5: Is the code snippet above synchronous or asynchronous?
// A: Synchronous
// E: The above code is synchronous because you can predict with total certainty the relative order of the print
// statements

/* ----------- */
/* Monday Quiz */
/* ----------- */
// let foo = function() {
//   console.log("Everglades");
//   console.log("Sequoia");
// };

// console.log("Zion");
// foo();
// console.log("Acadia");
// Q1: In what order will the code above print out?
// A: Zion, Everglades, Sequoia, Acadia
// E: The print that belongs to foo will be executed only when it is called after 'Zion', but before 'Acadia'

// Q2: What does IIFE stand for?
// A: Immediately-Invoked Function Expression
// E: IIFE stands for Immediately-Invoked Function Expression

// console.log(34 % 5);
// Q3: What does the code above print out
// A: 4
// E: This modulo operation results in the remainder of 34 divided by 5. 5 can go into 34 a total of six times with
// a remainder of four.

/* Homework for Tuesday Quiz */
// Q1: What arguments can setInterval accept?
// A: A delay in milliseconds; Any number of arguments; A callback
// E: setTimeout and setInterval can accept callback, delay in ms, and any number of arguments
// to be passed to the callback

// function foo() {
//     console.log('ding!')
// }

// function boo() {
//     console.log('boop!');
//     foo();
// }

// console.log('beep');
// setTimeout(boo, 1000);
// console.log('bop');
// Q2: What will the above snippet print?
// A: beep, bop, boop!, ding!
// E: A new message is only enqueued when an event occurs and our timeout events have not yet triggered.
// You don't add foo() or boo() to the stack because they are only called after their timeout events have
// triggered

// Q3: What method is called to cancel a setInterval function?
// A: clearInterval()
// E: A clearInterval is used to cancel an interval

// setTimeout(function() {
//   console.log("tiger");
// }, 0);

// console.log("fox");

// console.log("hawk");
// Q4: What will the above snippet print?
// A: fox, hawk, tiger
// E: Although you specify a delay of 0 milliseconds, the callback is not invoked immediately, because
// the actual delay may be more than 0

// Q5: Is JavaScript a single-threaded or multi-threaded language?
// A: single-threaded
// E: JavaScript is a single threaded language

/* Tuesday Quiz */
// Q1: When debugging, what tools allow you to inspect the currently loaded HTML, CSS, and JavaScript?
// A: Browser Devtools
// E: The Browser Devtool allows you to inspect the currently loaded page to help debug

// Q2: Select the following values that are falsey in JavaScript:
// 0
// undefined
// ""
// 0n
// NaN
// null
// false
// A: all the above
// E: These are all falsey values in JavaScript. These are actually the seven falsey values in JavaScript.
// 0n is the BigInt primitive data type's falsey value.

// Q3: Why are functions considered first class objects in JavaScript?
// A: Because they can be assigned, pased as an argument, and returned
// E: Functions are first class objects in JavaScript, because they can be assigned, passed as an argument,
// and returned

/* Homework for Wednesday Quiz */
// function asyncy(cb) {
//   setTimeout(cb, 1000);
//   console.log("async");
// }

// function greet() {
//   console.log("hello!");
// }

// asyncy(greet);
// Q1: In the code above, what order will the messages be printed in?
// A: async, hello!
// E: setTimeout will not block execution of lines that come after it

// function boo() {
//     console.log('boop!');
// }

// console.log('fizz');
// setTimeout(boo, 0);
// console.log('buzz');
// Q2: In the code above, what order will the messages be printed in?
// A: fizz, buzz, boop!
// E: setTimeout does not block execution even if a delay time of 0 is provided

// function boo() {
//     console.log('boop!');
// }

// console.log('fizz');
// setTimeout(boo, 1000);
// console.log('buzz');
// Q3: In the code above, what order will the messages be printed in?
// A: fizz, buzz, boop!
// E: setTimeout does not block execution so 'buzz' will be printed before boo is called

// function far() {
//     console.log('farm!')
// }

// function boo() {
//     console.log('boop!');
//     far();
// }

// console.log('fizz');
// setTimeout(boo, 1000);
// console.log('buzz');
// Q4: In the code above, what order will the messages be printed in?
// A: fizz, buzz, boop, farm!
// E: far is called synchronously inside of boo, so 'farm!' will be printed right after 'boop!'

// function far() {
//     console.log('farm!')
// }

// function boo() {
//     console.log('boop!');
//     setTimeout(far, 1000);
//     console.log('boop!');
// }

// setTimeout(boo, 1000);
// console.log('buzz');
// Q5: In the code above, what order will the messages be printed in/
// A: buzz, boop!, boop!, farm!
// E: Since far is called asynchronously, it will not block execution of the second 'boop!'

// function foo() {
//   console.log("food");
// }

// setTimeout(foo, ____);
// Q6: What parameter do you need to input if you want the function to print every 5 seconds?
// A: 5000
// E: The setTimeout parameter accepts milliseconds so 5000 milliseconds would equal 5 seconds

// function say(phrase1, phrase2) {
//   console.log(phrase1 + " and " + phrase2 + "!");
// }

// setInterval(say, 1000, "jump", "shout");
// Q7: What would the above code print?
// A: 'jump and shout!' every second
// 'jump and shout!' every second because the setInterval method is set for 1000 milliseconds

/* Homework for Thursday Quiz */
// Q8: In a readline module, is the question method synchronous or asynchronous?
// A: Asynchronous
// E: The question method is asynchronous! Similar to how you explored the asynchornous nature of 
// setTimeout

/* Thursday Quiz */
// Q1: Which of the following are true of Git?
// A: Git can be run locally; Git is open source
// E: Git runs locally on a user's machine. GitHub is one of the many services or providers for remote
// Git repositories. Some users or organizations even set up their own remote repository servers

// Q2: Which of the following are true about fat arrow functions?
// A: Fat arrows are anonymous; They make functions shorter; They have implicit returns with
// singe-expression blocks
// E: Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions. All of
// the above are true about fat arrow functions

/* Homework for Saturday Quiz */
// Q1: How do you prevent a script from running until the page loads?
// A(1): Put a script tag importing your external code at the bottom of your HTML file;
// A(2): Add an attribute to the script tag, like async or defer
// A(3): Use the DOMContentLoaded event in an external JS file
// E: There are actually multiple ways to prevent as cript from running until the page has loaded. Using
// the DOMContentLoaded event in an external JS file, put a script tag importing your external code at 
// the bottom of your HTML file, or add an attribute to the script tag, like async or defer
