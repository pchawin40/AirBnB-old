/*************************************
 *         Grid Layout Part 1
 *************************************/ 
//TODO: Grid Layout Part 1
//? CSS Grid: 2D layout system that lets developers create a grid with columns and rows using just css
//! Gives developer the ability to control and customize an entire page layout
// Provides greater flexibility and customizability than Bootstrap
//    - Add as many columns and rows as you want; no HTML classes to use; only CSS properties
//    - can make grid items easily span multiple rows/columns (no external libraries are required)


/*************************************
 *         Grid Layout Part 2
 *************************************/ 
//TODO: Container Styles
//! Grid layout consists of CSS styles that applied to:
//  - Grid container: Parent element
//  - Grid Items: Children elements

//? see 04.27.22_notes.css (continued)

/*************************************
 *      Homework for Wednesday Quiz
 *************************************/ 
//? Q1. Select all that apply. Which of the following size values are accepted in a grid template?
//E: A grid can accept the size values of px, %, fr, and auto. Each of their respective values affect
// the available space of the grid in their own unique way.

//? Q2. Which of the following grid properties defines the containers of a template to help you 
//? visualize the grid layout ?
//! grid-area
// E: The use of grid-areas: grid-area and grid-template-area allows you to define the area of the grid
// template whether it is a column or row. This helps you visualize what your grid layout will look like
// and even make add specific properties to designated areas.

//? .grid-container {
//?   display: grid;
//?   grid-template-columns: repeat(3, 1fr);
//?   grid-template-rows: auto;
//?   grid-template-areas:
//?     "header header header"
//?     "main . sidebar"
//?     "footer footer footer";
//?   background-color: white;
//? }
//? Q3. What does the . value in between the main and sidebar values in the grid-template-areas
//? property in the code above represent ?
//! An empty space with no content
// E: The . value in the grid-template-areas represents an empty space with no content within the cell

//? Q4. Which of the following grid container properties aligns ALL items on the row of the grid (horizontally)?
//! justify-items
// E: The justify-items property aligns ALL items that are in the grid row. If you wanted to align ALL the items
// in the column (vertically) it would be align-items property

//? Q5. How would you implement spaces between rows and columns or "gutters" on a grid layout?
//! grid-gap
// E: The use of grid-gaps: grid-gap, grid-row-gap, and grid-column-gap accepts a size value that
// creates spaces between your grid rows and columns. They are known as "gutters"
