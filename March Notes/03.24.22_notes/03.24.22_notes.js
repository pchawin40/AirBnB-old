/**************************************
 *                SETS
 *************************************/
//? An abstract data type which is used to store a collection of unique, unordered values
//! Three important properties:
//! - Contains no duplicate elements
//! - Elements are unordered
//! - Ability to check if an element is contained in O(1) time

// let n = 100000;

// // Fill an array with integers
// const arr = []; 
// for (let i = 0; i < n; i++)
//   arr.push(i);

// // Fill a set with integers
// const set = new Set(arr);

// // search the array for integers, half of which are included
// startTimeArray = Date.now();

// for (let i = 0; i < 2 * n; i++)
//   arr.includes(i);

// endTimeArray = Date.now();

// // Search the set for integers, half of which are included
// startTimeSet = Date.now();

// for (let i = 0; i < 2 * n; i++)
//   set.has(i);

// endTimeSet = Date.now();

// console.log(`Array: ${endTimeArray - startTimeArray}ms`);
// console.log(`Set: ${startTimeSet - endTimeSet}ms`);


// /**************************************
//  *             CACHING
//  *************************************/
// //! One of the most common and impactful methods of increasing code performance

// //? = Pure Function (Stateless functions) = A function whose output depends only on its input, and cause no side effects
// //? --> Useful for predictability
// //? ** Benefit ** Outputs can easily cached with inputs as key

// function multiply(a, b) {
//   let product = 0;

//   for (let i = 0; i < b; i++)
//     product += a;

//   return product;
// }

// // Plan for using cache:
// // 1) Create unique key containing inputs
// // 2) If key does not exist in cache, run the calculation and store it in cache
// // 3) Return cached value

// const cache = {};

// function multiplyCache(a, b) {
//   // create a unique key containing inputs
//   const key = `${a}x${b}`;

//   // if key does not exist in cache
//   if (cache[key] === undefined)
//     // run calculation and store it in cache
//     cache[key] = multiply(a, b);
  
//   // return cached value
//   return cache[key];
// }

// multiply(2, 1000000000);
// multiplyCache(2, 1000000000);

// // Caching sub-problems:
// function recursiveMultiply(a, b) {
//   if (b === 1) return a;

//   return a + recursiveMultiply(a, b - 1);
// }

// function recursiveMultiplyCached(a, b) {
//   if (b === 1) return a;

//   const key = `${a}x${b}`;

//   if (cache[key] === undefined)
//     cache[key] = a + recursiveMultiplyCached(a, b - 1);
  
//   return cache[key];
// }

// //? = Memoization = Start from beginning and create a running log, or a memo of the
// //? previously calculated values

// cache = {}; // Memo cache

// function fibMemoPrint(n) {
//   console.log(`Running fibMemoPrint ${n})`)
//   console.log(cache);

//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   if (cache[n] === undefined)
//     cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
  
//   return cache[n];
// }


// //? == Tabulation == Building a function to cache iteratively from the bottom-up instead of top-down
// cache = {};


// function fibTab(n) {
//   cache[1] = 0;
//   cache[2] = 1;

//   for (let i = 3; i <= n; i++)
//     cache[i] = cache[i - 1] = cache[i - 2];
  
//   return cache[n];
// }

//! Memoization vs tabulation vs dynamic programming
//? Memoization and tabulation are forms of dynamic programmings
//? Memoization, tabulation, and dynamic programming are all forms of caching


/**************************************
 *      Formative Quiz - Thursday
 *************************************/
//? What are the important properties of when to use a set?
//! Sets have three important properties that will tell you when they are appropriate to use:
//! A set contains no duplicate elements, a set's elements are unordered, a set can check if
//! an element is contained in O(1) time

/**************************************
 *          Quiz - Thursday
 *************************************/
//! A linked list, a call stack, and a queue are all abstract data types (ADT)


/**************************************
 *             In-Class
 *************************************/
// TLDR on hashtable
// an array of key/value pair where the key hashed nad modded return the index at which it is stored
// every key value pair has a next pointer in the cash of the hash/mod returning the same index
// if collision occurs do an add to head style insert


// What is a Set, a collection type that only allows unique values

// let mySet = new Array(...new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5]));
let mySet = new Set();

mySet.add("Some value");
let array = [1, 2, 3, 4];
// mySet.add([1, 2, 3, 4]);
mySet.add(array);
mySet.add(5);
mySet.add({ 'hey': 'James' });
mySet.add(new Set());

console.log("mySet (before delete): ", mySet);

console.log(`mySet has [${array}]: `, mySet.has(array));

console.log(`deleting '${'Some value'}'`);
mySet.delete('Some value');

console.log(`deleting [${array}]`);
mySet.delete(array);

console.log("mySet (after delete): ", mySet);
