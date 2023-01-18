'use strict';

// TO STRING

//  1.  неудобный способ, редко пользуются
console.log(typeof(String(null))); // null превратится в строку
console.log(typeof(String(4))); //число превратится в строку

// typeof - просто чтобы увидеть какой тип данных получился

//  2. конкатенация
console.log(typeof(5 + '')); //строка

// примеры
const num = 5;
console.log("https://vk.com/catalog/" + num); // это старый код, сейчас лучше интерполяцию

const fontSize = 28 + 'px';

// TO NUMBER    

//  1. 
console.log(typeof(Number('4'))); //

//  2.
console.log(typeof(+'5'));  // унарный плюс

//  3.
console.log(typeof(parseInt('13px', 10))); // с помощью метода, нечасто

// примеры
let answ = +prompt('your age', '');  //унарный плюс перед ответом от пользователя


// TO BOOLEAN

//  1.
let switcher = null;

if (switcher) {
    console.log('working...'); // не сработает т к null это false
}

switcher = 1;

if (switcher) {
    console.log('working...'); // сработает т к 1 это true
} 

//  2. 
console.log(typeof(Boolean('4'))); //  почти никогда

//  3
console.log(typeof(!!"dsfdsfds")); // boolean, очень редко