const array = new Array(100).fill().map((x, i) => i + 1);
// const numberToGuess = Math.trunc(Math.random() * 100);
const numberToGuess = 100;
let attempts = 0;

// Ma version
// function binarySearch(array, numberToGuess) {
//   let min = 0;
//   let max = array.length;
//   let med = (min + max) / 2 - 1;
//   do {
//     attempts += 1;
//     if (array[med] === numberToGuess) {
//       return med;
//     } else if (array[med] > numberToGuess) {
//       max = med - 1;
//       med = Math.floor((min + max) / 2);
//     } else {
//       min = med + 1;
//       med = Math.floor((min + max) / 2);
//     }
//   } while (true);
// }

// Correction
function binarySearch(array, numberToGuess) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    attempts += 1;
    const mid = Math.floor((min + max) / 2);
    const guess = array[mid];
    if (guess === numberToGuess) {
      return mid;
    } else if (guess > numberToGuess) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return null;
}

const start = performance.now();
const result = binarySearch(array, numberToGuess);
const end = performance.now();
console.log(`Number to guess: ${numberToGuess}`);
console.log(`Index: ${result}`);
console.log(`Number of tries: ${attempts}`);
console.log(`Duration: ${end - start}`);
