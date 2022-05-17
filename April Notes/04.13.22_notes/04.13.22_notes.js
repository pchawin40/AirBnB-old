// let arr = [3, 64, 12, 840, 93, 75];

// const practiceSort = (a, b) => a - b ? -1 : 1;

// console.log(arr.sort(practiceSort));

// let nums = [0, 1, 0, 4, 15];

// function moveZeroesCompare(a, b) {
//   console.log(`comparing a: ${a}, b: ${b}`);
//   if (a === 0) return 1;
//   if (b === 0) return -1;
//   return a - b;
// }

// debugger;
// let sortedNums = nums.sort(moveZeroesCompare);
// console.log(nums);

// let nums = [0, 1, 0, 4, 15];

// function moveZeroesCompare(a, b) {
//   if (a === 0) return 1;
//   if (b === 0) return -1;
//   return a - b;
// }

// let sortedNums = nums.sort(moveZeroesCompare);
// console.log("sortedNums: ", sortedNums);

// let arr = [3, 64, 12, 840, 93, 75];

// 1
// arr.sort((a, b) => {
//     return a - b;
// });

// 2
// arr.sort((a, b) => {
//     return b - a;
// });

// // 3
// arr.sort();

// // 4
// arr.sort(-1);

// console.log(arr);

/************************************************
 *          Homework for Wednesday Quiz
 ***********************************************/
//? Q1. How is the built-in method properly invoked on an array, nums?
//! nums.sort();
// E: The built-in sort method is a class method for all arrays and can be invoked as such

//? let nums = [0, 1, 0, 4, 15];
//? 
//? function moveZeroesCompare(a, b) {
//?   if (a === 0) return 1;
//?   if (b === 0) return -1;
//?   return a - b;
//? }
//? 
//? let sortedNums = nums.sort(moveZeroesCompare);
//? Q2. 
//! [0, 0, 1, 4, 15]
// E: The function moveZeroesCompare is being used to shift all the zeroes in the array to the left
// Note whenever the value is zero, whether it's a or b the return value is meant to force the 0 to 
// the left and the rest of the values in ascending order

//? let arr = [3, 64, 12, 840, 93, 75];
//? Q3. What will the result be if the built-in sort method is called without any extra arguments?
//! [12, 3, 64, 75, 840, 93]
// E: The default sort is sorting based on each elements Unicode value in ascending order, or in other words,
// lexically. So since 12 starts with 1 it would be lexically smaller than 3

//? What is the average time and space complexity of JavaScript's built-in sort method on arrays
//? respectively?
//! Time complexity: O(1) | Space complexity: O(n log n)
// E: JavaScript's built-in sort in Chrome currently uses the mergesort algorithm for most cases and typically
// has a space complexity of O(1) and a time complexity of O(n log n)

//? let arr = [3, 64, 12, 840, 93, 75];
//? 
//? // 1
//? arr.sort((a, b) => {
//?     return a - b;
//? });
//? 
//? // 2
//? arr.sort((a, b) => {
//?     return b - a;
//? });
//? 
//? // 3
//? arr.sort();
//? 
//? // 4
//? arr.sort(-1);
//? Q5. Which of the above statements sorts arr in descending order numerically?
//! 2
// E: The compare functin callback return value determines whether the values should be swapped
// or stay the same. When the return value is greater than 0, the b is sorted before a. When negative, a goes before b
// when 0, keep the original order

// b, a
// [previous, current...]
// Positive: (b) previous, (a) current
// Negative: (a) current, (b) previous
// Zeroes: keep original order

/************************************************
 *           Homework for Wednesday Notes
 ************************************************/
//? Breadth-first Traversal: 
//? 1. Create a queue and enqueue the starting node
//? 2. Create a set to store visited nodes
//? 3. While the queue is not empty, repeat step 4 - 6
//? 4. Dequeue the first node
//? 5. Do the thing that is needed to for the dequeued node
//? 6. For each unvisited neighbor, add it to the visited node and to the back of the queue

//? Depth-first Traversal:
//? 1. Create a stack and push the starting node
//? 2. Create a set to store visited node, and add the starting node
//? 3. While the stack is not empty, repeat steps 4 - 6
//? 4. Pop the node on the top of the stack
//? 5. Do the thing needed to for the popped node
//?     --> for example: add it to a running total, print it, or save it in an array 
//? 6. For each unvisited neighbor, add it to the visited node and to the top of the stack

//? Breadth-first search algorithm:
//? 1. Create a queue and enqueue the starting node
//? 2. Create a set to store visited nodes
//? 3. While the queue is not empty, repeat steps 4 - 6
//? 4. Dequeue the first node
//? 5. Is this node the thing? If so, stop and return a result. Else, continue.
//? 6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue
//? 7. If the queue has become empty without finding the thing, then the thing has not been found.
//?     Return false, an error, or message as appropriate for the problem trying to be solved

//? A shortest path search algorithm:
// Algorithm:
// 1. Create a queue. Create a separate array containing the starting node.
//  Enqueue this array. The enqueued array is the current path
// 2. Create a set to store visited nodes
// 3. While the queue is not epty, repeat steps 4 - 6
// 4. Dequeue the first path, and save it in a variable
// 5. Save the last node in the path in a variable (DO NOT pop it)
// 6. Is this node the thing? If so, stop and return a result. Else, continue
// 7. For each unvisited neighbor of the last node:
//    a. Add it to the visited node set
//    b. Copy the saved path, and add the neighbor to the end. Enqueue the new path
// 8. If the queue has become empty without finding the thing, then the thing has not
// been found. Return false, an error, or a message as appropriate for the problem you are solving

// Save last element with currentNode = currentPath[currentPath.length - 1] 
// --> (don't use pop) as pop will break the graph and the path

//! Time complexity of both algorithm in BDS and DFS using Set when using stacks/queue is O(n)
//! @ Worst: traversal create each edge once in directed graph and twice in an undirected graph

//? Three steps to solve (almost) any graph problem:
//? 1. Identify and define the type of graph
//?       --> Cycle/Acyclic
//?       --> Directed/Undirected graph
//?       --> Weighted/unweighted 
//?       --> What are the nodes and what are the edges?
//?       --> Do you need to do a traversal or search?
//?       --> Breadth or depth-first?
//? 2. Implement the getNeighbors function
//?    == If graph is represented in an adjacency list == just requires fetching adjacencies by key
//?    == If graph is in some other form though == Involve more steps....
//? 3. Traverse the graph
//?   1. Create a queue and enqueue the starting node
//?   2. Create a set to store visited nodes
//?   3. While queue is not empty, repeat step 4 - 6
//?   4. Dequeue the first node and check if it's been visited
//?   5. If not, mark it as visited and do the thing
//?   6. Put all of its neighbor in the back of the queue

//?               SOCIAL CONNECTIONS
//? Given an object representing friendships in a social network, write a function
//? socialConnections that takes in a name and an integer degrees and returns a list
//? of all users within the degrees of friendship from the given name

friendships = {
    'Alice': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
}

// let test1 = socialConnections('Alice', 1, friendships);
// ['Bob', 'Frank']
// console.log(test1);

// let test2 = socialConnections('Alice', 2, friendships);
// // ['Bob', 'Frank', 'Charlie', 'Geraldine']
// console.log(test2);

// 1. Identify and define the type of graph
//?       --> Cycle/Acyclic
//?       --> Directed/Undirected graph
//?       --> Weighted/unweighted 
//?       --> What are the nodes and what are the edges?
//?       --> Do you need to do a traversal or search?
//?       --> Breadth or depth-first?

// 2. Implement getNeighbor function
// Since we know the adjacency list, we can use:
// function getNeighbors(node, graph) {
//   return graph[node];
// }

// 3. Traverse the graph
/*
* This function takes in a name and an integer degrees and returns a list of all 
* users within the degrees of friendship from the given name
*
* @param {String} name
* @param {number} degrees
* @param {object} graph
* @return {array} a list of all users within the degrees of friendship from the given name
*/
// function socialConnections(name, degrees, graph) {
//   debugger;
//   // Create a queue and enqueue a path to the starting node
//   const queue = [[name]];

//   // Create a set to store visited nodes
//   const visited = new Set();
//   const friends = [];

//   // While queue is not empty...
//   while (queue.length) {
//     // Dequeue the first path
//     let path = queue.shift();

//     // grab the last node from the path
//     let currentNode = path[path.length - 1];

//     // and check if it's been visited
//     if (!visited.has(currentNode)) {
//       // if it has not, mark it as visited
//       visited.add(currentNode);

//       // add to the friends array if the path is within the number of degrees
//       if (path.length > 1 && path.length <= degrees + 1)
//         friends.push(currentNode);
      
//       // put paths to all its neighbors in the back of the queue
//       let neighbors = getNeighbors(currentNode, graph);
//       for (let i = 0; i < neighbors.length; i++){
//         let pathCopy = [...path];
//         pathCopy.push(neighbors[i]);
//         queue.push(pathCopy);
//       }
//     }
//   }

//   // return the friends list
//   return friends;
// }

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
  // your code here
  // start with the visited like normal
  let visited = new Set();

  // start with a queue that has the starting path inside of it
  const queue = [[start]];

  // loop while queue has length
  while (queue.length) {
    // shift off of the queue, giving me a path
    let currentPath = queue.shift();
    // console.log(currentPath);

    // set a variable equal to the last element in the path
    let currentNode = currentPath[currentPath.length - 1];

    // check to see if the current is my end, if so return the path
    if (currentNode === end) return currentPath;

    // loop over the children of the current node
    let children = adjList[currentNode];
    children.forEach(el => {
      // need to make a copy of the path and add children all to their own path, and push those paths into the queue
      let pathCopy = [...currentPath];
      if (!visited.has(el)) pathCopy.push(el);
      queue.push(pathCopy);
    });
  }
  return false;
}

function degreesOfSeparation(start, end) {
  // your code here
    // start with the visited like normal
  let visited = new Set();

  // start with a queue that has the starting path inside of it
  const queue = [[start]];

  // loop while queue has length
  while (queue.length) {
    // shift off of the queue, giving me a path
    let currentPath = queue.shift();
    // console.log(currentPath);

    // set a variable equal to the last element in the path
    let currentNode = currentPath[currentPath.length - 1];

    // check to see if the current is my end, if so return the path
    if (currentNode === end) return currentPath.length - 1;

    // loop over the children of the current node
    let children = adjList[currentNode];
    children.forEach(el => {
      // need to make a copy of the path and add children all to their own path, and push those paths into the queue
      let pathCopy = currentPath.slice();//[...currentPath];
      if (!visited.has(el)) {
        pathCopy.push(el);
        visited.add(el);
        queue.push(pathCopy);
      } 
    });
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
