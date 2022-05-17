/***************************************
*TODO:      HTTP Request Components
****************************************/
//TODO: HTTP Request Components

//TODO: Retrieving Hypertext
//? The browsers part in the transaction of handling the user's desire is called request
//? Browser is sometimes referred to as the user-agent

//TODO: Components of an HTTP request

// POST / HTTP/1.0

// Key : Value
// --- : -----
// Host: appacademy.io
// Content-Length: 31
// Content-Type: application/x-www-form-urlencoded
// Host: appacademy.io
// Connection: keep-alive
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
// Accept-Encoding: gzip, deflate
// Accept-Language: en-US,en;q=0.9
// 
// username=azure&password=hunter2

//? Breaking down the request

// Request Line: Sets the stage for everything to come. Made up of three parts, separated by spaces
//    --> Sets the table
//    • Method -- indicated by an HTTP verb
//    • URI (Uniform Resource Indicator) -- identifies what you've requested
//    • HTTP version expected to use (e.g. HTTP/1.1 or HTTP/2)

// Resource = can be anything from physical objects to statuses to a kind of information; i.e. includes users, posts, and likes

//* Headers: Key/Value pairs that come after the request-line | case-insensitive
//   --> Describes the menu
//   --> Defines how the server might process the request

//* Body:
//    ○ name=claire&age=29&iceCream=vanilla

//* 5 Common HTTP verbs
// Determines the CRUD operation (Create, Read, Update, and Delete)
// - Has five commonly used verbs: GET, POST, PUT, PATCH, and DELETE

// GET: Used for retrieving resources from the server. Generally how websites are retrieved, and only require that the 
// server return a resource
//      ○ Will never have a body
//      ○ Any data that is needed to be sent in a GET request must be shared via URI

// POST: Creating new resources on the server
//      ○ Can have a body containing any data the server might need to complete the request, like username & password
//        or the contents of shopping cart

// PUT: Used to update a resource on the server. Contain the whole resource you'd like to update
//     ○ Can have a body containing the data needed to update the resource
//     ○ Ex: When updating name on a website, a PUT request will be generated containing not just new name
//           but also user ID, e-mail, etc.

// PATCH: Used to update a resource on the server. Like PUT request, but do not require the whole resource to perform
// the update
//     ○ Can have a body containing the data needed to update the resource
//     ○ Only require new name, not the rest of account details, to succeed

// DELETE: destroy resources on the server
//     ○ Requests can have a body, BUT it's traditionally not recommended to include one
//     ○ Might be saved database records, like removing a product that's sold out, or more ephemeral resources,
//       like logging a user out of their current session

//* Content-Type Header
// Any header beginning w/ Content- are headers that define detail about the body of the request
// - GET request should never have any content headers

//! Content-Type: Lets the server know the format of the request body data and how to process it
//    --> values: follow a standard and are called MIME types (media types);
//        ==> defines how receiver of the data should format and process the data

// MIME Type                              |           Meaning
// ---------                              |           -------
// application/x-www-form-urlencoded      |  info submitted directly from an HTML web form
// application/json                       |  JSON - data format similar to Javascript objects
// multipart/form-data                    |  info submitted from an HTML web form w/ multiple media types

// Other Common Headers
// Host: Root path from the URI; typically domain we'd like to request resource from
//      ○ appacademy.io

// User-Agent: Displays information about which browser the request originated from
//      ○ name/version

// Referer: Defines where URL is coming from

// Accept: indicates what the client can receive; can modify this header in requests to only
// get back certain type of data

/***************************************
*TODO:      HTTP Response Components
****************************************/
//? Hypertext delivered

//? Components of an HTTP response
//! Formatted similarly to requests: there's a status-line (instead of request-line)

// HTTP/1.1 200 OK
// Content-Type: text/html; charset=utf-8
// Transfer-Encoding: chunked
// Connection: close
// X-Frame-Options: SAMEORIGIN
// X-Xss-Protection: 1; mode=block
// X-Content-Type-Options: nosniff
// Cache-Control: max-age=0, private, must-revalidate
// Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
// X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
// X-Runtime: 0.006894
// Strict-Transport-Security: max-age=31536000
// Vary: Origin
// Via: 1.1 vegur
// Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
// Server: cloudflare
// CF-RAY: 51d641d1ca7d2d45-TXL
// 
// <!DOCTYPE html>
{/* <html> */}
{/* ... */}
{/* ... */}
{/* </html> */}

//? Status: The HTTP version the server is responding with is specified, then followed with a status-code and reason-phrase
//* Status codes: 100-199: Informational
// --> Lets the client know that a request was receives, and provide extra info from the server

//* Status codes: 200-299: Successful
// --> Lets the client know that the request succeeded and the server is handling it
// 200 OK = Request received and fulfilled. Usually come w/ a body that contains the resource you requested
// 201 Created: Request was received and a new record was created as a result

//* Status codes 300 - 399: Redirection
// --> Lets the client know that there has been a change in the URL path and should redirect the user there
// 301 Moved Permanently = Resource requested is in a totally new location
// - May be useful if a webpage has changed domains, or if resources were reorganized on the server
// - Most clients will automatically process this redirect and sends new location, so you may not notice response at all

// 302 Found - Indicates resources has moved
// - Indicate a permanent move where the old domain should still be valid too
//    ○ Example: Transition from HTTP to HTTPS

//* 400 - 499 Client Error - Indicate there is a problem with the client's request

// 400 Bad Request (malformed requests) - Server received request but couldn't understand it 

// 401 Unauthorized - Resoruces requested may exist but not allowed to see it without authentication
//      ○ Either didn't log in yet or tried to but credentials aren't being accepted

// 403 Forbidden - Resource requested may exist, but not allowed to see it at all 

// 404 Not Found - resource requested doesn't exist (e.g. typo in request)

//* 500 - 599: Server Error - Indicate request was formatted correctly, but that the server couldn't do what was asked
//* due to an internal problem

// 500 Internal Server Error - Request was received and server tried to process it but something went awry

// 503 Service Unavailable - Server not ready to handle the request; typically used for temporary conditions and
//  retry-after HTTP header should contain estimated time before recovery of the service

// 504 Gateway Timeout - Request was received but server didn't respond in a reasonable amount of time

//? Headers ~ Server HTTP acts similarly to HTTP responses
//* Content-Type: lets the client know that the format of the response body data and how to process it
// - can be present on response and requests
// any HTTP interaction involving content

// MIME Types          | Meaning
// ----------            -------
// text/html           | HTML document
// text/css            | CSS styles document
// text/javascript     | JavaScript script
// text/plain          | plain text
// image/png           | PNG image
// application/json    | JSON - data format similar to JavaScript object

// Location: Used by client for redirection purposes; contains URL the client should be redirected to
// Expires: When response should be considered stale or no longer valid; lets client cache responses
// Content-Disposition: Header lets the client know how to display the response and is specifically devoted
//    to whether the response should be visible to the client or delivered as a download
//    -- control whether user get to download or preview content before downloading
// Set-Cookie - sends data back to the client to set on the cookie, a set of key/value pairs associated w/ server's
// domain. Use for getting around that HTTP is stateless and makes it so that its stateful.
//    -- send back information like unique ID for user you've logged in as or details about other resources 
//       requested on domain


//? Body
//! Dictated by Content-Type header. 
// --> Documentation about server routes should be clearly marked so that other applications know how to manage them
// Header may change how the browser handles the body, but they won't modify the body's content

/**********************************************
*TODO: HTML Form Submission Request/Response
***********************************************/
//? HTML Form Review
// Can specify two HTML attributes that influence the components of the request made when the form is submitted
// (1) Method - Method of the request, can only be set to "POST"
// (2) Action - URL path of the request

<form method="post" action="/dog">
  <input type="text" name="name" />
  <select name="color">
    <option value="black">Black</option>
    <option value="brown">Brown</option>
    <option value="yellow">Yellow</option>
    <option value="white">White</option>
  </select>
  <input type="number" name="age" />
  <textarea name="description"></textarea>
  <button type="submit">Create Dog</button>
</form>

// Component of the requests:
// (a) Method - defined by method HTML form attribute
// (b) URL path - defined by action HTML form attribute
// (c) Content-Type header - application/x-www-form-urlencoded
// (d) body - form input names and values

//? Server Response

// Example of 302 and a location header w/ value:
// Status code - 302
// Location header - path to redirect user to
// Body - none

// Flow of how a typical form submission goes
// (1) Form is submitted
// (2) Browser makes request to server
// (3) Server parses request body and does some CRUD action with data
// (4) Server sends a redirection response
// (5) Browser receives response
// (6) Browser redirects user to the path specified in the Location header of the response

/**********************************************
*TODO:      RESTful Routes Convention
***********************************************/
//? RESTful Routes (REpresentational State Transfer)

//? Routes vs Endpoints
//! Routes = URL path for a request

//! Endpoint = Pattern for a request that has specific route and HTTP verb combination to define how
//! the server should process the request and what the response is expected to look like

// Examples:
//  Endpoint: GET /users, Route: /users
//  Endpoint: POST /users, Route: /users
//  Endpoint: POST /session, Route: /session
//  Endpoint: DELETE /login, Route: /login

//* REST == Convention for defining endpoints that other develoeprs can easily understand how
// the server may process requests with those endpoints and what they should expect from
// their responses

//? Route Parameters == A named segment of the URL path that acts as a placeholder for a 
//? changable part of the path

// indicated by a colon, :, followed by name of the variable part of the path

// "/tweets/17" --> "/tweets:tweetId" // --> "routes/ID"

//! Rules of ReST
//! Representational State Transfer -- a set of rule that determine the architecture style 
//! for designing networked applications. Has six architectural constraints (below are three)

//? (1) Decoupled client-server: Client and server should be decoupled so that they
//? can evolve separately without any dependence on one another

//? (2) Stateless: There is no necessary session between client and server. 
//      - Data received from server can be used by client independently
//      - Allows short discrete operations

//? (3) Uniform interface: Self-describing and uniform in declaration
//      - Each operation is intended to be separated by a separate endpoint or URL
//      - Allows developers to easily learn the usage pattern of each endpoint

//? What does a RESTful route look like?

//* Two kinds of URLs: Collection vs Singular
// (1) Collections of resources
// (2) Single resources

// resource in URL: data entity or group of data in server that you want to perform
// CRUD action on (read or manipulate the data)

// A path that ends in a plural noun represents a collection of resources that
// server provides for developers to interact with

// Examples:
// • /invoices ==> represent a collection of invoices that you're allowed to see
// • /people ==> represent the people in the application that you're allowed to see
// • /houses ==> represent collection of houses

// Record = single set of data under a resource; 
// Record id = specific identifier for a record in a resoruce

// • /invoices/PK-200201 = single invoice that has the invoice number PK-200201 (record id)
// • /people/10103 = represent the single person with id 10103 (record id)

// ID = unique identifier for a specific resources

//? How to create RESTful Endpoints

// Table below shows paths and HTTP verbs used to intreract w/ HTML-based verison of RESTful applications
// Path Patterns                         ===       HTTP Verb       ===       Meaning
// ------------                                    ---------                 -------
// /resource-name                        ===          GET          ===    Index page: Get an HTML-based list of the resource           
// /resource-name/new                    ===          GET          ===    Create form page: Show a form to create a new record for the resource
// /resource-name                        ===         POST          ===    Submit create form: Create a new record for the resoruce
// /resource-name/record-id              ===          GET          ===    Detail page: See the details of the specified record
// /resource-name/:record-id/edit        ===          GET          ===    Edit form page: Show the edit form for the specified record
// /resource-name/:record-id             ===         POST          ===    Submit edit form: Update the specified record
// /resource-name/:record-id/delete      ===         POST          ===    Submit delete form: Delete the specified record

//? Nesting Resources
// === Nested Resources === URL path can consist of multiple collections and singular resources (see the table above for reference as well)

//? RESTful vs other conventions 

/**********************************************
*TODO:    Homework for Tuesday Quiz
***********************************************/
//? Q1. Which status codes inform the client that the URL path has changed and to redirect the user?
//! 300-399
// E: The status codes 300-399 are used to inform the client that there has been a redirection from the requested URL

//? Q2. What is the correct syntax used to indicate router parameters in a URL path?
//! A colon :
// E: Router parameters in a URL path are indicated by a colon : followed by name of the desired path. An example
// would be /appacademy/:studentID

//? Q3. Which of the following are common HTTP verbs for CRUD operations?
//! PATH
//! PUT
//! DELETE
//! POST
//! GET

//? Q4. What do status codes 400-499 indicate?
//! Client-error
// E: Status codes from 400-499 indicate that there is a problem with the client request. Usually an incorrect
// request or the data is no longer available

//? Q5. True/False. A HTML form can use any request with any HTTP method or verb
//! False
// E: An HTML form uses two attributes to determine the components of the request: the method
// of the request which can only be set to POST, and the action, which determines the URL path of the request

/**********************************************
*TODO:          Tuesday Quiz
***********************************************/
//TODO: HTTP Request Components Quiz

//? Q1. The Content-Type header is used with any request with any HTTP method or verb
//! False
// E: The Content-Type header is only used when the request has a body. GET requests do not have a body.
// The request body is optional for requests with any other method

//? Q2. Match the CRUD operations to its method(s): Update
//! Put
//! Patch
// E: The PUT and PATCH methods both indicate that the request wants to update something that's already 
// been created

//? Q3. Match the CRUD operations to its method(s): Read/Retrieve
//! GET
// E: The GET method indicates that the request wants to read or retrieve some data

//? Q4. The Content-Type header is used for
//! indicating the format of the data from the server's response
//! indicating how the client should process and parse the body of the request
// E: When the client sends a request with a body, the server needs to know the format
// of the data in the body. With translating a language, it's easier to translate the
// langauge into another language if you know what the original language is. Similarly,
// the COntent-Type tells the client how to format the body of the data from the server's response

//? Q5. Match the CRUD operations to its method(s): Delete
//! Delete
// E: The DELETE method indicates that the request wants to delete something

//? Q6. The resource in the URI of the request is used for indicating
//! the data entity that the request wants to perform a CRUD operation
// E: The resource in the URI identifies the object that the request wants to perform the operation on

//? Q7. Match the CRUD operation to its method(s): Create
//! POST
// E: The POST method indicates that the request wants to create something

//TODO: HTTP Request Scenario Practice
// Scenario: Click a link to an Instagram post that your friend thought was funny.
// 
// Option 1:
//     method: GET
//     URI: /p/funny-post-name
//     headers:
//         Host: instagram.com
//     body: none
// 
// Option 2:
//     method: GET
//     URI: /p/funny-post-name
//     headers:
//         Host: instagram.com
//     body: contains the funny image
// 
// Option 3:
//     method: POST
//     URI: /p
//     headers:
//         Host: instagram.com
//     body: none

//? Q1. Instagram: Which options above represents the appropriate HTTP request components for this scenario?
//! Option 1
// E: Option 3 is wrong because we are "clicking" not 'creating'
// Option 2 is wrong because there is no such thing as 'body' for GET

// Scenario: Upload your sick mixtape to SoundCloud!
// 
// Option 1:
//     method: GET
//     URI: /songs
//     headers:
//         Host: soundcloud.com
//         Content-Type: audio/mpeg
//     body: the list of song titles
// 
// Option 2:
//     method: GET
//     URI: /
//     headers:
//         Host: soundcloud.com
//     body: the mixtape
// 
// Option 3:
//     method: POST
//     URI: /audio
//     headers:
//         Host: soundcloud.com
//         Content-Type: audio/mpeg
//     body: the mixtape
//? Q2. Soundcloud: Which option above represents the appropriate HTTP request components for this scenario?
//! Option 3
// E: "Upload" is to 'create' which is POST. Option 1 and 2 are GET which is to retrieve or to get the information

//Scenario: Submit an Amazon review for a product through an HTML form
//
// Option 1:
//     method: POST
//     URI: /product-name/review
//     headers:
//         Host: amazon.com
//         Content-Type: x-www-form-urlencoded
//     body: the product review, the rating of the product
// 
// Option 2:
//     method: POST
//     URI: /product-name
//     headers:
//         Host: amazon.com
//         Content-Type: x-www-form-urlencoded
//     body: the product review, the rating of the product
// 
// 
// Option 3:
//     method: POST
//     URI: /review
//     headers:
//         Host: amazon.com/product-name
//         Content-Type: x-www-form-urlencoded
//     body: the product review, the rating of the product
//? Q3. Amazon: Which option above represents the appropriate HTTP request components for this scenario?
//! Option 1
// E: Option 1 is correct. When we make a POST request like this, the URI generalyl includes
// an identifier for the specific product followed by /review. The host will never include identifiers 
// for products or reviews, and will always just include the domain information

//TODO: HTTP Response Components Quiz

//? Q1. If a user tries to edit someone else's comment, what status code should a web server return?
//! 403
// E: 403 - Forbidden - even if you're logged in, you're not logged in as the correct users

//? Q2. What response should be sent if a server is temporarily overloaded by traffic?
//! 503
// E: 503 Service Unavailable - Alert a client that the service is temporarily unavailable

//? Q3. If a user tries to access a non existent web page in the browser, what status code
//? should a web server return?
//! 404
// E: 404 Not Found - Page Not Found

//? Q4. The status code of the response is important for telling the client:
//! A concise answer from the server
// E: The status code is a numeric code for the response that represents a concise 
// explanation of what the response is. Multiple choice questions have labels
// for their answesrs like choice A, B, or C. Similarly, the status code
// are like labels that can be used to easily distinguish responses from each other

//? Q5. The Content-Type header for the client's request and the server's response
//? needs to be the same
//! false
// E: The function of the Content-Type header for the client's request is completely 
// different for that of the server's response. The Content-Type header of the client's
// request tells the server how to parse the data in the request body. The Content-Type
// header of the server's response tellls the client how to parse the data in the
// response body. For example, if a user submits an HTML form, the Content-Type header of
// the request is application/x-www-form-urlencoded. But the server can response with
// HTML and the Content-Type header for the response would be text/html.

//? Q6. If a user logs in and should be redirected to the homage page from the login page,
//? what status code should a web server return?
//! 302
// E: 302 Found - Redirect to temporarily move you from the login page to the home page

//? Q7. If a user successfully creates a new tweet, what sttatus code should a 
//? web server return?
//! 201
// E: 201 Created - Your request for creation was successful

//TODO: HTTP REsponse Scenario Practice

// Scenario: Attempt to submit an Amazon review for a product through an HTML form,
// but you aren't logged in yet
// 
// Option 1:
//     status code: 302
//     headers:
//         Content-Type: text/html
//     body: message saying that you are not logged in
// 
// Option 2:
//     status code: 401
//     headers:
//         Content-Type: text/html
//     body: message saying that you are not logged in
// 
// Option 3:
//     status code: 404
//     headers:
//         Content-Type: text/html
//     body: message saying that you are not logged in
//? Q1. Amazon: Which option above represents the appropriate HTTP response 
//? components for this scenario?
//! Option 2
// E: Option 2 is correct. The 401 status code represents that the resource exists
// but you are not authorized to access it

// Scenario: Try to sell one of your stocks on Robinhood, but Robinhood is having issues
// with their server because so many people are trying to sell that stock.
// The browser is displaying what seems like an infinite loading screen.
// 
// Option 1:
//     status code: 504
// 
// Option 2:
//     status code: 429
// 
// Option 3:
//     status code: 500
//? Q2. Robinhood: Which option(s) above could represent plausible HTTP 
//? response status code for this scenario ?
//! Option 1 (504) and Option 3 (500)
// E: Both Option 1 and 3 could be plausible, because the 500 range of this status codes
// represent various server errors. A 500 means an internal server error. A 504
// means a timeout, generally caused by an issue on the server's side. Status codes
// in the 400 range represents client errors, and a 429, specifically, means that
// the specific user (client) has made too many requests in a certain amount of time

// Scenario: Browse GIPHY for a cute puppy gif...but there are no cute puppy gifs!
// 
// Option 1:
//   status code: 302
// 
// Option 2:
//     status code: 200
// 
// Option 3:
//     status code: 404
//? Q3. GIPHY: Which option(s) above could represent plausible HTTP response components for this scenario?
//! Option 3
// E: Only option 3 is correct. The 404 means that the resource can not be found (does not exist)
// You would receive a 200 if the request was successful. You would only receive 302 if the
// puppy gifs had been moved, and you were redirected to the collection

// Scenario: Edit a Facebook comment that isn't your own
// 
// Option 1:
//     status code: 200
//     body: message saying success
// 
// 
// Option 2:
//     status code: 403
//     body: message saying you don't have the authority to edit this comment
// 
// 
// Option 3:
//     status code: 403
//     body: message saying resource not found
//? Q4. Facebook: Which option above represents the appropriate HTTP response status code and body components for this scenario?
//! Option 2 (403)
// E: Option 2 is correct. You would not be authorized to eidt someone else's comment, so you would
// receive a 403 status code (forbidden), with an error message in the body explaining that you are not authorized
// to complete the action

//TODO: RESTful Routes Quiz
//? Q1. Choose the RESTful endpoint to access the edit page of a post's comment.
//! GET /comments/:commentId/edit
// E: To edit a comment, the server only needs to know the comment that you want edited
// and how. It does not need the information about the particular post, so the single resource
// that you need is the id of the comment in the route

//? Q2. True or False: A route does not include the method of the request, but an endpoint does.
//! True
// E: route is just the URL path. Endpoint contains the URL path and the HTTP method combination.

//? Q3. Choose the RESTful endpoint to submit a creation of a post's comment.
//! POST /posts/:postId/comments
// E: To create a comment for a particular post, the server needs to know the post you want to create the 
// comment for. The comment has not been created yet so it has nto been assigned an id or an identifier by 
// the server yet

//? Q4. A RESTful route is
//! a URL path that includes information about the collection of resources or single resource
// E: An endpoint is the URL path and method combination. A route is just the URL path.
