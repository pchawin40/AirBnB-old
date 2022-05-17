/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
await fetch ("/products");


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
await fetch ("/products").then(res => res.status);
const code = await fetch("/products").then(res => res.status);
if (code === 200) console.log(true); else console.log(false);

/* =================== 3. Print the Content-Type Header =================== */

// Your code here
await fetch("/products").then(res => res.headers);


/* ============== 4. Print the body of the response as text =============== */

// Your code here
await fetch("/products").then(res => res.text());
