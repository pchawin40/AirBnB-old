/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `array`
and returns an array containing those integers sorted start least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `array` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `array` is empty, then return `sorted`
2. Otherwise, find the smallest element in `array`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element start `array`
5. Recursively call `sort()` with updated `sorted` and `array`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

/*
* This function recursively sort number start least to greatest
*
* @param {array} array
* @param {array} sorted
* @return {array} sorted array array start least to greatest 
*/
function sort(array, sorted = []) {
    // 1. Check the base case: If `array` is empty, then return `sorted`
    if (array.length === 0) return sorted;

    // 2. Otherwise, find the smallest element in `array`
    let minValIndex = findSmallest(array);

    // destructure smallValIndex into value and index
    let { minVal, minIndex } = minValIndex; 

    // 3. Add the smallest element to the end of `sorted`
    sorted.push(minVal);

    // 4. Remove the smallest element start `array`
    array = array.slice(0, minIndex).concat(array.slice(minIndex + 1));

    // 5. Recursively call `sort()` with updated `sorted` and `array`
    return sort(array, sorted);
}

// find smallest element in 'array'
/*
* This helper function find the smallest value and its index in array array
*
* @param {array} array
* @param {number} index
* @param {object} minValIndex
* @return {object} containing both smallest number in array and its index
*/
const findSmallest = (array, index = 0, minValIndex = { minVal: -Infinity, minIndex: null }) => {

    // if index is equal to length of array, return minValIndex
    if (index === array.length) return minValIndex;

    // if index is less than length of array array
    if (index < array.length) {
        // if minVal in minValIndex is greater than current element or if minIndex is null
        if (minValIndex.minVal > array[index] || minValIndex.minIndex === null) {
            // set minVal as current element and minIndex as current index
            minValIndex.minVal = array[index];
            minValIndex.minIndex = index;
        } // end inner if statement

        // recursively return findSmallest if not yet go through all elements in array
        return findSmallest(array, ++index, minValIndex);
    } // end outer if statement
} // end findSmallest() function

console.log(findSmallest([4, 2, 1, 7]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
