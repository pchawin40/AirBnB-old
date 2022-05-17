// console.log("Start");

// setTimeout(function () {
//   console.log("Time is up");
// }, 0);

// console.log("End");


// function foo(a, b) {
//   console.log("Time is up.");
//   count++;
//   if (count === 10) clearInterval(intervalObj);
// }

// function intervalCount(cb, count, delay) {
//   const intervalObj = setInterval(function () {
//     // console.log(`${count}: Time is up.`);
//     cb(count);
//     count--;
//     if (count === 0) clearInterval(intervalObj);
//   }, delay);
// }

// intervalCount(function (count) {
//   console.log("hello", count);
// }, 5, 1000);
// clearInterval(intervalObj);

/* Tuesday Quiz */
// Q1. Why are functions considered first class objects in JavaScript?
// A: Since they can be mutated after declaration
// E: Functions are first class objects in JavaScript, because they can be assigned, passed as an argument, and returned.

// let num = 3;
// function myFunc(intervalItself) {
//   // console.log(param1, param2);
//   console.log("I am working");
//   num--;
//   if (num === 0) clearInterval(intervalItself);
// }

// const myInterval = setInterval(() => {
//   // console.log(param1, param2);
//   console.log("I am working");
//   num--;
//   if (num === 0) clearInterval(myInterval);
// }, 1000);
// setTimeout(myFunc, 1000, 'Baylen', "inside my callback");

// let num = 3;

// function myFunc() {
//   console.log("I am working baylen");
// }

// let someVar = false;

// setTimeout(() => {
//   someVar = true;

//   if (someVar === true) {
//     clearInterval(myInterval);
//   }
// }, 4000);

// const counterFunc = (num) => {
//   if (num === 0) clearInterval();
// }

// function myFunc(number) {
//   // console.log("I am working baylen");
//   number--;
//   // counterFunc(number);
// }

// let myInterval = setInterval(myFunc, 1000, 3);
// console.log(myInterval);

// let number = 10;

// function myFunc() {
//   number--;
//   if (num === 0)
//     clearInterval(myInterval);
// }

// let myInterval = setInterval(myFunc, 1000);
// console.log(myInterval);
function intervalCount(cb, delay, amount) {
  let interval = setInterval(() => {
    cb();
    amount--;
    if (amount === 0) clearInterval(interval);
  }, delay);
}

intervalCount(() => {
  console.log("Hi");
}, 1000, 3);
