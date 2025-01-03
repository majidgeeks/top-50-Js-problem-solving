// 5. Write a JavaScript function that takes an array of numbers and returns a
//  new array with only the even numbers. 

const getEvenNums = (arr) => {
    let evenNums = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNums.push(arr[i])
        }
    }
    return evenNums;
};

console.log(getEvenNums([1,2,3,4,5,6,7,8,9,10]));

