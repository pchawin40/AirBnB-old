// create interface
const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("what is your fave number?", num => {
  console.log(Number(num) === 42);
  interface.close();
});

// const handleFirstQuestion = answer => {
//   console.log(`Hello ${answer}`);
  
//   interface.question("Where are you from? ", handleSecondQuestion);
// };

// interface.question("What is your name? ", handleFirstQuestion);

// const handleSecondQuestion = answer => {
//     console.log(answer + "is a great place");

//     interface.question("How are you doing? ", handleThirdQuestion);
// }

// const handleThirdQuestion = answer => {
//   console.log("very cool, " + answer);
//   interface.close();
// }
