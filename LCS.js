var fs = require("fs");
let getArray = fs.readFileSync("abc.txt", "utf8");
const LCS = (getArray) => {
//   const firstString = [697, 953, 900, 438, 899, 593, 591, 963, 31, 160, 894, 493, 782, 445, 326, 452, 988, 657, 7, 544, 768, 398, 791, 650, 818, 12, 347, 928, 828, 336, 692, 339, 130, 837, 548, 487, 989, 333, 875, 711, 957, 341, 821, 319, 338, 328, 234, 7, 670, 328, 451, 200, 685, 699, 855, 668, 609, 322, 752, 386, 81, 635, 952, 618, 133, 73, 548, 163, 221, 105, 773, 398, 639, 579, 660, 746, 718, 918, 224, 984, 265, 242, 506, 762, 734, 98, 324, 100, 896, 346, 344, 27, 420, 353, 532, 105, 914, 130, 695];
//   const secondString = [438, 591, 768, 160, 777, 894, 782, 398, 445, 306, 326, 282, 452, 607, 241, 513, 185, 7, 544, 12, 347, 828, 336, 83, 924, 143, 692, 339, 130, 515, 837, 466, 989, 875, 711, 957, 338, 266, 305, 480, 328, 28, 7, 670, 328, 699, 849, 668, 609, 979, 100, 322, 283, 386, 655, 263, 826, 169, 635, 952, 618, 73, 238, 897, 221, 863, 34, 372, 732, 398, 579, 666, 545, 660, 794, 746, 526, 718, 918, 403, 615, 946, 224, 822, 242, 506, 734, 324, 100, 55, 346, 704, 24, 650, 678, 532, 914, 130, 423, 998];

//   const firstString = "AGGTAB";
//   const secondString = "GXTXAYB";

// const firstString = "acbaed";
// const secondString = "abcadf";

//   const firstString = "ABCDGH";
//   const secondString = "AEDFHR";

  const firstString = getArray;
  const secondString = getArray;

  const resultArray = [];
  let matchedString = "";
  for (let index = 0; index <= firstString.length; index += 1) {
    resultArray[index] = [];
    for (let j = 0; j <= secondString.length; j += 1) {
      if (j === 0 || index === 0) {
        resultArray[index][j] = 0;
      } else {
        if (firstString[index - 1] === secondString[j - 1]) {
          resultArray[index][j] = resultArray[index - 1][j - 1] + 1;
        } else {
          resultArray[index][j] = Math.max(
            resultArray[index - 1][j],
            resultArray[index][j - 1]
          );
        }
      }
    }
  }

  let index = firstString.length;
  let j = secondString.length;

  while (index > 0 && j > 0) {
    if (resultArray[index - 1][j] > resultArray[index][j - 1]) {
      index--;
    } else if (
      resultArray[index][j] === resultArray[index - 1][j - 1] + 1
    ) {
      matchedString = matchedString+' ' + firstString[index - 1];
      j--;
      index--;
    } else if (resultArray[index][j] !== resultArray[index][j - 1]) {
      j--;
      index--;
    } else {
      j--;
    }
  }
//   let maxLength = 0;
//     for (let i = matchedString.length; i >= 0; i--){
//         let result = 0;
//         for (let j = i; j >= 1; j--) {
//             if (matchedString[j] < matchedString[j - 1]) {
//                 result += 1;
//             }
//         }
//         maxLength = maxLength > result ? maxLength : result;
// }

   return(matchedString); 
};
LCS((getArray.split(" ").map(number => Number(number))));
