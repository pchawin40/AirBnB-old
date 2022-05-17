/*********************************************************
 *                    Hash Functions
 ********************************************************/
//? A hash function maps arbitrary data to a deterministic, fixed-size output

//? A hash function takes in an input, runs it through a set of deterministic steps, 
//? and returns a scrambled output. Given the same itput, it will ALWAYS return
//? the same output

// this function uses charCodeAt() to retrieve the integer ASCII value of each
// character in the string, adds them all up and returns the total
const simpleHash = str => {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++)
    hashValue += str.charCodeAt(i);

  return hashValue;
}

simpleHash("Hello, world!");  // 1161
simpleHash("ABC");            // 198
simpleHash("ABCDEF");         // 405
simpleHash("ABBEEF");         // 405
simpleHash("Hello, world!");  // 1161

//! For general purpose hashing, the SHA algorithm is commonly used
//! SHA (Secure Hashing Algorithm) is both blazing fast and cryptographically secure

// const sha256 = require('js-sha256');
// sha256("Hello, world!");
// returns '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'

/*********************************************************
 *                    Hash Tables
 ********************************************************/
//? Hash Tables (Hash Maps) is used to implement everything from JavaScript objects and sets
//? to performance-boosting caches, hash tables are beloved by programmers for providing
//? key/value storage with constant big-O time complexity for insertion, deletion, access
//? and search

const hashtable = {};
hashtable["key"] = "value";
hashtable["key"]; // returns "value"

//! A hash table is an array with its elements indexed by a hash key. The key hash is then
//! run through a modulo function which converts it to an array index

//! keys --> hash function --> buckets

//? Hash table data storage
// 1. First step: implement hash table initializing an array of fixed size for data storage
// Each slot in the array is called a "bucket" and is initialized to null
// data = [null, null, null, null, null, null, null, null]

// 2. Need a hash function which converts keys to integers
const hash = str => {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++)
    // convert each letter into ASCII integer value
    hashValue += str.charCodeAt(i);
    
  return hashValue;
}

// 3. Need a funciton to convert key hash into valid array index
// Can use modulo operator for this purpose
//? HashMod() is used to generate a valid integer index for the data array
const hashMod = key => hash(key) % data.length;

hash("key"); // 329
hashMod("key"); // 1

hash("new key"); // 691
hashMod("new key"); // 3

hash("App Academy"); // 1013
hashMod("App Academy"); // 5

hash("She sells seashells by the seashore...");     // 3495
hashMod("She sells seashells by the seashore...");  // 7

//? Inserting into a hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

// hashtable{
//   data: [
//     null,
//     KeyValuePair ( key: 'key', value: 'value' ),
//     null,
//     null,
//     null,
//     null,
//     null,
//     null
//   ] 
// }

// to retrieve value stored with key
hashMod("key"); 

insert("new key", "new value"); 
insert("App Academy", "Computer Science"); 
insert("She sells seashells by the seashore...", "Sally Seashell"); 

hashModd("new key"); // returns 3
hashMod("App Academy"); // returns 5
hashMod("She sells seashells by the seashore..."); // returns 7

//! Space complexity: O(n) ==> amount of memory required to store n values increases linearly as n grows
//! inserting and reading from a hash table has the same complexity as an array: O(1)

/*********************************************************
 *               Hash Tables Collisions
 ********************************************************/
// linked list chaining: allow multiple key/value pairs to reside in the same bucket

// Other methods to avoid collisions: double hashing, open addressing, etc

//? Open addressing: 
//? placing collided elements in neighboring buckets, then visiting
//? each neighbor in order when searching for a key
//! More memory efficient than linked list chaining since each element is stored in
//! underlying array but is more complicated to implement, especially when nodes are 
//! deleted
