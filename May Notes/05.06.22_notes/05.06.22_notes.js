/**********************************************************
*TODO:              Homework for Saturday
***********************************************************/
/**********************************************************
*                        JSON
***********************************************************/
//? === JSON ===
// Open-standard file format that "uses human-readable text to
// transmit objects consisting of key-values pairs and array data types"

//? JSON is a format!
// JSON is just a string. It's just text

//? Why all the confusion?

//? "Remind me about JavaScript literals"

//? Boolean, numeric, and null values

// JAVASCRIPT (literal value)   |         JSON (representation in a string)
// true                                   "true"
// false                                  "false"
// 12.34                                  "12.34"
// null                                   "null"

//? String literals in JSON
//* Example
// JavaScript literal value: 'this is "text"'
// JSON format: "this is \"text\""
// --> JSON always use double quotes for strings
//                     -------------
// delimited string for JSON: \ (for escape)
// delimited string for JSON: \n (for new line)

//? Array values
// JavaScript: [1, 2, 3]
// JSON: "[1, 2, 3]"

//? Object values:
// JavaScript: {person: true, name: "Roberta"}
// JSON: "{\"person\": true, \"name\": \"Roberta\" }"

//? Some terminology
//? === serialization ===
// The process of turning some data into string (or some other kind of values like "binary")

//? === deserialization ===
// The process of taking some text and turning it into data

//? Using the built-in JSON object (to convert JSON-formatted string into JS objects
//? and vice versa with JS objects into JSON-formatted)
// JSON.stringify(value) ==> turn value passed into it into a string
// JSON.parse(str) ==> turning JSON-formatted string into a JS object

const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));

// prints [1, "hello, \"world\"", 3.14, {"id" : 17}]

const str = '[1, "hello, \\"world\\"", 3.14, {"id": 17}]';
console.log(JSON.parse(str));
// prints an array with the following entries:
// 0: 1
// 1: "hello, \"world""
// 2: 3.14
// 3: { id: 17 }

//? You will almost never write raw JSON

//? Brain teaser
//* problem 1:
const a = [1, 2, 3, 4, 5];
console.log(a[0]); // print 1 at index 0

//* problem 2:
const s = JSON.stringify(a);
console.log(s[0]); // "[1, 2, 3, 4, 5]" --> s[0] will return '['

const v = JSON.parse(s);
console.log(v[0]); // [1, 2, 3, 4, 5] --> print 1

/**********************************************************
*?                    JSON Quiz
***********************************************************/
const hello = {
  "Hello": "World!"
} //! This is not valid JSON because you cannot declare variable in JSON

{
  Hello: "World!"
} //! This is not valid JSON because the key must be string (double quotation)

{
  'hello': "world!"
} //! This is not valid JSON because you can only use double quotations

{
  "1": {
    "id": 1,
    "name": "Fluffy",
    "toy":{
      "name": "Ball",
      "color": "red"
    },
  }
} //! This is not valid JSON because even though you CAN HAVE NESTED ELEMENTS, you CANNOT HAVE TRAILING COMMAS

{
  "colors": ["green", {
    "bright": "yellow"
  }]
} //! This is proper JSON because an array does not need to be all in quotation mark...
//! Each element in JSON array can be of different type

//? Q6. Identify the correct JSON characteristics
//! The keys of a JSON object can only be strings
//! There are no sets (data structure) in JSON
//! You cannot have trailing commas in JSON
//! The values of a JSON object does not only have to be in strings (i.e. boolean, null, number)
//! JSON is used in multiple language in addition to just JavaScript

/**********************************************************
*?               Formative Quiz - Saturday
***********************************************************/
//? A correct RESTful endpoint to delete a post's comment
//! DELETE /posts/:postId/comments:commentId
//E: To delete a comment for a particular post, the server needs to know
// the post you want to delete the comment for. Since the comment has been created,
// it has contains an unique id or an identifier by the server
