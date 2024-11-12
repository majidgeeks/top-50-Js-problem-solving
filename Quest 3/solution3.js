
// 3. Write a JavaScript function to check if a given string is a palindrome
// (reads the same forwards and backwards).

const isPalandrome = (str) => {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
};

console.log(isPalandrome('madam'));



