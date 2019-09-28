const connectNodes = ()=>{
    let nodeOne = {data:2};
    let nodeTwo = {data:3};
    let nodeThree = {data:4};
    nodeOne.next = nodeTwo;
    nodeTwo.next = nodeThree;
    
    // console.log(nodeOne.next.next);
    console.log(nodeOne)
  }
  connectNodes();