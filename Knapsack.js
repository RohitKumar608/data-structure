function Knapsack(value,weight,max){
    let resultArray = [];
    for(let i = 0; i <= value.length; i++){
        resultArray[i]=[];
        for(let j = 0; j <= max; j++){
            if(i===0 || j===0){
                resultArray[i][j] =0;
            }else if(weight[i-1]<=max){
                resultArray[i][j] = Math.max(resultArray[i-1][j-weight[i-1]]+value[i-1],resultArray[i-1][j]);
            }else{
                resultArray[i][j] = resultArray[i-1][j];
            }
        }
    }
    console.log(resultArray,'---');
}

const value = [60,100,120];
const weight = [10,20,30];
const max = 50;
Knapsack(value,weight,max)