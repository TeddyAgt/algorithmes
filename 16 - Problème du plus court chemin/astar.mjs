import { PriorityQueue } from "../14 - Les tas binaires/priority_queue_min.mjs";

const matriceSize = [3, 4];
const matrice = [];

// initialisation de la matrice
for (let i = 0; i < matriceSize[0]; i++) {
  matrice[i] = [];
  for (let j = 0; j < matriceSize[1]; j++) {
    matrice[i][j] = 1;
  }
}

// 1 1 1
// 1 1 1
// 1 1 1
// 1 1 1

matrice[0][2] = 0;
matrice[2][2] = 0;

console.log(matrice);

// 1 1 1
// 1 1 1
// 0 1 0
// 1 1 1

// [1, 1] -> '1-1'

//            [[], []]     [x, y]       [x, y]       [x, y]
function aStar(matrice, matriceSize, startVertex, endVertex) {
  const dist = {};
  const prev = {};
  const heap = new PriorityQueue();
  const score = {};

  for (let i = 0; i < matriceSize[0]; i++) {
    for (let j = 0; j < matriceSize[1]; j++) {
      const vertexName = `${i}-${j}`;
      score[vertexName] = getManhattanDistance(i, j, endVertex);
      prev[vertexName] = null;

      if (i === startVertex[0] && j === startVertex[i]) {
        dist[vertexName] = 0;
        heap.insert({ vertex: [i, j], priority: score[vertexName] });
      } else {
        dist[vertexName] = Infinity;
      }
    }
  }

  while (!heap.isEmpty()) {
    const { vertex: currentVertex } = heap.extractMin();

    if (
      currentVertex[0] === endVertex[0] &&
      currentVertex[1] === endVertex[1]
    ) {
      const path = [`${endVertex[0]}-${endVertex[1]}`];
      let prevVertex = prev[`${endVertex[0]}-${endVertex[1]}`];
      while (prevVertex) {
        path.push(prevVertex);
        prevVertex = prev[prevVertex];
      }
      return path.reverse();
    } else {
      const currentVertexName = `${currentVertex[0]}-${currentVertex[1]}`;
      const distance = dist[currentVertexName] + 1;

      for (let adjacencyVertex of getAdjacencyVertices(
        currentVertex[0],
        currentVertex[1],
        matrice,
        matriceSize
      )) {
        const adjacencyVertexName = `${adjacencyVertex[0]}-${adjacencyVertex[1]}`;
        if (dist[adjacencyVertexName] > distance) {
          dist[adjacencyVertexName] = distance;
          prev[adjacencyVertexName] = currentVertexName;
          score[adjacencyVertexName] =
            distance +
            getManhattanDistance(
              adjacencyVertex[0],
              adjacencyVertex[1],
              endVertex
            );
          heap.insert({
            vertex: adjacencyVertex,
            priority: score[adjacencyVertexName],
          });
        }
      }
    }
  }
}

function getManhattanDistance(x, y, endVertex) {
  return Math.abs(x - endVertex[0]) + Math.abs(y - endVertex[1]);
}

function getAdjacencyVertices(x, y, matrice, matriceSize) {
  const adjaceyVertices = [];
  // north
  if (y > 0 && matrice[x][y - 1]) {
    adjaceyVertices.push([x, y - 1]);
  }
  // west
  if (x > 0 && matrice[x - 1][y]) {
    adjaceyVertices.push([x - 1, y]);
  }
  // south
  if (y < matriceSize[1] - 1 && matrice[x][y + 1]) {
    adjaceyVertices.push([x, y + 1]);
  }
  // east
  if (x < matriceSize[0] - 1 && matrice[x + 1][y]) {
    adjaceyVertices.push([x + 1, y]);
  }
  return adjaceyVertices;
}

console.log(aStar(matrice, matriceSize, [1, 1], [2, 3]));
