/***************************************
//?       Homework for Thursday
****************************************/
/**************************************
//TODO:       Transitions
 **************************************/
//? CSS Transitions components:
// Sub-property:    
//* Transition - property: 
//* Specifies the name or names of the CSS properties to which transitions should
//* be applied. Only properties listed here are animated during transitions; changes
//* to all other properties occur instantaneously as usual

//* Transition - duration
//* Specifies the duration over which transitions should occur. You can specify a 
//* single duration that applies to all properties during the transition, or 
//* multiple values to allow each property to transition over a period of time 

//* Transition - delay
//* Defines how long to wait between the time a property is changed and the 
//* transition actually begins

//! See 04.28.22_notes.css for continuation

/***************************************
//?           Thusday Quiz
****************************************/
//? Q1. Where are global variables stores in browsers?
//! The window object
// E: In the browsers, the window objects stores global variables, however in Nodes.js
// the global object stores all the global variables. This menas you can't 
// refernece window in Node

//? Q2. True/False. A queue data structure is used for a breadth-first traversal
//! True
// E: By processing nodes first in, first out, the traversal progresses one level at a time
// before moving on to the next level

//? Q3. What browser developer tool is used to view a site in different device viewports?
//! The responsive design tool
// E: The responsive design tool or device toolbar (iphone/tablet icon) can toggle
// between different viewports so you can see what the site would look like on 
// different devices

/***************************************
//?           Friday Quiz
****************************************/
//? Q1. How do you prevent a script from running until the page loads?
//! Add an attribute to the script tag, like async or defer
//! Put a script tag importing your external code at the bottom of your HTML file
//! Use the DOMContentLoaded event in an external JS file
// E: There are actually multiple ways to prevent a script from running until the page has
// loaded. Using the DOMContentLoaded event in an external JS file, put a script tag 
// importing your external code at the bottom of your HTML file, or add an attribute
// to the script tag, like async or defer

//? Q2. True/False. A grid container is necessary to style grid items properly
//! True
// E: A grid container with display: grid is necessary to format grid components within the
// container. Without it, they have no overlayed structure, defeating the purpose of the grid

//? Q3. You're writing code to find the shortest path from the start to end in a maze.
//? Which algorithm would most likely be faster?
//! Breadh-first traversal
// E: A depth-first search would search every path to its end before starting over from
// the beginning again. This cycle would repeat until a solution is found. A breadth-first
// search will search multiple different path at once until a solution is found which is
// generally faster if the maze is large enough
