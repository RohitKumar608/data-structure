class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(firstEd, secondEd) {
    this.adjacencyList[firstEd].push(secondEd);
    this.adjacencyList[secondEd].push(firstEd);
  }
  removeEdges(firstEd, secondEd) {
    let v1 = this.adjacencyList[firstEd];
    const getV1Idx = v1 && v1.indexOf(secondEd);
    getV1Idx >= 0 && v1.splice(getV1Idx, 1);
    let v2 = this.adjacencyList[secondEd];
    const getV2Idx = v2 && v2.indexOf(firstEd);
    getV2Idx >= 0 && v2.splice(getV2Idx, 1);
  }
  removeVertex(vertex) {
    const getEdges = this.adjacencyList[vertex];
    for (let index = 0; index < getEdges.length; index++) {
      this.adjacencyList[getEdges[index]] = this.adjacencyList[
        getEdges[index]
      ].filter(list => list !== vertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFS(vertex) {
    let visited = {};
    let source = [];
    let result = [];
    source.push(vertex);
    visited[vertex] = true;
    let currentVertex = "";
    while (source.length) {
      currentVertex = source.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(newVertex => {
        if (!visited[newVertex]) {
          visited[newVertex] = true;
          source.push(newVertex);
        }
      });
    }
    return result;
  }

  BFS(vertex) {
    let visited = {};
    let source = [];
    let result = [];
    source.push(vertex);
    while (source.length) {
      source.forEach(newVertex => {
        newVertex = source.shift();
        result.push(newVertex);
        this.adjacencyList[newVertex].forEach(currentVrt => {
          if (!source.includes(currentVrt) && !visited[currentVrt]) {
            source.push(currentVrt);
          }
        });
        if (!visited[newVertex]) {
          visited[newVertex] = true;
        } else {
          return result;
        }
      });
    }
    return result;
  }

  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.BFS("A"));
// graph.removeEdges("A", "C");
// graph.removeEdges("F", "G");
// graph.removeVertex("A");
// console.log(graph.adjacencyList);
