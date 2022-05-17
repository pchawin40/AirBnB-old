// const myDefault = (string, array = myDefault(string, [])) => {
//   console.log(array);
// }

// myDefault('Hello');

const recursiveMyRangeBackwards = (num, array = []) => {
  if (num === 0) return array;
  array.push(num);
  return recursiveMyRangeBackwards(num - 1, array);
}
