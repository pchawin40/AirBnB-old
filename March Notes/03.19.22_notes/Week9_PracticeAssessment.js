//? Q1. Which of the following describes the order values are added and retrieved from a stack?
//! First in, last out
// Last in, last out
// First in, first out
//! Last in, first out

//? Q2. How many bits are in 10 kilobytes?
//? 80 million
//? 10 million
//! 80 thousand
//? 10
//? 10 thousand
// 8 bytes in a bit --> 
// 1 kb = 8000 bit
// 10kb = 80000 bits

//? function arrayNums(n) {
//?   const arr = [];
//?   for (let i = 0 ; i < n ; i++) { // Space complexity: O(n)
//?     arr.unshift(i); // Space complexity: O(n)
//?   }
//?   return arr;
//? }
//? arrayNums(10);
//? Q3. What is the time complexity of arrayNums?
// O(1)
// O(n)
// O(n3)
//! O(n2)

//? Q4. Which of these best describes a pointer?
//? A data structure that indicates the head of a linked list
//! A byte value that indexes a location in memory
//? A memory cache
//? A data structure that stores a single byte of memory

//? Q5. Which two of the following are equal to 0xC9?
//! 0x00C9 --> hex
// 0b11101001 --> binary
// "C9" --> text
//! 201 --> decimal
// hex converter for:
// let hexCode = "0xC9";
// // convert hex to binary
// let test1 = parseInt(hexCode, 16).toString(2);
// console.log(test1);

// // convert hex to text 
// console.log(String.fromCharCode(hexCode));

// // convert hex to decimal
// console.log(parseInt(hexCode, 16).toString(10));

//? Q6. What is the worst-case time complexity of array.push() in a dynamic array and what causes it?
//? array.push() is always O(1)
//? O(n2), if it used in a recursive function
//? O(n), if the processor is simultaneously running an expensive operation in the background.
//! O(n), if the array has to resize to a new block of memory


//? Q7. What are the truth table values for A && (!A || !B)? Results should be in order from top to bottom.
//? 1, 1, 0, 1
//! 0, 0, 1, 0
//? 1, 0, 1, 0
//? 0, 0, 0, 1
// const myTruthTableSolver = arrOfBool => {
//   for (let i = 0; i < arrOfBool.length; i++){
//     let ele = arrOfBool[i];
//     let [A, B] = ele;
//     console.log(A && (!A || !B));
//   }
// }

// myTruthTableSolver([[0, 0], [0, 1], [1, 0], [1, 1]]);

//? function first(n) {
//?   if (n < 0) return;
//?   console.log(n);
//?   first(n - 1); // O(n)
//? }
//? function second(n) {
//?   arr = [];
//?   for (let i = 0 ; i <= n ; i++) { // O(n)
//?     arr.unshift(i);
//?   }
//?   console.log(arr.join('\n'));
//? }
//? Q8. Which of these functions has the worst space complexity?
//? first is worse
//! They both have the same space complexity
//? second is worse

// let arr = [7, 5, 4, 123, 1456];
// first(arr);

//? Q9. What are the three requirements that allow array values to be indexed in constant time?
//! Occupies a contiguous block of memory
//! Stores elements in sequential order
//! Stores values of the same data type
//? Indexed using a hash/modulo function

//? function timesThreePlusTen(n) {
//?   let total = 0;
//?   for (let i = 0 ; i < n ; i++) {
//?     total++;
//?   }
//?   for (let j = 0 ; j < n ; j++) {
//?     total++;
//?   }
//?   for (let k = 0 ; k < n ; k++) {
//?     total++;
//?   }
//?   for (let l = 0 ; l < 10 ; l++) {
//?     total++;
//?   }
//?   return total
//? }
//? Q9. What is the time complexity of timesThreePlusTen?
// ! O(n)
