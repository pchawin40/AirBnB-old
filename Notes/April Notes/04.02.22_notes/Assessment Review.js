/*************************************************
 *                Monday Quiz
 *************************************************/
//? Q1. What is the binary value of the decimal 101 in the ASCII table?
//! A: 1100101

//? Q2. What should you do when you get stuck on a coding problem?
//! Read error messages and logs to isolate the bug
//! Look up error messages
//! Review relevant sections of the readings
//! Check official documentation
//! Discuss with a peer

//? let name = 'Joe';
//? Q3. What process does the code above perform? 
//! A: variable initialization
// E: Initializing is the process of both declaring and assigning on the same line


/*************************************************
 *           Homework for Tuesday Quiz
 *************************************************/
// head             tail
// |                 |
// v                 v
// 1 <-> 2 <-> 3 <-> 4 -> null
//? Q1. Given the linked list above, which of the following would correctly remove the current tail node and make 3 the new tail node?
//! Set tail to previous node
//! Set the current tail (which is now the second last)'s next node to null
// E: To remove the tail from 1 <-> 2 <-> 3 <-> 4 <-> -> null, set tail to point to tail's previous node (which will be 3) and set 3's
// next pointer to null (which effectively removes 4 from the list)

//? Q2. What is the most important reason we learn linked lists?
//! Linked list uses pointers
// E: Pointers allow linked list to store complex, multi-dimensional data in a linear memory bank. Pointers unlock features like
// multi-type arrays, pass-by-reference methods, graph traversal, and many more

//? Q3. What is the order of input and output for a queue?
//! FIFO and LILO
// E: Queues are an abstract data type (ADT) that store a collection of data with one simple rule: First in, first out

// head             tail
// |                 |
// v                 v
// 1 <-> 2 <-> 3 <-> 4 -> null
//? Q4. The diagram above shows what kind of linked list?
//! Doubly linked list
// E: It is a doubly linked list since there are pointers that point forwards and backwards

//? What is the best time complexity of addToHead() in a linked list?
//! O(1)
// E: The overall time complexity of addToHead() is O(1) in a linked list. Compare this to adding to head of an array (unshift), which is O(n)


/*************************************************
 *                Tuesday Quiz
 *************************************************/

//? Q1. Which of the following most accurately defines the DRY principle?
//! Pattern repetition should be abstracted to avoid redundancy
// E: DRY stands for "Don't Repeat Yourself". According to the DRY principle, if you see a repeated pattern in your code, you should abstract it into a block
// of code that can be invoked whenver you need the pattern implemented. Following this principle helps make your code easier to understand and maintain

// function count(num){
//   return count(num + 1)
// }

//? count(1)
//? Q2. What type of problems will the code above produce?
//! RangeError: Stack Overflow
// E: If the call stack grows too deep, it will cause a stack overflow and produce a Range error with the message
// "Maximum call stack size exceeded"

//? console.log(true || (4 / 2 === 0 && !false));
//? Q3. What will the code above print to the console?
//! True
// E: The OR (||) operator returns the first truthy value it encounters (which is not necessarily true) or false if all
// arguments are falsey. Here are the first value evaluates to (is) true, so true will be logged to the console

/*************************************************
 *           Homework for Wednesday Quiz
 *************************************************/

//? Q1. Which function is used to retrieve integer ASCII values of characters in a string?
//! charCodeAt()
// E: The function charCodeAt() is used to retrieve the integer ASCII values each character in the string

//? Q2. In a hash table, what is it called when two different keys point to the same index after the hash and modulus operations
//? are performed?
//! hash collision
// E: Hash tables combine hash functions, modulo and an underlying array structure to achieve fast, flexible key/value
// data storage. However, this model only works as long as each hash/modulo returns a unique value, otherwise, it causes
// a hash collision. Collisions can be resolved with linked list chaining.

//? Q3. What are hash tables used for?
//! key/value storage
// E: Hash tables are beloved by programmers for providing key/value storage with constant big-O time complexity for
// insertion, deletion, access and search

//? Q4 What does SHA in SHA256 stand for?
//! secured hashing algorithm
// E: SHA stands for secure hashing algorithm and is both blazing fast and cryptographically secured

//? Q5. True or False. You can use a hash output to find the input?
//! False
// E: Hashing, unlike encryption, only works in one direction. There is no way to "decrypt" a hash output to find the input. This is a 
// critical component that makes hash functions particularly useful for security

/*************************************************
 *                Wednesday Quiz
 *************************************************/
//? Q1. Which of the following are true about OOP?
//! A: 
//! - OOP breaks down large, complex solutions into simple solutions
//! - OOP makes code more readable and maintainable
// E: Object-Oriented Programming (often written as OOP) is a common design pattern that helps developers break down large, complex
// problems into simpler pieces

// function isPrime(n) {
//   for (let i = 2; i  < n; i += 1) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function primeSum(n) {
//   let sum = 0;

//   for (let i = 2; i <= n; i += 1) {
//     if (isPrime(i)) { 
//       sum += i;       
//     }
//   }

//   return sum;
// }
//? Q2. True or False: The isPrime function is an example of a helper function.
//! A: True
// E: A helper function is a function tasked with performing part of the computation of another function. isPrime fulfills that role here for
// primeSum (when working with complex problems it is often easier to break down the problem and use helper functions to find solution)

//? Q3. Which of the following best defines what a linked list is?
//! A: A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node
// E: A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node


/*************************************************
 *           Homework for Thursday Quiz
 *************************************************/
//? Q1. Select all that are true. Which of the following are important properties of when to use a set?
//! A:
//! - Elements are unordered
//! - Contains no duplicate elements
//! - Can check if an element is contained in O(1) time
// E: Sets have three important properties that will tell you when they are appropriate to use: A set contains no duplicate elements, 
// a set's elements are unordered, a set can check if an element is contained in O(1)


/*************************************************
 *                Thursday Quiz
 *************************************************/
//? Q1. Which of the following array methods removes one item from the back of an array?
//! Array.pop()
// E: removes the last element in an array and returns it

//? Q2. What keyword is used to declare a static method?
//! static
// E: Static method declarations always begin with the keyword "static" (but otherwise follow the same syntax as instance method declarations)

//? Q3. Select all that apply. Which of the following are abstract data types (ADT)?
//! A:
//! - Queue
//! - Call Stack
//! - Linked List
// E: A linked list, a call stack, and a queue are all abstract data types (ADT)


/*************************************************
 *                Friday Quiz
 *************************************************/
//? Q1. What does the 256 in SHA256 stand for?
//! 256 bits
// E: Given an input of any number of bits, SHA returns an output of 256 bits. Variations of the algorithm can produce other output sizes
// but SHA256 is the most common

//? Q2. The child class has access to the properties and methods defined on the parent class. What is this statement an example of?
//! Inheritance
// E: Implementation inheritance means that the properties and methods defined on a parent class are available on objects created from classes that
// inherits from those parent classes. This also means a child class has access to all the implementation (the doing) that was written in its
// parent class

//? Q3. Which of the following best describes why objects are considered "first-class" in JavaScript?
//! They can be stored in variables
// E: A first-class object is something that can be stored in a variable

/*************************************************
 *                Saturday Quiz
 *************************************************/
//? Q1. Processing various data types and classes through a single uniform interface is an example of which OOP pillar?
//! Polymorphism
// E: In object-oriented programming, polymorphism refers to processing various data types and classes through a single uniform interface.
// The two most common types of polymorphisms are "overloading" and "overriding"

//? Q2. Which of the following builds a cache iteratively from the bottom up?
//! Tabulation
// E: Tabulation is the process of building a cache iteratively from the bottom up instead of recursively from the top down

//? Q3. Which of the following methods does not mutate the input?
//! Array.splice()
// E: All of these methods mutate their input except slice, which returns a copy instead

//? Q4. Select all that apply. Which of the following are forms of caching?
//! A: 
//! - Tabulation
//! - Memoization
// E: Both memoization and tabulation are forms of dynamic programming, which means solving sub-problem only once and using the results
// to speed up future calculations that make use of those sub-problems. They are both form of caching

/*************************************************
 *          Practice Assessment Review
 *************************************************/
//? Q1. Which of the following describes the order values are added and retrieved from a queue?
//! LILO and FIFO

//? Q2. Which of these are advantages of singly linked lists over doubly linked lists?
//! Easier to implement and does not contain as much code (memory)

//? function first(n) {
//?   if (n < 0) return;
//? 
//?   console.log(n);
//? 
//?   first(n - 1);
//? }
//? 
//? function second(n) {
//? 
//?   arr = [];
//? 
//?   for (let i = 0 ; i <= n ; i++) {
//?     arr.unshift(i);
//?   }
//? 
//?   console.log(arr.join('\n'));
//? 
//? }
//? Q3. Which of these functions has the worst space complexity?
//! They have the same worst space complexity

//? Q4. What happens when you add two different values with the same key into a hash table?
//! Hash collisions (or the first value is overwritten by the second value)

//? Q5. What is the worst-case time complexity of a lookup in a hash table and what causes it?
//! O(n); having to resize it dynamically if they collide in same bucket
