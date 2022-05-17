/*********************************
 *      Flexible Box Model 
 ********************************/
// == Flexible Box Model (Flexbox) ==
// ==> Provides a convenient way to display items inside a flexible container so that
// the layout is responsive
//? - Width and height are automatically adjusted to fit the viewport, then the sizing
//?   alignment, and spacing between the items inside the container are optimized for the 
//?   available space


//? Consists of:
//?     - A parent element (i.e. flex container)
//?     - Its children (i.e. flex items)

//? Setting up flex container:
// apply "display: flex" or "inline-flex"
// to get elements to wrap to a new line, use flex-wrap


// .container {
  //   display: flex;
  //   flex-wrap: wrap; /* OR nowrap OR wrap-reverse */
  
  //?  Flex direction: allows either rows or column or elements
  //   flex-direction: row; /* OR row-reverse OR column OR column-reverse */

  //   //? can combine flex-direction and flex-wrap using flex-flow
  //   flex-flow: row wrap; /* Set flex-direction first, followed by flex wrap */

  //   //? can re-arrange order of flex element in which they appear using "order" property
  //   order: 1; /* Must be an integer. Default is 0. */
// }

/*********************************
 *      Flexible Box Alignment
 ********************************/
// TODO: Controlling alignment and spacing

//? justify-content: 
//? ==> Defines alignment of flex items along the main axis and distribute 
//? extra container space around / between items

//! flex-start: keep items in designated size and stack them all at the start
//! flex-end: keep items in designated size and stack them all at the end
//! center: keep items in their designated size and stack them all in the middle
//! space-between: keep items their designated size and put all extra space between them
//! space-around: keep items their designated size and put space at the start, at the end, and in between
//! stretch: grow or shrinnk items to fill all the space

//? align-items:
//? ==> Defines alignment of flex items along cross axis, and distributes 
//? extra container space around/between them

//! flex-start
//! flex-end
//! center
//! stretch

//? gap
//? ==> Defines amount of space between items

// TODO: Understanding flex-direction
//? flex-direction: row, column, row-reverse, column-reverse

// TODO: Resizing flex items
//? flex-grow: 
//? ==> dictate amount of available space inside the flex container that the item should take up

//? flex-shrink: 
//? ==> defines ability for a flex item to shrink if necessary. 
//? - a value of zero will force an item to not change its size

//? flex-basis: 
//? ==> default size of an element before remaining space is distributed

//? flex:
//? ==> short hand for grow, shrink, basis
//    - 0 1 auto: 
//        • "do not grow larger than content"
//        • "shrink to fit available space"
//        • "set the base size automatically"
