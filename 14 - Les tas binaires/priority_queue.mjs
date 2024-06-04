class QueueEvent {
  constructor(name, priority = 0) {
    this.name = name;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getSize() {
    return this.heap.length;
  }

  findMax() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0];
  }

  insert(event) {
    // On commence par insérer la nouvelle valeur à la fin de la heap
    const index = this.heap.length;
    this.heap[index] = event;
    // Puis on corrige la heap
    this.heapifyUpIterative(index);
  }

  heapifyUpIterative(childIndex) {
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      childIndex > 0 &&
      this.heap[childIndex].priority > this.heap[parentIndex].priority
    ) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  heapifyUpRecursive(index = this.heap.length - 1) {
    parentIndex = Math.floor((childIndex - 1) / 2);
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUpRecursive(parentIndex);
    }
  }

  heapifyDownIterative() {
    let parent = 0;
    let left = 1;
    let right = 2;
    const length = this.getSize();

    while (
      parent < length &&
      ((left < length &&
        this.heap[left].priority > this.heap[parent].priority) ||
        (right < length &&
          this.heap[right].priority > this.heap[parent].priority))
    ) {
      let max;
      if (right >= length) {
        max = left;
      } else if (this.heap[left].priority > this.heap[right].priority) {
        max = left;
      } else {
        max = left;
      }
      this.swap(parent, max);
      parent = max;
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }

  extractMax() {
    // On commence par extraire la valeur
    if (this.isEmpty()) {
      return null;
    }
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDownIterative();
    }
    return max;
  }

  swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.insert(new QueueEvent("test", 1));
priorityQueue.insert(new QueueEvent("test2", 50));

console.log(priorityQueue);
