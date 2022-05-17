/**************************************************
 *                 Linked List
 **************************************************/
// Linked list are used to store an ordered sequence of values
// Pointers: allows you to store complex, multi-dimensional data in a linear memory bank
// Unlock features like: multi-type arrays, pass-by-reference methods, graph traversal and many more

//? A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node

class LinkedListNode{
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // default to empty
    this.head = null;
    this.tail = null;
  }

  addToHead(value) { // Space Complexity: O(1)
    // write a function to add a node to the head of a linked list
    // 1. Create a new node with the given value
    // const newNode = LinkedListNode(value, null);

    // // 2. Set the node's next pointer to the list's current head pointer
    // newNode.next = this.head;

    // // 3. Set the list head to point to the new link
    // this.head = newNode;

    // single line:
    this.head = new LinkedListNode(value, this.head); 

    // Must account for tail pointer in an empty list
    if (!this.tail) this.tail = this.head;
  }  

  addToTail(value) {
    // 1 Create a new node with the given value
    // const newNode = new LinkedListNode(value, null);

    // // 2. If the head is null, set it to the new node and return
    // if (this.head === null) {
    //   this.head = newNode;
    // }

    // // 3. Iterate through linked list until reach last node
    // while (this.head);

    // // 4. Point to last node's pointer to the new node
    // this.head = newNode;
    // 1. Create new node
    const newNode = new LinkedListNode(value, null);

    // 2. If list is empty, point head and tail to new node and return
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // 3. Point current tail's next to the new node
    this.tail = newNode;

    // 4. Point tail to the new end node
  }

  // traversing a linked list:
  print() {
    let current = this.head;

    while (current) { // Space complexity O(n)
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }

  removeFromHead() {
    // point head to second node in list
    if (this.head) this.head = this.head.next;

    // if there is only one node in list, set this.head to null
    if (this.head === null) this.tail = null;
  }

  removeFromTail() {
    // walk through linked list
    while (this.head) this.head = this.head.next;

    // check if current node is second to last in the list
    if (newNode.next === null)
      // if so, point it to null
      newNode.value === null;
  }
}

// build link list by calling addToHead and addToTail
// ll = new LinkedList();
// ll.addToHead(37);
// ll.addToHead(99);
// ll.addToHead(12);
// ll.print(); // 12 -> 99 -> 37 - NULL
// ll.printRecursive(); // 12 -> 99 -> 37 - NULL

// to visit nth node in a linked list, must traverse through all prior nodes --> O(n) operation


//? addToTail():
const ll = new LinkedList();

ll.print();        // NULL
ll.addToTail(0);
ll.print();        // 0 -> NULL
ll.addToTail(1);
ll.print();        // 0 -> 1 -> NULL
ll.addToTail(2);
ll.print();        // 0 -> 1 -> 2 -> NULL
ll.addToTail(3);
ll.print();        // 0 -> 1 -> 2 -> 3 -> NULL

class DoublyLinkedListNode{
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }

  removeFromTail(){
    // 1. If list is empty, do nothing
    if (this.value === null && this.previous === null && this.next == null) return;
    // 2. If there is only 1 node in list, set head and tail to null
    else if (this.value) {
      this.head = null;
      this.tail = null;
    }
    // 3. Otherwise, set tail to current tail's previous node point the new tail to null
    this.tail = null;
  }
}
