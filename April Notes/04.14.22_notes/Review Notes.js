//? Bubble Sort: Look through array and swap the current value with its adjacent value if its adjacent value is ever less than the current value
//? Time complexity: O(n^2)
//? Space complexity: O(n)
function bubbleSort(arr) {
  let swapFlag = true;
  while (swapFlag) {
    swapFlag = false;

    for (let i = 0; i < arr.length; i++){
      // destructure left and right (for current value and neighbor)
      let [left, right] = [arr[i], arr[i + 1]];

      // if at any time the right is less than the left, swap
      if (right < left) {
        arr[i] = right;
        arr[i + 1] = left;
        swapFlag = true;
      }
    }
  }

  console.log(arr);
}

//? Insertion Sort: pop off the end value of an array and put it to a "sorted" array that sort the popped value
//? which where it should belong
//? Out-of-place
//? Time complexity: O(n^2)
//? Space complexity: O(n)
function insertionSort(arr) {
  let copy = arr;
  let sorted = [];
  while (copy.length) {
    let value = copy.pop();
    sorted = insert(sorted, value);
  }

  console.log(sorted);
  return sorted;
}

function insert(sorted, value) {
  if (!sorted.length || sorted[sorted.length - 1] < value) sorted.push(value);
  if (sorted[0] > value) sorted.unshift(value);
  sorted.map((el, i) => {
    // if (sorted[i] < value && value < sorted[i + 1]) sorted = [...sorted.slice(0, i + 1), value, ...sorted.slice(i + 1)]; // see if we can use splice instead
    if (el < value && value < sorted[i + 1]) sorted.splice(i + 1, 0, value);
  });

  return sorted;
}

arr = [5, 2, 7, 1];
// insertionSort(arr);

//? Insertion sort (In-place):
//? Time complexity: O(n^2)
//? Space complexity: O(n)
function insertionSort(arr) {
  let pointer = 1;
  while (pointer < arr.length) {
    let val = arr[pointer];
    for (let i = pointer; i >= 0; i--){
      if (val < arr[i - 1]) {
        arr[i] = arr[i - 1];
        arr[i - 1] = val;
      }
    }
    pointer++;
  }
  return arr;
}

//? Selection Sort
// (out-of-place):
function selectionSort(arr) {
  let copy = arr.slice();
  let sorted = [];
  while (copy.length) {
    let minIndex = copy.findIndex(el => el === Math.min(...copy));
    let minValue = copy.splice(minIndex, 1)[0];
    sorted.push(minValue);
  }
  return sorted;
}

// (in-place):
function selectionSortInPlace(arr) {
  debugger;
  let divider = 0;
  while (divider < arr.length) {
    let minIndex = divider;
    // find min index using divider as minIndex
    for (let index = divider + 1; index < arr.length; index++)
      if (arr[index] < arr[minIndex]) minIndex = index;
    
    let minVal = arr[minIndex];
    // shift every unsorted value to the left of the min value to the right by 1
    for (let index = minIndex; index >= divider; index--)
      arr[index] = arr[index - 1];
    
    // set the current value at the divider index to the min value
    arr[divider] = minVal;
    divider++;
  }

  return arr;
}

arr = [5, 4, 2, 5, 7];
// console.log(selectionSortInPlace(arr));

//? QuickSort: Divide in half, from pivot, lesser value and greater value, once down to less than 2, return the array
function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr.shift();
  let left = arr.filter(el => el < pivot);
  let right = arr.filter(el => el >= pivot);
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort(arr));

//? Funky Sorting
// 1. Create a pointer called firstZero that points to the left-most zero in the array
// 2. Iterate through the array
// 3. If firstZero has not been set, continue on until you reach a zero
// 4. When you reach the first zero, set firstZero to the current index
// 5. When you reach a non-zero value, swap it's position with firstZero and increment firstZero

function moveZeroes(nums) {
  // Create a pointer called `firstZero` that points to the left-most zero in the array
  // Starts as -1 because there are no zeroes encountered yet
  let firstZero = -1;

  // Iterate through the array
  for (let index = 0; index < nums.length; index++)
    // If `firstZero` has not been set, continue on until you reach a zero
    if (firstZero === -1)
      // When you reach the first zero, set `firstZero` to the current index
      if (nums[index] === 0) firstZero = i;
    
      // When you reach non-zero value
      else if (nums[index] !== 0) {
        // swap it's position with `firstZero`
        [nums[index], nums[firstZero]] = [nums[firstZero], nums[index]];
        // and increment `firstZero`
        firstZero++;
      }
  
  // return the array
  return nums
}

//? Built-in Sorting

//? Merge Sort: Divide in two, one before the midpoint, the other after the midpoint. It will merge by
//? once length of 1 or less, it will put whichever is less to the left then combine it together

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

function merge(leftSorted, rightSorted) {
  const returnArray = [];
  let leftIndex = rightIndex = 0;
  while (leftIndex < leftSorted.length || rightIndex < rightSorted.length) {
    if (rightIndex === rightSorted.length || leftSorted[leftIndex] < rightSorted[rightIndex]) {
      returnArray.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      returnArray.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }
  return returnArray;
}

console.log(mergeSort([5, 2, 1, 7]));

//? Custom Sorting

//? GRAPHS

//? Simple Breadth-First Traversal
function printBreadthFirst(start) {
  // make a queue, enqueueing first with the start
  const queue = [start];
  // make a visited set with queue in it initially
  const visited = new Set(queue);
  // while queue is not empty
  while (queue.length) {
    // shift the queue (dequeue)
    let shifted = queue.shift();
    // do the thing (in this case print)
    console.log(shifted);
    // create neighbor of the current shifted value
    let neighbors = adjList[shifted];
    // for each neighbors...  
    neighbors.map(el => {
      // if it has not yet been visited...
      if (!visited.has(el)) {
        // add it to the visited list and push it to the queue
        visited.add(el);
        queue.push(el);
      }
    });
  }
}

//? Simple Depth-First Traversal
function printDepthFirst(start) {
  // create a stack
  const stack = [start];
  // create a new set with stack in it
  const visited = new Set(stack);

  // while stack is not empty
  while (stack.length) {
    // pop the stack
    const popped = stack.pop();
    // do the thing (print)
    console.log(popped);
    // create neighbor of the current popped
    const neighbors = adjList[popped];
    // for each neighbors...
    neighbors.map(el => {
      // if it has not yet been visited...
      if (!visited.has(el)) {
        // add it to the visited and push the current neighbor to the stack
        visited.add(el);
        stack.push(el);
      }
    });
  }
}

//? Graphs Quiz
//! TO-DO

//? Refactor Breadth-First Traversal

//? Simple Breadth-First Search
function breadthFirstSearch(start, end) {
  const queue = [start];
  const visited = new Set(queue);
  while (queue.length) {
    let shifted = queue.shift();
    if (current === end) return true;
    let neighbors = adjList[shifted];
    neighbors.map(el => {
      if (!visited.has(el)) {
        visited.add(el);
        queue.push(el);
      }
    })
  }
  return false;
}

//? A Shortest Path
function aShortestPath(start, end) {
  const queue = [[start]];
  const visited = new Set(start);
  while (queue.length) {
    const currentPath = queue.shift();
    const currentVertex = currentPath[currentPath.length - 1];
    if (currentVertex === end) return currentPath;
    adjList[currentVertex].map(el => {
      const pathCopy = [...currentPath];
      if (!visited.has(el)) {
        visited.add(el);
        pathCopy.push(el);
        queue.push(pathCopy);
      }
    });
  }
  return false;
}

//? Degrees of Separation
function degreesOfSeparation(start, end) {
  // make a queue
  const queue = [[start]];
  const visited = new Set().add(start);
  while (queue.length) {
    const currentPath = queue.shift();
    const currentVertex = currentPath[currentPath.length - 1];
    if (currentVertex === end) return currentPath.length - 1;
    adjList[currentVertex].map(el => {
      const pathCopy = currentPath.slice();
      if (!visited.has(el)) {
        visited.add(el);
        pathCopy.push(el);
        queue.push(pathCopy);
      }
    })
  }

  return false;
}

//? SOLVING MATRIX GRAPH PROBLEMS
// const matrix = [
//     [ 0, 1, 0, 0, 1 ],
//     [ 1, 0, 0, 0, 1 ],
//     [ 1, 1, 0, 1, 1 ],
//     [ 0, 1, 1, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ]
// ];

const matrix = [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10 ],
    [ 11, 12, 13, 14, 15 ],
    [ 16, 17, 18, 19, 20 ],
    [ 21, 22, 23, 24, 25 ]
];

//! Three steps to solve (almost) any graph problem
// 1. Identify and define the type of graph
//    a. What is the problem asking you to do?
//    b. What does the matrix represent?
//    c. What does each node represent?
//    d. What relationship do the edges represent?
//    e. What is considerd a valid neighbor, in the context of this problem?
//    f. Is this a search or traversal problem?
//    g. Does this require a depth-first or breadth-first approach?


// 2. Implement the getNeighbors function
function getNeighbors(node, matrix) {
  // Create an array to hold the valid neighbors
  let arr = [];

  // variable for row and column, for easier tracking
  let row = node[0];
  let col = node[1];

  // console.log("current: ", matrix[row][col]);
  // console.log("matrix[[node[0] - 1][node[1]]: ", matrix[[node[0] - 1][node[1]]]);
  // UP:
  // Identify the node above the current node, if it exists
  // up: decrease row by 1 to go up
  let up = row - 1 >= 0 ? matrix[row - 1][col] : null;
  // console.log("up: ", up);
  // Push that node into the new array
  if(up) arr.push(up);

  // DOWN:
  // Identify the node below the current node, if it exists
  // let down = [node[0] + 1][node[1]];
  let down = row + 1 <= matrix.length - 1 ? matrix[row + 1][col] : null;
  // console.log("down: ", down);
  // Push that node into the new array
  if(down) arr.push(down);


  // if (down < matrix.length - 1) arr.push(down);

  // LEFT:
  // Identify the node to the left of the current node, if it exists
  let left = col - 1 >= 0 ? matrix[row][col - 1] : null;
  // console.log("left: ", left);
  // Push the node into the new array
  if (left) arr.push(left);

  // RIGHT:
  // Identify the node to the right of the current node, if it exists
  let right = col + 1 <= matrix[row].length - 1 ? matrix[row][col + 1] : null;
  // console.log("right: ", right);
  // Push the node into the new array
  if (right) arr.push(right);

  // return the neighbors array
  return arr;
}

// return the correct neighbors from an internal node
// getNeighbors([3, 2], matrix);

// 3. Traverse the graph
// a. Create a queue and enqueue the starting node
// b. Create a set to store visited node
// c. while queue is not empty, repeat step d - f
// d. Dequeue the first node and check if it's been visited
// e. If not, mark it as visited and DO THE THING
// f. Put all its neighbors in the back of the queue

// Example traversal function stub
function traverseMatrix(matrix, startNode) {
  // traversal logic here
}

// Example search function stub
function searchMatrix(matrix, startNode, thingYouSearchFor) {
  // search logic here

  // the thingYouSearchFor might represent an end node, a value in the matrix,
  // or some sort of condition that would need to be met to end the search
}
