//? What does polymorphism contribute to OOP?

//? Provides a way for you to declare your classes without having to use the class keyword.
//? It is the 'P' in OOP.
//!  The ability to overload or extend a parent class' methods.
// Hides behavior and data behind methods that provide specific implementation signatures.
// Quite simply stated as "do one thing and do it right".


//? Which of the following is true about inheritance?
//  Inheritance is used to instantiate a clone of a parent object.
// Inheritance allows a child instance to access properties from a parent instance.
//  Inheritance allows a parent class to extend the expected behavior of a child class.
//!  Inheritance refers to when classes receive the properties and methods of their parent class.

//? From the following, choose the definition that best describes the object-oriented pillar of encapsulation.
//? "Encapsulation" is not an object-oriented pillar.
//?  "Encapsulation" drives the design of classes by requiring that any classes that inherit from a class must have the same invariants as the parent class.
// "Encapsulation" means to use data and methods from other objects specifically so that you can save that data to the file system, encapsulated in a file.
//!  "Encapsulation" puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn't need to worry about the details of it.

//? Which of the following keywords is used in JavaScript to inherit one class from another?
//  implements
//  inherits
//  instanceof
//!  extends

//? function processCommand(cmd, args) {
//?   if (cmd === "sumArgs") {
//?     let total = 0;
//?     for (let i = 0; i < args.length; i++) {
//?       total += args[i];
//?     }
//?     return total;
//?   } else if (cmd === "multiplyArgs") {
//?     let product = 1;
//?     for (let i = 0; i < args.length; i++) {
//?       product *= args[i];
//?     }
//?     return product;
//?   } else if (cmd === "printArgs") {
//?     for (let i = 0; i < args.length; i++) {
//?       console.log(args[i]);
//?     }
//?   } else if (cmd === "averageArgs") {
//?     return processCommand("sumArgs", args) / args.length;
//?   } else {
//?     console.log("Command not found");
//?   }
//? }
//? 
//? Which coding principle does the above code violate?
//! SRP
//? TDD
//? DRY
//? OOP

//? Which two of the following are ways to approach OOP design?
//?  Copy properties and methods into classes that are similar.
//!  Identify logical groups of functionality that can be organized with a class.
//  Define one class that takes care of all the functionality you want to provide.
//!  Write classes with the intention of being reusable and easily extendable.
//  Define multiple different classes to cover every possible future use case.

//? When would you use a static method over an instance method?
//  When the method's return value is immutable
// When the class is declared as a static class
//!  When the method acts on the entire class, not just one object instance
// When overriding an inherited method from a parent class

//  function identifyLetter(letter) {
//    if (letter === "a") {
//      console.log("Letter is a");
//    } else if (letter === "b") {
//      console.log("Letter is b");
//    } else if (letter === "c") {
//      console.log("Letter is c");
//    } else if (letter === "d") {
//      console.log("Letter is d");
//    } else {
//      console.log("Letter not found");
//    }
//  }
//  
//?  Which coding principle does the above code violate?
// TDD
//  SRP
// OOP
//!  DRY

// function hello() {
//   console.log(`Hello ${this.firstName}`);
// }

// const greeting = new hello();

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   printName() {
//     console.log(this.firstName);
//   }
// }

// const brian = new Person('Brian');
// brian.printName(); // ?

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// function printName() {
//   console.log(this.firstName)
// }

// const adrian = new Person('Adrian');

// printName(); // ?
// debugger

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//     // ?
//   }

//   printName() {
//     console.log(this.firstName);
//   }
// }

// const johnny = new Person('Johnny');

// class Hat {
//   constructor(type) {
//     this.type = type;
//   }

//   changeType() {
//     this.type = "snapback";
//   }
// }

// let bucket = new Hat("bucket");
// let change = bucket.changeType;
// change();
// console.log(bucket.type);

// class Cat {
//   purr() {
//     console.log("meow");
//   }

//   purrMore() {
//     purr();
//   }
// }
// let cat = new Cat();

// cat.purrMore();

// class Dog {
//   constructor(breed) {
//     this.breed = breed;
//   }

//   printBreed() {
//     console.log(`I'm a ${this.breed}`);
//   }
// }

// const rex = new Dog('Schnauzer');
// const breed = rex.printBreed();
// breed(); // ?

class NewClass{
  constructor() {
    
  } 
  
  printSomething() {
    console.log("Something");
  }
}

class NewClass2{
  constructor() {
    
  } 
  
  printSomething() {
    console.log("Something");
  }
}

try {
  // if importing only newClass
  // module.exports = newClass;
  module.exports = {
    NewClass,
    NewClass2
  }
} catch {
  module.exports = null;
}
