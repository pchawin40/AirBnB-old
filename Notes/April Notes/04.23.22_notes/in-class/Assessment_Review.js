/****************************************
 *         Practice Assessment
 ***************************************/
//? Q1. Which of the following is the default value for the CSS position property for HTML elements?
//? float
//? block
//? hidden
// !static
// E: The browser defaults an HTML element's position to be static within the layout flow. Thus, "static" value is the default
// value for the position property of HTML elements

//? Q2. Select all of the options that CSS would interpret as the color solid red.
//? rgb(1, 0, 0)
//? rgba(255, 0, 0, 0)
//! #FF0000
//! #F00
//! rgb(255, 0, 0)
//! red
// E: #F00 and #FF000 are both valid hex-values for colors. rgb and rgba color values are from 1-255, so rgb(1, 0, 0) would render
// as nearly black.The alpha value in rgba is from 0 - 1, so rgba(255, 0, 0, 0) would render as transparent.

//? Q3. What is the most appropriate semantic HTML tag for the "Featuring" text?
//! h2
// E: This is a level 2 subheading, which indicates a h2 tag

//? Q4. Which of the following are generic names for font families defined by the CSS standard?
//! serif
//! monospace
//! sans-serif
// E: The CSS standard defines nine generic names: serif, sans-serif, monospace, cursive, fantasy, system-ui, emoji, math, and fangsong.

//? Q5. Which of the following CSS selectors would apply to all SPAN tags that do not have the "highlighted" class?
//! span:not(.highlighted)
// E: Using the :not pseudo-class applies it to the element that goes to the left and precludes the selector within the parentheses. 
// Therefore, span:not(.highlighted) chooses SPAN elements that do not have the "highlighted" class

//? Q6. What is the most appropriate semantic HTML tag for the "Visit Southern France" text?
//! h1
// E: This is the page's main heading which indicates an h1 tag

//? Q7. What is the most appropriate semantic HTML tag for the "Saint-Rémy-de-Provence" text?
//! p
// E: This is a paragraph of text which indicates a p tag

//? Q8. Which of the following is ignored when using the setting "border-box" for box-sizing?
//! margin
// E: Neither "border-box" or "content-box" layouts use margin in their measurements. The "border-box" method of calculation does include the 
// other three

//? Q9. Which of the following is the CSS property used to set text to italic?
//! font-style
// E: font-style to italic is the proper way to set text to italic.

//? Q10. From outer to inner, what order are border, padding and margin applied?
//! margin, border, padding
// E: From outer to inner, the order is margin, border, padding, and then the content itself

//? Q11. Which of the following can not be set by the CSS border property?
//! shadow
// E: There is no "shadow" that is applicable to borders

//? Q12. Which one of the following HTML blocks contains an element that would be selected by p > a[href]
//! <p><a href="#">Link</a></p>
// E: The ">" means a direct child. The "href" means the element must have an attribute named "href". Only the correct answer has a
// P element with a direct child A element with an HREF parameter.

//? Q13. What is the most appropriate semantic HTML tag for the picture?
//! img
// E: This is an image which should use an img tag. The same feature could also be accomplished using a div with a background-image CSS property,
// but it is less appropriate since the image is not in the background of any other elements.

//? Q14. When using the rgba() method of specifying a color for the browser to render, what is the alpha value that will give the color 50% opacity?
//! .5
// E: The correct answer is "0.5" which indicates that the alpha channel has an opacity value of 50%.

//? Q15. Of the options listed, which one of the following has the lowest level of specificity with regards to how CSS determines rule application?
//! Rules that target a tag name
// E: Ruels that target tag names should have the lowest level of specifity from the options listed

//? Q16. Which of the following are valid CSS rules to set the size of rendered text?
//! font-size: 12pt;
//! font-size: 2em;
//! font-size: 100%;
// font-size: 12;
//! font-size: 12px;
// E: All of the following are valid font sizes except for the 12 without units.

//? Q17. What is the most appropriate semantic HTML tag for the list of features?
//! ul
// E: This is an unordered, bulleted list which uses a 'ul' tag.

//? Q18. From the reading, identify the two options that are relative units of measurement defined by CSS.
//! rem
//! em
// E: The units em and root em (rem) are relative units of measure. The inch (in) and centimeter (cm) are absolute units of measure.

//? Q19. Which of the following CSS selectors has the highest specificity?
//! div.article p.article-text a
// E: The div.article p.article-text a rule has two classes and two body tags. That gives it a "score" of "0-2-2" which is higher than the others.

//? Q20. Identify each of the selections which are sans-serif fonts.
//! Selection D
//! Selection B
// E: Selection A (New Tegomin) and C (Kurale) are both serif fonts. Selection B (Poppins) and Selection D (Poppins) are sans-serif.

//? Q21. Which of the following CSS rules will stick an element to the top of the window, regardless of scroll?
//! position: fixed, top: 0;
// E: position: absolute; top: 0; will move the element to the top of the page but will scroll normally.
// position: sticky; top: 0; will stick the element to the top of the window until the element is scrolled past.
// position: static; top: 0; will not stick the element to the top of the page
// position: fixed; top: 0; will stick the element to the top of the page, regardless of scroll

//? Q22. Which of the following are valid values for the position property for CSS?
// inline-block
// grid
//! relative
// inline
//! sticky
// flex
//! fixed
//! absolute
// E: The valid values in the list are "absolute", "fixed", "relative" and "sticky"

//? Q23. Which of the following HTML blocks contains an element that would be selected by div#main p.text?
//! <div id="main"><p class="text">Lorem</p></div>
// E: The "#" selects ids and the "." selects classes. This looks for a DIV that has an id of "main" with a child P element with a class of "text".

//? Q24. What is the correct CSS property for setting the color of the letters rendered by the browser?
//! color
// E: The color property is the one used by CSS to indicate the color of text.

//? Q25. Which of the following are valid CSS properties?
// padding-inner
//! border-top
// outline-bottom
//! margin-right
// E: CSS allows you to use -top, -left, -bottom, and -right suffixes for margin, padding, and border to target specific sides
