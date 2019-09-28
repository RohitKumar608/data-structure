function recursionTree(number,row=0){
    if(number===0) return;
    else{
      let result="";
      for(let i=0 ; i<number+row ;i++){
        if(i<=row){
          result=result+'@';
        }else{
          result=result+' ';
        }
      }
      console.log(result)
    }
    recursionTree(number-1,row=row+1);
  }
  
  recursionTree(10)
  