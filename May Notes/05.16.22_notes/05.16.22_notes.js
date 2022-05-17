/**********************************************************
*TODO:                      Monday
***********************************************************/
/**********************************************************
*                Learning Boost - Monday
***********************************************************/
//? Q1. Which tab in your browser's Dev Tools is used to view the request
//? and responses of the page?
//! Network tab
// E: When you open up the network tab in your Dev Tools you can see requests
// and responses of the page. It will give you various information like the
// status code and even how long the response took

//? Q2. What of the following methods converts JSON-formatted string into a 
//? JavaScript object?
//! JSON.parse()
// JSON.parse() is used to turn JSON-formatted string into an JS object, whereas
// JSON.stringify() will turn the value into a string. Once it has been stringified,
// you can then pass it into the parse method

function twoSum(nums, target) {
  let arr = []; // O(1)
  for (let i = 0; i < nums.length; i++){ // O(n)
    current = nums[i]; // O(1)

    for (let j = i + 1; j < nums.length; j++) // O(n)
      next = nums[j]; // O(1)
    
    if (current + next === target) arr.push(i, j); // O(1)
  }

  return arr;
}
//? Q3. What is the time complexity of the function twoSum from the code above?
//! O(n^2)
// The function twoSum's time complexity is O(n^2) because there are two iterations
// that are occuring due to the nested for loop in the code block

/**********************************************************
*             Guided Practice: Browser Dev Tools
***********************************************************/
//? Chrome Dev Tools

//? Elements and Inspector
// Contains elements inspector and use for inspecting webpage to see how HTML are structured

//? Console
// Place to go for executing code within context of page
// - Also show console.log output from frontend code

//? Sources
// Place to write code (CSS and JS)

//? Network
// Tool for inspecting requests (i.e. initial page load or fetch requests)

//? Application
// Viewing app's cookies
// • Can delete cookies

/**********************************************************
*             Importing Scripts into HTML
***********************************************************/
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Importing JavaScript to HTML</title>
//         <script src="your-script-here.js"></script>
//         <script src="../your-other-script-here.js"></script>
//     <head>
//     <body>
//         ...
//     </body>
// </html>
//* Adding <script> tag with src attribute and supplying proper path
// path can be "relative" or "absolute" (url from webpage)

//? The rendering engine
// Parse HTML response and display that content in the browser after a network response
// is made to a server and response is sent back

// Critical Rendering Path: Basic flow to display content to the user which all rendering engines follows

//? Constructing the DOM
// (1) When HTML is received, the rendering engine parses the HTML and constructs the Document Object Model (DOM)
// (2) HTML is converted into nodes which form the DOM tree (i.e. hierarchy of nodes)
//  - Depending on whether there are scripts in an HTML file and where they are located, DOM construction may be paused
//    in order to finish parsing and executing JS

//* DOM tree is constructed incrementally (in the order that the HTML is received from the server: <head> --> <body> --> etc)

//? Script Placement
//* Recommended to place script tags at end of <body> instead of <head> and for rendering purposes as well
// <!DOCTYPE html>
// <html>
//     <head>
//         ...
//     <head>
//     <body>
//         ...
//         <script src="your-script-here.js"></script>
//     </body>
// </html>

/**********************************************************
*                 Formative Quiz - Monday
***********************************************************/
