export class Queue {
  constructor(size = 3) {
    this.max = size;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(this.max).fill(null);
  }

  enqueue(value) {
    if (this.getZize() === this.max) {
      throw new Error("Queue overflow");
    }
    this.array[this.tail] = value;
    this.tail++;
    if (this.tail === this.max) {
      this.tail = 0;
    }
  }

  dequeue() {
    if (this.isEmpety()) return null;

    const value = this.array[this.head];
    this.array[this.head] = null;
    this.head++;
    if (this.tail === this.max) {
      this.head = 0;
    }

    return value;
  }

  peek() {
    return this.array[this.head];
  }

  getSize() {
    if (this.isEmpty()) {
      return 0;
    } else if (this.head < this.tail) {
      return this.tail - this.head;
    } else {
      return this.max - this.head + this.tail;
    }
  }

  isEmpty() {
    return this.array[this.head] === null;
  }

  clear() {
    this.head = 0;
    this.tail = 0;
    this.array = new Array(this.max).fill(null);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.enqueue());
console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.enqueue());
console.log(queue.isEmpty());
console.log(queue.isEmpty());
console.log(queue.enqueue());
console.log(queue.isEmpty());
console.log(queue.peek());
