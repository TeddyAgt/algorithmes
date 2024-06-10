// A-B-C-D
// | |
// E-F
// | |
// G-H-I-J
// |   | |
// K   L-M

import { Queue } from "../09 - Queues/queue_linkedList.mjs";
import { WeightdGraph } from "./weightedGraph.mjs";

function pathFindingBFS(graph, startVertex, endVertex) {
  const visited = {};
  const queue = new Queue();
  const previous = {};
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    if (currentVertex === endVertex) {
      const path = [endVertex];
      let previousVertex = previous[endVertex];
      while (previousVertex) {
        path.push(previousVertex);
        previousVertex = previous[previousVertex];
      }
      return path.reverse();
    } else if (!visited[currentVertex]) {
      visited[currentVertex] = true;

      for (let i = 0; i < graph.getVertex(currentVertex).length; i++) {
        const adjacentVertex = graph.getVertex(currentVertex)[i];
        if (!visited[adjacentVertex]) {
          if (!previous.adjacentVertex) {
            previous[adjacentVertex] = currentVertex;
          }
          queue.enqueue(adjacentVertex);
        }
      }
    }
  }

  return null;
}
