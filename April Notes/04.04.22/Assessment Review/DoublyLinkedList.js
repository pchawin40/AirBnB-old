class DoublyLinkedListNode{
  constructor(val) {
    this.value = val;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList{
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  // add to head
  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);

    this.length++;

    if (!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // add to tail
  addToTail(val) {
    if (!this.head) this.addToTail(val);
    else {
      const newNode = new DoublyLinkedListNode(val);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }

  // remove from head
  removeFromHead() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (!this.head.next) {
      this.head = null = this.tail;
    } else {
      const newHead = this.head.next;
      newHead.prev = oldHead.next = null;
      this.head = newHead;
      this.length--;
    }
    return oldHead.value;
  }

  // remove from tail
  removeFromTail() {
    if (!this.tail || !this.head.next) return this.removeFromHead();
    const oldTail = this.tail;
    const newTail = this.tail.prev;
    oldTail.prev = newTail.next = null;
    this.tail = newTail;
    this.length--;
    return oldTail.value;
  }
}
