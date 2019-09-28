class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  getLength() {
    let node = this.head;
    let counter = 0;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }
  getValue(value) {
    let head = Object.assign({}, this.head);
    if (head !== null && head.data === value) return 0;
    if (head !== null) {
      for (let index = 1; ; index++) {
        head = head.next;
        if (head === null) return "Not Found";
        else if (head.data === value) return index;
      }
    } else return "Not Found";
  }
  getLast() {
    let node = this.head;
    let lastNode = null;
    while (node) {
      lastNode = node;
      node = node.next;
    }
    return lastNode;
  }
  removeLast() {
    let node = this.head.next;
    let previousNode = this.head;
    while (node.next) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = null;
  }
  removeGiven(value) {
    if (this.head === null) {
      return;
    }
    let node = this.head.next;
    let previousNode = this.head;
    if (previousNode.data === value) {
      this.head = node;
      return;
    }
    while (node.next && node.data !== value) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = node.next;
  }
  insertLast(value) {
    const head = this.head;
    this.head = null;
    this.head = new Node(value, this.head);
    this.head.next = head;
  }
  getAt(atIndex) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === atIndex) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  insertAt(value, index) {
    if (!this.head) {
      return;
    }
    let node = new Node(value, this.head);
    if (index === 0) {
      this.head = node;
    } else {
      let previousNode = this.getAt(index - 1) || this.getLast();
      // passing previousNode.next for reference purpose because at the time of node creation this.next referring to passed parameter  
      let newNode = new Node(value, previousNode.next);
      previousNode.next = newNode;
    }
  }
}

const node = new Node();
const linkedList = new LinkedList();
// console.log("Get Last", linkedList.getLast());
linkedList.insertFirst(50);
linkedList.insertFirst(20);
linkedList.insertAt("Hello", 1);
linkedList.forEach(element => {
    console.log(element)
});
// linkedList.insertFirst(30);
// linkedList.insertFirst(40);
// linkedList.insertFirst(80);

// linkedList.insertFirst(50);
// linkedList.insertFirst(20);
// console.log("Get value", linkedList.removeValue(50));
// linkedList.removeLast();
// linkedList.removeGiven(50);
// linkedList.insertLast(5);
// console.log("LinkedList Length", linkedList.getLength());
// console.log(linkedList.getAt(0));
