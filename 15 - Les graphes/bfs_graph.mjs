import { Queue } from "../09 - Queues/queue_linkedList.mjs";
import { Graph } from "./graph.mjs";

function breadthFirstSearch(graph, vertex) {
  const visited = {};
  const results = [];
  const queue = new Queue();

  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    if (!visited[currentVertex]) {
      visited[currentVertex] = true;
      results.push(currentVertex);

      for (let i = 0; i < graph.getVertex(currentVertex).length; i++) {
        queue.enqueue(graph.getVertex(currentVertex)[i]);
      }
    }
  }

  return results;
}
