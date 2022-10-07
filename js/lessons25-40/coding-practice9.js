'use strict';

function fib(num) {

    let str = '';
    let first = 0;
    let second = 1;

    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    for (let i = 0; i < num; i++) {

        if (i + 1 === num) {
            str += `${first}`;
            // Без пробела в конце
        } else {
            str += `${first} `;  
        }     
              

        let third = first + second; 
        first = second; 
        second = third; 
    }

    return str;
}

console.log(fib(7)); //0 1 1 2 3 5 8