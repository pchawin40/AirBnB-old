/***************************************
//?           Monday Quiz
****************************************/
//? Q1. What is a pixel-perfect wireframe?
//! A pixel-perfect wireframe is a final product that the developer can match 
//! down to the exact details, pixel by pixel

//? Q2. What is a low-resolution (low fidelity) wireframe?
//! A low fidelity wireframe has much to interpret and does not contain a lot of details,
//! it would be considered a low-fidelity wireframe

//? Q3. True/False. A function that does one thing and does it well follows the 
//? Single-Responsibiltiy Principle
//! A function in JavaScript should not have more than one responsibility. 
//! The function should do only one thing and do it well.

/***************************************
//?           Monday Notes
****************************************/
/***************************************
*TODO:      Week 15 Framing - I
****************************************/
/***************************************
*           What is a Server?
****************************************/
// == A server is a hardware or software that pushes and pulls data across the network
// • Its purpose is to send data to a client and the client can request data from a server
// and the server processes that request and responds with the desired data

//TODO: Role of a Server in a Full-Stack Application
//? A full-stack application is a Web application that has a front-end client and a back-end server
//    --> A front-end client requests web pages or data from the back-end server
//    --> A back-end server responds back with the web pages o data to the front end client when requested

// Front-end client in a full stack application is responsible for displaying web pages to a user
// Back-end servers provide many functionalities in a full-stack application, such as:
//   - Send the requested web pages
//   - Handle email messages
//   - Send files
//   - Store and send data in a database
//   - Process data
//   - Handle web traffic

//! A full-stack application can have more than one server

/***************************************
*             HTTP Basics
****************************************/
//TODO: Hypertext Transfer Protocol
//? Tim Berners-Lee proposed the concept of the "WorldWideWeb", laying the foundation for
//? our modern internet, including the HTTP (Hypertext Transfer Protocol)

// TODO: HT-: Hyper Text
//? Hyperlinks or links are referenced between hypertext resources

// TODO: -TP: Transfer Protocol
//? A protocol in computer science is a set of guidelines surrounding the transmission of data
// --> It defines the process of exchanging data, but don't define exactly what that data must be

//? HTTP acts as a transfer protocol. It defines the expectation of both ends of the transfer,
//? and it defines somew ways the transfer might fail. 
//! HTTP is defined as a request/response protocol

// TODO: Protocol for exchanging data between a Client and a Server
//? HTTP defines the processes of exchanging hypertext between systems (between clients and servers)
// A client (or user agent) is the data consumer; e.g. web browser
// A server (or the origin) is the data provider; e.g. where an application is running

// In a typical HTTP exchange, the client sends a request to the server for a particular resources:
// a webpage, image, or application data. The server provides a response containing either the
// resource that the client requested or an explanation of why it can't provide the resource

//                      ===> HTTP Request
//                           Get/home HTTP/1.1
// CLIENT (User-Agent)                                  Server (Origin)
//                          HTTP/1.1 200 OK
//                      <=== HTTP Response

//TODO: Properties of HTTP
//? Reliable connection: messages passed between a client & server sacrifice a little speed for 
//? the sake of trust, and can rest assured that each message will be confirmed

//? Stateless transfer: HTTP doesn't store any information
//? Stateful protocol: specifications for storing data between requests

//? Intermediaries: Other servers or devices that pass request along. Comes in three types:
// (1) Proxies -- modify request so it appears to come from a different source
// (2) Gateways -- pretend to be the resource server requested
// (3) Tunnels - simply pass request along


//      Client     ==>     Proxy     ==>     Tunnel      ==>     Gateway       ==>       Server
//      -----              ----              ------              -------                 ------
//      My Computer      My Router        Intermediate Servers   Their Router       Their Data Center


//TODO: Digging deeper with the HTTP spec
// Spec (specification): describes a protocol in great detail

/***************************************
*    HTTP Request and Response Cycle
****************************************/
//TODO: The Request-Response Cycle
// When we search for information or navigate to a webpage, we are requesting
// something (like typing URL into address bar of a browser) and we expect
// to get a response back

//TODO: The request-response cycle diagram

// See OneNote for diagram
// client side is the browser and the server side is database where data is stored
// the internet is the middle (series of client requests and server responses)

//TODO: The browser's role in the request-response cycle
// 1. Browser, aside from letting the user make the request to the server, also...
//    (a) Parse HTML, CSS, and JS
//    (b) Render that information to the user by constructing and rendering a 
//        DOM tree

/***************************************
//?      Monday - Guided Practice Quiz
****************************************/
//? Q1. What is the role of a webs server that is requesting or asking for
//? information from a database server?
//! Client
//E: Although the web server acts as a server for a front-end client,
// in this case, it takes on the role of a client for another server 
// because it is the entity in the request-response cycle that is 
// requesting information

//? Q2. Clicking on a hyprlink will trigger another request to a web server by 
//? the browser
//! True
//E: A hyperlink is just a link on a web page. When you click on the link,
// you are directed to a new web page. The browser must make another request
// to get the new web page from the web server

//? Q3. Every time you add an image to an HTML web page that gets rendered in the 
//? browser, you are:
//! Prompting the browser that it needs to make another request to get the new image
// E: Each asset (image, CSS, Javascript file) that you include in the HTML file 
// will let the browser know it must make a request to get that information
// The server doees not automatically assume that the browser or the client
// wants all the asset data along with the HTML web page

//? Q4. What is NOT a part of a server's role in a full-stack application?
//! Showing a rendered image
// E: A server sends information and data, but it should not render an image for a user
// to see. That is the role of the client.

/***************************************
//?    Monday - Formative Quiz - Monday
****************************************/
//? Q1. What does HTTP stand for?
//! Hypertext Transfer Protocol
// E: HT: Hypertext, TP: transfer protocol. HTTP: Hypertext Transfer Protocol

//? Q2. In a request-response cycle, which role is responsible for sending
//? a response with desired data?
//! Server
// E: The server's purpose is to respond by sending the requested data to the client

//? Q3. True/False. HTTP is a stateless protocol
//! True
// E: Since HTTP does not store any data between requests it is considered stateless,
// if it did store data between a request it would be a stateful protocol

//? Q4. If an unsuccessful request goes through, what will most likely render on
//? your browser?
//! A 404 page
// E: Usually an unsuccessful request will prevent any information from being displayed
// and should default to a 404 page
