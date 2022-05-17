// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(`${req.method} ${req.url}`);

//   let reqBody = "";
//   req.on("data", data => {
//     reqBody += data;
//   })
// })


// req.on("end", () => {
//   // Parse the body of the request as JSON if Content-Type header is application/json
//   //TODO
//   if (req.headers['content-type'] === "application/json")
//     JSON.parse(reqBody);
  
//   // Parse the body of the request as x-www-form-urlencoded if Content-Type header
//   // is x-www-form-urlencoded
//   if (req.headers['content-type'] === "x-www-form-urlencoded") {
//     req.body = reqBody
//       .split("&")
//       .map(keyValuePair => keyValuePair.split("="))
//       .map(([key, value]) => [key, value.replace(/\+/g, " ")])
//       .map(([key, value]) => [key, decodeURIComponent(value)])
//       .reduce((acc, [key, value]) => {
//         acc[key] = value;
//         return acc;
//       }, {})

//     // log the body of the request to the terminal
//     console.log(req.body);
//   }
        
//   let num = 1;
//   let arr = [1, 2, 3, 4, 5, 6];
//   const resBody = {
//     "Hello": "World!",
//     one: num,
//     arr: arr
//   };

//   console.log("Regular objewct", resBody);
//   console.log("converted to json", JSON.stringify(reqBody));
//   console.log("parsed again", JSOn.parse(JSON.stringify(resBody)));

//   // return the 'resBody' object as JSON in the body of the response
//   // TODO:
//   res.end(JSON.stringify(resBody));
// });

// const port = 5000;

// server.listen(port, () => console.log("Server is listening on port", port));

//? Create API documentation
// // Get all the posts
// `GET /posts`

// // Create a new post
// `POST /posts`

// // Edit a post
// `PUT /posts/:postId`

// // Create a new user
// `POST /users`

// // Get the comments for a post
// `GET /posts/:postId/comments`

// // Create a comment for a post
// `POST /posts/:postId/comments`

// // Edit a comment for a post
// `PUT /comments/:commentId`

// // Delete a comment for a post
// `DELETE /comments/:commentId`

// // Add a like for a post
// `PATCH /posts/:postId/likes`

// // Remove a like for a post
// `DELETE /posts/:postId/likes`

// // Get all the posts of a user
// `GET /users/:userId/posts`

// // Submit a search on posts
// `POST /posts/search`

//? Test API endpoints
/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response 
  components to the console
*/
// Your code here
fetch("/posts")
  .then(res => res.json())
  .then(resBody => console.log(resBody));

(async function () {
  const res = await fetch("/posts");
  const resBody = await res.json();

  console.log(resBody);
})();

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the 
  response components to the console
*/
fetch("/posts", {
  method: "POSTS",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: "something" })
})
  .then(res => res.json())
  .then(resBody => console.log(resBody));

// (async function () {
//   const res = await fetch("/posts", {
//     method: "POSTS",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ message: "something" })
//   });

//   const resBody = await res.json();
//   console.log(resBody);
// })();

(async function () {
  const res = await fetch("/posts", {
    method: "POSTS",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "something" })
  });

  const resBody = await res.json();
  console.log(resBody);
})
