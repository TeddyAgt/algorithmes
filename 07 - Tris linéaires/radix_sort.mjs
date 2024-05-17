const arr = [7, 5522, 15, 9, 500, 5];

function getMax(arr) {
  let max = arr[0];

  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}

function countingSort(arr, position) {
  const base = 10;

  // Initialiser le tableau de comptage
  const count = new Array(base);
  for (let i = 0; i < base; i++) {
    count[i] = 0;
  }

  // Compter le nombre d'occurences
  for (let i = 0; i < arr.length; i++) {
    // Ici, la valeur représente un seul chiffre du nombre, en partant de la droite
    count[Math.floor(arr[i] / position) % base]++;
  }

  // Cumuler les occurences
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Initialiser et remplir le tableau trié
  const sortedArray = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i];
    // Ici aussi on ne s'intéresse qu'à un seul chiffre en particulier du nombre
    const positionInCount = count[Math.floor(value / position) % base];
    sortedArray[positionInCount - 1] = value;
    count[Math.floor(value / position) % base]--;
  }

  return sortedArray;
}

function radixSort(arr) {
  const max = getMax(arr);

  if (!arr.length || arr.length < 2) return arr;

  for (let i = 1; max / i >= 1; i *= 10) {
    arr = countingSort(arr, i);
  }
  return arr;
}

const sortedArray = radixSort(arr);
console.log(sortedArray);
