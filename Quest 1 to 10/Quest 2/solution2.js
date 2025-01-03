

// 2. Write a JavaScript program to find the maximum number in an array

const findMaxNum = (arr) => {
    let maxNum = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum
};

console.log(findMaxNum([1,2,3,4,5]));