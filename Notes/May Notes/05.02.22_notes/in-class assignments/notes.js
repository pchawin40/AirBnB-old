/*
HTTP
HyperText: Content with references to other content
(HT)ML, HyperText Markup Language allows us to send content over the internet and allow that content
to reference everything else. CSS pages, JS pages, images, etc. are all included by reference in our 
HTML. Content that references other content

Transfer Protocol: The specifications for sending the hypertext from point a to point b

The transfer protocl defines the rules of what format a client request and server response should text, 
what should and should nto be included, how it could fail, etc.

Properties of HTTP
------------------
Reliability: There are two main protocols that allow for data transmission TCP and UDP, what they are
doesn't matter much at the moment. Just know that TCP is slower but lossless because it allows retra-
transmission of lost packets. Whereas UDP is faster, simpler, and more efficient, but it isn't lossless.
There are advantages and disadvantages to both protocols. UDP is great for streaming, VoIP, video
conferencing, and other applications that prioritize transmission speed over fidelity. For now
all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know
that all of your data is guaratneed to ge the other end of the connection

Stateless Transfer: Each request/response cycle is fully independent, meaning all you need to deal
with a request is fully contained in that request, however it also means that you cannot use
the request/response cycle to manage persistency. Information like user information, whether someone
is logged in, and saved settings, all need to be managed separately from the request/response cycle

Intermediaries
Request Response Cycle


*/
