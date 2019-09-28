const checkSumZero=(array)=>{
    for (let index = 0; index < Math.ceil(array.length/2); index++) {
        if(array[index]+array[array.length-1-index] !==0){
            return false;
        }
    }
    return true;
}

console.log(checkSumZero([-3,-2,-1,0,1,2,3]));