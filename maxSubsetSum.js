var fs = require("fs");
let getArray = fs.readFileSync("abc.txt", "utf8");
function maxSubsetSum(arr) {
  let result = [];
  result.push(arr[0]);
  result.push(arr[1]);
  var ans = Math.max(...result);
  for (let index = 2; index < arr.length; index += 1) {
      let maxAmongTwo = Math.max(result[index - 2] + arr[index], arr[index]);
      result.push(Math.max(maxAmongTwo, ans));
      ans = Math.max(result[index], ans);
  }
  return ans;
}

 console.log(maxSubsetSum([3, 5, -7, 8, 10]));
  console.log(maxSubsetSum(getArray.split(" ").map(number => Number(number))));
