class Array {
  constructor() {
    this.data = {};
  }
  push(value) {
    const length = Object.keys(this.data).length;
    this.data[length ? length : 0] = value;
    return this.data;
  }
  pop() {
    const length = Object.keys(this.data).length;
    const deletedValue = this.data[length - 1];
    delete this.data[length - 1];
    return deletedValue;
  }
  unshift(value) {
    for (const [iterator, value] of Object.entries(this.data)) {
      this.data[Number(iterator) + 1] = value;
    }
    this.data[0] = value;
    return this.data;
  }
  length() {
    return Object.keys(this.data).length;
  }
}
const array = new Array();
console.log(array.length());
console.log(array.push(4));
console.log(array.push(6));
console.log(array.unshift(608));
console.log(array.push(60));
console.log(array.pop());
console.log(array.pop());
console.log(array.push(32));
