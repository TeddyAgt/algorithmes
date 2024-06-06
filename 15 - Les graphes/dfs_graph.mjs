import { Stack } from "../08 - Stacks/stack_array.mjs";
import { Graph } from "./graph.mjs";

function deepFirstSearch(graph, vertex) {
  const visited = [];
  const results = {};
  const stack = new Stack();

  stack.push(vertex);

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    if (!visited[currentVertex]) {
      visited[currentVertex] = true;
      results.push(currentVertex);

      for (let i = 0; i < graph.getVertex(currentVertex).length; i++) {
        if (!visited[graph.getVertex(currentVertex)[i]]) {
          stack.push(graph.getVertex(currentVertex)[i]);
        }
      }
    }
  }
  return results;
}
