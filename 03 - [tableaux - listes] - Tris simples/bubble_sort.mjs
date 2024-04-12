const arr = [50, 22, 1, 23, 12];

// V1 (non optimisé)

// function bubbleSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] < arr[j - 1]) {
//         const tmp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }

//   return arr;
// }

console.log(bubbleSort(arr));
