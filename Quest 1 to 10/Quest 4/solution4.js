
// 4. Write a JavaScript program to reverse a given string.

// solution

const reverseString = (str) => {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr;
}

console.log(reverseString('majid'));
console.log(reverseString('hello world'));

