class HashTable {
  constructor(arrSize = 4) {
    this.table = [];
    this.arrSize = arrSize;
  }
  set(key, value) {
    const idx = this._hash(key);
    if (!this.table[idx]) {
      this.table[idx] = [];
      this.table[idx].push([key, value]);
    } else {
      this.table[idx].push([key, value]);
    }
  }
  get(key) {
    const idx = this._hash(key);
    const getHash = this.table[idx];
    for (let index = 0; index < getHash.length; index++) {
      if (key === getHash[index][0]) {
        return getHash[index][1];
      }
    }
    return undefined;
  }
  _hash(key) {
    const weirdPrime = 31;
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += total * weirdPrime + (key.charCodeAt(i) - 97);
    }
    let idx = Math.abs(total) % this.arrSize;
    return idx;
  }
  getKeys() {
    let keys = [];
    for (let index = 0; index < this.table.length; index++) {
      for (let j = 0; j < this.table[index].length; j++) {
        keys.push(this.table[index][j][0]);
      }
    }
    return [...new Set(keys)];
  }
  getValues() {
    let values = [];
    for (let index = 0; index < this.table.length; index++) {
      for (let j = 0; j < this.table[index].length; j++) {
        values.push(this.table[index][j][1]);
      }
    }
    return [...new Set(values)];
  }
}

const ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("plum", "#DDA0EE");
//  console.log(ht.table);
console.log(ht.getKeys());
console.log(ht.getValues());
console.log(ht.get("plum"));
