'use strict';

console.log('array' + ' is' + ' object');

console.log(4 + ' is' + ' object'); //конкатенация - строка плюс число - будет строка
console.log(4 + +'5'); //будет число, т.к.унарный плюс превратил строку 5 в число

let incr = 10,
    decr = 10;

incr++; //оператор инкремента
decr--; // оператор декремента

console.log(incr);
console.log(decr);