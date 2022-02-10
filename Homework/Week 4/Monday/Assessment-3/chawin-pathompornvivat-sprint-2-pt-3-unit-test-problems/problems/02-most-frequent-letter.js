/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

/*
* This function takes a string as an argument and returns the characters
* that appears the most often. in case of a tie, it return any of the 
* characters. 
*
* @param {string} string
* @return {string} any character that is found most often in a given string
*/
function mostFrequentLetter(string) {
  // Your code here
  // variable for maxLetter count
  // variable for max letter itself
  let maxFreqLetter = string[0];

  // for each letter in string (using map method), if maxFreqLetter has less occurrence than currentLetter
  string.split('').map(currentLetter => {
    if (countOccurrences(string, maxFreqLetter) <= countOccurrences(string, currentLetter))
      // set maxFreqLetter to currentLetter
      maxFreqLetter = currentLetter;
  });

  // return maxLetter
  return maxFreqLetter;
} // end mostFrequentLetter() function

/*
* This helper function check how many time a given letter is found within
* a given string
*
* @param {string} str
* @param {string} letter
* @return {number} # of times a letter is found within given string
*/
let countOccurrences = (str, letter) => {
  // variable for counting letter occurrences in string
  let count = 0;

  // for all letter in str (using map), increment count by 1 if currentLetter is equal to letter
  str.split('').map(currentLetter => {
    if (currentLetter === letter) count++;
  });

  // return count
  return count;
}; // end countOccurrences() function

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentLetter;
} catch (e) {
  module.exports = null;
}
