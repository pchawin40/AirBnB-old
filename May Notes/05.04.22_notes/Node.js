// server.js
const http = require('http');

// const server = http.createServer((req, res) => {
//   // ...
// });

//? Port = define port number tthat can range from 0 to 65535
// ○ Common ports: 3000 5000 and 8000

//? Then use 'listen' method on the newly created server
//? and pass in two arguments
// server.listen(port, callback function)
const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));

//? Request object
//? 1. Log the req parameter in the createServer function
//? Make any request to http://localhost:5000 using browser or Portman

const server = http.createServer((req, res) => {
  console.log("req", req);
  console.log("res", res);
})

// method - Property whose value is a string of the method of the request
// url - Property whose value is a string is the url path of the request
// headers - Property whose value is an object with the key-value pairs as the 
// header names and values
// on - Method that listens for an event on the request and triggers a callback
// function to run when that event is triggered
 
//? Response Object
// to formulate a response to send, http will create a Response object with every request 
// made to the server. This object also has properties and methods to interact
// and formulate the components of a response

// 1. Log the res parameter in the createServer function
// 2. Make any request to http://localhost:5000 using browser or postman

//* res:
// • statusCode - Property whose value is the status code of the response
// • setHeader - Method that sets a header name to a value
// • write - Method that allows you to add to the body of the request
// • end - Method that allows you to add to the body of the request AND send the response
