/****************************************************
 *                  Friday Quiz
 ***************************************************/
//? Q1. What is the time complexity of filling up an array from the back versus the front 
//? where n is the size of the array? (Using push versus unshift respectively)
//! push itself is O(1) but when filling up an array from the back, it is O(n)
//! unshift itself is O(n), when filling up an array from the back, unshift uses time complexity of O(n^2)
// E: Since .push() is an O(1) operation; doing it n times makes filling from the back O(n). Every
// .unshift() is an O(n) operation, so doing it n times makes it an n x n operation, or in other words,
// O(n^2)

//? Q2. What implementations are considered passed by reference in JavaScript?
//! Arrays and object
// E: Arrays are an implementation of objects, and all objects are passed by reference

/****************************************************
 *                  Saturday Quiz
 ***************************************************/
//?      4
//?    /   \
//?   2     6
//?  / \   / \
//? 1   3 5   7
//? Q1. What would be printed if the tree above were traversed using an in-order traversal?
//!:
//! In-order traversal goes: 
//! Traverse left
//! Do stuff
//! Traverse right
//! Using in-order traversal, what would be printed is 1 2 3 4 5 6 7

//? A    B     !(A && !B)
//? --------------------
//? 0    0       ?        --> !(0 && !0) = !(0 && 1) = 1
//? 0    1       ?        --> !(0 && !1) = !(0 && 0) = !0 = 1
//? 1    0       ?        --> !(1 && !0) = !(1 && 1) = !1 = 0
//? 1    1       ?        --> !(1 && !1) = !(1 && 0) = !0 = 1
//? Q2. Based on the above truth table, what are the values of !(A && !B) from top to bottom?
//! A:
//! 1
//! 1
//! 0
//! 1

//? let obj = {
//?     age: 1,
//?     height: 30,
//?     name: 'Marcus'
//? }
//? 
//? function func({ name }) { 
//?     console.log(name);
//? }
//? 
//? func(obj);
// !let obj = {
// !    age: 1,
// !    height: 30,
// !    name: 'Marcus'
// !}
// !
// !function func({ name }) {  // { } is object keys, the keys 'name' destructuring is 'Marcus'
// !    console.log(name);
// !}
// !
// !func(obj);

/****************************************************
 *                  Saturday Notes
 ***************************************************/
//! Correct steps in white-boarding:
//! 1. Clarify the problem & test I/O and edge cases 
//? Clarification: Before jumping into coding, ask questions
// E: 
// - What are we coding ?
// - Are there any constraints on the input/output?
// - What edge cases can we expect?

//! 2. Formulate approach(es)
//? Test I/O: Start with simple inputs and then slowly build up size/complexity of inputs
// E:
// - If we get stuck, use a sample input and compute it. Do it two or three times
// - Go through data structures in your head. Go through algorithms you know simultaneously. 
// If you find one that works for this problem, run with it.
// - Come up with simpler version of the problem, solve it, then progressively add complexity

//! 3. Pseudocode best approach
//? Need to layout strategy step by step, so that when coding, we have something to refer back to
// E: 
// - Be as detailed as possible
// - Spend as much time as you want, within reason
// - Make sure you can reason about implementation of every step

//! 4. Code it
//? Style makes an impact
// E: 
// Best confident
// Talk through the problem
// Take a moment to think and walk through the steps
// Stay on track
// Listen to the interviewer

//! 5. Walk through an example input
// E:
// Initiate the steps - don't wait to be prompted
// Track all of the variables
// Draw stacks if using recursive method
// Follow each iteration of loops
// Reason through code from input to output

//! 6. Determine Big O time and space complexity
//? Time is expensive and space is cheap

/****************************************************
 *              Saturday Quiz Part 2
 ***************************************************/
//?             15
//?           /    \
//?         12      21
//?        /  \    /  \
//?       9   16  20   23
//? Q1. True/False: The above is a valid binary search tree?
//! False; 16 is more than 15 and to be considered a BST, the order must be: more to the right and less to the left. 16 is not in
//! the right branch of 15, therefore this is not a valid binary search tree

//? Q2. Whair pairings correctly describes the best data structure used to implement the
//? given tree traversal type?
//! Queue, Breadth-First Traversal
// E: Stacks are ideal for depth-first traversals due to the LIFO behavior, while queues are ideal for breadth-first traversals
// because of the FIFO behaviors

//? Recursively call the left subtree
//? Print the current node value
//? Recursively call the right subtree
//? Q3. Which type of tree traversal is described above?
//! In-order traversal
// E: The traversal described would print in order from least to greatest if the tree is binary search tree

//? Q4. What is the time complexity of searching for an item in a binary search tree?
//! O(log n)
// E: Because a BST is sorted and there are log n levels in a BST where n is the size of the tree, the max number of iterations would be log n

//?             17
//?           /    \
//?         10      21
//?        /       /  \
//?       1       20   23
//?             /
//?            18 
//? Q5. What is the height of the above binary search tree?
//! E: 3
// The height of a BST is the largest number of edges from the root node to a leaf, or simply the number of edges 
// from the root to the bottom-most node. So tracing the edges: 17 -> 21, 21 -> 20, and 20 -> 18

/****************************************************
 *              Week 11 - Practice Assessment
 ***************************************************/
//?        0
//?      /   \
//?     1     2
//?    / \     \
//?   3   4     5
//?  /   / \   / \
//? 6   7   8 9   10
//? Q1. True or false: This is a valid binary search tree.
// False

/****************************************************
 *                Saturday Stuff
 ***************************************************/
//? Common techniques of sorting:
// - In-place array swaps, sliding windows, divide-and-conquer, and more

//! Review: swaps and shifts
// Swapping: Can swap two values in an array using a temporary variable, or destructuring assignment
let arr = [0, 1, 2, 3, 4, 5, 6];

// //? Temporary variable swapping:
// let tmp = arr[1];
// arr[1] = arr[2];
// arr[2] = tmp;

// console.log("arr: ", arr);

// //? Destructuring swapping:
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log("arr: ", arr);

//? BUBBLE SORTING: 
// - Walk through the entire array, compare each adjacent pair
// - If they are out of order, swap their positions
// - Keep doing until entire array is sorted

// Pseudo code:
// 1. Iterate through the array
// 2. If the current value is greater than its neighbor to the right, swap the values
// 3. If you get to the end of the array and no swaps have occurred, return
// 4. Otherwise, repeat from the beginning

// coding:
function bubbleSort(arr) {
  // variable to store flag for whether swapped have occurred
  let swapFlag = false;

  // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // variable for current value
    let current = arr[i];

    // variable for next adjacent value
    let adjacent = arr[i + 1];

    // If the current value is greater than its neighbor to the right
    if (current > adjacent) {
      
      // swap the value
      console.log("arr (before swap): ", arr);
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      console.log("arr (after swap): ", arr);
      swapFlag = true;
    }

    // If you get to the end of the array and no swaps have occurred, return
    if (!swapFlag && i === arr.length - 1) return; 
    // Otherwise, repeat from the beginning
  }
}

//? INSERTION SORT:
// Pseudo code:
// 1. Divide the array into sorted and unsorted
// 2. Pick and remove a value from the unsorted
// 3. Insert into correct place in the sorted
// 4. Repeat until unsorted is empty and sorted is full

function insertionSort(arr) {
  debugger;
  for (let index = 1; index < arr.length; index++){
    let current = arr[index];
    let copyIndex = index - 1;

    while (copyIndex > -1 && current < arr[copyIndex]) {
      arr[copyIndex + 1] = arr[copyIndex];
      copyIndex--;
    }

    arr[copyIndex + 1] = current;
  }
}

//? SELECTION SORT: Divide array into sorted and unsorted halves, then one-by-one select the smallest value from
//? the unsorted portion and move it to the end of the sorted portion
// Pseudocode:
// 1. Divide the array into sorted and unsorted
// 2. Find and remove the smallest value from the unsorted
// 3. Add the value to the end of the sorted array
// 4. Repeat until unsorted is empty and sorted is full

// function selectionSort(arr) {
//   // Set a pointer at zero diving the array into sorted and unsorted halves
//   let divider = 0;
//   let sorted = [], unsorted = arr;

//   // Repeat while the unsorted half is not empty:
//   while (unsorted.length) {
//     // Find the index of the minimum value in the unsorted half
//     let index = unsorted.findIndex(Math.min(unsorted));

//     // Save the min value
//     let minVal = unsorted[index];

//     // Shift every unsorted value to the left of the min value to the right by 1


//     // Put the min value at the divider

//     // Increment the divider and repeat
//   }
// }

//? Recursive Sorting: 
// E: 
// - function call itself recursively
// - base case where recursion ends
// - state moves toward the base case with each recursive call

function recursiveSort(arr) {
  // base case: if the array is length 1 or less, return the array
  if (arr.length <= 1) return arr;

  // find and remove the largest value in the array
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++)
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  
  const maxVal = arr[maxIndex];
  arr.splice(maxIndex + 1);

  // sort the remaining elements
  arr = recursiveSort(arr);

  // put the largest value bac at the end of the array
  arr.push(maxVal);

  // return the array once finished
  return arr;
}

//! Divide and conquer for recursive sorting:
// - Check the base case, return if length 1 or 0
// - Split the array in half
// - Recursively sort the left half and right half
// - Put left half and right half together and return

//? MERGE SORTING:
// - Split unsorted array in half (divide)
// - Sort the halves (conquer)
// - Merge the newly sorted halves

function mergesort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array

  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the merged array
}

//? QUICKSORT: An algorithm that uses divide and conquer approach to sort
//? values efficiently
// - Pick a value in the array to serve as the pivot
// - Partition the array so that values smaller than the pivot are on the left
// and values larger than the pivot are on the right
// - Sort the left and right partitions
// - Return an array with left, pivot, and right values

function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick a pivot

  // Put all values smaller than the pivot to the `left`
  // Put all values larger than the pivot to the `right`

  // Sort the left half
  // Sort the right half

  // Return the array with the left, pivot, and right values
}


// Swapping: Can swap two values in an array using a temporary variable, or destructuring assignment
arr = [0, 1, 3, 2, 4, 6, 5];
console.log("arr (before): ", arr);

// bubbleSort(arr); // [0, 1, 2, 3, 4, 5, 6]
insertionSort(arr); // [0, 1, 2, 3, 4, 5, 6]

console.log("arr (after): ", arr);
