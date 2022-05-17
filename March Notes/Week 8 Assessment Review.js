/**********************************
  *         Monday Quiz
 *********************************/
//? Q1. Is a setTimeout function an example of asynchronous or synchronous behavior?
//! A: Asynchronous
//  E: setTimeout is a prime example of a function that exhibits asynchronous behavior


//? Q2. Select all that apply. Identify use case of inheritance.
//! To allow a class to use another class's methods and variables
//! To provide a common interface for multiple similar classes
//! To create a hierarchy of classes
//  E: Inheritance can be used to provide a common interface for multiple classes that
// need to use the same methods and variables. It can also provide a naturial hierarchy
// of data. When a class inherits from another class, it gains access to that other 
// class's methods and variables. it is not used to overwrite methods of a class

//? Q3. True or False: The context of a regular function depends on how it is invoked
//! A: True
// E: When an unbound regualr function is invoked function-style, the context inside 
// of the function will be the global context. If it is invoked method-style, the context
// inside of the function will be the method's object. If it is invoked constructor-style,
// the context inside of the function will be the newly created instance of the constructor's
// class

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?     // ?
//?   }
//? 
//?   printName() {
//?     console.log(this.firstName);
//?   }
//? }
//? 
//? const johnny = new Person('Johnny');
//? Q4. Based on the code above, what will the context be in the constructor function when 
//? new Person('Johnny') is called?
//! A: johnny
// E: The constructor is invoked construction-style so it will return a new instance of the Person
// class. Therefore, the context inside of the constructor() will be that new instance
// which is the johnny object.

//? function hello() {
//?   console.log(`Hello ${this.firstName}`);
//? }
//? 
//? const greeting = new hello();
//? Q5. Based on the code above, what will new hello() do?
//! A: Print "Hello undefined"
// E: hello() is invoked constructor-style, so it will return a new instance of a hello object. Therefore,
// the context inside of hello() will be that new instance which is the greeting object. The greeting object
// doesn't have a firstName property, so thta property will evaluate to undefined

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? }
//? 
//? function printName() {
//?   console.log(this.firstName)
//? }
//? 
//? const adrian = new Person('Adrian');
//? 
//? printName(); // ?
//? Q6. Based on the code above, what will printName() do?
//! A: print "undefined"
// E: printName() is defined outside of the Person class. Therefore, the context inside of printName() will be the global object.
// The global object does not have a property of firstName set, so it will evaluate to undefined.

//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? 
//?   printName() {
//?     console.log(this.firstName);
//?   }
//? }
//? 
//? const brian = new Person('Brian');
//? brian.printName(); // ?
//? Q7. Based on the code above, what will brian.printName() do?
//! A: print "Brian"
// E: printName() is invoked method-style on the brian object. Therefore, the context inside of printName() will be the brian object.

//? class Cat {
//?   purr() {
//?     console.log("meow");
//?   }
//? 
//?   purrMore() {
//?     purr();
//?   }
//? }
//? let cat = new Cat();
//? 
//? cat.purrMore();
//? Q8. What will the above code print?
//! A: Error
// E: For a method to access another method from within the class declaration, the this keyword is necessary. So calling this.purr() would 
// yield the intended behavior, which is printing "meow" once.

//? function doubleAge() {
//?     return this.age * 2;
//? }
//? 
//? doubleAge();
//? Q9. What is the scope of the doubleAge function when called?
//! A: Global
// E: The scope of the function itself is global, so the context of this will be the global object

//? class Dog {
//?   constructor(breed) {
//?     this.breed = breed;
//?   }
//? 
//?   printBreed() {
//?     console.log(`I'm a ${this.breed}`);
//?   }
//? }
//? 
//? const rex = new Dog('Schnauzer');
//? const breed = rex.printBreed();
//? breed(); // ?
//? Q10. In the above code, what will breed() print?
//! A: I'm a undefined
//  E: When breed is assigned, it is assigned the raw method, and no longer
// has the context of rex. Instead breed will use the global object, which 
// will not have a this.breed property (unless you create it prior to executing
// this code).

//? class Hat {
//?   constructor(type) {
//?     this.type = type;
//?   }
//? 
//?   changeType() {
//?     this.type = "snapback";
//?   }
//? }
//? 
//? let bucket = new Hat("bucket");
//? let change = bucket.changeType;
//? change();
//? Q11. What will console.log(bucket.type) print?
//! A: Error
// E: The change() function call will print a TypeError because the reference of
// this is lost, but the original bucket object remains unchanged so bucket.type 
// stay as "snapback"

//? Q12. What does the "use strict" directive do?
//! A: Prevent global object from being accessed using this
// E: "use strict" prevents the global object from being accessed using the this keyword
// within global function invocations. The global object can still be accessed.
// In general, "use strict" prevents ANY variable that isn't explicitly declared
// (via the let, const, or var keywords) to be accessed

/**********************************
  *   Homework for Tuesday Quiz
 *********************************/
//? Q1. True or False: .call and .apply return a new function, while .bind directly calls
//? the function within the bound context
//! A: False
// E: The opposite is true .call and .apply will call the function within the bound context
// but will accept extra arguments in different manners. .bind will return a function with
// the newly bound context and arguments to be called later.

//? class Fruit {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   eat = () => {
//?     console.log(`${this.name} has a bite mark`);
//?   }
//? }
//? 
//? const apple = new Fruit('apple');
//? const orange = new Fruit('orange');
//? const eat = apple.eat;
//? 
//? eat.call(orange);
//? Q2. What is printed by the code above?
//! A: print "apple has a bite mark"
// E: Arrow functions are permanently bound to the context in which
// they are defined in. Since eat is specifically apple's eat method,
// it will not be properly bound to any other object

//? function greeting(...messages) {
//?   return messages.map(message => {
//?     return `${this.firstName} says ${message}`;
//?   });
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? const derekMessages = greeting.bind(derek, "Hello class!");
//? console.log(derekMessages("Goodbye class!"));
//? Q3. What will the code above do?
//! A: print ["Derek says Hello class!, "Derek says Goodbye class!"]
// E: An arrow funciton will bind itself to the context of wherever it was defined
// The arrow function in .map will be bound to the context of the greeting function
// when the greeting function gets called.

//? class Spectator {
//?   constructor(team) {
//?       this.team = team;
//?   }
//?   
//?   cheerXTimes(x, y) {
//?       for(let i = 0; i < x; i++) {
//?           console.log(`I love the ${this.team}!!`);
//?       }
//? 
//?       for(let i = 0; i < y; i++) {
//?           console.log(`Go ${this.team}!!`);
//?       }
//?   }
//? }
//? 
//? let lakersFan = new Spectator('Los Angeles Lakers');
//? let celticsFan = new Spectator('Boston Celtics');
//? 
//? lakersFan.cheerXTimes.call(celticsFan, [2, 2]);
//? Q4. True of False: The above code will print "I love the Boston Celtics!!"
//? twice and then "Go Boston Celtics!!" twice.
//! A: False
// E: The wrong method is being used .call accepts the arguments to be fed
// to the function as extra arguments, whereas .apply accepts an array of the arguments
// to be fed.

//? class Tea {
//?     constructor(type) {
//?         this.type = type;
//?         this.toppings = [];
//?     }
//? 
//?     addTopping(topping) {
//?         this.toppings.push(topping);
//?         console.log(`Added ${topping}`);
//?     }
//?   }
//? }
//? let green = new Tea("Green");
//? 
//? let addTopping = green.addTopping;
//? addTopping("grass jelly");
//? 
//? let boundAddTopping = addTopping.bind(green);
//? boundAddTopping("grass jelly");
//? Q5. What gets printed by the above code?
//! A: TypeError/Added grass jelly
// E: addTopping references the global object for this and there is no
// this.toppings property on the global object so an error is thrown.
// boundAddToppings binds the context of green to addTopping and properly
// references topping within green.

/**********************************
  *         Tuesday Quiz
 *********************************/
//? class Task {
//?   static taskList = [];
//? 
//?   static printTaskList() {
//?     console.log(this.taskList);
//?   }
//? 
//?   static addTask(task) {
//?     this.taskList.push(task);
//?   }
//? 
//?   constructor(taskDetail) {
//?     this.taskDetail = taskDetail;
//?     Task.addTask(this);
//?   }
//? }
//? 
//? const laundry = new Task('laundry');
//? Q1. Given the code above, what will laundry.taskList evaluate to?
//! A: undefined
//E: taskList is a static variable that can only be accessed on the Task class itself.
// it cannot be read on any instance of the class

//? Q2. Select all that apply. Which of the following describe the behavior of synchronous programming?
//? You can continue to execute another command, even if the current command has not yet been completed.
//! There is a guaranteed order.
//! You must wait for the current command to complete before moving on to executing another command.
//? There is not a guaranteed order.
// E: In synchronous programming, you must wait for the current command to complete before executing another
// command. Synchronous code accordingly also has a guaranteed order of execution.

//? function greeting(...messages) {
//?   const that = this;
//?   return messages.map(function(message) {
//?     return `${that.firstName} says ${message}`;
//?   });
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? const derekMessages = greeting.bind(derek, "Hello class!");
//? console.log(derekMessages("Goodbye class!"));
//? Q1. Based on the code above, what will be printed to the console?
//! A: print ["Derek says Hello Class!", "Derek says Goodbye class!"]
// E: bind accepts two arguments that will be passed in when the boudn function is invoked. Any arguments
// passed into the bound function will be appended to the arguments passed in when bound.

//? function hello() {
//?   return `Hello ${this.firstName}`;
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? console.log(hello.bind(derek)());
//? Q2. Based on the code above, what will be printed to the console?
//! A: print "Hello Derek"
// E: bind returns a copy of the function that it was called on, but bound to the object that was passed in as
// the first argument. The bound function is invoked right away, so the "Hello Derek" will be printed.

//? Q3. True or False: Calling bind on a function will invoke the function
//! A: False
// E: Calling bind on a funciton will not invoke the function

//? Q4. True or False: When bind is called on a function, bind will return a new function
//! A: True
// E: Calling bind on a function returns an entirenyl new function. The returned function is not the same
// function as the original function. You can still use the unbound original function.

//? function hello() {
//?   return `Hello ${this.firstName}`;
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? console.log(hello.bind(derek));
//? Q5. Based on the code above, what will be printed to the console?
//! A: print "[Function: bound hello]"
// E: bind returns a copy of the function that it was called on, but bound to the object that was passed in as
// the first argument

//? Q6. True or False: bind can only accept at most two arguments
//! A: False
// E: bind can accept any number of arguments. The first argument is the object to which you want to bind the function's
// context. Any remaining arguments will be passed into the bound function in the same order they were passed into bind

//? function hello() {
//?   return `Hello ${this.firstName}`;
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? const helloDerek = hello.bind(derek);
//? console.log(helloDerek());
//? Q7. Based on the code above, what will be printed to the console?
//! A: print "Hello Derek"
// E: bind returns a copy of the function that it was called on, but bound to the object that was passed in as
// the first argument. Even though the bound funciton is invoked function-styl, the context of the bound function
// will be the object it was bound to, derek.

//? Q8. True or False: You can change the context of a bound function.
//! A: False
// E: You cannot change the context of a function that already been bound

//? function eatFruits(...fruits) {
//?   return `${this.firstName} ate ${fruits.join(' and ')}`;
//? }
//? 
//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? }
//? 
//? const mylo = new Person('Mylo');
//? console.log(eatFruits.call(mylo, 'apple', 'orange', 'banana'));
//? Q9. What will the code above do?
//! A: print "Mylo ate apple and orange and banana"
// E: call invokes the function that is called on after it's been bound. It returns whatever the function it is
// called on returns. eatFruits is bound to mylo and gets invoked with "apple", "orange", and "banana" as three
// arguments. eatFruits will return a string of "Mylo ate apple and orange and banana"

//? function eatFruits(...fruits) {
//?   return `${this.firstName} ate ${fruits.join(' and ')}`;
//? }
//? 
//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? }
//? 
//? const mylo = new Person('Mylo');
//? console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));
//? Q10. What will the code above do?
//! A: Throw an error
// E: apply invokes the function that is called on after it's been bound. It returns whatever the function it is called on 
// returns. But it can only accept at most two arguments and the second argument must be an array. apply was not invoked
// with an array as its second argument, so it will throw an error.

//? Q11. True or False: Calling apply on a function will invoke the function.
//! A: True
// E: Calling apply on a function will invoke the function

//? function eatFruits(...fruits) {
//?   return `${this.firstName} ate ${fruits.join(' and ')}`;
//? }
//? 
//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? }
//? 
//? const mylo = new Person('Mylo');
//? console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana']));
//? Q12. What will the code above do?
//! A: print "Mylo ate apple, orange, banana"
// E: call invokes the function that is called on after it's been boudn. It returns
// whatever the function it is called on returns. eatFruits is bound to mylo and gets invoked
// with an array of "apple", "orange", "banana" as its first argument. fruits will be an array
// with a length of one. eatFruits will return a string of "Mylo ate apple, orange, banana"

//? Q13. True or False: When call is called on a function, call will always return a new function.
//! A: False
// E: Calling call on a function returns whatever the function returns after it's been bound and
// invoked by call.

//? Q14. True or False: apply can only accept at most two arguments.
//! A: True
// E: apply can only accept at most two arguments. The first argument is the object, to which you want
// to bind the function's context. The second argument is an array of arguments that will be passed into 
// the bound function as multiple arguments.

//? function greeting(...messages) {
//?   const that = this;
//?   return messages.map(function(message) {
//?     return `${that.firstName} says ${message}`;
//?   });
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? const derekMessages = greeting.call(derek, "Hello class!");
//? console.log(derekMessages("Goodbye class!"));
//? Q15. What will the code above do?
//! A: throw an Error
// Personal E: call returns a function. bind returns whatever the function returns. cannot call if 
// an expression does not return a function 
// E: call invokes the funciton that it is called on after it's been bound. It returns 
// whatever the function it is called on returns. Since greeting returns an array
// and not a function, derekMessages will evaluate to an array. You cannot invoke
// an array so an error will be thrown

//? Q16. True or False: When apply is called on a function, apply will always return a new function.
//! A: False
// E: Calling apply on a function returns whatever the function returns after it's been bound and invoked 
// by apply

//? function eatFruits(...fruits) {
//?   return `${this.firstName} ate ${fruits.join(' and ')}`;
//? }
//? 
//? class Person {
//?   constructor(firstName) {
//?     this.firstName = firstName;
//?   }
//? }
//? 
//? const mylo = new Person('Mylo');
//? console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));
//? Q17. What will the code above do?
//! A: print "Mylo ate apple and orange and banana"
// E: apply invokes the function that it is called on after it's been bound.
// It returns whatever the function it is called on returns. eatFruits is bound
// to mylo and gets invoked with an array of 'apple', 'orange', 'banana' spread out
// into three arguments. fruit will be an array with a length of three. eatFruits
// will return a string of "Mylo ate apple and orange and banana"

//? Q18. True or False: call can only accept at most two arguments.
//! A: False
// E: call can accept any number of arguments. The first argument is the object to
// which you want to bind the functions' context. Any remaining arguments will be
// passed into the bound function in the same order they were passed into call.

//? Q19. True or False: Calling call on a function will invoke the function.
//! A: True
// E: Calling call on a function will invoke the function

//? Q20. True or False: The context of an arrow function depends on how it is invoked.
//! A: False
// E: An arrow function is bound to the context of whatever it was defined. The context
// does not depend on if it was invoked function, method, or constructor style.

//? const sum = (...nums) => {
//?   return nums.reduce((acc, num) => acc + num);
//? }
//? 
//? console.log(sum(1, 2, 3));
//? Q21. What will the code above do?
//! A: print 6
// E: sum is a multi-line fat-arrow function. It will return whatever comes after the return
// keyword which is whatever nums.reduce(...) returns. The callback function passed into 
// nums.reduce is a one-line fat-arrow function. It will return the accumulator plus the 
// given number. The result of nums.reduce will evaluate to 6, so the sum function will
// always return 6

//? class Fruit {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   eat = () => {
//?     console.log(`${this.name} has a bite mark`);
//?   }
//? }
//? 
//? const apple = new Fruit('apple');
//? const eat = apple.eat;
//? setTimeout(eat, 1000);
//? Q22. What will the code above do?
//! A: print "apple" after 1 second
// E: The eat function is bound to the Fruit instance of apple because the eat method on the Fruit
// class is defined as an arrow function. So the coontext inside of the eat function will always be 
// apple no matter how it is invoked.

//? Q23. True or False: You can use bind, call, or apply to change the context of an arrow function.
//! A: False
// E: An arrow function is already bound to the context of whatever it was defined. Since you cannot change
// the context of a bound function, you cannot change the context of an arrow function

//? const sum = (...nums) => {
//?   nums.reduce((acc, num) => acc + num);
//? }
//? 
//? console.log(sum(1, 2, 3));
//? Q24. What will the code above do?
//! A: print undefined
// E: sum is a multi-line fat arrow function. It will return undefined unless a return keyword is used.

//? function greeting(...messages) {
//?   return messages.map(message => {
//?     return `${this.firstName} says ${message}`;
//?   });
//? }
//? 
//? const derek = {
//?   firstName: 'Derek'
//? };
//? 
//? const derekMessages = greeting.bind(derek, "Hello class!");
//? console.log(derekMessages("Goodbye class!"));
//? Q25. What will the code above do?
//! A: print ["Derek says Hello Class!", "Derek says Goodbye Class!"]
// E: An arrow function will bind itself to the context of wherever it was defined. The arrow function is .map
// will be bound to the context of the greeting function when the greeting function gets called.

//? class Fruit {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   eat = () => {
//?     console.log(`${this.name} has a bite mark`);
//?   }
//? }
//? 
//? const apple = new Fruit('apple');
//? const eat = apple.eat;
//? eat();
//? Q26.
//! A: print "apple has a bite mark"
// E: The eat function is bound to the Fruit instance of apple because th eat method on the Fruit class is defined 
// as an arrow function. So the context inside of the eat function will always be apple no matter how it is invoked.

//? const sum = (...nums) => {
//?   return nums.reduce((acc, num) => {
//?     acc + num
//?   });
//? }
//? 
//? console.log(sum(1, 2, 3));
//? Q27. What will the code above do?
//! A: print "undefined"
// E: sum is a multi-line fat arrow function. It will return whatever comes fater the return ekyword which is
// whatever nums.reduce(...) returns. The callback function passed into nums.reduce is a multi-line fat-arrow
// function. It will always return undefined because there is no return keyword in the callback function,
// so the accumulator will always be undefined. The result of nums.reduce will always evaluate to undefined, so
// the sum function will always return undefined.

/*****************************************************
  *         Homework for Wednesday Quiz
 ****************************************************/
//? try {
//?   const hello = 'Hello World';
//?   if (typeof hello === 'string') {
//?     throw new Error('Hello?');
//?   }
//? } catch(e) {
//?   console.log(e.message);
//? }
//? 
//? console.log('Finished execution');
//? Q1. If you run the code above, what will happen?
//! A: print "Hello?" then print "Finished execution"
// E: The code inside of the try block will throw an error, so the code in the catch block is executed, printing
// the error message. Catching an error allows the code to continue to be run, so the log after the try/catch block is 
// executed as well.

//? class Fruit {
//?     constructor() {
//?         // ...
//?     }
//? }
//? 
//? console.log(fruit);
//? Q2. If you run the code above, what type of error will occur?
//! A: ReferenceError
// E: The fruit variable has not been declared, leading to an invalid variable reference

//? Q3. Generally, in what order should tests be written from first to last?
//! A: Unit Testing, Integration, End-to-end testing
// E: Unit tests test basic functionality of small code blocks. Integration tests check if these small blocks
// work together properly in larger contexts like a class. And end-to-end tests test if all the classes and their
// components work together

//? Q4. Which of the following are pros of using a TDD approach? Select all that apply:
//! TDD helps enforce code modularity.
//! Only required code is written.
//! Writing tests before code ensures that the code written works.
//! Better understanding of what the code should be doing.
// E: In general, TDD allow for clearer goals to be set, which makes for more time-efficient work

//? Q5. True or False: You should wrap blocks of code in try...catch blocks as much as possible.
//! A: False
// E: Wrap blocks of code in try...catch that you want to debug or expect to have an error that you want to cause
// something else to happen. Do not introduce try...catch blocks everywhere because it's messy and will cause your
//code to execute slower

/*****************************************************
  *               Wednesday Quiz
 ****************************************************/
//? Q1. True or False: The context of a regular function depends on how it is invoked.
//! A: True
// E: When an unbound regular funciton is invoked function-style, the context inside of the function will be the global
// context. If it is invoked method-style, the context inside of the function will be the method's object. If it is invoked
// constructor-style, the context inside of the function will be the newly created instance of the constructor's class.

//? console.log('hello'); // line 1
//? // line 2
//? console.log('world'); // line 3
//? Q2. In the code above, if you execute an asynchronous function call on line 2 that will print good morning sun, 
//? will good morning sun print before world ?
//! A: nope
// E: Asynchronous function cals will always execute sometime after all the function calls in the current stack

//? const 1 = 10;
//? Q3. If you run the code above, what type of error will occur? 
//! A: SyntaxError
// E: Using a number for a variable name, or starting the with a number invalid JavaScript syntax.

//? console.log(potato);
//? const potato = "potato";
//? Q4. If you run the code above, what type of error will occur?
//! A: ReferenceError
// E: The potato variable is referenced before it is declared

//? console.log(potato);
//? Q5. If you run the code above, what type of error will occur?
//! A: ReferenceError
// E: The potato variable has not been declared, leading to an invalid variable reference

//? const num = 10;
//? num();
//? Q6. If you run the code above, what type of error will occur?
//! A: TypeError
// E: num is declared as a Number type but is being called like a function, leading to a TypeError

//? class User {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   changeName(newName) {
//?     this.name = newName;
//?     this.speak();
//?   }
//? 
//?   speak() {
//?     console.log(this.name);
//?   }
//? 
//? }
//? 
//? const user = new User("Brady");
//? changeName = user.changeName;
//? changeName("Brian");
//? Q7. If you run the code above, what type of error will occur?
//! A: TypeError
// E: The changeName function will lose context and throw TypeError: Cannot set
// property 'name' of undefined. This can be fixed by binding the function back to the
// user object: const boundChange = user.changeName.bind(user); boundChange("Brian");

//? function foo() {
//?   foo();
//? }
//? 
//? foo();
//? Q8. If you run the code above, what type of error will occur?
//! A: RangeError
// E: This infinite recursion will overflow the stack, causing JavaScript to return a
// RangeError: Maximum call stack size exceeded error.

//? Q9. True or False: In JavaScript, if an error is thrown and not caught, all code execution will 
//? stop and exit the program.
//! A: True
// E: When something is thrown and isn't caught or handled, then all code execution will stop
// and exit the program

//? Q10. True or False: You should wrap blocks of code in try...catch blocks as much as possible.
//! A: False
// E: Wrap blocks of code in try...catch that you want to debug or expect to have an error
// that you want to cause something else to happen. Do not introduce try...catch blocks everywhere because
// it's messy and will cause your code to execute slower.

//? function errorThrown(message) {
//?   console.log(message);
//? }
//? 
//? try {
//?   const num = 10;
//?   if (typeof num !== 'string') {
//?     throw new Error('Need a string');
//?   }
//? } catch(e) {
//?   errorThrown(e.message);
//? }
//? Q11. If you run the code above, what will happen?
//! A: print "Need a string"
// E: The code inside of the try block will throw an error, so the code in the catch block is executed
// and calls errorThrown with the message property of the error which will be "Need a string".
// errorThrown will print that message.

//? try {
//?   const num = 10;
//?   if (num !== 0 {
//?     console.log("Not zero!");
//?   }
//? } catch (e) {
//?   if (e instanceof SyntaxError) {
//?     console.log("There was a SyntaxError");
//?   }
//? } finally {
//?   console.log("Was it zero?");
//? }
//? Q12. If you run the code above, what will happen?
//! A: throw a SyntaxError then stop the program
// E: The code inside of the try block will throw a SyntaxError error and SyntaxError can never  be
// caught so the code will stop execution before it can print anything. But, if the syntax was fixted in the
// code above and there was no SyntaxError, what would happen?

//? try {
//?   const hello = 'Hello World';
//?   if (typeof hello !== 'string') {
//?     throw new Error('Hello?');
//?   }
//? } catch(e) {
//?   console.log(e.message);
//? }
//? Q13. If you run the code above, what will happen?
//! A: nothing noticeable will happen
// E: The code inside of the try block will not throw an error, so the code in the catch block never
// executed.

//? const hello = 'Hello World';
//? try {
//?   hello();
//? } catch {
//?   console.log("Invoking 'Hello World' failed");
//? }
//? Q14. If you run the code above, what will happen?
//! A: print "Invoking "Hello World" failed"
// E: Since the line of the code that will throw the error is inside of the try block, the catch
// block will catch the error and print out "Invoking 'Hello World' failed"

//? Q15. Identify reasons why we write tests.
//! A: We write tests:
//! - To refactor the code with confidence
//! - To collaborate easier
//! - To modify code with confidence
//! - because tests are like documentation for the code
//! To clear expectation set for the code
//! To make sure the code works
// E: Test specs help you test if your code works through implementation, refactors, and modifications. It also
// outlines the expectations for the code that you are testing. Because of this, it allows easier collaboration
// with other developers who may use or modify the code that is being tested. Tests are like documentatinon for
// the code if they are written well. All tests are not easy to write. Coming up with test cases is sometimes
// challenging. And no matter how well you write your tests, your code may still have bugs or errors that
// tests don't catch or look out for

//? Q16. True or False: According to the testing pyramid, integration test specs test if a part of your
//? code works in isolation.
//! A: False
// E: The integration tests are used to test if multiple parts of your code are integrated properly. Unit
// tests are used to test if code works in isolation first before integration testing.

//? Q17. True or False: According to the testing pyramid, the majority of your test specs will be unit tests.
//! A: True
// E: The unit tests in the testing pyramid take up the biggest square area in the pyramid at the base
// of the pyramid. This is because the majority of the tests will be testing the implementation of smaller
// parts of code.

//? Q18. True or False: According to the testing pyramid, end-to-end tests are the slowest tests to run.
//! A: True
// E: Because the end-to-end tests simulate a user using features of your application, it will be the
// slowest to run and may take hours to execute

//? Q19. What should your test specs cover?
//! A: The function and pieces that will be used by other modules or classes
// E: Test specs only need to cover the pieces that will be used by other modules or classes
// which is the interface that the code provides. Test specs don't need to cover the nitty-gritty 
// implementation behind those pieces because it will be covered by testing the overall interface of the code

//? Q20. What is the "Green" step in TDD?
//! A: Write a minimum amount of code until all specs pass
// E: The "Green" step in TDD is to implement code that passes all the test specs written in the "Red" step

//? Q21. What is the "Red" step in TDD?
//! A: Write test specs that fail
// E: The "Red" in TDD is to write test spec that fail. You should not implement code until you write all the
// expectations of the code in the form of test specs

//? Q22. True or False: In TDD, you write tests specs first before you do any implementation.
//! A: True
// E: When doing TDD< test specs need to be written first before you implement the code that the test specs
// are testing

//? Q23. Identify reasons to use TDD
//! A: TDD is used because it:
//! - Makes expectations of the code clearer
//! - Code is guaranteed to be testable
//! - Reduces unnecessary functionality
//! - Easier collaboration
//! - Code is more modular
// E: TDD makes sure that the code that you write and the expectation that you have for the code are testable.
// It makes the expectations of the code clearer allowing easier collaboration between developers. Expectations
// set before implementation also reduces unnecessary functionality of the code. Code is written in small, 
// testable chunks which makes the code more modular and can be used in more applications. It does not 
// guarantee project completion because it makes development slower. Although it makes development slower,
// it drastically decreases the amount of technical debt that your application could accrue over time

//? Q24. What is the "Refactor" step in TDD?
//! A: Refactor the code to make it more maintainable and easy to read while still passing all the specs
// E: The "Refactor" step in TDD is to refactor your minimum implementation in the "Green" step to make it
// more maintainable and readable

//? Q25. Which TDD step should you start at when you want to add or modify expectations of the code?
//! A: "Red" step
// E: In the "Red" step, you outline the expectations of the code and turn them into test specs. If you
// modify or add to the expectations, you need to add or modify the test specs accordingly.

//? Q26. If you are testing a file called quiz.js, what should the test spec file be called?
//! A: quiz-spec.js
// E: The convention for naming Mocha test spec files is by appending -spec to the name of the file
// you are testing

//? Q27. Which of the following functions is used to group test specs in Mocha?
//! A: describe
// E: The describe function is used to define a group of test specs in Mocha and their purpose

//? Q28. Using the Chai docs as a reference, which of the following is an example of asserting
//? that the throwsAnError function will throw any error ?
//! A: expect to throw: expect(cb).to.throw()
// E: Should use the throw method to check if an error is thrown in a function call. throwsAnError
// may throw an error that will stop the execution of all code. Mocha needs the ability to call the
// function and handle it so that it will not stop the execution of the test specs. An alternative
// could have been expect(throwsAnError).to.throw()

//? Q29. Using the Chai docs as a reference, which of the following is an example of asserting 
//? that the num variable evaluates to true ?
//! A: expect(num).to.be.true
// E: You should use the true method to check if certain code evaluates to true. An alternative
// could have been expect(num).to.equal(true)

//? describe("Person", () => {
//?   let alex;
//? 
//?   beforeEach(() => {
//?     alex = new Person("Alex");
//?   });
//? 
//?   afterEach(() => {
//?     alex = null;
//?   })
//? 
//?   describe("constructor", () => {
//?     it("should set the name property to the given name argument", () => {
//?       expect(alex.name).to.eq("Alex");
//?     });
//?   });
//? });
//? Q31. What are possible reasons that the code above would fail?
//! A: If the new Person, alex does not have a name property of "Alex"
//! If there is no Person class
// E: The code would obviously fail if there is no Person class defined. It would also fail
// if initializing a new Person does not set the name property to "Alex"

//? Q32. Which of the following functions is used to test a single spec in Mocha?
//! A: it
// E: The it function is used to define a single test spec in Mocha and its purpose

//? Q33. Using the Chai docs as a reference, which of the following is an example of 
//? asserting that the person object has properties of firstName and lastName ?
//! A: expect(person).to.have.all.keys('firstName', 'lastName');
// E: You should use the keys method to check if an object has a list of properties

//? Q34. Which directory will Mocha default to look in for running test spec files?
//! A: test
// E: Running tests with Mocha will default to looking for and running test spec in the
// test directory if no file or directory is provided

//? Q35. Which of the following Node.js modules is a testing framework?
//! A: Mocha
// E: Mocha is a testing framework that developers can use to write and run tests in JavaScript

//? Q36. Which of the following Node.js modules is an assertion library?
//! A: Chai
// E: Chai is an assertion library that can be used in a testing framework to perform test
// comparisons that will cause test specs to pass or fail

//? Q37. Which of the following functions is used to define when a test spec passes or fails in Chai?
//! A: expect
// E: The expect function from the Chai assertion library is used to define an assertion that will
// cause a test spec in Mocha to pass or fail

/*****************************************************
  *          Homework for Thursday - Quiz
 ****************************************************/

//? Q1.  What is an edge case?
//! A: Bugs that are uncommon for users to encounter
// E: Edge cases are condition where your code can break by certain unlikely actions
// by a user

/*****************************************************
  *               Thursday - Quiz
 ****************************************************/

//? Q1. True or False: You can change the context of a bound function.
//! A: False
// E: You cannot change the context of a function that has already been bound

//? function far() {
//?     console.log('farm!')
//? }
//? 
//? function boo() {
//?     console.log('boop!');
//?     setTimeout(far, 1000);
//?     console.log('beep!');
//? }
//? 
//? setTimeout(boo, 1000);
//? console.log('buzz');
//? Q2. Given the sequence of console logs in the code above, at what point will the 'farm!' message print??
//! A: Fourth
// E: Since far is called asynchronously, it will not block execution for the 'beep!' from being logged
// to the console

//? Q3. What is an edge case?
//! A: Bugs that are uncommon for users to encounter
// E: Edge cases are conditions where your code can break by certain unlikely actions by a user

//? Find the first longest name in a list of names.
//? Q4. What are examples of unintuitive cases for the problem above? (Can be one, multiple, or none)
//! A: All the names have the same length
// E: An unintuitive case you need to take into account is the possibility of every single name
// having the same length. All the other cases are edge cases

//? Find the first longest name in a list of names.
//? Q5. What are examples of edge cases for the problem above? (Can be one, multiple, or none)
//! A: Edge cases for this expression are if:
//! - The input array is empty
//! - The input array has 1,000 names
//! - The input is not an array
// E: The edge cases define how a problem performs under uncommon circumstances like invalid inputs or
// large inputs

//? Find the first vowel of a given string.
//? Q6. What are examples of edge cases for the problem above? (Can be one, multiple, or none)
//! A: The edge cases for finding first vowel of a given string are:
//! - The input string only has one character
//! - The input is not a string
//! - An input string that is empty
// E: The edge cases define how a problem performs under uncommon circumstances like invalid inputs
// or small inputs

//? Find the first vowel of a given string.
//? Q7. What are examples of unintuitive cases for the problem above? (Can be one, multiple, or none)
//! A: If there are more than one vowel in a given string
// E: An unintuitive case you need to take into account is the possibility of having multiple vowels,
// not just one. All the other cases are edge cases.

//? Q8. What are some typical edge cases of a problem?
//! A:
//! - A maximum input
//! - Invalid inputs
//! - Very small inputs
//! - Very large inputs
//! - A minimum input

/*****************************************************
  *                 Friday - Quiz
 ****************************************************/

//? Q1. Which of the following errors represents an error when a variable or parameter is not valid?
//! A: TypeError
// E: If the variable or parameter is not valid the error that is thrown is a TypeError. Usually,
// it could be spelling or the wrong parameter has been inputted

//? console.log(7 + 22 % 5);
//? Q2. What will the code above console.log?
//! A: print 9
// E: The modulo operator lies in the same realm as a division in JS math operations order of
// parentheses, multiplication, division, addition, and subtraction. Since it is in the division 
// section, it has precedence over addition

//? Q3. True/False. Node has access to the document object that contains the HTML of the page.
//! A: False
// E: There is no document in Node. Only the browsers have access to the document object that
// gets rendered to the browser window

//? class NameError extends Error {
//?   constructor(...params) {
//?     super(...params);
//? 
//?     if (Error.captureStackTrace) {
//?       Error.captureStackTrace(this, NameError);
//?     }
//? 
//?     this.name = 'NameError';
//?     this.message = this.message || 'There was a problem with the name';
//?   }
//? }
//? 
//? try {
//?   const name = 5;
//?   if (typeof name !== 'string') {
//?     throw new NameError('Name cannot be a string');
//?   }
//? } catch(e) {
//?   console.log(e);
//? }
//? Q4. If you run the code above, what will happen?
//! A: print Name Error: Name cannot be a string
// E: The code in the try block will throw a NameError. The message property of the NameError will be to
// "There was a problem with the name" unless there is already something set to the message property.
// The first argument when initializing an Error will be set to the message property. Calling super(...params)
// inside of the constructor of the NameError class will call the constructor for the Error class
// which will set the message property to the first argument passed into the NameError constructor.
// So when the error gets printed, it will print the name of the class, NameError, followed by
// "Name cannot be a string".

//? class NameError extends Error {
//?   constructor(...params) {
//?     super(...params);
//? 
//?     if (Error.captureStackTrace) {
//?       Error.captureStackTrace(this, NameError);
//?     }
//? 
//?     this.name = 'NameError';
//?     this.message = 'There was a problem with the name';
//?   }
//? }
//? 
//? try {
//?   const name = 5;
//?   if (typeof name !== 'string') {
//?     throw new NameError('Name cannot be a string');
//?   }
//? } catch(e) {
//?   console.log(e);
//? }
//? Q5. If you run the code above, what will happen?
//! A: print "NameError: There was a problem with the name"
// E: The code in the try block will throw a NameError. The message property of 
// the NameError will always be "There was a problem with the name".So when the 
// error gets printed, it will print the name of the class, NameError, followed by 
// the message property of the error.

//? class NameError extends Error {
//?   constructor(name = null, ...params) {
//?     super(...params);
//? 
//?     if (Error.captureStackTrace) {
//?       Error.captureStackTrace(this, NameError);
//?     }
//? 
//?     this.name = 'NameError';
//?     this.message = this.message || `There was a problem with the name '${name}'`;
//?   }
//? }
//? 
//? try {
//?   const name = 5;
//?   if (typeof name !== 'string') {
//?     throw new NameError('Name cannot be a string');
//?   }
//? } catch(e) {
//?   console.log(e);
//? }
//? Q6. If you run the code above, what will happen?
//! A: print "NameError: There was a problem with the name "Name cannot be a string"
// E: The code in the try block will throw a NameError. A NameError is thrown, and the 
// first argument sent to the constructor is assigned to the name variable.There are no 
// other arguments to pass into the constructor method for the Error class, so the message
// property will not be set by Error's constructor method. The default message of "There 
// was a problem with the name '${ name } '" will be set to the error where ${name} is
// that first argument passed into the constructor of the NameError class. So when the error
// gets printed, it will print the name of the class, NameError, followed by "There was a 
// problem with the name 'Name cannot be a string'".

//? Q7. What should you always do when defining a custom error type? (One, multiple, or no answers)
//! A: 
//! extends from any of the existing error class
//! call super given params (call the constructor)
//! print stack trace: using the Error.captureStackTrace
//! Set any custom properties to save customized data on the error
//! set name of error to custom error type
// E: You don't need to define any instance or static methods other than the constructor method. 
// In the constructor method, you should call the constructor of the parent class. You should
// also set the stack trace of the error properly, reassign the name property to the name of 
// the class, and set any custom properties on the error instance.

//? Array.makeEmpty = function() {
//?   return [];
//? }
//? Q9. True or False: The makeEmpty method above is an instance method.
//! A: False
// E: makeEmpty is a static method because it is defined on the Array class itself instead of 
// on the prototype, Array.prototype.

//? class Person {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   static makeSpencer() {
//?     return new this("Spencer");
//?   }
//? }
//? Q10. Given the code above, what is the equivalent ES5 class syntax for the makeSpencer method?
//! A: Person.makeSpencer = function() { return new this("Spencer"); }
// E: makeSpencer is a static method on the Person class. To do this in Es5, you need to set the property
// of the makeSpencer directly on the Person class to be a regular function. It can't be a fat-arrow function.
// (Why can't ti be a fat-arrow function?)

//? class Person {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? }
//? Q11. Given the code above, what is the equivalent ES5 class syntax?
//! A: function Person(name) { this.name = name; }
// E: The class definition and constructor function will be combined into a single function in ES5 class syntax.

//? String.prototype.addExclamation = function() {
//?   return this + '!';
//? }
//? 
//? console.log("Hello World".addExclamation());
//? Q12. If you run the code above, what will happen?
//! A: print "Hello World!"
// E: addExclamation is an instance method because it is defined on the String's prototype. 
// It will return the string plus an exclamation mark. "Hello World" is an instance of a String.
// If you call addExclamation on that string to get "Hello World" plus an exclamation mark

//? Q13. What is monkey patching?
//! A: Using an existing static methods and modify it with your own execution
// E: Monkey-patching a class is extending the functionality of a class after it's already been defined. 
// For example, adding methods to the already existing JavaScript Array class. To monkey-patch a class
// in JavaScript, you need to use ES5 class syntax.

//? class Person {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   changeName(name) {
//?     this.name = name;
//?   }
//? }
//? Q14. Given the code above, what is the equivalent ES5 class syntax for the changeName method?
//! A: Person.prototype.changeName = function(name){ this.name = name; }
// E: 

//? Q15. True or False: You learned how to do class inheritance with ES5 class syntax.
//! A: False
// E: Inheritance in ES5 is tricky and messy so we will not be going over it. If you want to 
// know more about how to do inheritance using ES5 class syntax, we encourage you to do your
// own research on how to do it.


/*****************************************************
  *           Homework for Saturday - Quiz
 ****************************************************/
//? class Car {
//?     constructor(brand, model, year) {
//?         this.brand = brand;
//?         this.model = model;
//?         this.year = year;
//?     }
//? 
//?     drive(acc) {
//?         // ...
//?     }
//? 
//?     brake(acc) {
//?         // ...
//?     }
//? }
//? 
//? Car.drive(acc, startSpeed) = function() {
//?     // ...
//? }
//? Q1. What is the above an example of?
//! A: Method overloading
// E: Method overriding and monkey-patching are synonymous terms, which is 
// when a class method is reimplemented with the SAME signature.The new drive
// method being implemented has a different signature than the original, so
// this is considered an overload.


//? class CustomError extends Error {
//?   constructor(...params) {
//?     super(...params);
//? 
//?     if (Error.captureStackTrace) {
//?       Error.captureStackTrace(this, CustomError);
//?     }
//? 
//?     this.name = 'CustomError';
//?     this.message = 'Insert custom error message';
//?   }
//? }
//? 
//? try {
//?   const name = 5;
//?   if (typeof name !== 'string') {
//?     throw new CustomError('Name cannot be a string');
//?   }
//? } catch(e) {
//?   console.log(e);
//? }
//? Q2. If you run the code above, what will happen?
//! A: print "CustomError: Insert custom error message"
// E: The code in the try block will throw a CustomError. The message property of
// the CustomError will always be "Insert custom error message".So when the error
// gets printed, it will print the name of the class, CustomError, followed by 
// the message property of the error.

//? Q3. True or False: Monkey-patched methods are static methods.
//! A: True
// E: Monkey-patched methods are static or class methods and aren't usable by class instances
// Remember their contexts are the class itself

//? class Person {
//?   constructor(name) {
//?     this.name = name;
//?   }
//? 
//?   changeName(name) {
//?     this.name = name;
//?   }
//? }
//? Q4. Given the code above, what is the equivalent ES5 class syntax for the changeName method?
//! A: Person.prototype.changeName = function(name) { this.name = name; }
// E: changeName is an instance method on the Person class. To do this in ES5, you need to set 
// the property of changeName on the prototype of the Person class to be a regular function.
// It can't be a fat-arrow function. (Why can't it be a fat - arrow function?)

//? class CustomError {
//?   constructor(...params) {
//?     if (Error.captureStackTrace) {
//?       Error.captureStackTrace(this, CustomError);
//?     }
//? 
//?     this.name = 'CustomError';
//?     this.message = 'Insert custom error message';
//?   }
//? }
//? Q5. What is missing in the above custom error implementation? Select all that apply:
//! A: The missing implementations are:
//! - calling super with params
//! - extending from an already existing error class
// E: 

/*****************************************************
  *               Saturday - Quiz
 ****************************************************/

//? Find the first vowel of a given string.
//? Q1. Select all that apply. What are examples of edge cases for the problem above?
//! A: Edge cases for finding vowel of a given strings are
//! - if there is only one vowel
//! - If the input is not a string
//! - If the string are wayy too big
//! - If there was no string given
//! - If the input string only contain one character
// E: The edge cases define how a problem performs under uncommon circumstances like invalid inputs or small inputs.

//? function bigGains(workouts) {
//?   if (workouts) {
//?     console.log(workouts.shift());
//?     bigGains(workouts);
//?   }
//? }
//? 
//? bigGains(["weights", "running"]);
//? Q2. Which of the following should we add to prevent an error in the function above?
//! A: base case
// E: This function will exit when workouts is truthy, but workouts will always be truthy 
// so you'll be working out indefinitely! You need a base case to exit the recursive call stack.
// Note: An empty array also evaluates to true in JavaScript.

/*****************************************************
  *         Saturday - Practice Asssessment
 ****************************************************/
//? Q1. Which word represents the 'context' of the above class?
//! A: this
// E: 

//? class Dog {
//?   constructor(name) {
//?     this.name = name;
//?     this.sound = 'woof';
//?   }
//? 
//?   speak() {
//?     return `${this.name} says '${this.sound}'`
//?   }
//? }
//? 
//? let fido = new Dog("Fido");
//? let fidoSpeak = fido.speak;
//? 
//? 
//? console.log(fidoSpeak()); // ERROR
//? Q2. How would you fix the error in the code above?
//! A: Give fido speak, bind
// E: 

//? Q3. Which of these best describes TDD?
//! A: Creating test specs that describe the functionality of the code to be written, then writing
//! code to be meet those tests
// E: 

//? Q4. Which of the following are true of "fat arrow" => functions?
//! A: 
//! - Can omit {} around the code
//! - Can omit return keyword
//! - Will establish context on the scope where it was defined
// E: 

//? describe ('Mystery function', function () {
//? 
//?   it('should work correctly', function () {
//? 
//?     expect(mystery("antelope")).to.equal("ante");
//? 
//?     expect(mystery("bandicoot")).to.equal("bandi");
//? 
//?     expect(mystery("cheetah")).to.equal("cheetah");
//? 
//?     expect(mystery("dromedary")).to.equal("drome");
//? 
//?     expect(mystery("elephant")).to.equal("ele");
//? 
//?   });
//? 
//? });
//? Q5. Based on these test specs, what should the mystery function do?
//! A: Return the first two syllables of the input word
// E: 

//? Q6. Which of the following descriptions would throw a JavaScript ReferenceError
//! The code returns a variable but misspells the variable name
//! Invoking a variable that has not been declared
// The code has an extra bracket {
//? Invoking an instance method that has not been declared
//! Invoking a function that has not been declared
