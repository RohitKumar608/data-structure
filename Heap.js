class Heap {
  constructor() {
    this.value = [];
  }
  insert(value) {
    this.value.push(value);
    let data = this.value;
    let parentNode = Math.floor((data.length - 2) / 2);
    let insertedIdx = data.length - 1;
    while (parentNode >= 0 && data[parentNode] < value) {
      this.swap(data, parentNode, insertedIdx);
      insertedIdx = parentNode;
      parentNode = Math.floor((parentNode - 1) / 2);
    }
  }
  swap(array, fromIdx, toIdx) {
    let temp = array[fromIdx];
    array[fromIdx] = array[toIdx];
    array[toIdx] = temp;
    return array;
  }
  removeRoot() {
    let values = this.value;
    values = this.swap(values, 0, values.length - 1);
    values.pop();
    let parentIdx = 0;
    if(values.length==2){
        if(values[0]<values[1]) {
            const temp = values[0];
            values[0]=values[1];
            values[1] = temp;
        }
    }
    let childIdx = values.indexOf(Math.max(values[1], values[2]));
    while (values[parentIdx] < values[childIdx] && childIdx>=0 ) {
      this.swap(values, parentIdx, childIdx);
      parentIdx = childIdx;
      childIdx = values.indexOf(
        Math.max(values[2 * childIdx + 1], values[2 * childIdx + 2])
      );
    }
  }
}

const heap = new Heap();
// heap.insert(2);
// heap.insert(7);
// heap.insert(26);
// heap.insert(25);
// heap.insert(19);
// heap.insert(17);
// heap.insert(1);
// heap.insert(90);
// heap.insert(3);
// heap.insert(36);
// second set
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.removeRoot();
console.log(heap.value);
heap.removeRoot();
console.log(heap.value);
heap.removeRoot();
console.log(heap.value);
heap.removeRoot();
console.log(heap.value);
heap.removeRoot();
console.log(heap.value);

