import { Stack } from "../08 - Stacks/stack_array.mjs";
import { Graph } from "./graph.mjs";

function deepFirstSearch(graph, vertex, visited) {
  const results = [];
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

function getComponents(graph, verticesList) {
  const visited = {};
  const components = [];

  for (let i = 0; i < verticesList.length; i++) {
    const currentVertex = verticesList[i];
    if (!visited[currentVertex]) {
      components.push(deepFirstSearch(graph, currentVertex, visited));
    }
  }
  return components;
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);

graph.addEdge(1, 4);
graph.addEdge(5, 7);
graph.addEdge(5, 6);
graph.addEdge(6, 7);
graph.addEdge(2, 3);

console.log(getComponents(graph, [1, 2, 3, 4, 5, 6, 7]));
