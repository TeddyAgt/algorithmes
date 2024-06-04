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

  insert(value) {
    // On commence par insérer la nouvelle valeur à la fin de la heap
    const index = this.heap.length;
    this.heap[index] = value;
    // Puis on corrige la heap
    this.heapifyUp(index);
  }

  heapifyUp(childIndex) {
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (childIndex > 0 && this.heap[childIndex] > this.heap[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
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
