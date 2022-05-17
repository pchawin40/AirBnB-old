/**********************************************************
*TODO:        Practice Assessment Week 16 Review
***********************************************************/
/**********************************************************
*                    Multiple Choice Quiz
***********************************************************/
// function slowPush(arr, val, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       arr.push(val);
//       resolve();
//     }, delay);
//   });
// }
// 
// const arr = [];
// 
// slowPush(arr, 1, 1000)
//   .then(() => slowPush(arr, 2, 2000))
//   .then(() => slowPush(arr, 3, 3000));

//? Q1. What are the values inside of the array arr after 4 seconds?
//! [1, 2]
// E: Each call to slowPush waits a specified amount of time before pushing a value into the array, and then
// transitions the Promise object to a fulfilled state

//? Q2. What is a pending promise?
//! A promise that has not yet been fulfilled or rejected
// E: A Promise begins in the "pending" state. When it resolves, it goes to the "fulfilled" state. If it errs, it is sent
// to the "rejected" state

//? What method do you use to handle a rejected promise?
//! catch
// E: The catch method will handle a rejected promise
