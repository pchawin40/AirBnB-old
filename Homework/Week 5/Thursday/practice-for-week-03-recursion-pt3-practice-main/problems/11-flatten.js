/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// from MDN: // return arr.reduce((acc, currNum) => acc.concat(currNum), []);
/*
* This function takes a single array with any number of nested arrays and
* returns an array with all the nested contents on one level
*
* @param {array} arr
* @return {array} all the array inside arr array flattenned
*/
function flatten(arr) {
  // Your code here

  // call helper function to flatten all array elements into single array
  return flattenHelper(arr, []);
} // end flatten() function

/*
* This helper function flatten the arr array into one single array
*
* @param {array} arr
* @param {array} result
* @return {array} one single flattened array
*/
function flattenHelper(arr, result) {
  // if length of array is 0, return result
  if (arr.length === 0) return result;

  // if array at index 0 is an array, recursively call flattenHelper w/ arr[0] element and result
  if (Array.isArray(arr[0])) flattenHelper(arr[0], result);
  // otherwise push the current array into result if it is not an array
  else result.push(arr[0]);

  // if not an array, call flattenHelper w/ arr moved up one element and the result array passed in
  return flattenHelper(arr.slice(1), result);
} // end flattenHelper() function


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  