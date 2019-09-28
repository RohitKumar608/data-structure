function chunkArray(array,chunkSize){
    let resultedArray = [];
    let arrayLength = array.length;
    for(let i = 0; i < arrayLength; i+=chunkSize){
      if(array.length>=chunkSize)
        resultedArray.push(array.splice(0,chunkSize));
      else
        resultedArray.push(array);
    }
    return resultedArray;
  }

  
  
  console.log(chunkArray([1,2,3,4,5,6,7,8,9],5));