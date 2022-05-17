// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   }
// }

// const apple = new Fruit('apple');
// const orange = new Fruit('orange');
// const eat = apple.eat;

// eat.call(orange);

// function greeting(...messages) {
//   return messages.map(message => {
//     return `${this.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// class Spectator {
//   constructor(team) {
//       this.team = team;
//   }
  
//   cheerXTimes(x, y) {
//       for(let i = 0; i < x; i++) {
//           console.log(`I love the ${this.team}!!`);
//       }

//       for(let i = 0; i < y; i++) {
//           console.log(`Go ${this.team}!!`);
//       }
//   }
// }

// let lakersFan = new Spectator('Los Angeles Lakers');
// let celticsFan = new Spectator('Boston Celtics');

// lakersFan.cheerXTimes.call(celticsFan, [2, 2]);

// class Tea {
//     constructor(type) {
//         this.type = type;
//         this.toppings = [];
//     }

//     addTopping(topping) {
//         this.toppings.push(topping);
//         console.log(`Added ${topping}`);
//     }
// }
  
// let green = new Tea("Green");

// let addTopping = green.addTopping;
// addTopping("grass jelly");

// let boundAddTopping = addTopping.bind(green);
// boundAddTopping("grass jelly");


// function hello() {
//   return `Hello ${this.firstName}`;
// }

// const derek = {
//   firstName: 'Derek'
// };

// console.log(hello.bind(derek)());

// function greeting(...messages) {
//   const that = this;
//   return messages.map(function(message) {
//     return `${that.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// function hello() {
//   return `Hello ${this.firstName}`;
// }

// const derek = {
//   firstName: 'Derek'
// };

// console.log(hello.bind(derek));

// function hello() {
//   return `Hello ${this.firstName}`;
// }

// const derek = {
//   firstName: 'Derek'
// };

// const helloDerek = hello.bind(derek);
// console.log(helloDerek());

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));

// function greeting(...messages) {
//   const that = this;
//   return messages.map(function(message) {
//     return `${that.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.call(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.call(mylo, 'apple', 'orange', 'banana'));

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana']));

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));


// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   }
// }

// const apple = new Fruit('apple');
// const eat = apple.eat;
// setTimeout(eat, 1000);


// const sum = (...nums) => {
//   nums.reduce((acc, num) => acc + num);
// }

// console.log(sum(1, 2, 3));


// function greeting(...messages) {
//   return messages.map(message => {
//     return `${this.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));


// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   }
// }

// const apple = new Fruit('apple');
// const eat = apple.eat;
// eat();


// const sum = (...nums) => {
//   return nums.reduce((acc, num) => {
//     acc + num
//   });
// }

// console.log(sum(1, 2, 3));


// class Tea {
//     constructor(type) {
//         this.type = type;
//         this.toppings = [];
//     }

//     addTopping(topping) {
//         this.toppings.push(topping);
//         console.log(`Added ${topping}`);
//     }
  
// }
// let green = new Tea("Green");

// let addTopping = green.addTopping;
// addTopping("grass jelly");

// let boundAddTopping = addTopping.bind(green);
// boundAddTopping("grass jelly");

// function greeting(...messages) {
//   return messages.map(message => {
//     return `${this.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// class Spectator {
//   constructor(team) {
//       this.team = team;
//   }
  
//   cheerXTimes(x, y) {
//       for(let i = 0; i < x; i++) {
//           console.log(`I love the ${this.team}!!`);
//       }

//       for(let i = 0; i < y; i++) {
//           console.log(`Go ${this.team}!!`);
//       }
//   }
// }

// let lakersFan = new Spectator('Los Angeles Lakers');
// let celticsFan = new Spectator('Boston Celtics');

// lakersFan.cheerXTimes.call(celticsFan, [2, 2]);


// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   }
// }

// const apple = new Fruit('apple');
// const orange = new Fruit('orange');
// const eat = apple.eat;

// eat.call(orange);
