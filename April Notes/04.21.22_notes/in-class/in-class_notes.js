// What is the box model?
/* 
The CSS Box Model is a concept that basically boils down to every HTML element has a box around it

From innermost it goes
1. content -- this is the innermost, content of given element. words/picture/whatever is the actual content of the element
2. padding -- space between the edge of the content, to the start of the border
3. border -- edge of the element. doesn't have to be visible. just the edge of the elemtn. -- border radius example
4. margin -- distance between the border and the next element/elements/top or bottom of the page. auto for easy center

Elements with the dispaly of block will follow the below rules. i.e., div elements, headers, and p elements 
or elements with the display of block will follow these rules

    The box fills available container space, and in most cases it fils up 100% of the available space, becoming as wide as its content
    Each new box appear on a new line/row
    The CSS properties width and height are respected
    The padding, margin and border of the box will push other elements farther away from the box

elements (boxes) that have a display value of "inline" either because it is the default avalue for that kind of element (i.e., 
or it is specifically overriden in CSS, the browser follow these rules to layout the element:
    
    Each box appears next to each other in a single line until it fills u pthe available space.
    The CSS properties width and height don't apply.
    The padding, margin and border of a box are applied, but they don't push other inline boxes away fro mthe box

Box sizing content-box (default) if you have a width of 100p x and padding-left 10px and padding-right 10px. The actual widwth is
The width refers to just the content
.box{
    border: 10px solid black; APplies to all four sides
    height: 100px; Content's height
    margin: 50px; Applies to all four sides
    padding:25px; Applies to all four sides
    width: 250px; Content's width

Setting the box-sizing property to border-box includes the width of the left border, right border, left padding, and right padding
and the top border, bottom border, top padding, and bottom padding in the overall calculation of the height
.box{
    border: 10px solid black; Applies to all four sides
    box-sizing: border-box;
    height: 100px; Sum of content + top/bottom padding + top/bottom border
    margin: 50px; Applies to all four sides
    padding: 25px; Applies to all four sides
    width: 250px; Sum of content + left/right padding + left/right border
}

}

display inline block -- best of both block and inline. height and width this matter but things will be inline

Border is a shorthand CSS property that sets an element's border on all sides. IT sets the value of border's width
.box{
    border: 3px solid #00000;
    border-width | border-style | border-color
}

Different border styles
solid -- used almost all of the time
dotted - used some times
dashed - infrequently used
double -- infrequently used
groove -- infrequently used
ridge -- infrequently used
inset -- infrequently used
outset -- infrequently used

Anytime you ue a color, you can specify by the rgb function -- rgb (255, 255, 255) ror hex of each number concat
as well there is an rgba function where the last arg is the opacity rgb (255, 255, 255, 0.5) half transparent

box shadow and text shadow takes 5 possible values
The first two length are the horizontal and vertical offsets of the shadow

The third length, if provided, is the blur radius of the shadow. The bigger this number, the bigger the blur,
so the bigger the shadow

The fourth length, if provided, is the spread radius. Positive values make the shadow expand. Negative values make it shrink

The color is usually some transparent value of black, like rgba(0, 0, 0, 0)

text shadow is the same but you can put the color first if you want

opacity property. more or less transparent

Position proeprty -- static or not positioned top bottom left right don't apply
-- relative the top bottom left right are off set values relative to itself, and does not effect other elements
-- absolute element is removed from the flow of the document and no space is made between other elements for it on the page 
-- fixed removed from the flow, no space is made and is position relative to the nearest block level element
-- sticky -- the element is positioned according to the normal flow of the document, and then offset relative to its parent
scrolling ancestor
*/
