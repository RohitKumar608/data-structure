class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
class Dijkstra{
    constructor(){
        this.adjacencyList=[];
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
}

const dijkstra = new Dijkstra();
dijkstra.addVertex("A");
dijkstra.addVertex("B");
dijkstra.addVertex("C");
dijkstra.addEdge("A", "B",9);
dijkstra.addEdge("A", "C",6);
dijkstra.addEdge("B", "C",4);
console.log(dijkstra.adjacencyList)

