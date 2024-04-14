export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addItemAtBeginning(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      const current = this.head;
      this.head = new Node(value, current);
    }
    this.size++;
  }

  addItemAtEnd(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }

  addItemAtPosition(value, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Wrong position");
    }
    if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }

  removeItemAtBeginning() {
    if (!this.head) return null;
    const current = this.head;
    this.head = current.next;
    this.size--;
    return current.value;
  }

  removeItemAtEnd() {
    if (!this.head) return null;
    let current = this.head;
    if (!current.next) {
      this.head = null;
      this.size--;
      return current.value;
    } else {
      while (current.next.next) {
        current = current.next;
      }
      const nodeValue = current.next.value;
      current.next = null;
      this.size--;
      return nodeValue;
    }
  }

  removeItemAtPosition(position) {
    if (position < 0 || position > this.size - 1) {
      throw new Error("Wrong position");
    }
    if (position === 0) {
      const nodeValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return nodeValue;
    }
    let current = this.head;
    while (position - 1) {
      current = current.next;
      position--;
    }
    const nodeValue = current.next.value;
    current.next = current.next.next;
    this.size--;
    return nodeValue;
  }

  get(position) {
    if (position < 0 || position > this.size - 1) return null;

    let current = this.head;
    while (position) {
      current = current.next;
      position--;
    }
    return current.value;
  }

  contains(value) {
    if (!this.head) return false;
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    console.log(`null (${this.size})`);
  }
}
