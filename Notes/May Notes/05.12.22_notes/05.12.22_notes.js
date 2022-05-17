/**********************************************************
*TODO:              Homework for Thursday
***********************************************************/
/**********************************************************
*                     What is a web API?
***********************************************************/
//? Web APIs
//! API = Application Programming Interface

//? Application API vs Web API

//? Traditional Server vs Web API Server

/**********************************************************
*                     JSON (Review)
***********************************************************/

/**********************************************************
*                    API Documentation
***********************************************************/
//? RESTful API Endpoints

//? RESTful Convention for web API Servers
// A web API accepts all HTTP methods (GET, POST, PUT/PATCH, and DELETE)

// Path Pattern                 HTTP Verb             Meaning
// ------------                 ---------             -------
// /resource-name               GET                   Index: Get all of the records for the resource
// /resource-name               POST                  Create: Create a new record for the resource
// /resource-name/record-id     GET                   Details: Get the details of the specified record
// /resource-name/record-id     PUT/PATCH             Update: Update the specified record
// /resource-name/record-id     DELETE                Delete: Delete the specified record

//? Nested Resources:
// Path Pattern                               HTTP Verb             Meaning
// ------------                               ---------             -------
// /resource-name/record-id/nested-resource   GET                   Index: Get all of the records for the nested resources
//                                                                  related to the specified record
// /resource-name/record-id/nested-resource   POST                  Create: Create a new record for the nested resource
//                                                                  related to the specified record
// /nested-resource/nested-record-id          GET                   Details: Get the details of the speicified nested 
//                                                                  resource's record
// /nested-resource/nested-record-id          PUT/PATCH             Update: Update the specified nested resource's record
// /nested-resource/nested-record-id          DELETE                Delete: Delete the specified nested resource's records

// Twitter RESTful endpoints
debugger;

const arr = ['meow', 'woof', 'rawr', '*fox sounds*', 'oink'];

let str = JSON.stringify(arr);

console.log(str[3]);

/**********************************************************
*TODO:                    Thursday
***********************************************************/
/**********************************************************
*                     Web API Quiz
***********************************************************/
//? Q1. You want to store and analyze consumer trends for fruits versus
//? vegetables. Then you want others to be able to read and use that information.
//? What kind of server should you create for this function?
//! Web API Server
// E: A web API server is great for this function as its primary purpose is to 
// collect and transmit data

//? Q2. True or False: You can perform CRUD actions in a traditional web server,
//? but you CANNOT perform CRUD actions in a Web API
//! False
// E: You can perform CRUD actions in a Web API

//? Q3. True or False: A Web API can render HTML pages, but primarily transmits data
//! True
// E: A Web API's main role is to transmit data, usually in the form of JSON, and
// perform CRUD actions. It can render HTML pages, but is not its primary role

//? Q4. You want to dispaly basic data about your resume and your portfolio.
//? What kind of server should you create for this function?
//! Traditional Web Server
// E: A traditional web server is great for this function. It displays HTML as
// its primary purpose without need to pull many kinds of data from different
// places
