// Three main possibilities for Big O's:
// a. O(1) (constant): (not array) and is constant number
// b. O(n) (linear): linear n 
// c. O(n^2) (quadratic): for loop inside of for loop
// be careful of constant instead if its not array or if array is fixed

/********************************************
 *         Homework for Tuesday Quiz
 *******************************************/
//? function getNumList(n) {
//?     let nums = [];
//? 
//?     for (let i = 0 ; i < n ; i++) {
//?         nums.push(i);
//?     }
//? 
//?     return nums;
//? }
//? Q1: What is the space complexity of the function getNumList?
//! O(n)
// E: Unlike the single integers which require constant space, the array requires n slots
// to store n integers.This function requires enough memory to store n + 2 integers, which
// reduces to a space complexity of O(n).

//? Q2. What is the space complexity of a quadratic function?
//! O(n2)
// E: Quadratic space complexity: O(n2).

//? function nestedForLoop(n) {
//?     let nums = [];
//? 
//?     for (let i = 0 ; i < n ; i++) {
//?         for (let j = 0 ; j < n ; j++) {
//?             nums.push([i, j]);
//?         }
//?     }
//? 
//?     return nums;
//? }
//? Q3. Which space complexity best describes the code above?
//! quadratic
// E: The code above demonstrates a nested for-loop, since the function is 
// iterating through the array twice the space complexity is quadratic O(n2).

//? Q4. Array.push() is an example of what kind of time complexity?
//! Linear
// E: The array.push() method does not require a function to iterate through the array of memory
// since it is only adding new data to the end of the array. Thus making it at an O(1) constant 
// space complexity

//? Q5. Select all that apply. Which of the following methods are examples of a linear space complexity?
//! shift
//! unshift
//! splice
// pop
// E: shift, unshift, and splice all require an element to be added to the array and have all other
// elements shift frrom their slot in memory. This causes a function to go through an iteration 
// of the array making them an O(n) linear space complexity

/********************************************
 *         Tuesday Class Notes
 *******************************************/
let addNums = n => {
  let sum = 0;

  for (let i = 1; i <= n; i++)
    sum += i;
  
  return sum;
}

// console.time("My Add Num Func");
// console.log(addNums(1000000000));
// console.timeEnd("My Add Num Func");

// let startTime = Date.now() // number of milliseconds from some time in 1970
// console.log(addNums(1000000000));
// let endTime = Date.now();

// console.log(endTime - startTime);

// let someNum = 1000000000;

// for (let i = someNum; i <= 10 * someNum; i += someNum){
//   let startTime = Date.now();
//   addNums(i);
//   let endTime = Date.now();
//   console.log(endTime - startTime);
// }


// O(1) Constant Complexity
// It is constant because it does not depend on the inputs growing 
// let constantTimeFunc = n => {
//   let something = 1 + 2; // constant space
//   let something2 = 1 + 2;
//   let something3 = 1 + 2;
//   let something4 = 1 + 2;
//   let something5 = 1 + 2;
//   return n + 1; // Time Complexity: O(1)
// }

// console.time("My Constant Func");
// console.log(constantTimeFunc(1000000000));
// console.timeEnd("My Constant Func");

// let linearTimeFunc = n => {
//   // Our time grown linearly with our input, the bigger out input gets the longer the code takes to run
//   let arr = []; // Space complexity is linear O(n)
//   let arr2 = [1, 2, 3, 4]; // constant space O(1)
//   for (let i = 1; i <= n; i++) // Linear Time Complexity O(n)
//     arr.push(i); // Time the loop takes grows when the input size grows
  
//   return arr;
// }

// console.time("My Linear Func");
// // console.log(constantTimeFunc(1000000000));
// linearTimeFunc(1000000000);
// console.timeEnd("My Linear Func");
let helperFunc = n => {
  let arr = [];
  for (let j = 1; j <= n; j++)
    arr.push(j);
}

let quadTimeFunc = n => {
  let arr = [];
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
      arr.push(j);
}

console.time("My Linear Func");
quadTimeFunc(100);
console.timeEnd("My Linear Func");
