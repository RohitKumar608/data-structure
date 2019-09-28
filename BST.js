class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.result = [];
  }
  insert(data) {
    if (this.data > data && this.left) {
      this.left.insert(data);
    } else if (this.data > data) {
      this.left = new BST(data);
    } else if (this.data < data && this.right) {
      this.right.insert(data);
    } else if (this.data < data) {
      this.right = new BST(data);
    } else {
      this.data = new BST(data);
    }
  }
  contains(data) {
    if (this.data === data) {
      return true;
    }
    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }
    return false;
  }
  // traverse Without Recursion
  whileContains(data) {
    let current = this;
    if (!current) {
      return false;
    }
    while (current.data) {
      if (current.data > data && current.left) {
        current = current.left;
      } else if (current.data < data && current.right) {
        current = current.right;
      } else {
        if (current.data === data) return true;
        else return false;
      }
    }
  }

  //BFS traversal without recursion
  BFS() {
    let node = this,
      result = [],
      queue = [this];
    while (queue.length) {
      node = queue.shift();
      result.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
  DFSPreOrder() {
    let result = [];
    function traverse(node) {
      result.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this);
    return result;
  }
  DFSInOrder() {
    let result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.data);
      if (node.right) traverse(node.right);
    }
    traverse(this);
    return result;
  }
  DFSPostOrder() {
    let result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.data);
    }
    traverse(this);
    return result;
  }

  // Performs inOrder traversal of a tree
  traverseInOrder(node) {
    if (node !== null) {
      this.traverseInOrder(node.left);
      this.result = [...this.result, node.data];
      this.traverseInOrder(node.right);
    }
    return this.result;
  }
  traversePreOrder(node) {
    if (node !== null) {
      this.result = [...this.result, node.data];
      this.traversePreOrder(node.left);
      this.traversePreOrder(node.right);
    }
    return this.result;
  }
  traversePostOrder(node) {
    if (node !== null) {
      this.traversePostOrder(node.left);
      this.traversePostOrder(node.right);
      this.result = [...this.result, node.data];
    }
    return this.result;
  }
}
const bst = new BST(6);
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(8);
bst.insert(7);
bst.insert(9);
// console.log(bst.BFS());
console.log("----------- Pre Order ------");
console.log(bst.DFSPreOrder());
console.log("----------- In Order -------");
console.log(bst.DFSInOrder());
console.log("------- Post Order ---------");
console.log(bst.DFSPostOrder());
// console.log(bst.traverseInOrder(bst));
// bst.result=[];
// console.log(bst.traversePreOrder(bst));
// bst.result=[];
// console.log(bst.traversePostOrder(bst));
//  console.log(bst.contains(9));
