function fairRations(B) {
  let count = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (B.length >= 3 && B.reduce(reducer)%2===0) {
    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 !== 0) {
          B[i] = B[i] + 1;
          B[i + 1] = B[i + 1] + 1;
          count += 2;
        }
      }
    return count;
  } else {
    return "NO";
  }
}

console.log(fairRations([1, 1, 2, 1]));
