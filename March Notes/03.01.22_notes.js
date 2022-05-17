// debugger

// class Animal{
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(this.sound);
//   }

//   static pet(animal) {
//     console.log(`You attempt to pet ${animal.name}`)
//   }
// }

// class Dog extends Animals { 
//   constructor(name) {
//     super(name, 'woof');
//   }
// }

// const fluffy = new Dog('Fluffy', 'woof');
// fluffy.speak();
// Dog.pet(fluffy);

debugger

// class Person {
//   constructor(firstName) {
//     this.firstName = 'Caleb';
//   }

//   greet() {
//     // this?
//     console.log(`${this.firstName} says hello!`);
//   }
// }

// const kristen = new Person('Kristen');
// kristen.greet();

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   greet() {
//     console.log(`${this.firstName} says hello!`);
//   }
// }

// const kristen = new Person('Kristen');
// Person.greet();


// class Person {
//   constructor(firstName) {
//     this.firstName = 'Caleb';
//   }

//   greet() {
//     console.log(`${this.firstName} says hello!`);
//   }
// }

// const kristen = new Person('Kristen');

// Person.firstName();

// class Person {
//   constructor(firstName) {
//     this.firstName = 'Caleb';
//   }

//   greet() {
//     console.log(`${this.firstName} says hello!`);
//   }
// }

// const kristen = new Person('Kristen');

// let test1 = Person.firstName;
// console.log(test1);

// class Fruit {
//   constructor(color, taste) {
//     this.color = color;
//     this.taste = taste;
//   }

//   eat() {
//     console.log(`You ate a ${this.constructor.name}.`);
//   }
// }

// class Apple extends Fruit {
//   constructor() {
//     super('red', 'sweet');
//   }
// }

// const orange = new Fruit('orange', 'tangy');
// const apple = new Apple();

// orange.eat();
// apple.eat();
// let test1 = apple.color;
// console.log(test1);


class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  greet() {
    console.log(`${this.firstName} says hello!`);
  }
}

const kristen = new Person('Kristen');

Person.greet();
