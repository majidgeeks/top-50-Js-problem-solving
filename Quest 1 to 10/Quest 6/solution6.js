// 6. Write a JavaScript program to calculate the factorial 
// of a given number.

const factorialCal = (num) => {
    let multiply = 1;
    for(let i = 1; i <= num; i++){
        multiply *= i
    }
    return multiply;
};
console.log(factorialCal(5));