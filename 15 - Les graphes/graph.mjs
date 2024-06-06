class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2) &&
      !this.adjacencyList[vertex2].includes(vertex1)
    ) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.adjacencyList[adjacencyVertex] = this.adjacencyList[
        adjacencyVertex
      ].filter((v) => v !== vertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);

graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 6);
graph.addEdge(6, 5);
graph.addEdge(6, 7);
graph.addEdge(5, 4);
graph.addEdge(7, 4);

console.log(graph);
