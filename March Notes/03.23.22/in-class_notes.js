class LinkedListNode{
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList{
  constructor() {
    
  }

  addToHead(val) {
    
  }

  addToTail(val) {
    
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
