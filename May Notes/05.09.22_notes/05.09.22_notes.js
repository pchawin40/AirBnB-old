/**********************************************************
*TODO:                     Monday
***********************************************************/
/**********************************************************
*                  Promises: Why Promises?
***********************************************************/
//? Promises
//! A tool for simplifying callbacks to asynchronous functions

//? The Problem
function getForecastForLocation() {
  locationRequest({
    success: spotRequest({
      success: forecastRequest({
        success: handleSuccess,
        error: handleError
      }),
      error: handleError
    }),
    error: handleError
  });
}

//? The Solution
// Using promises to simplify callback hell
function getForecastForLocation() {
  locationRequest()
    .then(spotRequest)
    .then(forecastRequest)
    .then(handleSuccess)
    .catch(handleError)
}

//? Functionality and Vocabulary
// action: primary function of a promise (i.e., fetch data from an API)

//* Promises can exists in one of three states:
// (1) Pending: Promise has been neither fulfilled nor rejected
// (2) Fulfilled: Promise's action has succeeded
// (3) Rejected: Promise's action has failed

// A promise...
// - is considered settle when it has either been fulfilled or rejected
// - Can only be fulfilled or rejected once (cannot be more than once)
// - If a callback is added that matches the promise's state, that callback will be invoked immediately

//? Creating a Promise
const p = new Promise(executor); // executor: a function that takes two optional parameters (resolve and reject)

const p = new Promise((resolve, reject) => {
  if (/* success condition */) {
    resolve(/* any args */);
  } else {
    reject(/* any args */)
  }
});

//? Resolve and reject
// responsible for telling the promise what arguments to pass on once the promise has been settled

const request = new Promise(resolve =>
  setTimeout(msg => resolve(msg), 1000)
);

// receiveResponse: resolve callback and will be invoked once setTimeout successfully goes off after one second

//? then
// Promise objects have two important pre-defined methods: then and catch
// which return a new promise object, making them chainable

//* then: accepts two parameters
// onFulfilled: function to invoke if promise is fulfilled (resolve function)
// onRejected: function to invoke if promise is rejected (reject function)

p.then(onFulfilled) // onFulfilled *might* run
p.then(onFulfilled, onRejected) // either on Fulfilled or onRejected *will* run

//? catch
// can only accepts an onRejected parameter; acts exactly like calling then (null, onRejected) on a promise
p.then(onFulfilled, onRejected).catch(error)
// if either onFulfilled or onRejected are rejected, then promise will go to catch

// const onRejected = err => console.log(err); // fulfilled; would not trigger error
// const onRejected = err => throw err; // rejected; would trigger error
  
//? Using Promises
// jQuery 'ajax' method allows use of success callbacks and also returns a jqXHR object, which can be used like a promise
// can avoid passing a callback to ajax by calling then on the return value and passing the callback to then

// Passing a callback
// const fetchSuccess = cat => console.log(cat);
// const fetchError = err => console.log(err);

// const fetchCat = (catId, success, error) => {
//   $.ajax({
//     url: `/cats/${catId}`,
//     success,
//     error
//   })
// };

// fetchCat(1, fetchSuccess, fetchError);

// Using a promise
const fetchSuccess = cat => console.log(cat);
const fetchError = err => console.log(err);

const fetchCat = catId => $.ajax({ url: `/cats/${catId}` });
// Note the implicit return
fetchCat(1).then(fetchSuccess).fail(fetchError);
// jqXHR (jQuery XMLHttpRequest) uses 'fail' instead of 'catch'
// also have 'done' which only takes a success callback
// and always, which run its callback upon the promise being settled, no matter what

//? Advanced Topics
// Implicit rejections: promises can be implicitly rejected if constructor function throws an error
// Promise.all: accepts an array of promises, and creates a single promise that only get fulfilled if every promise in the array fulfilled
// polyfill: required for consistent functionality across older browsers

/**********************************************************
*                  Promises: Promises
***********************************************************/
//? A Promise is a Promise: A Mostly Complete Guide to JavaScript Promises I

//? A quick review of function declarations
function loudLog(message) {
  console.log(message.toUpperCase());
}

function() {
  console.log('How did you call me?');
}

//? The looming problem of asynchronous code with callbacks
readFile(path, encoding, callback);

// Arguments:
//   path        <string>          path to the file
//   encoding    <string>          the encoding of the file
//   callback    <function>        two arguments:
//                                 err       <error object>
//                                 content   <string>
//   Asynchronously reads the entire contents of a file

function writeWithHeader(err, content) {
  console.log("YOUR FILE CONTAINS:");
  console.log(content);
}

readFile('~/Documents/todos.txt', 'utf8', writeWithHeader);

// if a function is only used once, JS recommend to not put function name and just declare it as second argument of readFile function
readFile('~/Documents/todos.txt', 'utf8', function (err, content) {
  console.log("YOUR FILE CONTAINS:");
  console.log(content);
});

// or
readFile('~/Documents/todos.txt', 'utf8', (err, content) => {
  console.log("YOUR FILE CONTAINS:");
  console.log(content);
});

readFile('manifest.txt', 'utf8', (err, manifest) => {
  const fileNames = manifest.split('\n');

  // More to come
});

readFile('manifest.txt', 'utf8', (err, manifest) => {
  const fileNames = manifest.split('\n');
  const characterCounts = {};

  // Loop over each file name
  for (let fileName of fileNames) {
    // read that file's content
    readFile(fileName, 'utf8', (err, content) => {
      // Count the characters and store it in
      // characterCounts
      countCharacters(characterCounts, content);
    });

    // (no) MY PRINT STATEMENT HERE: print number of times that your codes read a file
    // console.log(characterCounts);
  }  

  // (no) MY PRINT STATEMENT HERE // output {} every time because the code in the inner readFile doesn't run until after
  // console.log
  // console.log(characterCounts);
});

//! Correct way to print out the total of all the characters in the files and print it using console.log
readFile('manifest.txt', 'utf8', (err, manifest) => {
  const fileNames = manifest.split('\n');
  const characterCounts = {};
  const numberOfFilesRead = 0;

  // Loop over each file name
  for (let fileName of fileNames) {
    // Read that file's content
    readFile(fileName, 'utf8', (err, content) => {
      // Count the characters and store it in characterCounts
      countCharacters(characterCounts, content);

      // Increment the nubmer of files read
      numberOfFilesRead += 1;

      // If the number of files read is equal to the number of files 
      // to read, then print because you're done
      if (numberOfFilesRead === fileNames.length) {
        console.log(characterCounts);
      }
    })
  }
})

//? Designing a better solution
console.log('Q'); //---- 1
setTimeout(() => {
  console.log('E'); //-- 3
  setTimeout(() => {
    console.log('T'); // 5
  }, 100);
  console.log('R'); //-- 4
}, 200);
console.log('W'); //---- 2

console.log('Q'); //---- 1
console.log('W'); //---- 2
setTimeout(() => {
  console.log('E'); //-- 3
  console.log('R'); //-- 4
  setTimeout(() => {
    console.log('T'); // 5
  }, 100);
}, 200);

log('Q')
  .then(() => log('W'))
  .then(() => pause(200))
  .then(() => log('E'))
  .then(() => log('R'))
  .then(() => pause(100))
  .then(() => log('T'));

//? So, what is a "Promise"?
readFile('manifest.txt', 'utf8', (err, manifest) => {

})

//* A promise in JS is a commitment that sometime in the future, your code
// will get a value from some operation (like reading a file or getting JSON from a Web site)
// or the code will get an 'error' from that operation (like the file does not exist or the site is down)

//* Can exists in three states:
// (1) Pending: Promise has not resolved. Once it does though, it will go either resolve or reject
// (2) Fulfilled: Whatever operation the Promise represented succeeded and success handler will get called
//     Once fulfilled, the Promise:
//      a. must not transition to any other state
//      b. must have a value, which must not change
// (3) Rejected: Whatever operation the Promise represented fail and erro handler will get called
//      a. must not transition to any other state
//      b. must have a reason, which must not change

// then(successHandler, errorHandler) is a way to handle a Promise when it leaves the pending state
// catch(errorHandler)

//* Success Handler
// a function that has one parameter, the value that a fulfilled Promise has

//* Error Handler
// a function that has one parameter, the reason that the Promise failed

/**********************************************************
*                  Promises: Handling Promises
***********************************************************/
//? A Promise is A Promise: A Mostly Complete Guide to JavaScript Promises II

//? Handling success with then
readFile("manifest.txt", "utf8", (err, manifest) => {
  if (err) {
    console.error("Badness happened", err);
  } else {
    const fileList = manifest.split("\n");
    console.log("Reading", fileList.length, "files");
  }
});

/* EXPLICIT CODE: NOT FOR REAL USAGE */

// Declare a function that will handle the content of the 
// file read by readFilePromise
function readFileSuccessHandler(manifest) {
  const fileList = manifest.split("\n");
  console.log("Reading", fileList.length, "files");
}

// Get a promise that will return the
// contents of the file
const filePromise = readFilePromise("manifest.txt");

// Register a success handler to process the contents of 
// the file. In this case, it is the function definned above
filePromise.then(readFileSuccessHandler);

/* IDIOMATIC: look natural */
readFilePromise("manifest.txt").then(manifest => {
  const fileList = manifest.split("\n");
  console.log("Reading", fileList.length, "files");
});

//? Chaining 'then's
// • Each 'Promise' has a 'then' method that handles what happens when
// the 'Promise' transitions out of the pending state
// • Each 'then' method returns a Promise that transitions out of its 
// pending state when the 'then' that created it completes
// • Chaining property gives the ability to break apart the two lines 
// of success handler in the previous example to two one-line functions
// that do the same thing with less code:


/* EXPLICIT CODE: NOT FOR REAL USE */

// Get a Promise that fulfills when the file is read
// with the value of the content of the file.
const filePromise = readFilePromise("manifest.txt");

// Register a success handler that takes the fulfilled
// value of the filePromise in the parameter named "manifest",
// which is the content of the file, split it on new line
// characters, and return a Promise whose fulfilled value is
// list of lines.
const fileListPromise = filePromise.then(manifest => manifest.split("\n"));

// Register a success handler to the fileListPromise that
// receives the fulfilled value in the "fileList" parameter
// and returns a Promise whose fulfilled value is the length 
// of the fileList array.
const lengthPromise = fileListPromise.then(fileList => fileList.length);

// Register a success handler to the lengthPromise that
// receives the fulfilled value in the "numberOfFiles" parameter
// and uses it to print the number of files to be read.
lengthPromise.then(numberOfFiles =>
  console.log("Reading", numberOfFiles, "files")
);

/* IDIOMATIC (v2) */
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"));

  //? Handling failure with then
readFilePromise("manifest.txt").then(
  manifest => {
    const fileList = manifest.split("\n");
    console.log("Reading", fileList.length, "files");
  },
  reason => {
    console.error("Badness happened", reason);
  }
);

readFilePromise("manifest.txt")
  .then(
    manifest => manifest.split("\n"),
    reason => console.err("Badness happened", reason);
  )
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"));

// to correctly handle the exception of no file to read and still have all of 
// the other lines of code run properly, write:
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(
    numberOfFiles => console.log("Reading", numberOfFiles, "files"),
    reason => console.err("Badness happened", reason)
  );

// then can handle both success and failure
// success handler is called with the value of the operation of the 'Promise'
// when the 'Promise' object transitions to the fulfilled state
// if an error condition occurs, then the error handler of the 'then' is called

// If a 'Promise' object transitions to the rejected state and no error handler
// exists for the 'then', then that 'then' is skipped altogether

// If an error handler is called and does not raise an exception, then the
// next 'Promise' object transitions to the 'fulfilled' state and the next success
// handler is called

//? Handling failure with catch
// can use catch to handle error instead of using error catching as a second argument
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("reading", numberOfFiles, "files"))
  .catch(reason => console.err("Badness happened", reason));

//? Using Promise.all for many future values
const values = [
  readFilePromise("file-boop.txt"), // this is a Promise object: pending
  readFilePromise("file-doop.txt"), // this is a Promise object: pending
  readFilePromise("file-goop.txt")  // this is a Promise object: pending
];

const superPromise = Promise.all(values);
// superPromise is a Promise object in the pending state.
//
// Inside superPromise is an array of Promise objects
// that look like this:
//
// 1. file reading promise in pending state, same as the one passed in
// 2. file reading promise in pending state, same as the one passed in
// 3. file reading promise in pending state, same as the one passed in

superPromise
  .then(values => console.log(values))
  .catch(reason => console.error(reason));
// If the function successfully reads the file, the values passed
// to the then come from the values that were in the superPromise
//
// 1. the content of file-boop.txt
// 2. the content of file-doop.txt
// 3. the content of file-goop.txt

// If something goes wrong with reading the file, then the `catch`
// gets called with the error reason from the Promise object that
// first failed.

//? Flattening Promises
readFilePromise("manifest.txt")
  .then(manifestContent => manifestContent.split("\n"))
  .then(manifestList => manifestList[0])
  .then(fileName => readFilePromise(fileName))
  .then(otherFileContent => console.log(otherFileContent)):
// Interpreted as:
// 1. Read the file of the manifest.txt file and pass the
//    content to the first then.
// 2. Split the content from manifest.txt on newline chars
//    to get the full list of files.
// 3. Return just the first entry in the list of files.
// 4. RETURN A PROMISE THAT WILL READ THE FILE NAMED ON THE
//    FIRST LINE OF THE manifest.txt! The next then method
//    doesn't get called until this Promise object completes!
// 5. Get the content of the file just read and print it.

//? Putting it all together
readFile("manifest.txt", "utf8", (err, manifest) => {
  const fileNames = manifest.split("\n");
  const characterCounts = {};
  let numberOfFilesRead = 0;

  // Loop over each file name
  for (let fileName of fileNames) {
    // Read that file's content
    readFile(fileName, "utf8", (err, content) => {
      // Count the characters and store it in
      // characterCounts
      countCharacters(characterCounts, content);

      // Increment the number of files read
      numberOfFilesRead += 1;

      // If the number of files read is equal to the
      // number of files to read, then print because
      // we're done!
      if (numberOfFilesRead === fileNames.length) {
        console.log(characterCounts);
      }
    });
  }
});

const characterCounts = {};
readFilePromise('manifest.txt')
  .then(fileContent => fileContent.split('\n'))
  .then(fileList => fileList.map(fileName => readFilePromise(fileName)))
  .then(lotsOfReadFilePromises => Promise.all(lotsOfReadFilePromises))
  .then(contentsArray => contentsArray.forEach(c => countCharacters(characterCounts, c))
  .then(() => console.log(characterCounts))
    .catch(reason => console.error(reason)));
  
//? Creating your own 'Promise's
log("Q")
  .then(() => log("W"))
  .then(() => pause(2))
  .then(() => log("E"))
  .then(() => log("R"))
  .then(() => pause(1))
  .then(() => log("T"));

function log(message) {
  console.log(message);
  return Promise.resolve();
}

function pause(numberOfSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), numberOfSeconds * 1000);
  });
}

const { readFile } = require("fs"); // This is just the way to get
// the readFile method into the current file. If you don't understand
// it, that's ok

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}
