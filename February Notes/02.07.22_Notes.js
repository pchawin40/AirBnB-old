// Three things that make a first class object
// can be assigned to a variable
// can be passed as n argument to a function
// can be returned from a function

debugger

// let myFunc = function () {
//   console.log('stuff');
// }

// let myNewFunc = function (func) {
//   console.log(func);
// }


// myFunc();
// myNewFunc(myFunc);
// console.log(myFunc, '');

// let imReturningAFunction = function () { 
//   return function () { 
//     console.log('hello');
//   };
// };

// let callback = function () {
//   console.log('stuff', 'line 60');
// }

// let higherOrderFunc = function (cb) {
//   cb();
//   console.log('line 66');
// }

// higherOrderFunc(callback);

// let imReturningAFunction = function () {
//   return function () {
//     console.log('hello');
//   }
// }

let myUpper = function (array) {
  console.log('inside my callback ');
  return array.map(function (ele) {
    return ele.toUpperCase();
  });  
}

let myLower = function (array) {
  return array.map(function (ele) {
    return ele.toLowerCase();
  });  
}

let myHigherOrder = function (array, cb) {
  // console.log(cb);
  if (cb) {
    console.log('before the call');
    return cb(array);
  } 
  // console.log("Please enter a valid cb name");
  return array;
}

let myNames = ['baylen', 'Zaviar', 'James'];

console.log(myHigherOrder(myNames, myUpper), 'after the call');
