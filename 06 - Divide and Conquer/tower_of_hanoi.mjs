const origin = [];
const intermediate = [];
const destination = [];
const n = 5;
// Créer la tour d'origine
function populateOrigin(n) {
  for (let i = n; i > 0; i--) {
    origin.push(i);
  }
}

populateOrigin(n);

function solveTowerOfHanoi(nbrOfElement, origin, intermediate, destination) {
  if (nbrOfElement) {
    solveTowerOfHanoi(nbrOfElement - 1, origin, destination, intermediate);
    destination.push(origin.pop());
    console.log("origin: ", origin);
    console.log("intermediate: ", intermediate);
    console.log("destination: ", destination);
    console.log("---------------------------------");
    solveTowerOfHanoi(nbrOfElement - 1, intermediate, origin, destination);
  }
}

console.log("origin: ", origin);
console.log("intermediate: ", intermediate);
console.log("destination: ", destination);
console.log("---------------------------------");
solveTowerOfHanoi(n, origin, intermediate, destination);
