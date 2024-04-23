const array = [50, 22, 1, 23, 12];

function quickSort(array, start = 0, end = array.length - 1) {
  if (start > end) return;

  const pivot = partition(array, start, end);
  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {
  const pivot = array[start];
  let i = start;

  for (let j = start + 1; j <= end; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i, start);
  return i;
}

function swap(array, i, j) {
  if (i === j) return;

  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

quickSort(array);
console.log(array);
