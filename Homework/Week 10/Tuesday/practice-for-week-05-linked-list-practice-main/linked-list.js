class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // // Your code here
    const newNode = new LinkedListNode(val, null);

    newNode.next = this.head;

    this.head = newNode;
    
    // this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail(val) {
    // Your code here

    // create a new node 
    const newNode = new LinkedListNode(val, null);
    
    // add length of node by 1
    this.length++;

    // A. if head is null
    if (!this.head) {
      // 1. set head to newNode
      this.head = newNode;

      // 2. return head
      return this.head;
    }

    // B. else if head is not null
    let current = this.head;
    // 1. traverse until next head is null
    while (current.next)
      current = current.next;
    
    // 2. set next node to the new node and return the new head
    current.next = newNode;
    return this.head;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
