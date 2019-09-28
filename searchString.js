const searchString=(string,searchString)=>{
    let result = 0;
    let searchLength = searchString.length;
    for (let index = 0; index < string.length; index++) {
      if(string.substring(index,index+searchLength)===searchString){
        result++;
      }
    }
    return result;
}

console.log(searchString('wmxuomgtresomsg','omg'));