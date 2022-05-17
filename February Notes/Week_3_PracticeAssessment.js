/*
True or False: Destructuring an object must assign every value in the object to a variable.
> False

Can you use array destructuring to swap elements in an array?
> Yes

What is one way you can overwrite the key of b in the object a above?
> By using dot notation to set the key of b to a new value

True or False: An object is an example of an immutable data type.
> False

Using the above folder structure how would you navigate from the assets directory to the server directory?
> cd ../server

If you pass in an object that isn't destructured in the parameters of the function above, will you have access to the object's value of key3 in the destructure function?

> No
*/

let num1 = "s";
let num2 = 3;

[num1, num2] = [num2, num1];

console.log(num1);
console.log(num2);