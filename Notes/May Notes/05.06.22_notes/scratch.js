const a = [1, 2, 3, 4, 5];

const s = JSON.stringify(a);
console.log(s[0]); // "[1, 2, 3, 4, 5]" 

const v = JSON.parse(s);
console.log(v[0]); // [1, 2, 3, 4, 5] --> print 1
