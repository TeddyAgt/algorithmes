const arr = [50, 22, 1, 23, 12];

// V1

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1;
//     const curr = arr[i];
//     while (j >= 0 && arr[j] > curr) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curr;
//   }
//   return arr;
// }

// V2

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
}

console.log(insertionSort(arr));
