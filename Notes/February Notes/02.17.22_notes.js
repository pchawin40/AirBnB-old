// function someFunction() {
//   console.log("myVar: " + myVar);
//   // console.log("somethingElse: " + somethingElse);

//   if (true) {
//     if (true) {
//       if (true) {
//         if (true) { 
//           var myVar = "Something";
//           let somethingElse = "Another";
//         }
//       }
//     }
//   }

//   console.log("myVar: " + myVar);
//   console.log("somethingElse: " + somethingElse);
// }

// someFunction();

// falsy values
// 0
// -0
// "", '', ``
// null
// undefined
// false -- boolean
// NaN
// 0n: bigNth --> 993193132141248712841284128481 

// 0 // falsy
// console.log(0 === false);
// if ('anything') {
//   console.log(true);
// } else {
//   console.log(false);
// }

(
  () => {
    console.log(`I am inside my IIFE`);
  }
)(10);

(
  function () {
    console.log(`I am inside my IIFE too`);
  }
)(20);
