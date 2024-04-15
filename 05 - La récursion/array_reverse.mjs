function arrayReverse(arr, start, end) {
  if (start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    arrayReverse(arr, start + 1, end - 1);
  }
}

const arr = [1, 2, 3];
arrayReverse(arr, 0, arr.length - 1);
console.log(arr);
