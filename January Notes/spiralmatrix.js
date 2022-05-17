/*
* This function traverse spirally given matrix
*
* @param {array} matrix
* @return {array} traversed spiral array of a given matrix
*/
const spiralOrder = function (matrix) {
    // variable for keeping track of result array
    let result = [];
    // variable for storing start row
    let startRow = 0;
    // variable for storing end row
    let endRow = matrix.length - 1;
    // variable for storing column
    let startCol = 0;
    // variable for storing end column
    let endCol = matrix[0].length - 1;

    // while startRow is less than or equal to end row AND start column is less than or equal to end column
    while (startRow <= endRow && startCol <= endCol) {

        /* from left to right: starting at 0 (as default) and down to last column */
        for (let col = startCol; col <= endCol; col++)
            // push cell at startRow, col
            result.push(matrix[startRow][col]);

        /* from top to bottom: starting at +1 of row and down to last row*/
        for (let row = startRow + 1; row <= endRow; row++)
            // push cell at row, endCol
            result.push(matrix[row][endCol])

        /* from right to left: starting at -1 of last column and left to first column */
        for (let col = endCol - 1; col >= startCol; col--) {
            // if startRow is the same as end row, break
            if (startRow === endRow) break
            // otherwise push endRow, col
            result.push(matrix[endRow][col]);
        }

        /* from down to top: starting at -1 of end row to top of start row*/
        for (let row = endRow - 1; row > startRow; row--) {
            // if startCol is same as endColumn, break
            if (startCol === endCol) break;
            // otherwise, push row, startCol
            result.push(matrix[row][startCol]);
        }

        // increment start and decrement end
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    } // end while loop

    // return result
    return result;
}; // end spiralOrder() expression function


matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [[1, 2, 3, 4, 5],
[16, 17, 18, 19, 6],
[15, 24, 25, 20, 7],
[14, 23, 22, 21, 8],
[13, 12, 11, 10, 9]]

console.log(spiralOrder(matrix))