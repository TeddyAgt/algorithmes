const array = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.trunc(Math.random() * 100);

function binarySearch(array, numberToGuess, start, end) {
  if (start > end) return null; // cas de base: on a parcouru toute cette partie du tableau sans trouver le nombre recherché

  const mid = Math.floor((start + end) / 2);
  if (array[mid] === numberToGuess) {
    return mid;
  } else if (array[mid] > numberToGuess) {
    return binarySearch(array, numberToGuess, start, mid - 1);
  } else {
    return binarySearch(array, numberToGuess, mid + 1, end);
  }
}

const result = binarySearch(array, numberToGuess, 0, array.length - 1);
console.log(`Number to guess: ${numberToGuess}`);
console.log(`Index: ${result}`);
