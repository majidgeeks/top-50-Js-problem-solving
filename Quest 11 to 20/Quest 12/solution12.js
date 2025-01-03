// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output : 34223


const reverseNum = (num) => {
    let numToString = num.toString();
    let numReverse = numToString.split('').reverse().join('');
    return Number(numReverse)
};
 console.log(reverseNum(32243));

//  an other method 

const reverseNum2 = (num) => {
    let reversedNums = [];
    let numToString = num.toString();
    let numSplit = numToString.split('');
    for(let i = numSplit.length-1; i >=0 ; i--){
        reversedNums.push(numSplit[i])
    }
    let joinNums = reversedNums.join('');
    return Number(joinNums)
};
console.log(reverseNum2(32243));

