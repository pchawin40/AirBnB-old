/***********************************************
 *              Tuesday Homework
 **********************************************/
//? Funky Sorting:
//? Given an array nums, write a function to move all 0's to the end of it while 
//? maintaining the relative order of the non-zero elements

//? Input: [0, 1, 0, 4, 15]     Output: [1, 4, 15, 0 , 0]

//? *You must do this in-place without making a copy of the array
//? *Minimize the total number of operations

//! Zeroes to the right revisited
// 1. Createa a pointer called firstZero that points to the left-most zero in the array
// 2. Iterate through the array
// 3. If firstZero has not been set, continue until you reach a zero
// 4. When you reach the first zero, set firstZero the current index
// 5. When you reach a non-zero value, swap it's position with firstZero and increment firstZero

function moveZeroes(nums) {
  // Create a pointer called 'firstZero' that points to the left-most
  // zero in the array
  let firstZero = -1;

  // Start as -1 because there are no zeroes encountered yet

  // Iterate through the array
  for (let i = 0; i < nums.length; i++){
    // If 'firstZero' has not been set, continue until you reach a zero
    if (firstZero === -1)
      // When you reach the first zero, set 'firstZero' to the current index
      if (nums[i] === 0) firstZero = i;
    
    // When you reach a non-zero value
      else if (nums[i] !== 0) {
        // swap it's position with 'firstZero'
        [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];

        // and increment 'firstZero'
        firstZero++;
      }
  }

  return nums;
}

// nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
// nums.sort();
// console.log(nums);

function compareNumbers(a, b) {
  debugger;
  return a - b;
}

nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
nums.sort(compareNumbers);
console.log(nums);

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
  if (a % 2 === 1 && b % 2 === 0) return 1;
  if (a % 2 === 0 && b % 2 === 1) return -1;
  return a - b;
}

nums.sort(oddEvenCompare);
console.log(nums);

nums = [0, 1, 0, 4, 15];
function moveZeroesCompare(a, b) {
  if (a === 0) return 1;
  if (b === 0) return -1;
  return a - b;
}
nums.sort(moveZeroesCompare);
console.log(nums);
