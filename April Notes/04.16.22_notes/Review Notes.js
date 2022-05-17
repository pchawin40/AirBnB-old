/***************************************************************
 *                      Monday Quiz Review
 **************************************************************/
//? Q1. Which of the following are common techniques/approaches used in sorting algorithm?
//! Divide and conquer
//! Shifting
//! Swapping

//? Q2. What is the average time complexity of the Bubble Sort?
//! O(n^2)
// E: In the best case scenario when the items are already in a convenient order, the algorithm
// would just have to look through each index once. This would be lienar time at best,
// but on average, when the order is "random", it is quadratic

//? Q3. Which technique does the Bubble Sort employ in its algorithm logic?
//! Swapping
// E: Bubble sort mainly uses swap to achieve sorting. It looks at neighbors sequentially and swap them
// if they are out of order

//? Q4. Suppose you had an input array: [3, 2, 0, 4, 1]. What would the array look like
//? after one pass through of the bubble sort algorithm?
//! 2 -> 0 -> 3 -> 1 -> 4

/***************************************************************
 *                    Tuesday Quiz Review
 **************************************************************/
//? Q1. Which sorting algorithm has a better worst-case scenario time complexity?
//! Merge sort
//E : The quicksort depends on how well the pivot balances the left and right halves. 
// If the pivot results in severely unbalanced halves, the time complexity can get
// as bad as O(n^2)

//? Q2. On the array, [0, 1, 2, 3, 4, 5] which algorithm sorts this faster?
//! Insertion sort
// E: The insertion step in both sorts ends up being the same as the array is already sorted
// However, the selection step for the selection sort will always be O(n), while the 
// insertion sort is always O(1). Thus, the insertion sort is faster when the array
// is already sorted (or near sorted)

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
//! Selection sort
// E: Note that the smallest value is being SELECTED first for placement in the sorted array. 
// In an insertion sort, the first (or last) value is always taken and then placed in the sorted
// array

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
//? Q4. Which sorting algorithm is being performed above?
//! Insertion sort
// E: This is a walkthrough of the steps for performing an insertion sort in-place by using the divider variable
// as an index that separates the sorted and unsorted halves,w hile temp tracks the selected item that is to be
// inseretd into the sorted half

/***************************************************************
 *                  Saturday In-Class Notes
 **************************************************************/

/***************************************************************
 *                Week 12 Practice Assessment
 **************************************************************/
//? Q1. Which of the following lines of code will sort an array in lexicographic (alphabetical) order?
// const arr = ['hello', 'app', 'aardvark', 'pie', 'kitty'];
// console.log(arr);
//? arr.sort((a, b) => a > b)
//? arr.sort((a, b) => b - a)
//? arr.sort((a, b) => a < b)
//? arr.sort((a, b) => a - b)
//! arr.sort() <-- current answer (correct)

//? Q2. Which sorting algorithm incrementally places values from an unsorted array in the correct position in a sorted array?
//? Quick Sort
//? Bubble Sort
//? Merge Sort
//! Insertion Sort <-- current answer (correct)
//? Selection Sort

//? Q3. Which sorting algorithm divides an array in half, sorts each half, then recombines the sorted halves?
//! Merge Sort (correct)
//? Insertion Sort
//? Bubble Sort
//? Selection Sort
//? Quicksort

//? Q4. Which of these algorithms are guaranteed to visit every reachable node in a connected graph?
// Breadth-first search
//! Breadth-first traversal (corrected)
//! Depth-first traversal (corrected)
// Depth-first search

//? Q5. What is the average space complexity of an in-place, recursive quicksort?
//! O(log n) (correct)
