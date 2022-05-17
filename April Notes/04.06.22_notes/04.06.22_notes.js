/*********************************************
 *          Homework for Wednesday Quiz
 ********************************************/
//? arr = [3, 2, 0, 4, 1]
//? divider = 0
//? temp = 3
//? 
//? arr = [3, 2, 0, 4, 1]
//? divider = 1
//? temp = 3
//? 
//? arr = [3, 2, 0, 4, 1]
//? divider = 1
//? temp = 2
//? 
//? arr = [2, 3, 0, 4, 1]
//? divider = 2
//? temp = 2
//? 
//? ...
//? Q1. Which sorting algorithm is being performed above?
//! Insertion
// E: This is a walkthrough of the steps for performing an insertion sort in-place by using
// the divider variable as an index that separates the sorted and unsorted halves, while temp
// tracks the selected item that is to be inserted into the sorted half

//? Q2. Which sorting algorithm(s) can be performed in-place?
//! Both
// E: Both selection and insertion can be implemented in-place without making a new array

//? arr = [3, 2, 0, 4, 1]
//? sorted = []
//? 
//? arr = [3, 2, 4, 1]
//? sorted = [0]
//? 
//? arr = [3, 2, 4]
//? sorted = [0, 1]
//? 
//? ...
//? Q3. Which sorting algorithm is being performed above?
//! Selection
// E: Note that the smallest value is being selected first for placement in the sorted array. In an insertion sort,
// the first (or last) value is always taken and then placed in the sorted array

//? Q4. Which sorting algorithm has the better average time-complexity?
//! Both
//E: Both sorting algorithms have an average time-complexity of O(n^2). Note that in some scenario, insertion may perform better,
// but on average, they are roughly the same. (Run timing benchmarks to compare!)

//? Q5. On the array, [0, 1, 2, 3, 4, 5], which algorithm sorts the fastest from selection and insertion sort?
//! Insertion
// E: The insertion step-in both sorts ends up being the same as the array is already sorted. However, the selection step 
// for the selection sort will always be O(n), while the insertion sort is always O(1). Thus the insertion sort
// is faster when the array is already sorted (or near sorted)

/*********************************************
 *              In-Class Notes
 ********************************************/
/*
pre, in, post-order review, all depth first recursive

*
pre-order
---------
log current val
recurse left
recurse right
*

*
in-order
--------
recurse left
log node
recurse right
*

*
post-order
----------
recurse left
recurse right
log node
*

*
Breadth first iteration via queue
visits every node on a level before moving on

queue starts with node

remove from queue
some actions against val
push children
*

*
Iterative depth first, using a stack. mimic's the call stack
same as bfs but with stack
*

*min max*
binary search -- recurse all the way left or right
binary -- visit every node and keep track current max or min
*Height* 
recurse, count nodes, minus 1 when you sell null
compare left and right
*count nodes*
visit every node and count
*Balanced tree*
compare the heights of left and right
*Get parent*
find the node that point to your target, thats the parent
*node deletion*
no children -- make the node null
one child: parents child becomes node to delete
two children: replace the value of the node to delete with the in-order predecessor, 
and then delete the in-order predecessor

*/
