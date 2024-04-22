const arr = [50, 22, 1, 23, 12];

function mergeSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  const middle = Math.floor((start + end) / 2);
  mergeSort(array, start, middle);
  mergeSort(array, middle + 1, end);
  mergeArrays(array, start, middle, end);
}

function mergeArrays(array, start, middle, end) {
  const leftArrayLength = middle - start + 1;
  const rightArrayLength = end - middle;
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = array[start + i];
  }
  for (let i = 0; i < rightArrayLength; i++) {
    rightArray[i] = array[middle + 1 + i];
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let insertionIndex = start;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      array[insertionIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[insertionIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    insertionIndex++;
  }

  while (leftIndex < leftArrayLength) {
    array[insertionIndex] = leftArray[leftIndex];
    leftIndex++;
    insertionIndex++;
  }

  while (rightIndex < rightArrayLength) {
    array[insertionIndex] = rightArray[rightIndex];
    rightIndex++;
    insertionIndex++;
  }
}

mergeSort(arr);
console.log(arr);
