// let myLogFunc = n => { // Time Complexity: O(log(n)); only looping through half of the array, less than O(n) more than O(1)
//   let arr = [];
//   for (let i = 0; i < n / 2; i++){
//     arr.push(i);
//   }
// }


// myNLogNFunc = n => { // Time Complexity: O(n_log(n)); Higher than lienar but less than quadratic
//   let arr = [];
//   for (let i = 0; i < n; i++) // O(n)
//     for (let j = 0; j < n / 2; j++) // O(log(n))
//       arr.push(j);
// }

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

// Binary is base 2 meaning we only have two digits, 0 and 1
// when we run out of digits the left increase and right goes back to 0
// each number of binary is one bit, and 8 bits are a byte

// 0 - 0000
// 1 - 0001
// 2 - 0010
// 3 - 0011
// 4 - 0100
// 5 - 0101
// 6 - 0110
// 7 - 0111
// 8 - 1000
// 9 - 1001
// 10 - 1010
// 11 - 1011
// 12 - 1100
// 13 - 1101
// 14 - 1110
// 15 - 1111
// 16 - 10000

// How do we convert binary to decimal base 10 numbers
// Create a function that takes a string of binary
// look at each index of the string starting from the right
// create a sum variable to keep track of your sum
// the equation for conversion is: base to the power(**) of index multiplied by the value at that index
// return sum
// const convertBin2Dec = binStr => {
  // let sum = 0;

  // how can we turn a number into string?
  // let reverseBinStr = binStr.toString().split('').reverse();
  // let reverseBinStr = binStr.split('').reverse();
  
  // for (let index = 0; index < reverseBinStr.length; index++){
    // base to the power(**) of index multiplied by the value at that index
//     let num = (2 ** index) * reverseBinStr[index];
//     sum += num;
//   }
//   return sum;
// } 

// 16 - 10000
// let test1 = convertBin2Dec(1000011111110);
// console.log(test1);

// base to the power(**) of index multiplied by the value at that index
// str = 1101
// base: 2
// power: 0
// value: reverseBinStr[index]
// base ^ power * value
// (base ** power) * value 
// 3210
// 0123

// console.log(convertBin2Dec("0010101110"));
// console.log(parseInt('0010101110', 2));

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16

// Base 16 because we have 16 available digits
// you will see it in the wild with the prefix of 0x
// Hex / decimal
// 0   - 0
// 1   - 1
// 2   - 2
// 3   - 3
// 4   - 4
// 5   - 5
// 6   - 6
// 7   - 7
// 8   - 8
// 9   - 9
// 'A' - 10
// 'B' - 11
// 'C' - 12
// 'D' - 13
// 'E' - 14
// 'F' - 15

// 10  - 16
// 11  - 17
// 12  - 18
// 13  - 19
// 14  - 20
// 15  - 21
// 16  - 22
// 17  - 23 
// 18  - 24
// 19  - 25
// '1A' - 26
// '10 + B' = 16 + 11 = 27
// '1C' - 28
// '1D' - 29
// '1E' - 30
// '1F' - 31


// 20   - 32

// change base 10 to hexidecimal

// number to take in: 0xF23C
// F23C 
// 1. skip the prefix (if its presented)

// 2. 
// base 16
// power: index
// value: currentElement 

// 61440 / 16 

// test case
// base 10 > hexidecimal
// 62012

// Object:
// key | value
// | 

// const convertDec2Hex = binStr => {
//   let obj = {
//     'A': 10,
//     'B': 11,
//     'C': 12,
//     'D': 13,
//     'E': 14,
//     'F': 15,
//   };

//   // iterate through the binStr and reverse it
//   let sum = 0;

//   // let reverseBinStr = binStr.toString().split('').reverse();
//   let reverseBinStr = binStr.split('').reverse();
  
//   for (let index = 0; index < reverseBinStr.length; index++){
//     // if current value is inside the object 
//     let currentValue = reverseBinStr[index];

//     // then perform the operation and add the value to the sum 
//     // operation: base to the power(**) of index multiplied by the value at that index
//     if (Object.keys(obj).includes(currentValue)) {
//       let num = (16 ** index) * obj[currentValue]; //reverseBinStr[index];
//       sum += num;
//     } else {
//       let num = (16 ** index) * currentValue;
//       sum += num;
//     }
//   }
//   return sum;
// } 

// // Dec2Hex
// let test1 = convertDec2Hex("F23C");
// console.log(test1);


// let num = 1234;

// console.log(num.toString(2));

// console.log(num.toString(16));

//? String.fromCharCode()
// console.log(String.fromCharCode('0b1000010') + String.fromCharCode('0x41') + String.fromCharCode(89));

// Bytes, kilobytes, megabytes, gigabytes, terabytes
// 1 byte = 8 bits
// one binary digit is one bit


// kilo - thousand // 3.2 kilobytes
// mega - million // 
// giga - billion
// tera - trillion
// peta - quadrillion
// exa - quantillion
// zetta - sextillion
// yotta - septillion

// Q : What is the worst-case time complexity of a lookup in a hash table and what causes it?
// A :  O(n), if every key in the hash table happens to collide to same bucket.

// Q : Which of these are advantages of singly linked lists over doubly linked lists?
// A : 1) Less memory, 2) Simpler code

// Q : What happens when you add two different values with the same key into a hash table?
// A : The first value is overwritten by the second value
