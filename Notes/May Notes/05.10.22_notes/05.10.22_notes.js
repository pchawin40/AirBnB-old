/**********************************************************
*TODO:            Monday: Assessment 15 Notes
***********************************************************/
/**********************************************************
*                  Promises: async Functions
***********************************************************/
//TODO: Modern 'Promise's with 'async' and 'await'

//? Classic promise example
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}

function doChores() {
  console.log('before walking the dog');
  walkTheDog()
    .then(res => {
      console.log(res);
      console.log('after walking the dog');
  });
  return 'done';
}

console.log(doChores());

// prints:
//
// before walking the dog
// done
// happy dog
// after walking the dog

//? 'async' function declarations
async function doChores() {
  // ...
  return 'done';
}

console.log(doChores());
// prints:
// Promise { 'done' }

//? 'await'ing a promise
// await: can be used to wait for promise to be fulfilled
// - using await outside of async will result in SyntaxError
// - when a promise is 'await'ed, execution of the containing async function will
// pause until the promise is fulfilled

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}

async function doChores() {
  console.log('before walking the dog');
  const res = await walkTheDog();
  console.log(res);
  console.log('after walking the dog');
}

doChores();
// prints:
// before walking the dog
// happy dog
// after walking the dog

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}

async function doChores() {
  console.log('before walking the dog');
  const res = await walkTheDog();
  console.log('after walking the dog');
  return res.toUpperCase();
}

doChores().then(result => console.log(result));
// prints:
// before walking the dog
// after walking the dog
// HAPPY DOG

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2');
      resolve('happy dog');
    }, 1000);
  });
}

async function doChores() {
  console.log('1');
  const res = await walkTheDog();
  console.log('3');
  return res.toUpperCase();
}

async function wrapper() {
  console.log('0');
  const finalResult = await doChores();
  console.log('4');
  console.log(finalResult + '!!!');
}

wrapper();
// prints:
// 0
// 1
// 2
// 3
// 4
// HAPPY DOG!!!

//? Refactoring a promise chain
function wrapper() {
  promise1
    .then(res1 => {
      console.log(res1);
      return promise2;
    })
    .then(res2 => {
      console.log(res2);
      return promise3;
    })
    .then(res3 => {
      console.log(res3);
    });
}

//? Refactor
async function wrapper() {
  console.log(await promise1);
  console.log(await promise2);
  console.log(await promise3);
  console.log(await promise4);
}

//? Error Handling
function action() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('uh-oh'); // rejected
    }, 3000);
  });
}

async function handlePromise(){
  try {
    const res = await action();
    console.log('resolved with', res);
  } catch (err) {
    console.log('rejected because of', err);
  }
}

handlePromise();

// prints:
// rejected because of: uh-oh

/**********************************************************
*                Promises: What is AJAX?
***********************************************************/
//? AJAX: Paving the Road to the Modern Web
// AJAX: Asynchronous JavaScript and XML
// ==> A set of technologies that allow for efficient client (web browser)
// and server interaction

//? Classic Full Page Reloads

//? AJAX at a high level
// === group of different technologies that work together to
// allow a website to communicate with a server in the background
// without requiring the website to reload in order to display new changes

//? Asynchronous JavaScript and XML
//* Asynchronous: Using AJAX, when the user hits a button on a webpage, the updates would
//* now happen asynchronously

//* JavaScript:
//* In this case, it is the engine behind AJAX. It is used to make the request to the server

//? Notes on AJAX
// == allows you to keep the user in their current context

/**********************************************************
*                     Promises: Fetch
***********************************************************/
//TODO: 'fetch'

//? Quick Overview of the 'fetch' API
//? === fetch === used to make HTTP requests on the browser
// -- Uses Promises to handle the async nature of HTTP request and responses
// -- Used to formulate and sends a request to a server and read the server response

/// 'fetch' function syntax
// === fetch === function that can only be used in the browser's JavaScript runtime environment
fetch(url, [options])
// @first param is REQUIRED and defines the URL of the request that you want to send
// - it will make a 'GET' request to the URL passed in

// @second param is OPTIONAL and defines other components of request besides the URL
// of the request you want to send
// - must be a JavaScript object
// • method - method of the request
// • headers - object whose key-value pairs are header names and values
// • body - a string of the body of the request
// ○ status code of response is saved in '.status' property
// ○ to read the value of a specific headers, use '.headers.get(headerName)'
// ○ To read the body of the responses as a string, can use '.text()' method on the object that returns a 'Promise' 

//? 'fetch' examples
fetch("/categories/beauty/products")
  .then(function (res) {
    console.log("response: ", res);
    return res.text();
  })
  .then(function (Data) {
    console.log("data:", data);
  });

//? Send a 'POST' request using 'fetch'
// POST /products/:productId/reviews
fetch("products/1/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "comment=works+well&starRating=4"
})
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {
    console.log(data);
})

//! A fetch call returns a 'Promise' that will be fulfill once the 
//! response comes back from the server
