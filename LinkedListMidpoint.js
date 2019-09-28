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
  getMidpoint(){
      let midPoint =this.head;
      let isNextExist = this.head;
      while(isNextExist.next && isNextExist.next.next){
        midPoint = midPoint.next;
        isNextExist = isNextExist.next && isNextExist.next.next;
      }  
      return midPoint.data;
  }
  isLinkedListCircular(){
    let midPoint =this.head;
    let isNextExist = this.head;
    isNextExist.next = isNextExist;
    console.log(isNextExist)
    while(isNextExist.next && isNextExist.next.next){
      midPoint = midPoint.next;
      isNextExist = isNextExist.next && isNextExist.next.next;
      if(midPoint === isNextExist){
          return "Circular Linked List";
      }
    }  
    return "Valid LinkedList";
  }
}
const linkedList = new LinkedList();

linkedList.insertFirst(4);
linkedList.insertFirst(5);
linkedList.insertFirst(6);
// linkedList.insertFirst(7);
// console.log(linkedList.getMidpoint())
console.log(linkedList.isLinkedListCircular())
