/*****************************************************
 *               Week 11 Practice Assessment
 ****************************************************/
//?        0
//?      /   \
//?     1     2
//?    / \     \
//?   3   4     5
//?  /   / \   / \
//? 6   7   8 9   10
//? Q1. What order would a pre-order traversal print the nodes in this tree?
//! 0 1 3 6 4 7 8 2 5 9 10

//? Q2. If you refactor an algorithm with time complexity of O(n^2) to be twice as fast,
//? what would the new time complexity be?
//! Still O(n^2) as n^2 / 2 would drop the constant leaving only the n which is n ** n (n^2)

//? Q3. What is true about binary search?
//! Its time complexity is O(log n). It traverse in-place
// E: 
// - It will take a maximum of log(n) comparisons to find a value
// - It can be performed in-place

//?        0
//?      /   \
//?    '1'    2
//?    / \     \
//?  '3''4'     5
//?  /   / \   / \
//?'6' '7' '8'9  10
//? Q4. True or false: This ia valid binary search tree
//! False; 1 3 4 6 7 and 8 are not less than 0. It must be more than 0 in order to be a valid binary search tree

//?        0
//?      /   \
//?     1     2
//?    / \     \
//?   3   4     5
//?  /   / \   / \
//? 6   7   8 9   10
//? Q5. What would a depth-first traversal print the nodes in this tree?
//! A:
//! If left first: 0 1 3 6 4 7 8 2 5 9 10
//! If right first: 0 2 5 10 9 1 4 8 7 3 6
