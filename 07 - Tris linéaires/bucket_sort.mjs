const arr = [3, 6, 5, 2, 10, 1];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

function bucketSort(arr, min, max) {
  const n = arr.length;
  const buckets = new Array(n);
  const range = (max - min) / n;
  const sortedArray = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    const value = arr[i];
    let k = 0;
    while (min + range * (k + 1) < value) {
      k++;
    }

    buckets[k].push(value);
  }

  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      sortedArray[count] = buckets[i][j];
      count++;
    }
  }
  return sortedArray;
}

const sortedArray = bucketSort(arr, 1, 10);
console.log(sortedArray);
