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

// V2 (optimisé)

function bubbleSort(arr) {
  let right = arr.length; // A chaque itération, on aura un élément trié de plus sur la droite du tableau

  while (right > 0) {
    let swap = false;
    for (let i = 1; i < right; i++) {
      if (arr[i] < arr[i - 1]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        swap = true;
      }
    }
    if (!swap) break; // S'il n'y a eu aucun swap lors de l'itération c'est que le tableau est déjà trié
    right--;
  }
  return arr;
}

// V3 (optimisé)

// function bubbleSort(arr) {
//   let right = arr.length;
//   let swap;
//   do {
//     for (let i = 1; i < right; i++) {
//       swap = false;
//       if (arr[i] < arr[i - 1]) {
//         const tmp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = tmp;
//         swap = true;
//       }
//     }
//     right--;
//   } while (swap);
//   return arr;
// }

// V4 (optimisé)

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let swap = false;
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//         swap = true;
//       }
//     }
//     if (!swap) break;
//   }
//   return arr;
// }

console.log(bubbleSort(arr));
