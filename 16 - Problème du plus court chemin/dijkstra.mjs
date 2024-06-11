import {
  PriorityQueue,
  QueueEvent,
} from "../14 - Les tas binaires/priority_queue_min.mjs";
import { WeightedGraph } from "../15 - Les graphes/weightedGraph.mjs";

function dijkstra(graph, startVertex, endVertex) {
  const dist = {};
  const previous = {};
  const heap = new PriorityQueue();

  for (let vertex in graph.adjacencyList) {
    if (vertex === startVertex) {
      dist[vertex] = 0;
      heap.insert(new QueueEvent(vertex, 0));
    } else {
      dist[vertex] = Infinity;
    }
  }

  while (!heap.isEmpty()) {
    const { vertex: currentVertex } = heap.extractMin();

    if (currentVertex === endVertex) {
      const path = [endVertex];
      let previousVertex = previous[endVertex];

      while (previousVertex) {
        path.push(previousVertex);
        previousVertex = previous[previousVertex];
      }

      return path.reverse();
    } else {
      for (let { vertex: adjacencyVertex, weight } of graph.getVertex(
        currentVertex
      )) {
        const distance = dist[currentVertex] + weight;
        if (dist[adjacencyVertex] > distance) {
          dist[adjacencyVertex] = distance;
          previous[adjacencyVertex] = currentVertex;
          heap.insert(new QueueEvent(adjacencyVertex, distance));
        }
      }
    }
  }
}
