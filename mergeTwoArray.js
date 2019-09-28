// First solution;
// function mergeTwoArray(firstArray, secondArray) {
//   let resultArray = [];
//   const length = firstArray.length + secondArray.length;
//   let firstIndex = 0;
//   let secondIndex = 0;
//  for (let index = 0; index < length; index++) {
//    if(firstArray[firstIndex]>secondArray[secondIndex]){
//     resultArray.push(secondArray[secondIndex]);
//     secondIndex++;
//    }else if(firstArray[firstIndex]<secondArray[secondIndex]){
//     resultArray.push(firstArray[firstIndex]);
//     firstIndex++;
//    }else if(firstArray[firstIndex] === undefined || secondArray[secondIndex] === undefined){
//     resultArray.push(...firstArray.slice(firstIndex,),...secondArray.slice(secondIndex))
//     break;
//    }
//  }
//   return resultArray;
// }

// Second Solution

const mergeTwoArray = (arr1, arr2) => {
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

console.log(mergeTwoArray([3, 4], [1, 2, 5, 6, 7, 8]));
