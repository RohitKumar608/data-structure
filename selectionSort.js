function selectionSort(array) {
  const arrayLength = array.length - 1;
  for (let i = 0; i <= arrayLength; i++) {
    let lowest = i;
    for (let j = i + 1; j <= arrayLength; j++) {
      if (array[lowest] > array[j]) lowest = j;
    }
    if (i !== lowest) array = swap(array, lowest, i);
  }
  return array;
}
const swap = (array, firstIdx, swapIdx) => {
  const temp = array[firstIdx];
  array[firstIdx] = array[swapIdx];
  array[swapIdx] = temp;
  return array;
};

console.log(selectionSort([3, 2, 1, 4, 5, 6, 7, 9, 8]));
