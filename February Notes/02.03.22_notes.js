// // let myCombination = {...mySimpleObject, ...mySimpleObject1}
// // console.log(myCombination)

// let array1 = ['Baylen', 'zaviar', 'james'];
// // let [one, two, three] = array1;
// // let [, , three] = array1; // prints 'james'
// let [one, , three] = array1; // prints 'Baylen' and 'James'
// let [, three] = array1; // prints last element of an array (james)

// console.log(one, two, three);

// let addAndMultiply = function (num1, num2) {
//     return [num1 + num2, num1 * num2];
// }

// let [add, multiply] = (addAndMultiply(3, 9));

// console.log("add: " + add);
// console.log("multiply: " + multiply);

// let myPhone = {
//     color: 'space grey',
//     model: 'Iphone',
//     number: 123456,
//     ringtones: ['normal', 'chirp', 'classic'],
//     myRingtoneFunc: function (ring) {
//         console.log(ring);
//     }
// }

// let { color, model, number, ringtones, myRingtoneFunc } = myPhone;
// let { model: somethingDifferent } = myPhone;
// console.log(color, myRingtoneFunc("ring ring"));
// console.log(somethingDifferent);
// console.log(model); --> doesnt exist anymore
// let thisJSON = {
//     name: 'Bayley Doss',
//     age: 27,
//     friends: {
//         name: 'some name',
//     },
//     comments: {
//         1: 'a bunch of comments',
//         2: 'some other comments',
//         3: 'my last comment',
//         myLastComment: 'this is my last comment'
//     }
// };

// let { name: friendsName, comments } = thisJSON.friends;
// console.log(friendsName);
// console.log(comments);

// let { comments: { '3': someVar } } = thisJSON
// console.log(someVar);

// let myRestExampleFunc = function (string1, string2, ...rest) {
//     console.log(string1);
//     console.log(string2);
//     // console.log(rest);
//     for (i in rest) {
//         console.log(rest[i]);
//     }
// }

// myRestExampleFunc('baylen', 'zaviar', 'james', 'damian', 'Leah', 'Sherry');

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [8, 9, 10];

// console.log(...arr2);

let mySimpleObj = { name: 'baylen' };
let myObj2 = { age: 27 };
let myObj = { location: 'Dallas' };

let myWholeObject = { ...mySimpleObj, ...myObj2, ...myObj };
// console.log(myWholeArray);
let someState = { state: 'state' }
// let myNewState = { ...state, ...newAge }
let myCopy = { ...someState };
// console.log(myWholeObject, );
