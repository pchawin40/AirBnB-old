const LinkedList = require("./linked-list");

/**************************************************
 *                    Queues
 **************************************************/
//? Queue = abstract data type (ADT) that returns values in the same order they are added


class Queue{
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.addToTail(value);
  }

  dequeue() {
    const value = this.linkedList.head.value;
    this.linkedList.removeFromHead();

    return value;
  }
}

// tests to verify timing

q = new Queue();
n = 100000

enqueueStartTime = Date.now();
for (let i = 0 ; i < n ; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0 ; i < n ; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
