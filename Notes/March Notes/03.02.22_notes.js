// // // // What is a class?
// // // // - Blueprint for something I want to use over and over again

// // // // String primitive type has no methods
// // // // class MyArray{
// // // //   constructor() {
    
// // // //   }
// // // // }

// // // // const myMyArr = MyArray(); // throws an error

// // // // const myArr = new Array(5, "hellow", null, [1, 2]);
// // // // const myArr = new Array("hellow");
// // // // myArr[3] === undefined;
// // // // myArr.push(35);

// // // // const myArr = [8, 2]; // new Array();

// // // // // console.log(myArr);
// // // // // console.log(myArr[0]);
// // // // // console.log(myArr.length);
// // // // console.log(myArr.length);
// // // // console.log(myArr.slice());

// // // // class myArray{
// // // //   constructor() {
// // // //     this.arr = [];
// // // //   }
// // // // }

// // // // const myArr = [8, 2];
// // // // const l = "length";

// // // // console.log(myArr[l]);
// // // // console.log(myArr.slice());

// // // // const myObj = {
// // // //   aProp: 25,
// // // //   aFunc: () => {
// // // //     console.log("something");
// // // //   },
// // // // };

// // // // myObj.aFunc();

// // // class ChipotleBurrito {
// // //   constructor(meat, fillings = [], wrapCount = 1) {
// // //     this.protein = meat;
// // //     this.fillings = fillings;
// // //     this.tortillaType = "Corn";
// // //     this.wrap = wrapCount;
// // //     // this.meat = !meat ? "no topping" : meat;
// // //   }

// // //   doorDash() {
// // //     let wrapStr;
// // //     if (this.wrap === 1) wrapStr = "single";
// // //     else wrapStr = "double"

// // //     return `Order me a ${this.protein} burrito with a ${wrapStr} ${this.tortillaType} tortilla with these fillings: ${this.fillings.join(', ')}`.toLowerCase();
// // //     //   return `Order me a ${this.protein} burrito with a ${this.wrap === 1 ? "single" : "double"}`;
// // //   // }
// // //   }
// // // }

// // // const myOrder = new ChipotleBurrito(
// // //   "Chicken",
// // //   ["White Rice", "Black Beans", "Sour Cream", "Salsa", "Guac"],
// // //   2
// // // );

// // // const baylenOrder = new ChipotleBurrito("Double Chicken", [
// // //   "Brown Rice",
// // //   "Pinto Beans",
// // // ]);

// // // // console.log(myOrder.fillings);
// // // console.log(myOrder.doorDash());
// // // console.log("---------------------------------------");
// // // console.log(baylenOrder.doorDash());

// // // // const aFunc = (aNum, aStr) => {
// // // //   console.log(aNum, aStr);
// // // // }

// // // // console.log(aFunc(["string"]));

// // // // const myTest = {
// // // //   aStr: "string",
// // // //   key: console.log(this),
// // // // };

// // // // myTest.key();


// // // const myObj = {
// // //   aStr: "Heyyyoooo",
// // //   aNotherFunc: function () {
// // //     console.log(this);
// // //   },
// // //   anInnerObj: {
// // //     aProp: 25,
// // //     aFunc: function () {
// // //       console.log(this);
// // //     },
// // //   },
// // // };

// // // myObj.myInnerObj.aFunc();
// // // myObj.aNotherFunc();

// // // let b = 2;
// // // a = 1;
// // // function baylensExample() {
// // //   console.log(this);
// // // }

// // // baylensExample();

// // class GamingPc{
// //   constructor(gpu, cpu, rgb) {
// //     this.gpu = gpu;
// //     this.cpu = cpu;
// //     // this.mobo = mobo;
// //     // this.pws = pws;
// //     // this.fans = fans;
// //     this.rgb = rgb;
// //     // this.ram = ram;
// //     // this.pcCase = pcCase;
// //     // this.storage = storage;
// //   }

// //   willItRun(name) {
// //     if (name === "Elden Ring") {
// //       if (Number(this.gpu[0]) < 2) this.bottleneck(this.gpu);
// //       else console.log("Good to game");
// //     }
// //   }

// //   bottleneck(...components) {
// //     console.log(`Your bottleneck is your ${components[0]}`);
// //   }
// // }

// // const myGpu = "2080";
// // // const myGpu = "1060";

// // const zavPC = new GamingPc("2080", "i7-9700k", true);
// // const zavPC = new GamingPc("1060", "i7-9700k", true);

// // zavPC.willItRun("Elden Ring");
// // baylensPc.willItRun("Elden Ring");

// // class Dog{
// //   constructor(name, breed, weight, injury, favToy) {
// //     this.name = name;
// //     this.breed = breed;
// //     this.weight = weight;
// //     this.injury = injury;
// //     this.favToy = favToy;
// //   }

// //   wagTail() {
    
// //   }

// //   fetchBall() {
    
// //   }

// //   countWags() {
    
// //   }
// // }

// // class Dog {
// //     constructor(name, breed, weight, age, favToy) {
// //       this.name = name;
// //       this.breed = breed;
// //       this.weight = weight;
// //       this.age = age;
// //       this.favToy = favToy;
// //     }
  
// //     eatFood(food, foodWeight) {
// //         console.log(`${this.name} ate ${food} gains ${foodWeight} pounds`);
// //         this.weight += foodWeight;
// //     }
  
// //     fetchToy(color, type ) {
// //         if(type === this.favToy) {
// //             console.log(`${this.name} play w/ it's favorite toy  ${this.favToy}`)
// //         }
// //         console.log(`${this.name} caught ${color} ${type} ${this.favToy}`)
// //     }
  
// //     getAge() {
// //         console.log(`${this.name} is ${this.age} years old `)
// //     }
// // }

// // const dog1 = new Dog("Bingsu", "Pomeranian", 20, 0.6, "Teddy Bear");
// // dog1.eatFood("fish", 20);
// // dog1.getAge();
// // dog1.fetchToy("Teddy Bear");

// // Choose either class, 3 params, 1 method - async

// // class Icecream{
// //   constructor() {
    
// //   }
// // }

// // class Bike {
// //   constructor() {
      
// //   }
// // }


// // class ClubMember {
// //   static clubMembers = [];

// //   static getClubMembers() {
// //     for(let i = 0; i < this.clubMembers.length; i++) {
// //         console.log(this.clubMembers[i]);
// //     }
// //   }

// //   static initiateMember(member) {
// //     console.log(`Welcome, ${member}!`);
// //     this.clubMembers.push(member);
// //   }

// //   constructor(name) {
// //     this.name = name;
// //     ClubMember.initiateMember(name);
// //   }
// // }

// // const larry = new ClubMember('Larry');
// // const pauline = new ClubMember('Pauline');

// // ClubMember.getClubMembers();

// // class Smoothie { 
// //     constructor(flavor, size) {
// //         this.flavor = flavor;
// //         Smoothie.size = size;
// //     }
// // }

// // let stwbry = new Smoothie('strawberry', 'small');
// // let stwbry2 = new Smoothie('strawberry', 'small');

// // stwbry.size = 'large';
// // console.log(stwbry.size);
// // console.log(stwbry2.size);

// // class Person {
// //   constructor(firstName) {
// //     this.firstName = 'Caleb';
// //   }

// //   greet() {
// //     console.log(`${this.firstName} says hello!`);
// //   }
// // }

// // const kristen = new Person('Kristen');
// // let test1 = kristen.firstName;
// // console.log(test1);

// // function pythagoreanCup() {
// //     pythagoreanCup();
// // };

// // pythagoreanCup();


// // class Task {
// //   static taskList = [];

// //   static printTaskList() {
// //     console.log(this.taskList);
// //   }

// //   static addTask(task) {
// //     this.taskList.push(task);
// //   }

// //   constructor(taskDetail) {
// //     this.taskDetail = taskDetail;
// //     Task.addTask(this);
// //   }
// // }

// // const laundry = new Task('laundry');
// // Task.printTaskList();

// // debugger

// // class Task {
// //   static taskList = [];

// //   static printTaskList() {
// //     console.log(this.taskList);
// //   }

// //   static addTask(task) {
// //     this.taskList.push(task);
// //   }

// //   constructor(taskDetail) {
// //     this.taskDetail = taskDetail;
// //     Task.addTask(this);
// //   }
// // }

// // const laundry = new Task('laundry');

// // let test1 = laundry.taskList;
// // console.log(test1);

// // class Task {
// //   static taskList = [];

// //   static printTaskList() {
// //     console.log(this.taskList);
// //   }

// //   static addTask(task) {
// //     this.taskList.push(task);
// //   }

// //   constructor(taskDetail) {
// //     this.taskDetail = taskDetail;
// //     Task.addTask(this);
// //   }
// // }

// // const laundry = new Task('laundry');
// // laundry.printTaskList();


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

//   eat() {
//     console.log(`You ate a ${this.taste} Apple!`);
//   }
// }

// const apple = new Apple();
// apple.eat();

class Fruit {
  constructor(color, taste) {
    this.color = color;
    this.taste = taste;
  }

  eat() {
    console.log(`You ate a ${this.constructor.name}.`);
  }
}

class Apple extends Fruit {
  constructor() {
    super('red', 'sweet');
  }

  eat() {
    console.log(`You ate a ${this.taste} Apple!`);
  }
}

const apple = new Apple();
const orange = new Fruit('orange', 'tangy');
orange.eat();
