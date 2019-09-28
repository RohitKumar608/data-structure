// function pyramid(length){
//     newLength = length*2-1;
//     for(let row=0; row < length; row++){
//         let pattern = "";
//         // worst solution because i am running here two loops
//         for(let column= Math.floor((newLength)/2); column >0; column--){
//             if(row>=column){
//                 pattern=pattern+'#';
//             }else if(length>=column){
//                 pattern=pattern+'*';
//             }
//             else{
//             pattern=pattern+'*';
//             }
//         }
//         for(let column=0; column < Math.ceil((newLength)/2); column++){
//             if(row>=column){
//                 pattern=pattern+'#';
//             }
//             else{
//             pattern=pattern+'*';
//             }
//         }
//         console.log(pattern)
//     }
//   }

function pyramid(length){
    midPoint = Math.floor((length*2-1)/2);
    for(let row=0; row < length; row++){
        let pattern = "";
        // good solution
        for(let column= 0; column < 2*length-1; column++){
            if(midPoint-row<=column && midPoint+row>=column){
                pattern = pattern + "#";
            }else{
                pattern = pattern + "*"
            }
        }
        console.log(pattern)
    }
}
  (pyramid(6))