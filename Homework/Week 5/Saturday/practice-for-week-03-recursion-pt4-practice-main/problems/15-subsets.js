/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
debugger

/*
* This function will return all subsets of an array
*
* @param {array} arr
* @return {array} all subsets of an array
*/
const subsets = (arr, subset = [], index) => {
  // Your code here
  if (index === arr.length) return []; 
  
  // 
  if (arr.length === 1) {
    subset.push(arr[index]);
    subsets(arr, subset, ++index);
  }

  // // [[], [1], [2], [1, 2]]
  // if (arr.length === 2) {
  //   subset.push([]);
  //   subset.push([1]);
  //   subset.push([2]);
  //   subset.push([1, 2]);
  // }

  // if (arr.length === 3) {

  //   subset.push([]);

  //   subset.push(arr.slice(0, 1));
    
  //   subset.push(arr.slice(1, 2)); // [[1][2]]
    
  //   // [1 2]
  //   subset.push(arr.slice(0, arr.length - 1)); // [1, 2] 

  //   // [3]
  //   subset.push(arr.slice(arr.length - 1));

  //   // [1, 3]
  //   subset.push(arr.slice(0, arr.length - 2).concat(arr.slice(arr.length - 1)));

  //   // [2, 3]
  //   subset.push(arr.slice(1));

  //   // [1, 2, 3]
  //   subset.push(arr.slice());
  // }

  // edge case: 
  // if array includes 3
  return subset;
} // end subsets() function

let test1 = subsets([]) // [[]]
let test2 = subsets([1]) // [[], [1]]
// let test3 = subsets([1, 2]) // [[], [1], [2], [1, 2]]
// let test4 = subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

console.log(test1);
console.log(test2);
// console.log(test3);
// console.log(test4);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
