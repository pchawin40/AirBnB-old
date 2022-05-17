// What are the arguments that the `setTimeout` and `setInterval` methods can accept?
// 1. A callback function
// 2. A delay time in milliseconds
// 3. Any number of additional arguments to be passed to the callback

// const func1 = () => {
//   console.log("I need to run first, and nothing can run until I'm done");
// }

// setTimeout(() => {
//   console.log("Step 1: ");
//   let num = 100;
//   func1();

//   setTimeout(() => {
//     num += 100;
//     console.log("Step 2: ");
//     console.log("Done some calculation that future code depends on");

//     setTimeout(() => {
//       num += 100;
//       console.log("Step 3: ");
//       console.log(num, "We needed the previous code to run in order to get this number");
//     }, 3000)
//   }, 3000)
// }, 3000);

// console.log("This is based on func1, and I need func1 to run first");

const readline = require("readline");
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;
// let answerArray = new Array(5);
let answerArray = new Array(number);

const handleResults = function(index, answerArray, answer) {
  // process the answer
  answerArray[index] = Number(answer);

  // start the next question
  index++;
  if(index < answerArray.length) {
    // ask next questionno
    interface.question("value " + index + ": ", handleResults.bind(this, index, answerArray));
  }
  else {
    // we're done, wrap things up
    interface.close();
  }
};

interface.on("close", function() {
  console.log("unmodified answerArray: " + answerArray);
  console.log("sorting answerArray from smallest to biggest: " + sort(answerArray));
});

function setArraySize(numAnswer) {
  number = Number(numAnswer);
  answerArray = new Array(number);

  console.log("Your array size is: " + number);

  // Start the questions
  interface.question("value 0: ", handleResults.bind(this, 0, answerArray));
}

/*
* This function return a new array of numbers sorted from lowest to highest
*
* @param {array} nums
* @return {array} a new array of numbers sorted from lowest to highest
*/
function sort(nums, result = []){

    // base case: if nums length is 0, return result
    if (nums.length === 0) return result;

    // find smallest minimum value
    let minVal = Math.min(...nums);
    
    // get index of smallest value found in nums
    let minValIndex = nums.findIndex(currVal => currVal === minVal);

    // remove smallest value from nums
    nums = nums.slice(0, minValIndex).concat(nums.slice(minValIndex + 1));

    // add smallest value to result
    result.push(minVal);

    // recursively call sort back
    return sort(nums, result);
} // end sort() function

// Ask the user how big the array they would like
interface.question("How big of the array length would you like? ", setArraySize);
