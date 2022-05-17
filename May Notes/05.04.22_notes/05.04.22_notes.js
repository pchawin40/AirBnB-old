/**********************************************************
*TODO:              Homework for Wednesday
***********************************************************/
/**********************************************************
 *             HTML Form Submission Requests
 **********************************************************/
//? HTML Form Review: 
// When we create a form in HTML, we can specify two
// HTML attributes that influence the components of the request made when the form 
// is submitted
//  • method - method of the request, can only be set to "POST"
//  • action - URL path of the request     

{/* <form method="post" action="/dog"> */}
  {/* <input type="text" name="name" /> */}
  {/* <select name="color"> */}
    {/* <option value="black">Black</option> */}
    {/* <option value="brown">Brown</option> */}
    {/* <option value="yellow">Yellow</option> */}
    {/* <option value="white">White</option> */}
  {/* </select> */}
  {/* <input type="number" name="age" /> */}
  {/* <textarea name="description"></textarea> */}
  {/* <button type="submit">Create Dog</button> */}
{/* </form> */}

//* Components of request
// • Method - defined by method HTML form attribute
// • URL path - defined by action HTML form attribute
// • Content-Type header - application/x-www-form-urlencoded
// • body - form input names and values

//? Server Response
// When a form submission request is made to a server...
// (1) The server should parse the body of the request, then...
// (2) do some CRUD action with the data, then ...
// (3) redirect the user to another page

// Redirection response has status code of 302 and a Location header 
// with value as the path to redirect the user to

// Status code - 302
// Location header - path to redirect the user to
// body - none

//* Typical form submission process:
// 1. Form is submitted
// 2. Browser makes request to the server
// 3. Server parses the request body and does some CRUD action with the data
// 4. Server sends a redirection response
// 5. Browser receives response
// 6. Browser redirects user to the path specified in the Location header
// of the response

/**********************************************************
 *                    http Node.js package
 **********************************************************/
//? Creating a Server

// see Node.js for more notes

/**********************************************************
 *             Parse the Request Body in http
 **********************************************************/
// Call the req.on method to listen to the data event:
const server = http.createServer((req, res) => {
  let reqBody = '';
  // call the req.on method to listen to the data event
  // concatenate the data received to a string representing
  // the body of the request getting put together
  req.on('data', data => reqBody += data);

  // the end event on the request object will be triggered once 
  // the entire server finishes receiving the request body
  // - can log the entire request body inside of the req.on method
  req.on('end', () => console.log(reqBody));
});

//? Parsing application/x-www-form-urlencoded
// Object solution:
// {
//   name: "Fido",
//   color: "black",
//   age: "1",
//   description: "Hello World!"
// }

// Request body: name=Fido&color=black&age=1&description=Hello+World%21

// (1) Separate key-value pairs in string from each other by separating 
// string by &
// [name=Fido, color=black, age=1, description=Hello+World%21]


// (2) Separate key from value by separating key-value pair by =
// [[name, Fido], [color, black], [age, 1], [description, Hello+World%21]]

// (3) Replace the plus symbols, +, in the values wtih a space
// [[name, Fido], [color, black], [age, 1], [description, Hello World%21]]

// (4) Decode values from Percent Encoding 
// (i.e. Use Node.js built-in decodeURIComponent(encodedString) function)
// [[name, Fido], [color, black], [age, 1], [description, Hello World!]]

// (5) Finally turn the key-value pairs into an object
// {
//   name: "Fido",
//   color: "black",
//   age: "1",
//   description: "Hello World!"
// }

/**********************************************************
 *         Formulate and Send a Response in http
 **********************************************************/

// const server = http.createServer((req, res) => {
//   //? Set the status code: 
//   // --> set statusCode property on the res object inside of the createServer
//   // function to the desired code
//   res.statusCode = 500;
  
//   //? Set the header
//   // --> Pass in the header name as the first argument and the header value as
//   // the second argument
//   res.setHeader("Content-Type", "text/css");

//   //? Write the response body. Two approach
//   // (1) Write method on the res inside of the createServer function
//   // --> write method adds to the body of the response
//   //    can call method multiple times on same res object to continuously
//   //    adds to the body
//   res.write('Hello');
//   res.write(' ');
//   res.write('World');
//   res.write('!');

//   //? Sending the response
//   // second way to add to the body of the response is the end method
//   // on the res object. The 'end' method also doesnt set the body of the
//   // response, but adds to the body. The end method has one more
//   // functionality though: to end the creation of the response and send it
//   //! cannot call 'end' method multiple times for a single request
//   res.write('Hello');
//   res.write(' ');
//   res.write('World');
//   res.end('!');

//   // or
//   res.status = 200;
//   res.end();
// })

//? Hanging Server:
// If there is no response returned for a request made to the server...
// the server become unresponsive and cannot take anymore requests unless
// the client quits the connections for the original request
//! Make sure to always send a response for all requests to avoid hanging server

/**********************************************************
 *              Create Route Handlers in http
 **********************************************************/
//? Creating http Route Handlers
// Routes are used to ask the server for different kinds of information

// To get the server to send information based on specific routes, you need to
// create different route handlers that will tell the server to send different responses

//? Defining Route Handler
// Route Handler = A set of code that will be executing for a particular route or
// request method and URL path combination

// In http, you can create a route handler by simply using a conditional to check
// if the method and the url properties on the req match a route.

// If the route matches, then create formulate the route-specific response

//* For example, to create a route handler for a GET request with URL path of /
//* that sends a plain text, 'Splash Page', with a status code of 200:
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    return res.end('Splash Page');
  }
    
    //? Multiple Route Handlers
    // to add more routes, simply add more conditionals in http to check for
    // different method and url combinations
  if (req.method === 'POST' && req.url === '/cat') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Created a Cat!');
  }
});
