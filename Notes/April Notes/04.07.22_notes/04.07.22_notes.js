/*************************************************
 *                Thursday Quiz
 *************************************************/
//? Q1. What is the best time-complexity of the merge step in the merge sort?
//! O(n)
// E: Using a pointer, the time complexity of the merge step can be brought down from O(n^2) to O(n)

//? Q2. What is quicksorting?
// E: Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array
// and partitioning the other elements into two sub-arrays, according to whether they are less than or 
// greater than the pivot

//? Q3. The average time-complexities of merge sort and quick sort are between _____ and ____? 
//! A:
//! Average time complexities of merge sort and quick sort are between O(1) and O(n^2)
//! Average time complexities of merge sort and quick sort are between O(n) and O(n^2)
// E: Both sorts are O(n log n), which is faster than O(n^2) but slower than O(n)

//? Q4. What is the typical base case for a recursive sorting algorithm?
//! When the input array's length is less than or equal to 1
// E: This base case is used because it is synonymous to finding a sorted array. An array of length 1 or 0
// is considered trivially sorted and the rest of the sort can happen on top of this case

//? Q5. Which sorting algorithm has a better worst-case scenario time complexity?
//! Merge sort
// E: The quicksort depends on how well the pivot balances the left and right halves. If the pivot results in
// severely unbalanced halves, the time-complexity can get as bad as O(n^2)
