function factorial(number){
    let result =1
    if(number===1){
        return 1;
    }
    else{
        result = number * factorial(number-1);
    }
    return result;
}

console.log(factorial(4));