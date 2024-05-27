export class Stack {
  constructor(size) {
    this.arr = new Array(size);
    this.top = -1;
    this.size = size;
  }

  push(value) {
    if (this.top >= this.size - 1) {
      throw new Error("Error: Stack Overflow");
    }

    this.top++;
    this.arr[this.top] = value;
  }

  pop() {
    if (this.top === -1) return null;

    const value = this.arr[this.top];
    this.top--;
    return value;
  }

  peek() {
    if (this.top === -1) return null;

    return this.arr[this.top];
  }

  getSize() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  clear() {
    this.top = -1;
  }

  print() {}
}

const stack = new Stack(8);
