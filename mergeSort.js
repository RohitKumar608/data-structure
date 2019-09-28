const merge = (arr1, arr2) => {
    let result = [];
    let idxArr1 = 0;
    let idxArr2 = 0;
    while (arr1[idxArr1] && arr2[idxArr2]) {
      if (arr2[idxArr2] > arr1[idxArr1]) {
        result.push(arr1[idxArr1]);
        idxArr1++;
      } else {
        result.push(arr2[idxArr2]);
        idxArr2++;
      }
    }
    result = [...result, ...arr1.slice(idxArr1), ...arr2.slice(idxArr2)];
    return result;
  };

  const mergeSort = (array)=>{
      if(array.length<=1) return array;
        let mid = Math.floor(array.length/2);
        let left = mergeSort(array.slice(0,mid));
        let right = mergeSort(array.slice(mid));
        return merge(left,right);
  }
  console.log(mergeSort([6, 1, 2, 4, 9, 1, 7, 3]));