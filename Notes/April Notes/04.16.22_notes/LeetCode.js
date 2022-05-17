// // Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// // An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// // Example 1:

// // Input: grid = [
// //   ["1","1","1","1","0"],
// //   ["1","1","0","1","0"],
// //   ["1","1","0","0","0"],
// //   ["0","0","0","0","0"]
// // ]
// // Output: 1
// // Example 2:

// // Input: grid = [
// //   ["1","1","0","0","0"],
// //   ["1","1","0","0","0"],
// //   ["0","0","1","0","0"],
// //   ["0","0","0","1","1"]
// // ]
// // Output: 3
 

// // Constraints:

// // m == grid.length
// // n == grid[i].length
// // 1 <= m, n <= 300
// // grid[i][j] is '0' or '1'.

// /*
// * This function check to see if the constraint is valid
// */
// function constraintChecker(grid) {
//   const m = grid.length;
//   const n = grid[0].length;
//   if (1 > m || n > 300) throw new Error("Something wrong here");
// }

// /*
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function (grid) {
//   // constraint checker
//   // constraintChecker(grid);

//   // Create a visited set to store visited nodes
//   const visited = new Set();

//   // Initialize count to 0
//   let count = 0;

//   // Iterate through all indices in grid
//   for (let row = 0; row < grid.length; row++){
//     for (let col = 0; col < grid[row].length; col++){
//       // variable for current: cell, cell string, and cell value
//       const currentCell = [row, col];
//       const currentCellStringified = currentCell.join('');
//       const currentCellVal = grid[row][col];

//       // if an index contains a 1 and has not been visited,
//       if (currentCellVal === 1 && !visited.has(currentCellStringified)) {
//         // increment island count and start traversing neighbors:
        
//         // DO THE THING (increment island count by 1)
//         count++;

//         // Initialize a stack with current index
//         const stack = [currentCel];

//         // Add stringified version of current index to the visited set
//         visited.add(currentCellStringified);

//         // While stack contain elements
//         while (stack.length) {
//           // pop element from stack
//           const popped = stack.pop();

//           // get valid neighbors of current elemtn
//           const neighbors = getNeighbors(popped[0], popped[1], grid);

//           // Iterate over neighbors
//           neighbors.map(currentNeighbor => {
//             // If neighbor has not been visited
//             if (!visited.has(currentNeighbor.join(''))) {
//               // Add neighbor to the stack
//               stack.push(currentNeighbor);

//               // Mark neighbor as visited
//               visited.add(currentNeighbor.join(''));
//             }
//           });
//         }
//       }
//     }
//   }
//   // return island count
//   return count;
// };


/********************************************************
 *        LeetCode - Minimum Number of Vertices
 *******************************************************/

// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

// Notice that you can return the vertices in any order.

 

// Example 1:



// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].
// Example 2:



// Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// Output: [0,2,3]
// Explanation: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.
 

// Constraints:

// 2 <= n <= 10^5
// 1 <= edges.length <= min(10^5, n * (n - 1) / 2)
// edges[i].length == 2
// 0 <= fromi, toi < n
// All pairs (fromi, toi) are distinct.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  // vertices are from vertex 0 to given n
  
  // 1. Call all vertices that cannot be reached
  

  // 2. Using DFT/BFT, trace out all vertices reachable from each vertex in the array (copy array) and delete them

  // 3. In the graph now, find vertex that get rid of most node and sort ascendingly

  // 4. Return sorted vertices
};
