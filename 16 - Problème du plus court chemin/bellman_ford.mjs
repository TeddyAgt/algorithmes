import { WeightedGraph } from "../15 - Les graphes/weightedGraph.mjs";

function bellmanFord(graph, startVertex) {
  const previous = {};
  const distances = {};

  const vertexList = Object.keys(graph.adjacencyList);

  // Initialisation du hash des distances
  for (let vertex of vertexList) {
    if (vertex === startVertex) {
      distances[vertex] = 0;
    } else {
      distances[vertex] = Infinity;
    }
  }

  for (let i = 0; i < vertexList.length - 1; i++) {
    for (let currentVertex of vertexList) {
      for (let { vertex: adjacencyVertex, weight } of graph.getVertex(
        currentVertex
      )) {
        const distance = distances[currentVertex] + weight;
        if (distances[adjacencyVertex] > distance) {
          distances[adjacencyVertex] = distance;
          previous[adjacencyVertex] = currentVertex;
        }
      }
    }
  }

  // boucle de contrôle
  for (let currentVertex of vertexList) {
    for (let { vertex: adjacencyVertex, weight } of graph.getVertex(
      currentVertex
    )) {
      const distance = distances[currentVertex] + weight;
      if (distances[adjacencyVertex] > distance) {
        throw new Error("Negative cycle found");
      }
    }
  }

  return { previous, dist };
}
