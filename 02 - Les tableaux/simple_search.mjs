const array = new Array(100).fill().map((x, i) => i + 1);
// const numberToGuess = Math.trunc(Math.random() * 100);
const numberToGuess = 100;
let attempts = 0;

console.log(numberToGuess);
// Ma version
// function simpleSearch(array, numberToGuess) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === numberToGuess) return i;
//   }
// }

// Correction
function simpleSearch(array, numberToGuess) {
  for (let i = 0; i < array.length; i++) {
    attempts += 1;
    if (array[i] === numberToGuess) {
      return i;
    }
  }
}
const start = performance.now();
const result = simpleSearch(array, numberToGuess);
const end = performance.now();
console.log(result);
console.log(attempts);
console.log(end - start);
