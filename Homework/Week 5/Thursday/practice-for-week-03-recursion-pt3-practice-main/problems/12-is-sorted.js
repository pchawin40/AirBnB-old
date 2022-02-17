/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

debugger

function isSorted(arr) {
  // Your code here

  // successful base case: if length of arr is 1 or 0, return true
  if (arr.length === 1 || arr.length === 0) return true;

  // variable for currentNum and nextNum at first and second index of arr array
  let currentNum = arr[0], nextNum = arr[1];

  // if length of arr array is 2 and nextNum is not consecutive of currentNum + 1, return false
  if (currentNum > nextNum) return false;
  else if (currentNum < nextNum) return isSorted(arr.slice(1));
}

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
