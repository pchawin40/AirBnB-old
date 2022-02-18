/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

/*
* This function calculate all the permutation of the given array. 
*
* @param {array} array
* @return {array} permutations array
*/
const permutations = (array, result = []) => {
  // Your code here

  // if length of array is 0, return result
  if (array.length === 0) return result;
  
  // if length of array is 1, return [array]
  if (array.length === 1) return [array];

  // for every index in array
  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    // define temporary variable: currentNum, remainingArr, remaniningArrPermutation
    const currentNum = array[outerIndex];
    const remainingarray = array.slice(0, outerIndex).concat(array.slice(outerIndex + 1));
    const remainingarraypermutationd = permutations(remainingarray);

    // for every index in remainingArrPermutation array
    for (let innerIndex = 0; innerIndex < remainingarraypermutationd.length; innerIndex++) {
      // define permutation array that is currentNum adding with array element at innerIndex
      const permutationdArray = [currentNum].concat(remainingarraypermutationd[innerIndex]);
      result.push(permutationdArray);
    } // end innerIndex for loop
  } // end outerIndex for loop

  // end result
  return result;
} // end permutations function

// let test1 = permutations([1, 2]) // [[1, 2], [2, 1]]
// console.log("test1: " + test1);

let test2 = permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
