// start recursion
// function binomial(n,k){
//   if(n>0){
//   if(k===0 || k===n){
//     return 1;
//   }
//   return binomial(n-1,k-1)+binomial(n-1,k);
//   }else{
//     return 1;
//   }
// }
// End recursion

// start memoization

// function binomial(n,k){
//     let binomialArray = [];
//     for(let i = 0; i <= n; i++){
//         binomialArray[i] = [];
//         for(let j = 0; j <= Math.min(i, k); j++){
//             if(j===0 || j===i){
//                 binomialArray[i][j] = 1;
//             }else{
//                 binomialArray[i][j] = binomialArray[i-1][j-1] + binomialArray[i-1][j];
//             }
//         }
//     }
//     return binomialArray[n][k];
// }

//end memoization

// spcae optimization in memoization
function binomial(n,k){
    let binomialArray = [];
    binomialArray[0] = 1;

    for(let i = 0; i <= n; i++){
        for(let j = Math.min(i, k); j >0; j--){
            binomialArray[j] = binomialArray[j-1] + binomialArray[j];
        }
    }
    return binomialArray[k];
}

console.log(binomial(4,3))