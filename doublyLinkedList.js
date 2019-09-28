class Node{
    constructor(data,previous=null,next=null){
        this.data=data;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    push(value){
        const newNode = new Node(value, this.tail,this.head);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
    }
    pop(){
        let node = this.head.next;
        let currentNode = this.head;
        if(!this.head) return;
        while(node.next){
            currentNode = node;
            node = node.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
         this.head = currentNode;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(4)
doublyLinkedList.push(5)
doublyLinkedList.push(7)
doublyLinkedList.pop()

console.log(doublyLinkedList)