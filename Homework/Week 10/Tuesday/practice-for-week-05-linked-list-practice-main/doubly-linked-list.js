class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    // create new node with given value
    const newNode = new DoublyLinkedListNode(val);

    // if head is null
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    // else if head is not null
    } else {
      // set head and tail to the new node
      this.head.prev = newNode;
      
      // set the previous head to the current head and adjust the current head
      // to the new node
      newNode.next = this.head;
      this.head = newNode;
    }

    // increment size
    this.length++;
  }

  addToTail(val) {
    // Your code here
    // create new node with given value
    const newNode = new DoublyLinkedListNode(val);
    // if head is null
    if (!this.head) {
      // set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    // else if head is not null
    } else {
      // set the next tail to the new node
      this.tail.next = newNode;
      // set the previous tail to the current tail and adjust the current tail
      // to the new node
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    // increment size 
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
