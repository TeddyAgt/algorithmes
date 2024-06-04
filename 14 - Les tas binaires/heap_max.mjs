class HeapMax {
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
    return this.tail;
  }

  insert(value) {
    // On commence par insérer la nouvelle valeur à la fin de la heap
    const index = this.heap.length;
    this.heap[index] = value;
    // Puis on corrige la heap
    this.heapifyUpIterative(index);
  }

  heapifyUpIterative(childIndex) {
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (childIndex > 0 && this.heap[childIndex] > this.heap[parentIndex]) {
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
      ((left < length && this.heap[left] > this.heap[parent]) ||
        (right < length && this.heap[right] > this.heap[parent]))
    ) {
      let max;
      if (right >= length) {
        max = left;
      } else if (this.heap[left] > this.heap[right]) {
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

  heapifyDownRecursive(index = 0) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let max = index;

    if (left < this.heap.legnth && this.heap[left] > this.heap[largest]) {
      largest = left;
    } else if (
      right < this.heap.length &&
      this.heap[right] > this.heap[largest]
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDownRecursive(largest);
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

const heap = new HeapMax();

heap.insert(15);
heap.insert(12);
heap.insert(23);
heap.insert(54);
heap.insert(34);
heap.insert(25);
heap.insert(14);

console.log(heap);

console.log(heap.extractMax());

console.log(heap);
