

// Write a JavaScript function that returns the Fibonacci sequence up to a given
//  number of terms.

const fibonacciNum = (num) => {
    let x = 0;
    let y = 1;
    let fn = x + y;
    while (fn < num) {
        console.log(fn)
        fn = x + y;
        x = y;
        y = fn
    }
}
console.log(fibonacciNum(100));

