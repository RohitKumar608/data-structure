class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(nodeValue) {
    this.children.push(new Node(nodeValue));
  }
  remove(value) {
    let node = this.data;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const node = new Node();
node.add(6);
node.add(7);
node.add(8);
console.log(node, "----");
