// Build a function called stringChanger() that takes in two arguments: a word and an operation.Based on the operation, your function will return the word modified in some way.The operations are:


// "capitalize": Capitalize the first letter in the word.


// "uppercase": Capitalize every letter in the word.


// "double": Return the word twice in a row.


// "reverse": Return the string with the letters in reverse order.


// If the operation is invalid, return the word, unchanged.


// This problem is worth 5 points.It is possible to get partial points on this problem.

function stringChanger(word, operation) {

    // before: operation is capitalize

    // after: operation becomes double


    // it does not check the type of our condition

    // 5 == "5.0" --> false

    // 5 === 5 --> true

    // 5 === "5.0" --> false

    // number is not equal to string

    // 1. "capitalize" capitalize the first letter in word
    if (operation === "capitalize") {
        return word[0].toUpperCase();
    } else if (operation === "upperCase") {
        // 2. "uppercase": Capitalize every letter in the word.
        return word.toUpperCase();
    } else if (operation === "double") {
        // 3. "double": Return the word twice in a row.
        return word + word;
    } else if (operation === "reverse") {
        // 4. "reverse": Return the string with the letters in reverse order.
        return reverseString(word);
    } else {
        // If the operation is invalid, return the word, unchanged. <-- "unchanged"
        return "unchanged";
    }



    // cut-paste because its (1) faster (2) we don't have to erase the code below it --> 
    // if-else statement is just a bunch of different if except its mashed together

} // end stringChanger() function

// "hello" --> "hello hello"

function reverseString(word) {
    // 1. how to print every letter in string from left to right: "hello" -->
    // z --> index at 0
    // e --> index at 1
    // b --> index at 2
    // r --> index at 3
    // o --> index at 4

    // how do you make 0 turn into 1 (math) 

    // for(define variable; condition for variable; how do we get this until it reaches the condition)
    for (let index = word.length - 1; index >= 0; index--) {
        // for (let index = 0; index < word.length; index++) {
        let letter = word[index]; // if index is 0 --> index 0 = 'h'

        console.log(letter);
    }

    // to make this function print in reverse
} // end reverseString() function
