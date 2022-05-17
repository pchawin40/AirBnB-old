class LinkedList {
  constructor() {
    this.head = null;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let node3 = new LinkedListNode(37, null);
let node2 = new LinkedListNode(99, node3);
let node1 = new LinkedListNode(12, node2);

ll = new LinkedList();
ll.head = node1;

let curr = ll.head;
curr = curr.next;
curr = curr.next;
console.log(curr.value);
