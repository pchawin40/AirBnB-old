// // javascript treats object and classes the same way

// // 

// // Just likey any object in real life

// // Phone

// // -- Color : 'space-grey'
// // -- model : '11'
// // -- number : '123-456-7890'
// // -- ringtones : ['normal', 'chirp', 'classic']

// let myPhone = {
//     color: 'space grey',
//     model: 11,
//     number: '12345',
//     ringtones: ['normal', 'chirp', 'classic']
// }

// let myKey = "color";
// let myNextKey = "model";

// // console.log(myPhone[myNextKey]);
// // console.log(myPhone.number);

// let printMyKey = function (keyString) {
//     console.log(myPhone.keyString);
//     console.log(myPhone[keyString]);
// }

// // printMyKey("ringtones");

// let myKeyKeyValue = function (key, value) {
//     if (myPhone.key !== undefined) {
//         console.log("I'm here");
//     }

//     console.log(myPhone.key);
//     // myPhone.key = value;
//     myPhone[key] = value;
//     myPhone.color = 'Green';
// }

// myKeyKeyValue('number', 67890);
// console.log(myPhone);

// let myPhone = {
//     color: 'space grey',
//     model: 11,
//     number: '12345',
//     ringtones: ['normal', 'chirp', 'classic']
// }

// let keyChecker = function (key) {
//     if (key in myPhone) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }

// keyChecker('color');
// keyChecker('name');

// let keys = Object.keys(myPhone);
// keys.map(keyChecker);

// for in loop
// for (let key in myPhone) {
//     let myValue = myPhone[key];
//     console.log("key: " + key);
//     console.log("myValue: " + myValue);
//     console.log();
// }

// let someArray = [0, 2, 4, 6, 8];
// for (index in someArray) {
//     console.log("index: " + index);
//     console.log("someArray[index]: " + someArray[index]);
// }

// for (key in myPhone) {
//     console.log(key);
// }

/* Object.keys */
// let myKeys = Object.keys(myPhone);
// for (let i = 0; i < myKeys.length; i++) {
//     let myKey = myKeys[i];
//     let myValue = myPhone[myKey];

//     console.log(myValue);
// }

// console.log(keys);

/* Object.values */
// console.log(Object.values(myPhone));


/* Object.entries: Put key and value at property 1 into single array and each key/value are string in the array */
// console.log(Object.entries(myPhone));
// console.log(myPhone['color']);
// delete myPhone.color // using 'delete' will delete a key from an object

// console.log(myPhone);

let myPhone = {
    color: 'space grey',
    model: 11,
    number: '12345',
    ringtones: ['normal', 'chirp', 'classic']
};


let myPhone2 = { ...myPhone };
myPhone2.color = "2";

console.log(myPhone.color);
console.log(myPhone2.color);