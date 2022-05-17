/*
* 
* HTTP Request
* appacademy.io/resources/:resourceId
*
*
*  Key : Value
*  --- : -----
*  POST /resources/:resourceIdHTTP/1.0
*  POST / HTTP/1.0
*  Host: appacademy.io
*  Content-Length: 31
*  Content-Type: application/x-www-form-urlencoded
*  Host: appacademy.io
*  Connection: keep-alive
*  Upgrade-Insecure-Requests: 1
*  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
*  Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
/*  Accept-Encoding: gzip, deflate
*  Accept-Language: en-US,en;q=0.9
*  
*  username=azure&password=hunter2
* 
*
*

Request Line
Method: POST
URI (ending of the path to the URL): /
Version: HTTP/1.0

JSON:
{
  "name": "James";,
  "age": 27,
}

Headers
Content-Type: - application/x-www-form-urlencoded
application/x-www-form-urlencoded - info submitted directly from an HTML web form
application/json - JSON - data format similar to JavaScript objects
multipart/form-data - info submitted from an HTML web form with multiple media types
*   
*
Body
username=azure&password=hunter2

CRUD: Create, Read, Update, Delete

Static: Only GET/POST

GET: retrieving and receiving resources from the server // Read portion of CRUD R
• Does not have to have header and body, and will almost never have a body 

POST: Creating a new resource on the server. // Create portion of CRUD C
• requires headers and body to send to the server

PUT: Update an existing resource on the server // update portion of CRUD U
• Contain everything in the resource when using PUT

  GET: /tweets/:tweetId/edit 
  
  Name: James
  Age: 27
  Description: Software Engineer

PATCH: Update an existing resource on the server // Update portion of CRUD U
  • Patch does not have to contain every piece of the resource

  GET /tweets/:tweetId/edit
    Description: Software Engineer

DELETE: Delete entire resource
  • Does not have to have headers and body, and will almost never have a body

  POST /tweets/:tweetId/delete // tweetId = actual input like /tweets/:tweetId/delete

Status Codes

100 - 199 Information

200 - 299 - Successful
  200: Request is received and fulfilled
  201: Created successfully

300 - 399 - Redirection
  301: Moved permanently to totally new location
  POST /tweets
  redirects to /tweets/:newTweetId

  302 Found: 
  redirect to current resource

400 - 499 - Client Error
  400: Bad Request /tweats when supposed to be /tweets
  401: Unauthorized resource exists, but you do not have permissions
  403: Forbidden
  404: Not found resource does not exist

500 - 599 - Server Error
  500: Internal server error. Server is overloaded and can't get access due to overloaded server, for example
    Request was received but something went wrong w/ the server
  504: Gateway Timeout
    Request was received but server did not respond in a timely manner

HTTP/1.1 200 OK

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: close
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
X-Runtime: 0.006894
Strict-Transport-Security: max-age=31536000
Vary: Origin
Via: 1.1 vegur
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 51d641d1ca7d2d45-TXL


Headers
Content-Type: text/html

text/html - HTML document
text/css - CSS styles document
text/javascript - javaScript script
text/plain - plain text
image/png - PNG image
application/json - JSON - data format similar to JavaScript object

Ilovedog.com/dog

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

method - defined by the method HTML form attribute
URL path - defined by the action HTML form attribute
Content-Type header - application/x-www-form-urlencoded
body - form input names and values

name=GoodBoy&color=brown&age=8&description=bestBoyEver

*  Host: appacademy.io
*  Content-Length: 31
*  Content-Type: application/x-www-form-urlencoded
*  Host: appacademy.io
*  Connection: keep-alive
*  Upgrade-Insecure-Requests: 1
*  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
*  Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
/*  Accept-Encoding: gzip, deflate
*  Accept-Language: en-US,en;q=0.9
*  
*  username=azure&password=hunter2

Routes and Endpoints
Endpoint:
Route:

Endpoint: GET /users
Route: /users

Endpoint: POST /users
Route: /users

Endpoint: POST /session
Route: /session

Endpoint: DELETE /login
Route: /login

Endpoint: GET /users/:userId
Route: /user/:userId

*/
