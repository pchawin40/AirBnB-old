/**********************************************************
*TODO:              Homework for Saturday
***********************************************************/
/**********************************************************
*           Network Protocol: Internet Protocol (IP)
***********************************************************/
//? What is the "Internet" exactly? --> Internet Protocol (IP)

//? History of IP
//* DARPA (Defense Advanced Research Projects Agency) proposed TCP (Transmission Control Program)
// - Fault tolerant: data transmitted between networks can be cached and re-sent if its fails the first time
// - end-to-end: no single central systems that can take the whole network down; each host can send/receive to others

//? The Great Divide
// TCP (Transmission Control Protocol): responsible for fault-tolerance of joined networks
// IP (Internet Protocol): responsible for "end-to-end" nature of joined networks

//? Packet-Switching
//* IP data is transmitted via format called 'packet' which uses a data format: metadata (headers), and body (content)
// headers are used to get the packet to its destination
// body contains information we'd like to transfer

// Packet-switching: when a message is split up into separate "packets", delivered to destination, and reassembled as appropriate

//? IP Versions
//* IPv4 : Composed of 4 octets (8-bit binary numbers)
// 192.18.1.1
// 11000000.00010010.00000001.00000001
// uses 32 bits


//* IPv6
// Supports ~350 undecillion (3.5 x 10 ^ 38) addresses
// uses 128 bits
// 2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859
// 0010011000000000:0110110001011110:0001010101111111:1101010010001100:0001001110001111:1110000010111010:0110111110100111:1101100001011001

//? Special addresses
//* loopback address (localhost): identifier for user's current machine
// IPv4: 127.0.0.1
// IPv6: ::1

//* "all interfaces" address: used to catch any incoming requests regardless of intended destination
// only used by local machine that allow server listening to it to see all incoming packets
// IPv4: 0.0.0.1
// IPv6: ::

/**********************************************************
*               Network Protocol: TCP/UDP
***********************************************************/
//? Transport Protocols
// Transport Layer: Extra layer of information between HTTP and IP
// Transports Protocol: Protocol used in transport layer

//? What exactly are we transporting?
// Transport Protocols acts as the "delivery person" that bridges the gap and help data cover last mile between network and software
// IP: machine-to-machine
// HTTP: application-to-application

//? TCP
// Connection-oriented protocol = establishes connection between two sockets
// - Safeguard from other-error prone protocols underneath it, including IP and Ethernet
// - Data sent via TCP respect a strict ordder and verify when they have been received
// ==> reliable because data can't be lost across using TCP connection as if a segment is received out of order,
// the receiver will ask the transmitter to re-send the missing segment
// Common uses:
// ○ File Transfer
// ○ Web Browsing
// ○ CRUD operations

//? UDP (User Datagram Protocol)
//* faster than TCP but less reliable
//! == connection-less and provides no verification for whether data is received (unreliable)
// uses in: real-time video sharing, VOIP phone calls, DNS, discovery requests
//          video game world state updates, video and audio streaming, continuous data broadcasts (smart home devices)
