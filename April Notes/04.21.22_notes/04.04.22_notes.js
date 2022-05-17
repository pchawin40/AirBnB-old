//! Display:
//? "Block":
// - Box fill available container space (filling up 100% of available space in most cases)
// - Each new box appears on a new line/row
// - CSS properties width and height are respected
// - Padding, margin, and border of the box will push other elements farther away from the box

//? "Inline":
// - Each box appears next to each other in a single line until it fills up the available space
// - CSS properties width and height don't apply
// - padding, margin, and border of a box are applied but don't push other inline boxes away from the box

//? "Inline-block":
// - Combining "Block" and "Inline" in order to make each block appear next to each other without having to use
// float hack

//! Content box:
//? Width and Height of an element set with CSS refers to width and height of the box's content
//? - Any padding, border, margin added to the element will get added to the total size of actual box
//? - If padding, border, or margin are removed from a box, the box size decreases but the width and height 
//?   of the content stays the same

//! Border-box
//? Allows setting to the values "content-box" including the width of the left border, right border, left padding,
//? and right padding in the overall width

//! Padding: Applies padding on every side of a box
//? Appears in clockwise-order (top, right, bottom, left)

// .box-1{
//   /* One values applies to all four sides */
//   padding: 3em;
// }

// .box-2{
//   /* Two values: top & bottom | left & right */
//   padding: 20% 5%
// }

// .box - 3{
//   /* Three values: top | left & right | bottom */
//   padding: 15px 10px 20px;
// }

// .box - 4{
//   /* Four values: top | right | bottom | left */
//   padding: 0 10px 2em 1em;
// }

// .box - 5{
//   /* Global values */
//   padding: inherit; /* OR initial OR unset */
// }

//! Properties with shorthand:
//? border-width:
// - border-top-width
// - border-right-width
// - border-bottom-width
// - border-left-width
//? border-style:
// - border-top-style
// - border-right-style
// - border-bottom-style
// - border-left-style
//? border-color:
// - border-top-color
// - border-right-color
// - border-bottom-color
// - border-left-color

//! Centering an element with margin:
//? Using 'auto', the browser sets the margin for an element
// --> can use auto to horizontally or vertically center an element 'inside' its parent container
// For browser that does not support flex box, using "auto" or "margin: 0 auto" is good for centering elements on browsers
// that do not support flexbox

// Modern browsers allow "justify-content" which is the modernized "margin: 0 auto" of centering child element inside parent's container

//! Color-picker: https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart

// Applying Colors:
// _____________________________________________________________________
// |                              |                                     |
// |       To affect the...       |         use the property...         |
// |______________________________|_____________________________________|
// |                              |                                     |
// |       color of text          |               color                 |
// |______________________________|_____________________________________|
// |                              |                                     |
// |background color of an element|        background-color             |
// |______________________________|_____________________________________|

//! Borders Property:
//? Width
//? Style:
//  - Solid - used almost all of the time
//  - dotted - used some times
//  - dashed - infrequently used
//  - double - infrequently used
//  - groove - infrequently used
//  - ridge - infrequently used
//  - inset - infrequently used
//  - outset - infrequently used
//? Colors
//? Box-shadow: https://codepen.io/aa-academics/pen/GRJXjdZ?editors=0100
//? Opacity: https://codepen.io/aa-academics/pen/zYGJKMe?editors=0100

/***********************************************
 *               CSS Positioning
 **********************************************/
//! Property values:
//? Static
//? Relative
//? Absolute
//? Fixed
//? Sticky
