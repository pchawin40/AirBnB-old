debugger
/* 
* Intro:
* Begin by creating a folder called guessing-game-project. Open the folder in VSCode. Inside of that folder
* create a guessing - game.js file.This is the file where we will do all of the coding.
*
* askGuess:
* Since we will be taking user input during gameplay, we'll need to do some standard setup for Node's readline module. 
* Reference the readline docs to create an interface for input and output that we will use. To stay organized, we recommend that 
* you import the module and create the interface at the tippy top of your file.
*/

// creating interface for input and output to be use with guessing-game
const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
* Begin by initializing a variable in the global scope named secretNumber to any positive integer. 
* Later we will program this variable to be assigned at random, but for now we'll hard-code a value that we can test for quickly.
*/
const secretNumber = Math.floor(Math.random() * 100);
console.log("secretNumber: " + secretNumber);

// global variable flag; defaulted as false
let flag = false;

/*
* This function accept a number as an argument. It then compare the argument against the global secretNumber.
* It then does:
* - when the argument is larger that secretNumber, it print "Too high" and return false
* - when the argument is smaller than secretNumber, it print "Too low" and return false
* - when the argument is equal to secretNumber, it print "Correct!" and return true
*
* @param {number} number
* @return {boolean} true if given number is equal to secretNumber. False, if not.
*/
const checkGuess = number => {
  // if number is greater than secretNumber
  console.log(number);
  if (Number(number) > secretNumber) {
    // print "Too high"
    console.log("Too high");
    // set flag to false
    flag = false;
  // else if number is less than secretNumber
  } else if (Number(number) < secretNumber) {
    // print "Too low"
    console.log("Too low");
    // set flag to false
    flag = false;
  // else
  } else {
    // print "Correct"
    console.log("Correct");
    // set flag to true
    flag = true;
  } // end if-else statement
  // call askGuess 
  askGuess();
} // end checkGuess() function

/*
* This function use the readline module's question method to ask the user to 'Enter a guess: '. Once the user enter 
* their number, the checkGuess funciton will be called with their number as an argument and the interface
* will be closed
*
* @param {nothing}
* @return {nothing}
*/
const askGuess = () => {
  // while flag is false
  if (!flag) {
    // ask user "Enter a guess: " + then send response over to checkGuess
    interface.question("Enter a guess : ", checkGuess);
  } // end while loop
  else {
    // if flag is true:
    // print "You win!"
    console.log("You win!");
    // close interface
    interface.close();
  }
} // end askGuess() function

// start askGuess() game
askGuess();
