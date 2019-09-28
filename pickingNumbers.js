function pickingNumbers(a) {
  const resultArray = [];
  if (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      let firstArray = [];
      for (let j = 0; j < a.length; j++) {
        let max = firstArray.length ? Math.max(...firstArray) : 0;
        let min = firstArray.length ? Math.min(...firstArray) : 0;
        if (a[i] - a[j] === 1 || a[i] - a[j] === 0 || a[i] - a[j] === -1) {
          if (
            firstArray.length > 0 &&
            (max - a[j] === 0 || max - a[j] === -1 || max - a[j] === 1) &&
            (min - a[j] === 0 || min - a[j] === -1 || min - a[j] === 1) &&
            (min - max === 0 || min - max === -1 || min - max === 1)
          ) {
            firstArray.push(a[j]);
          } else if (firstArray.length <= 1) {
            firstArray.push(a[j]);
          }
        }
      }
      resultArray.push(firstArray.length);
    }
    return Math.max(...resultArray);
  } else {
    return a.length ? 1 : 0;
  }
}
console.log(pickingNumbers(["9", "6", "13", "16", "5", "18", "4", "10", "3", "19", "4", "5", "8", "1", "13", "10", "20", "17", "15", "10", "6", "10", "13", "20", "18", "17", "7", "10", "6", "5", "16", "18", "13", "20", "19", "7", "16", "13", "20", "17", "4", "17", "8", "19", "12", "7", "17", "1", "18", "3", "16", "4", "5", "3", "15", "17", "6", "17", "14", "11", "11", "7", "11", "6", "15", "15", "12", "6", "17", "19", "8", "6", "13", "9", "10", "19", "14", "18", "7", "9", "11", "16", "11", "20", "4", "20", "10", "7", "8", "4", "2", "12", "11", "8", "12", "13", "19", "8", "8", "5"]));
