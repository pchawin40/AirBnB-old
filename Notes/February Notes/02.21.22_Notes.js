// // debugger

// // function somethingSlow() {
// //   // some terribly slow implementation
// //   // assume that this function takes 4000 milliseconds to return
// // }

// // function foo() {
// //   console.log("food");
// // }

// // function bar() {
// //   console.log("bark");
// //   baz();
// // }

// // function baz() {
// //   console.log("bazaar");
// // }

// // setTimeout(foo, 1500);
// // setTimeout(bar, 1000);
// // somethingSlow();

// // // asynchronous: no guarantee in total order that commands are executed; opposite of synchronous
// // // Example: settimeout()
// // setTimeout(function () {
// //   console.log("time is up!");
// // }, 1500);

// // const slowCode = () => {
// //   console.log("Start of my function");
// //   let i = 0;
// //   console.log("Loading. . . .");

// //   setTimeout(() => {
// //     console.log("Code ran");
// //   }, 5000);


// //   console.log("Code still running");
// //   let myNum = (
// //     () => {
// //       return 100;
// //     }
// //   )()
// //   console.log(myNum);

// //   setTimeout(() => {
// //     console.log("SetTimeout2");
// //   }, 0);

// //   console.log("Done");
// //   // while (i < 10000000000) i++;
// //   // if (i === 10000000000) console.log("Code ran");

// //   // console.log("Done");
// // }
// const readline = require("readline");

// const interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // const question1 = answer => {
// //   console.log(`You said ${answer}`);
// // };

// // const question2 = answer => {
// //   console.log(`You said ${answer}`);
// // };

// // const question3 = answer => {
// //   console.log(`You said ${answer}`);
// //   // closes the interface (should be call in last)
// //   interface.close();
// //   console.log("DONE!");
// // };

// // interface.question("What is your name? ", question1);

// // interface.question('What is your name?', question2);
// // //   answer => {
// // //   console.log(`You said ${answer}`);
// // // });

// // interface.question('What is your age?', question3);
// // answer => {
// //     console.log(`You said ${answer}`);
// //     interface.close();
// // });



// // console.log("Don't run me yet!");

// // console.log(interface);

// // console.log(readline);

// const readline = require("readline");

// const interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// interface.question("What's up, doc? ", handleResponseOne);

// function handleResponseOne(firstAnswer) {
//   console.log(firstAnswer + " is up.");
//   interface.question("What's down, clown? ", handleResponseTwo);
// }

// function handleResponseTwo(secondAnswer) {
//   console.log(secondAnswer + " is down.");
//   interface.question("What's left, Jeff? ", handleResponseThree);
// }

// function handleResponseThree(thirdAnswer) {
//   console.log(thirdAnswer + " is left.");
//   interface.close();
// }

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("Test 1: ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is test1 response.");
  interface.question("Test 2: ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is test2 response.");
  interface.question("Test 3: ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is test3 response.");
  interface.close();
}
