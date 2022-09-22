"use strict";

let number = 5; //изменяемая переменная

const leftBorderWidth = 1; // неизменяемая

number = 10;
console.log(number);

const obj = {
    a: 10
};

obj.a = 20;

console.log(obj); // это ок, т е ПРЯМЫХ констант в js не бывает

var name = "Ivan"; // устарело, не использовать!!!