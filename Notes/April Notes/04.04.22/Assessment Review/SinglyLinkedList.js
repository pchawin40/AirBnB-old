class SinglyLinkedListNode{
  // constructor for node
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  // constructor
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // addToHead
  addToHead(val) {
    // create a new node
    const newNode = new SinglyLinkedListNode(val);

    // take a snapshot (update)
    newNode.next = this.head;

    // move the current pointer
    this.head = newNode;

    // increase size
    this.length++;
  }

  // addToTail
  addToTail(val) {
    // if list is empty, call addToHead() to avoid redundancy
    if (!this.head) this.addToHead();
    else {
      // make a new node
      const newNode = new SinglyLinkedListNode(val);

      // traverse to location
      let current = current.next;
      while (current.next) current = current.next;

      // update pointer
      current.next = newNode;

      // increase size
      this.length++;
    }
  }

  // removeFromHead
  removeFromHead() {
    if (!this.head) return undefined;

    // make a snapshot
    const oldHead = this.head;

    this.head = this.head.next;

    // increase/decrease length as necessary
    this.length--;

    return oldHead;
  }

  // removeFromTail
  removeFromTail() {
    // cases:

    // case 1: no existing node
    // case 2: only one existing node
    if (!this.head || !this.head.next) return this.removeFromHead();

    // case 3: more than one node
    let current = this.head;
    let last = current.next;

    while (last.next) {
      current = last;
      last = current.next;
    }

    const oldTail = last;

    current.next = null;

    this.length--;
    
    return oldTail;
  }

  // print
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
