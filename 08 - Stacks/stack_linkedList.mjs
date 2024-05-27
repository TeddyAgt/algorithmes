import { LinkedList } from "../04 - Les listes chaînées/linked_list.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.addItemAtBeginning(value);
  }

  pop() {
    return this.list.removeItemAtBeginning();
  }

  peek() {
    return this.list.get(0);
  }

  getSize() {
    return this.list.size;
  }

  isEmpty() {
    return this.list.size === 0;
  }

  clear() {
    this.list.clear();
  }

  print() {
    this.list.print();
  }
}

const stack = new Stack(8);
