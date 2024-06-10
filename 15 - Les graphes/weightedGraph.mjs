class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2) &&
      !this.adjacencyList[vertex2].includes(vertex1)
    ) {
      this.adjacencyList[vertex1].push(new Edge(vertex2, weight));
      this.adjacencyList[vertex2].push(new Edge(vertex1, weight));
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.adjacencyList[adjacencyVertex] = this.adjacencyList[
        adjacencyVertex
      ].filter((v) => v.vertex !== vertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v.vertex !== vertex1
      );
    }
  }

  getVertex(vertex) {
    return this.adjacencyList[vertex];
  }
}
