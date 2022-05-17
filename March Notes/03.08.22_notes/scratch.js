// "use strict" // prevent global object from being edited



// function contextExample(param1, param2, param3) {
  // console.log(this);
  // console.log(this.firstName);
  // console.log(this.lastName);
  // return "Zaviar";
//   console.log(param1, param2, param3);
//   return this;
// }

// const myContext = {
//   firstName: "Baylen",
//   lastName: "Doss"
// }

// bind
// let myBoundFunc = contextExample.bind(myContext, "Arg1", "Arg2", "Arg3");
// myBoundFunc();

// call vs apply
// let variable = contextExample.call(myContext, "Arg1", "Arg2", "Arg3");
// console.log(variable);

// let variable = contextExample.apply(myContext, ["Arg1", "Arg2", "Arg3"]);
// console.log(variable);
class Person{
  constructor(name, age) {
    this.name = !name ? "name" : name;
    this.age = !age ? "age" : age;
    this.coworkers = ["Zaviar", "James"];
  }

  printContext(cb) {
    console.log(this);
    // cb();
    // let boundCB = cb.bind(this);
    // boundCB();
    // cb.call(this);
    // cb.apply(this);
  }

  printCoworkers() {
    // this.coworkers.forEach((el, i) => console.log(this.coworkers[i]), this);
    // this.coworkers.forEach((el, i) => console.log(this.coworkers[i]).bind(this)); // same thing as using , this on 1 line above
    this.coworkers.forEach((el, i) => { console.log(this.coworkers[i]) });
  }
}

let baylen = new Person("Baylen", 27);

function myCB() {
  console.log(this);
}

baylen.printContext(myCB);
