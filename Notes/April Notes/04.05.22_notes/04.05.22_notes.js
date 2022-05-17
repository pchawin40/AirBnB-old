/*********************************************
 *                Monday
 *********************************************/
//? Q1. Which of the following is not a correct statement about the difference between arrays and sets in JavaScript?
//! Sets have a limited size
// E: Set do not have a size limit

//? Q2. If you're running timing benchmarks on a particular function and the time it takes to perform the operation is the
//? same regardless of the input size, the time complexity can be denoted as which of the following? Assume n represents
//? the size of the input of the function
//! O(1)
// E: This description represents constant time, or O(1). In other cases, the time it takes depends on the size of the input
// in some manner

//? let car = {
//?     color: 'red',
//?     type: 'sedan'
//? }
//? 
//? console.log(car.brand);
//? Q3. What would the above code print?
//! undefined
// E: The code prints undefined. Think of it this way: the key brand is not defined, and is thus undefined. It isn't null, because
// that would indicate a purposefully designated value of null, but that isn't the case here

//? Q4. A time complexity of O(log n) is slower than ____ and faster than ____ ?
//! O(log n) is slower than O(1) and faster than O(n^2)
//! O(log n) is slower than O(1) and faster than O(n)
// E: O(log n) is faster than O(n), which is faster than O(n^2)

//? Q5. Say you have 2 implementations of an algorithm that takes arrays as an input. One runs in exactly O(log_10n) time,
//? the other runs in O(n) time. If your input array is of size 100, how much faster is the first algorithm that the second?
//! O(log_10n): O(log_10(100)) = 2 | O(100) = 100 | 100 / 2 = 50x faster

//? Q6. Which of the following correctly evaluates 2^x = 32?
// E: x = log_2(32)

//? Q7. Which method calculates the base 2 logarithm of a number?
//! Math.log2(x)
// E: Math.log2() is the method that calculates the base 2 log of a number.

/*********************************************
 *           Homework for Tuesday
 *********************************************/
//? Q1. What is the time-complexity of a Binary Search?
//! O(log n)
// E: A binary search is always performed in O(log n) time given the preconditions are satisfied

//? Q2. What is the average time complexity of the Bubble Sort?
//! O(n^2)
// E: In the best case scenario when the items are already in a conveineint order, the algorithm would just have 
// to look through each index once. This would be linear time at beast, but an average when the order is
// "random", it is quadratic

//? let arr = [0, 1, 2, 3, 4, 5];
//? 
//? [arr[1], arr[3]] = [arr[3], arr[1]];
//? Q3. True/False: The above code swaps the values of arr at index 1 and 3
//! True
// E: The code uses destructuring assignment to swap the indexes in arr

//? Q4. Suppose you had an input array: [3, 2, 0, 4, 1]. What would the array look like after one 
//? pass through of the bubble sort algorithm ?
//! [2, 0, 3, 1, 4]
//E: Taking a look at each pair for the first run through and swapping if the second index is smaller
// than the first: swap 3 with 2 -> 23041, swap 3 with 0 -> 20341, 3 and 4 stay in place -> 20341,
// swap 4 and 1 -> 20314.
// ** uses two for loop (one outer and one inner)

//? [
//?  1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
//?  53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
//?  82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100
//? ]
//? Q5. Given the array above, what how many splits need to occur to find the number 8? 
//? When splitting, round down when encountering odd numbers of indexes.
//! 5: 32 index --> split = log2n = log2(32) = 5; // 2 -> 4 -> 8 -> 16 -> 32 = 5 times

/*********************************************
 *              Tuesday Quiz
 *********************************************/
//? Q1. What terminal command can be used to go back (or up), one directory level?
//! cd..
// E: Remember cd stands for change directory .. is shorthand for the parent of the current directory

//? function plusOne(arr) {
//?     let res = [];
//?     
//?     for (let i = 0; i < arr.length; i++) {
//?         res.push(arr[i] + 1);
//?     }
//? 
//?     return res;
//? }
//? Q2. What is the space complexity of the function above?
//! O(n)
// E: The function plusOne creates a brand new array of the same size as the input, arr, so the space
// taken is directly proportional to the input size, hence O(n). If the original array was modified
// in-place, the space complexity would be O(1) since no extra space was taken

//? Q3. When you implemented a Hash Table, what was the purpose of the hashMod method?
//! The purpose of the hashMod is to convert the hashed values into indexes
// E: In the hash implementation, hash converted the string value into an integer value. But the value wasn't
// necessarily usable as an index. instead, hashMod is used to convert the hashed value into an index

/*********************************************
 *              In-Class Notes
 *********************************************/
/*
* What is a graph?
* A graph is a collection of nodes and any edges between those nodes
* You've likely seen despictions of graphs before,
* and they usually exists as circles (nodes) and arrows (Edges) between those circles
*
* ** A linked list a graph, and a tree and al inked list
* ** a binary tree, i.e. nodes with only two child pointers, is a tree and a graph, but not linked list
* ** A tree with more than two children is a graph, and a tree
* ** A graph that has nodes that has more than one parent is only a graph, because nodes 
*    in a tree can only have one parent
*
* What is a tree?
* You can think of them as being like a singly-linked list
* except that instead of each node havig a single next node,
* it may have more than one child node
*
* A tree is a graph that does not contain any cycles
* A cycle is defined as a path through edges that begins and ends at the same node
*
* What is a binary tree?
* Simply put, a binary tree is a tree where nodes have at most 2 children
*/

// Binary tree node example

class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// building a binary tree example
let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
* This method of traveling as deep as possible down the tree branches until reaching a dead-end,
* then backtracking to the next  branch is depth-first order
*/

// Tree traversal = recursive depth-first

// Pre-order traversal
// Print the current node value
// Recursively call the left subtree
// Recursively call the right subtree
const preOrderTraversal = root => {

}

// In-order traversal * recursive depth-first
// Recursively call the left subtree
// Print the current node value
// Recursively call the right subtree
const inOrderTraversal = root => {

}

// Post-order traversal * recursive depth-first
// Recursively call the left subtree
// Recursivelly call the right subtree
// Print the current node value
const postOrderTraversal = root => {

}

/*
* breadth-first traversal will visit each node in a particular level before moving down
* to the next level. Cannot be implemented recursively with a binary search tree, but to the nature
* of recursion
*/

// Breadth First with queue

[B, C]

const breadthFirstTraversal = () => {

}

// depth first with a stack

const depthFirstTraversal = () => {

}

/*
* binary search tree: Same as binary tree, i.e. but with a very powerful rule,
* every node contained in the left branch of any node will be less than the value of the node itself,
* and every node in the right branch will be greater than the node value
*/

/*
* Searching a binary serach tree
* Binary search trees can be searched by calling the following recursive function on the root node:
*
* If the root node is null, return false
* If the root node's value equals to the target, return true
* If the target is less than the root value, recursively search the left child
* If the target is greater than the root value, recursively search the right child
*/

// Recursive

const searchBSTRecursive = () => {

}

// Iterative

const searchBSTIterative = () => {

}


// SWEO-PART-TIME-RESOURCES:
// 2-Module > 5-week > 2-day
