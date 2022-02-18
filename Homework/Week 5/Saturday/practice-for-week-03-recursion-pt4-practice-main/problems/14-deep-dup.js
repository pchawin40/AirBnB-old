/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
i[1] === duped[1] // false
i[1][1] === duped[1][1] // false
***********************************************************************/
debugger

// practice recursion and create new array recursively // slice --> create manual slice w/o slice built in function

/*
* This function deep clone a given arr
* 
* @param {array} arr
* @return {array} deep copy of given arr array
*/
function deepDup(arr) {
  // Your code here
  return slice(arr, 0);
} // end deepDup() function

// if "do" doesn't get passed, initialize with array.length (default parameter)
/*
* This helper function act as the Array.prototype.slice() built-in function except
* without actually using the built-in slice() function
*
* @param {array} arr
* @param {number} start
* @parm {end} end
* @return {array} deep duplicated of a given arr array
*/
const slice = (arr, start = 0, end = arr.length, index = start, result = []) => {
   // initialize an array we can copy values into
  /* base cases */
  //if index is equal to end, return result
  if (index === end) return result;
  // else if index is greater than end, return
  else if (index > end) return;
    
  /* recursive case */
  // push current array element to result array
  result.push(arr[index]);
  // recursively call slice, incrementing index by 1 each call
  return slice(arr, start, end, ++index, result);
}

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
// arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
// arr === duped // false
// i[1] === duped[1] // false
// i[1][1] === duped[1][1] // false

// let arr = ["hello", 2, 3];
// arr = ["hello", [2, [3]]];

let newArr = arr.slice();
console.log(arr[1] === newArr[1]); // true
// let otherArr = [1, 2, 3];
// let duped = deepDup(arr); // [1, 2, 3]; // shallow copy
// arr === duped // false

// duped = deepDup(arr); // [1, [2, [3]]] // deep copy
console.log(arr === duped); // false
console.log(arr[1] === duped[1]) // false
console.log(arr[1][1] === duped[1][1]) // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
