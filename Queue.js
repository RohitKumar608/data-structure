class Queue{
    constructor(){
      this.data = [];
    }
    add(value){
      this.data.unshift(value)
      console.log(this.data)
    }
    remove(value){
      this.data.pop(value);
          console.log(this.data)
    }
  }
  const queue = new Queue();
  queue.add(3);
  queue.add(4)
  queue.remove(3)