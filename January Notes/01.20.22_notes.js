// Conditionals if, else if, else
// function conditionalDemonstration(string){
//     // if length of string is greater than 0
//     if(string.toLowerCase() === "dog"){
//         console.log("You passed in a dog!"); // log to console "The string is not empty"
//     } // end if statement
//     else if(string.toLowerCase() === "cat"){ // if string is a cat
//         console.log("You passed in a cat!");
//     }
//     else if(string.toLowerCase() === "snake"){ // if string is equal to snake
//         console.log("You passed in a snake!");
//     }
//     else // else if not greater than 0
//     {
//         console.log("I don't understand that animal..."); 
    // }
// } // end function

// conditionalDemonstration("dog");
// conditionalDemonstration("rabbit");
// conditionalDemonstration("cat");
// conditionalDemonstration("snake");

// function doSomeMathFunction(num1, num2, operator){
//     if(operator === "+"){ // if operator is +
//         return num1 + num2; // return num1 add num2
//     } else if (operator === "-"){ // else if operator is -
//         return num1 - num2; // return num1 subtract num2
//     } else { // else
//         return "I don't understand that operator"; // return "I don't understand that operator"
//     } // end if-else statement
// } // end function

// // console.log(doSomeMathFunction(187, 156, '+')); // print 343
// // console.log(doSomeMathFunction(187, 156, '-')); // print 31

// loops, basic for and while loop
// function myWhileLoop(num1){
//     let index = 0;

//     while(index < string.length){
//         console.log(string[index], index); // print current index to console

//         index++; // increment index by 1
//     } // end while loop
// } // end function

// myWhileLoop("100");

// function doesMyNameHaveAnA(name){
//     let i = 0;
//     let amIDone = true;

//     while(amIDone){
//         if(i === 10000){
//             amIDone = false;
//         }

//         console.log(i);
//         i++;
//     }

//     console.log("I'm done!");
// }


// function myForLoop(string){

//     for(let i = string.length - 1; i >= 0; i--){
//         console.log(string[i], i);
//     }
// }

// myForLoop('Zaviar');

// Arrays .concat, indexOf look at mdn for all the array methods


// Info to know

// An array holds a ORDERED LIST of data

// We can call each item in an array of an element

// Index starts at 0
// function consoleLogger(string){
//     console.log(string);
// } // end function

// let myArray = [1, 2, 3, 4, 'Baylen', NaN, consoleLogger];

// console.log(myArray);

// for(let i = 0; i < myArray.length; i++){
//     if(i === myArray.length - 1){
//         myArray[i]('Baylen inside the loop');
//     }
//     console.log(myArray[i]);
// }

// let myArray = [1, 2, 3, 4];
// let myArray2 = [5, 6, 7, 8];
// let myArray3 = [9];

// let myNewArray = myArray.concat(myArray2, myArray3);
// console.log(myNewArray, myArray, myArray2, myArray3);

// let array1 = [];

// array1.push(1);
// console.log(array1);

// array1.push(2);
// console.log(array1);

// array1.push(3);
// console.log(array1);

// array1.push(4);
// console.log(array1);

// array1.push(5);
// console.log(array1);

// array1.pop();
// console.log(array1);

// array1.pop();
// console.log(array1);

// array1.pop();
// console.log(array1);

// array1.pop();
// console.log(array1);

