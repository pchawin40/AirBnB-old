// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5, 6],
//     5: [1, 2, 4],
//     6: [4]
// }


// function printBreadthFirst(start) {
//   // Create a queue and enqueue the starting node
//   let queue = [start]
//   // Create a set to store visited nodes
//   let visited = new Set([start])
  
//   let answer = [];
  
//   // While the queue is not empty, repeat steps 4-6
//   while(queue.length) {
//     // Dequeue the first node
//     let current = queue.shift()
//     // DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
//     answer.push(current);
//     // For each unvisited neighbor, add it to the visited nodes and to the back of the queue
//     let neighbors = adjList[current]
//     neighbors.forEach(el => {
//       if(!visited.has(el)) {
//         visited.add(el)
//         queue.push(el)
//       }
//     })
//   }
  
//   return answer;
// }


// console.log("First Test:")
// console.log(printBreadthFirst(3)); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                         // One possible solution:  4, 3, 5, 6, 2, 1

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function aShortestPath(start, end) {
//   // your code here
//   debugger;
  
//   // Create a queue. Create a separate array containing the starting node. Enqueue this array. The enqueued array is the current path.
//   const queue = [];
  
//   const currentPath = [start];
//   queue.push(currentPath);
  
//   // Create a set to store visited nodes
//   const visited = new Set([start]);
  
//   // While the queue is not empty, repeat steps 4-6
//   while(queue.length){
//   	// Dequeue the first path, and save it in a variable  
//     let shifted = queue.shift();
    
//   	// Save the last node in the path in a variable (DO NOT pop it)
//   	let currentNode = shifted[shifted.length - 1];
    
//     // IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
//     if(currentNode === end) return true;
//   	// For each unvisited neighbor of the last node:
//     const neighbors = adjList[currentNode];
//     neighbors.forEach(el => {
//       // currentNode = el;
//       if(!visited.has(el)){
//       	// Add it to the visited nodes set
//       	visited.add(el);
//         currentPath.push(el);
//         queue.push(currentPath);
//       };
//     });
    
//   	// Copy the saved path, and add the neighbor to the end. Enqueue this new path
//   }

//   // If the queue has become empty without finding the thing, then the thing has not been found. Return false, an error, or a message as appropriate for the problem you are solving.
//   return false;
// }

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false
