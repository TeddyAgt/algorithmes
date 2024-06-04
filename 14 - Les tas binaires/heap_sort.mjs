let arr = [3, 6, 5, 1, 10, 2];

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heapifyDown(arr, parent, to = arr.length) {
  let left = parent * 2 + 1;
  let right = parent * 2 + 2;

  while (
    parent < to &&
    ((left < to && arr[left] > arr[parent]) ||
      (right < to && arr[right] > arr[parent]))
  ) {
    let max;
    if (right >= to) {
      max = left;
    } else if (arr[left] >= to) {
      max = left;
    } else {
      max = right;
    }
    swap(arr, max, parent);
    parent = max;
    left = parent * 2 + 1;
    right = parent * 2 + 2;
  }
}

function createHeapMax(arr) {
  const middle = Math.floor(arr.length / 2);

  for (let i = middle; i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function heapSort(arrToSort) {
  if (arrToSort.length < 2) {
    return arr;
  }
  createHeapMax(arrToSort);

  for (let i = arrToSort.length - 1; i > 0; i--) {
    swap(arrToSort, 0, i);
    heapifyDown(arrToSort, 0, i);
  }
}

console.log(arr);
heapSort(arr);
console.log(arr);
