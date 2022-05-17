/**********************************
    MERGE SORTING: function
***********************************/

// const merge = (left, right, arr = []) => {

//   // if (left.length && right.length) return [...arr, ...left, ...right];
//   // else {
//   // while (left.length && right.length) {
//   // base case:
//   if(!(left.length && right.length)) return [...arr, ...left, ...right];
//   // for (; left.length && right.length;){
//   else {
    
//     left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift()); 
//     return merge(left, right, arr);
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//       return merge(left, right, arr);
//     }
//     else {
//       arr.push(right.shift());
//       return merge(left, right, arr);
//     }
//     // }
    
//   }
//   // return merge(left, right, arr);
//   // return [...arr, ...left, ...right];
// }


// const merge = (left, right, arr = [], directionPointer = left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())) => 
//   (!(left.length && right.length)) ? [...arr, ...left, ...right] : merge(left, right, arr);

// const mergeSort = (array, half = array.length / 2) => 
//   array.length < 2 ? array : merge(mergeSort(array.splice(0, half)), mergeSort(array))

// const merge = (left, right, arr = [], directionPointer = left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())) => 
//   (!(left.length && right.length)) ? [...arr, ...left, ...right] : merge(left, right, arr);


/**********************************
    MERGE SORTING: One-liner
***********************************/
// const mergeSort = (array, half = array.length / 2, merge = (left, right, arr = [], directionPointer = left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())) =>
//   (!(left.length && right.length)) ? [...arr, ...left, ...right] : merge(left, right, arr)) =>
//   array.length < 2 ? array : merge(mergeSort(array.splice(0, half)), mergeSort(array));


// array = [4, 8, 7, 2, 11, 1, 3];
// array2 = [12, 13, 1, 2];

// console.log(mergeSort(array));
// console.log(mergeSort(array2));

/**********************************
          Reading Tests
***********************************/

describe("avgValue()", function() {
  it("should return the average of an array of numbers", function() {
    assert.equal(avgValue([10, 20]), 15);
  });
});

// describe the error case 
// describe("Message", func(){
//   it() // defines a jasmine test // inside it() give function() // inside function() do assert.equal(avgValue(testcase), expectedResult)
// }
