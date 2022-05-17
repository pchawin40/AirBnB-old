/*
* A logarithm (or log for short) is the inverse of an exponent.
* The logarithm base-n of a number is how many times it must
* be divided by n to reach 1. For example, to find the log base-2 of 32 (log2(32) = ?)
* you divide by the base until you hit 1:
* once (16), twice (8) three times (4), four times (2), and five (1) so log2(32) = 5
*/

// finding log not using built-ins

const findLog = (number, base) => {
  let count = 0;

  while (number > 1) {
    number /= base;
    count++;
  }

  return count;
}

console.log(findLog(1, 2));
console.log(findLog(2, 2));
console.log(findLog(4, 2));
console.log(findLog(512, 2));


// Examples of base 2 logs
console.log(Math.log2(1));                 // 0
console.log(Math.log2(2));                 // 1
console.log(Math.log2(4));                 // 2
console.log(Math.log2(8));                 // 3
console.log(Math.log2(16));                // 4
console.log(Math.log2(32));                // 5
console.log(Math.log2(64))                 // 6
console.log(Math.log2(128));               // 7
console.log(Math.log2(256));               // 8
console.log(Math.log2(512));               // 9
// console.log(Math.log2(1024)); // 10
// console.log(Math.log10(100000)); // 10


//  2 ** 0     // 1
//  2 ** 1     // 2
//  2 ** 2     // 4
//  2 ** 3     // 8
//  2 ** 4     // 16
//  2 ** 5     // 32
//  2 ** 6     // 64
//  2 ** 7     // 128
//  2 ** 8     // 256
//  2 ** 9     // 512
//  2 ** 10    // 1024


/*
* In order to perform a binary search in logarithmic time, your data must satisfy two condition
* 
* Data must be sorted
* Data can be accessed by index in constant time
*
* Properties of a Binary Search Tree:
*
* The tree starts at the the root
* nodes whose values are less than the current node go to the left
* nodes whose values are more than the current node go to the right
* Each node has three properties: value, left and right
*/

let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

// iterative
const binarySearch = (arr, target) => {
  // set integers pointing to the high and low range of possible indices
  // while high and low indiceis do not overlap...
  // find midpoint between high and low indices
      
  // compare the target value to the midpoint value

  // Compare the target value to the midpoint value
      
  // If the target equals the midpoint...
  // Return the midpoint index

  // If the target is higher than the midpoint
  // Move the low pointer to midpoint + 1

  // If the target is lower than the midpoint
  // Move the high pointer to midpoint - 1
  
  // Return -1 if you don't find the value
}
  
  // recursive
const recursiveBinarySearch = (arr, target) => {
  // base case?
  
  // grab your midpoint

  // check to see if midpoint is the target... if so, return what you would like: true, index, or whatever

  // if target value is less thna the value at the midpoint
  // recurse passing in left half of arr

  // if target is greater than midpoint
  // recurse passing in right side of the array
}
