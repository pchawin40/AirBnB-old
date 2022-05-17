// // TypeError
// "Baylen"();

// // Reference Error
// if (true) {
//   let something = "Something";
// }
// console.log(something);

// // Syntax Error
// // if (true) {
  
// // else {
    
// // }

// // Range Error: Callstack size exceeded
// function foo() {
//   foo();
// }
// foo();

// // 1. 
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++){
//     sum += array[i];
//   }
//   return sum;
// }

// try {
//   let res = sum(null);
//   // let res = sum([1, 2, 3]);
//   // console.log(res);
// } catch (error) {
//   if (error instanceof TypeError)
//     console.log(error.message);
//   // console.log(error.message);
// } finally {
//   console.log("I always run");
// }

// console.log("Some Code");

// 2.
// sayName = name => {
//   if (typeof name === 'String') console.log(name);
//   else throw new TypeError("Invalid name! Must be a string!");
// }

// try {
//   // tests
//   sayName("Alex");
//   sayName(1);
// } catch (error) {
//   console.error(error.message);
// }

// // Your code here
// // 3.
// function greet(greeting) {
//   if (!greeting) throw new Error("There was no greeting given.");
//   console.log(greeting);
// }

// try {
//   greeting();
// } catch (error) {
//   console.error("Hello, World!");
// }
