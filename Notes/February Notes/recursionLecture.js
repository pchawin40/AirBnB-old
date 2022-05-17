// // Call stack:
// debugger

// const one = () => { 
//   console.log("Line one of one function");  
//   two();
// };

// const two = () => {
//   console.log("Line one of two function");
//   three();
// };

// const three = () => {
//   console.log("Line one of three function");
//   four();
// };

// const four = () => {
//   console.log("Line one of four function");
//   five();
// };

// const five = () => {
//   // six();
//   console.log("Line one of five function");
// };

// // const six = () => { 
// //   console.log("Line one of six function");
// // };


// const main = () => {
//   console.log('Line one of main function');
//   one();
//   console.log('Done');
// }

// main();

// debugger

// function foo() {
//   return 2 + bar();
// }

// function bar() {
//   return 6 + baz();
// }

// function baz() {
//   return 3;
// }

// console.log(foo()); // 2 + bar() // 2 + 6 + baz

// base case -- telling code to stop recursing
// recursive case -- tell code to keep recursing
// recursive step -- the line that actually recurses

debugger

// add all of the numbers from number to 1
// 1. number = 5 
// 2. number = 4
// 3. number = 3
// 4. number = 2
// 5. number = 1
const myRecurseSummer = (number) => { 
  // base case -- telling code to stop recursing
  // false
  if (number === 1) return 1;

  // 1. 5 + myRecurseSummer(4)

  return number + myRecurseSummer(number - 1);
};

console.log(myRecurseSummer(5));
