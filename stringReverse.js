// const reverseStr = (str)=>{
//     // return str.split('').reduce((reverse,char)=>char+reverse);
//     return str.split('').reverse().join('');
// }

// console.log(reverseStr('HELLO'))

const palindrome = (str)=>{
    // return str.split('').reduce((reverse,char)=>char+reverse);
    let reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}

console.log(palindrome('HIH'))