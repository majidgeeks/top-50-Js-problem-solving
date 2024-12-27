// Write a JavaScript program to convert a string to title case 
// (capitalize the first letter of each word).

const pastalCase = (str) => {
    const splitStr = str.split(' ');
    const operation = splitStr.map((data) => data.charAt(0).toUpperCase() + data.slice(1) );
    const titleStr = operation.join(' ')
    return titleStr
};
console.log(pastalCase("helLo woRld"));

