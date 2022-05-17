// Truth table and how to solve programmatically
/*
A   B   |   !A && b   |
0   0   |     0       |
0   1   |     1       |
1   1   |     0       |
1   0   |     0       |
*/
const myTruthTableSolver = arrOfBool => {
  for (let i = 0; i < arrOfBool.length; i++){
    let ele = arrOfBool[i];
    let [A, B] = ele;
    // console.log(A, B);
    // console.log(!A && B);
    console.log(!(A && B));
    console.log(!A || !B);
  }
}

myTruthTableSolver([[0, 0], [0, 1], [1, 1], [1, 0]]);

/******************************* */

// Arrays
// what is a stack/queue

// Stack: 
// Last in First Out
// First in Last Out

// const myStack = arr => {
//   // console.log(arr.pop());
//   console.log(arr.pop());
//   console.log(arr);
//   console.log(arr.pop());
//   console.log(arr);
//   console.log(arr.pop());
//   console.log(arr);


//   arr.push(5);
//   console.log(arr);
//   arr.push(4);
//   console.log(arr);
//   arr.push(6);
//   console.log(arr);

//   console.log(arr.pop());
//   console.log(arr);
// }

// myStack([1, 2, 3, 4, 5]);

// Queue: 

// FIFO
// LILO
// const myQueue = arr => {
//   // let queue = arr.slice();

//   for (let i = 0; i < arr.length; i++){
//     let queue = arr.slice();
//     console.log(arr.shift());
//     console.log(queue);
//     arr.push(2);
//   }
// }

// myQueue([1, 2, 3, 4, 5]);

/********************************/

// ADT vs Data Structure
// Abstract Data Type (ADT) is a just a black box that provide functions to manage a 
// collection of data and data structure (dynamic array) are simply ways of organizing data

/********************************/

// What is a dynamic array
// is an array that can be filled with elements of any data type
// actually a hash table, where array are actually key-value pairs where the key is the memory address, and the value is the element

// What is a pointer, emmory reference, memory address == same thing (table below): 
//? Pointers are memory locations in a computer accessed by their address
// [1,          2,          3,        4,          5,        6,         7];
// 10           11          12        13          14        15         16


// Why are arrays indexed in a constant time?
// valueAddress = startAddress + index + sizeOf(dataType)
// valuesOfIndexZero = 10 + 0 * 1;
// valueOfIndexOne = 10 + 1 * 1;

//? with push, pop do we say time complexity is average O(1) worst O(n)?
// because the way javascript creates arrays, it creates them with extra space at the back 
// so that adding values doesn't resize
// worst case scenario, we get to a point where we run out of extra space, and have to resize
// let arr = []; // [empty, empty, empty]
// let arr = new Array(); // [empty, empty, empty]

// unshift:: best case: O(1) aworst case: O(n)

// simplied Big O:
// const bigOExample = n => { // O(n) + O(n) * O(n) + O(n) + O(n) = O(n^2) + 3O(n) = O(n^2)
//   let arr = [];
//   for (let i = 0; i < n; i++) // O(n)
//     arr.push(n);
//   for (let i = 0; i < n; i++) // O(n)
//     for (let j = 0; j < n; j++) // O(n)
//       arr.push(n);
//   for (let i = 0; i < n; i++) // O(n)
//     arr.push(n);
//   for (let i = 0; i < n; i++) // O(n)
//     arr.push(n);
// }

// const bigOSpaceExample = n => {
//   let arr = [];
//   for (let i = 0; i < n; i++)
//     arr.push(n);
//   return arr; // O(n)
// }

// const bigOSpaceExampleRec = n => { // Space O(n)
//   if (n === 0) return;
//   return bigOSpaceExampleRec(n - 1); 
// }

/**********************************/
// converting hex to deci, ascii, bin
// let ourHexCode = '0xC10';

// // hex to decimal
// console.log(parseInt(ourHexCode, 16));
// // hex to ascii
// console.log(String.fromCharCode(ourHexCode));
// // hex to binary
// console.log(parseInt(ourHexCode, 16).toString(2));

/**********************************/

// memory review

// Bytes, kilobytes, megabytes, gigabytes, terabytes:
// 1 byte = 8 bits
// one binary digit is one bit

// kilo - thousand // 3.2 kilobytes
// mega - million
// giga - billion
// tera - trillion
// peta - quadrillion
// exa - quintillion
// zetta - sextillion
// yotta - septillion

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.pop();
s.pop();
s.push(4);
