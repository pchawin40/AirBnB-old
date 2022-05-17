/**********************************************************
*TODO:              Homework for Thursday
***********************************************************/
/**********************************************************
 *                  What are Static Assets?
 **********************************************************/
//? What is a static asset?
//? ==> Some data or resources that doesn't change no matter how
//?     many times you ask the server for it
// - Usually just a file that the server holds in memory and sends to a client when asked for
// • Examples of staic sasets include CSS and image files

//? Serving Static Assets
//* URL path for requesting a static asset usually includes the static asset's file
//* extension at the end of the URL path
// Example: dog.jpg -> /images/dog.jpg

/**********************************************************
 *             Serve Static Assets in http
 **********************************************************/
//? Serving Static Assets using http
// == Static asset == file that a server holds in memory
// - contents don't change
// - asset can be requested and sent by server

//? Finding and Reading Files
// fs: to find and read a file in memory, we can use built-in fs Node.js library
// readFileSync is a method in the library that takes in a file path and returns the
// contents of the file at that path

// if pass in a string of utf-8 as a second argument, then the file contents can be
// read as a string

const fs = require('fs');

const fileContents = fs.readFileSync('./file-name.txt', 'utf-8');

// file path is relative file path from current file to the desired file, or an absolute path
// relative file paths are more recommended

// if file is not found, method will throw an error

//? Sending Files
// To send a file as static asset in http server as a response, 
// (1) First write the contents of a file read as the body of the response
// (2) Then, set the appropriate status code
// (3) Finally, set the Content-Type header specific for the file

const server = http.createServer((req, res) => {
  const catImage = fs.readFileSync('./images/cat.png');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.end(catImage);
});

/**********************************************************
 *              What is HTML Templating?
 **********************************************************/
//? HTML Templating === when inserting specific elements of data into an HTML file

//? Template Engines: Package or library that processes HTML template files
//? and inserts data into it
// - Have their own conventions or even new programming languages to create 
// dynamic HTML content from static HTML files and data variables

// Node.js: (a) Pug (b) Handlebars
// Python: (a) Genshi (b) Jinja 

/**********************************************************
 *            Basic HTML Templating in http
 **********************************************************/
//? Creating a Basic HTML Template
// Format: #{} (similar to JS where we use ${})

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>#{username}'s Profile Page</title>
// </head>
// <body>
//   <h1>Welcome to #{username}'s profile page!</h1>
//   <p>#{biography}</p>
//   <h2>Comment Box</h2>
//   <form method="post" action="/comment">
//     <p>To send a comment to #{username}, fill out this form</p>
//     <textarea name="commentBody"></textarea>
//     <button type="submit">Comment</button>
//   </form>
// </body>
// </html>

//? Using an HTML Template
//* To use an HTML template to produce a specific user profile page in Node.js,
// need to read the file contents to a string and then replace the variables
// inside of the string with the appropriate user information

// fs.readFileSync --> turns the file contents into a JS string

//* To replace variables inside of the resulting string, 
// use String.replace method replace variables inside of the template strings
// w / values

const fs = require('fs');

// Get the file contents of the profile-page.html as a string
const htmlTemplate = fs.readFileSync('./profile-page.html', 'utf-8');

const htmlPage = htmlTemplate
  // replace all instances of #{username} in the HTML file with 'DemoUser'
  .replace(/#{username}/g, 'DemoUser')
  // replace all instances of #{biography} in the HTML file with 'Hello World!'
  .replace(/#{biography}/g, 'Hello World!');

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>DemoUser's Profile Page</title>
// </head>
// <body>
//   <h1>Welcome to DemoUser's profile page!</h1>
//   <p>Hello World!</p>
//   <h2>Comment Box</h2>
//   <form method="post" action="/comment">
//     <p>To send a comment to DemoUser, fill out this form</p>
//     <textarea name="commentBody"></textarea>
//     <button type="submit">Comment</button>
//   </form>
// </body>
// </html>

/**********************************************************
 *TODO:                 Thursday Quiz
 **********************************************************/
//? Q1. What method is used to exchange variables inside 
//? of a template string with values ?
//! .replace
// E: Variables inside of a template string can be replaced with values
// using the String.replace method

//? Q2. True/False. The Content-Type headers do not need specific extensions
//? for static images.
//! False
// E: The Content-Type header should have the specific extension for the image
// type being sent. For example, a jpeg image would have a Content-Type 
// of image/jpeg

//? Q3. Which built-in fs Node.js method returns the contents of the file 
//? in a file path?
//! readFileSync
// E: The readFileSync reads the value of a file synchronously. If you pass in a string
// of utf-8 as a second argument, then the file contents can be read as a string

//? Q4. What is a static asset?
//! Some data or resource that does not change
// E: A static asset is some data or resource that will NOT change no matter how
// many times it is being asked for. Because it is a file that the server stored
// in memory, such as CSS or image

//? 5. True/False. You can use the same HTML template engine for different programming
//? languages.
//! False
// E: There are several different templates engines for different programming languages.
// PUG and handlebars are popular engines or Node.js and Jinja is a popular one for Python.
// Since they are different languages they do not share the same template engine.
