const array = [7, 5, 0, 9, 2, 5];

function getMax(array) {
  let max = array[0];

  for (const n of array) {
    if (n > max) max = n;
  }
  return max;
}

function countingSort(array) {
  if (array.length < 2) return;

  // Pour l'instant je regarde seulement le max, plus tard je pourrais
  // ajouter un contrôle qu'on n'a pas un interval >= length^2
  const max = getMax(array);

  // Initialiser le tableau de comptage
  const countingArray = new Array(max + 1);

  for (let i = 0; i < countingArray.length; i++) {
    countingArray[i] = 0;
  }

  // Compter le nombre d'occurences
  for (let i = 0; i < array.length; i++) {
    countingArray[array[i]]++;
  }

  // Cumuler les occurences
  for (let i = 1; i < countingArray.length; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  // Initialiser et remplir le tableau trié
  const sortedArray = new Array(array.length);

  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const position = countingArray[value] - 1;

    sortedArray[position] = value;
    countingArray[value]--;
  }

  return sortedArray;
}

const sortedArray = countingSort(array);
console.log(sortedArray);
