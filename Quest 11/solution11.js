
// 2. Write a function that takes an array of objects and a key, and returns a new array
//  sorted based on the values of that key in ascending order. 

function sortByKey(array, key) {
    return array.slice().sort((a, b) => {
        if (a[key] < b[key]) return -1; // If a[key] is smaller, place it before b[key]
        if (a[key] > b[key]) return 1;  // If a[key] is larger, place it after b[key]
        return 0; // If they are equal, maintain the order
    });
}

const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
];

const sortedByAge = sortByKey(data, "age");
console.log(sortedByAge);