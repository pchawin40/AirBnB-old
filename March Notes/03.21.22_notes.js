// // Coding Review:
// /* Decimal to Binary */


// const dec2Bin = number => number.toString(2);

// let test1 = 5;
// console.log("Decimal to Binary");
// console.log("-----------------");
// console.log(dec2Bin(test1)  + "\n");



// /* Decimal to Hexadecimal */
// const dec2Hex = number => number.toString(16);

// console.log("Decimal to Hexadecimal");
// console.log("-----------------");
// console.log(dec2Hex(test1) + "\n");



// /* Decimal to ASCII text */
// const dec2ASCII = number => String.fromCharCode(number);

// console.log("Decimal to ASCII text");
// console.log("-----------------");
// console.log(dec2ASCII(test1));



// /* Binary to Decimal */
// const bin2Dec = binStr => parseInt(binStr, 2).toString(10);
// let test2 = 101;
// console.log(bin2Dec(test2));



// /* Binary to Hexadecimal */
// const bin2Hex = binStr => parseInt(binStr, 2).toString(16);
// console.log(bin2Hex(test2));



// /* Binary to ASCII text */
// const bin2ASCII = binStr => String.fromCharCode(parseInt(binStr, 2));
// console.log(bin2ASCII(101000));



// /* Hexadecimal to Decimal */
// let test3 = 101011;
// const hex2Dec = hexStr => parseInt(hexStr, 16).toString(10);
// console.log(hex2Dec(test3));



// /* Hexadecimal to Binary */
// const hex2Bin = hexStr => parseInt(hexStr, 16).toString(2);
// test3 = 'F';
// console.log(hex2Bin(test3));



// /* Hexadecimal to ASCII text */
// const hex2ASCII = hexStr => String.fromCharCode(parseInt(hexStr, 16));
// test3 = '4E';
// console.log(hex2ASCII(test3));



// /* ASCII text to Decimal */
// const ascii2Dec = (text, asciiArr = []) => {
//   text.split('').map(currentChar => {
//     let decChar = currentChar.charCodeAt(0).toString(10);
//     asciiArr.push(decChar);
//   })
//   return asciiArr.join(' ');
// }



// console.log(ascii2Dec("hello"));

// /* ASCII text to Binary */
// const ascii2Bin = (text, asciiArr = []) => {
//   text.split('').map(currentChar => {
//     let binChar = currentChar.charCodeAt(0).toString(2);
//     asciiArr.push(binChar);
//   });

//   return asciiArr.join(' ');
// }



// console.log(ascii2Bin("hello"));

// /* ASCII text to Hexadecimal */
// const ascii2Hex = (text, asciiArr = []) => {
//   text.split('').map(currentChar => {
//     let hexChar = currentChar.charCodeAt(0).toString(16);
//     asciiArr.push(hexChar);
//   });
//   return asciiArr.join(' ');
// }



// console.log(ascii2Hex("hello"));
