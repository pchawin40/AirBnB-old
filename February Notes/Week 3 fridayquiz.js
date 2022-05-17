// const arr = ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst'];
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let newArr = new Array(arr.length).fill(null);

// console.log("before newArr: " + newArr);

// arr.forEach(function (str, i) {
//     if (vowels.includes(str[0])) {
//         newArr[i] = true;
//     } else {
//         newArr[i] = false;
//     }
// });


// arr.forEach(function (str, i) {
//     if (vowels.includes(str[0])) newArr[i] = true;
//     else newArr[i] = false;
// });

// console.log("after newArr: " + newArr);

// let newArr = arr.map(function (str) { return vowels.includes(str[0]) });
// let newArr = arr.filter(function (str) { return vowels.includes(str[0]) });
// let newArr = arr.reduce(function (str) { return vowels.includes(str[0]) });

// console.log("map newArr: " + newArr);

// const arr = [1, 2, 3, 4];
// let result = arr.reduce(function (acc, curr) {
//     return acc * curr;
// });

// find the product of arr using reduce() method
// const arr = [1, 2, 3, 4];

// let findProduct = arr.reduce(function (acc, curr) { return acc * curr; });

// console.log(findProduct);

// const parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];
// parks.forEach(function (park) { console.log(park) });

const arr = [1, 2, 1, 4, 3, 4, 2, 4, 1];

// 1
function uniqueV1(arr) {
    let result = arr.forEach(function (el, idx) {
        return arr.indexOf(el) === idx;
    });
    return result;
}

// console.log(uniqueV1(arr));

// 2
function uniqueV2(arr) {
    return arr.reduce(function (acc, curr) {
        if (acc.indexOf(curr) == -1) {
            return acc.concat([curr]);
        }
        return acc;
    }, [])
}

// console.log(uniqueV2(arr));

// 3
function uniqueV3(arr) {
    return arr.filter(function (el, idx) {
        return arr.indexOf(el) === idx;
    });
}

console.log(uniqueV3(arr));