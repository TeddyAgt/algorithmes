export class QueueEvent {
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance;
  }
}

export class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getSize() {
    return this.heap.length;
  }

  findmin() {
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
      this.heap[childIndex].distance < this.heap[parentIndex].distance
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
        this.heap[left].distance < this.heap[parent].distance) ||
        (right < length &&
          this.heap[right].distance < this.heap[parent].distance))
    ) {
      let min;
      if (right >= length) {
        min = left;
      } else if (this.heap[left].distance < this.heap[right].distance) {
        min = left;
      } else {
        min = left;
      }
      this.swap(parent, min);
      parent = min;
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }

  extractMin() {
    // On commence par extraire la valeur
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDownIterative();
    }
    return min;
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
