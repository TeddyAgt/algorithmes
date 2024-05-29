class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tails = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const headCopy = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return headCopy.value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.peek());
// console.log(queue.getSize());
// console.log(queue.isEmpty());
// console.log(queue.isEmpty());
// console.log(queue.enqueue());
// console.log(queue.isEmpty());
// console.log(queue.peek());
