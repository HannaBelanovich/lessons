'use strict';

const str = 'Hello';
const arr = [1, 3, 6, 8];

console.log(str.length);
console.log(arr.length);

console.log(str[1]);

console.log(str.toLocaleUpperCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //5

const logg = 'Hello world';
console.log(logg.slice(6, 11)); //world
console.log(logg.slice(6));
console.log(logg.slice(-6, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
console.log(parseInt(test)); //12
console.log(parseFloat(test)); //12.2