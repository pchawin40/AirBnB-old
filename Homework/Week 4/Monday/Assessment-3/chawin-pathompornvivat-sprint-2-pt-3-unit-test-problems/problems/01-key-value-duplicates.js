/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []
***********************************************************************/

/*
* This function takes an object as an argument and returns an array containing
* all keys that are also values in the given obj object
*
* @param {object} obj
* @return {array} all keys that are also values in the given obj object
*/
function keyValueDuplicates(obj) {
  // Your code here
  // variable for keys that are also values in the object
  let keyArray = [];
  
  // for all keys in obj
  for (let keyIndex = 0; keyIndex < Object.keys(obj).length; keyIndex++){
    // temporary variable for key
    let key = Object.keys(obj)[keyIndex];
    // for all the values in key
    for (let valueIndex = 0; valueIndex < Object.values(obj).length; valueIndex++) {
      // temporary variable for value
      let value = Object.values(obj)[valueIndex];
      // if at anytime, key is equal to value,
      if (key === value) 
        // push key into key array
        keyArray.push(key);
    } // end valueIndex for loop
  } // end keyIndex for loop

  // return an array containing all keys that are also values in the object
  return keyArray;
} // end keyValueDuplicates() function

obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = keyValueDuplicates;
} catch (e) {
  module.exports = null;
}
