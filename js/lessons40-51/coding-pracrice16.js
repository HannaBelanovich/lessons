'use strict';

// n! = n * (n - 1) * (n - 2) * ...*1 

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialByIteration(n) {
    let result = 1;

    if (n <= 0) {
        return 1;
    } else {
        for (i = 1; i <= n; i++) {
           result = result * i; 
        }
    return result;
    }
}

console.log(factorialByIteration(5));

