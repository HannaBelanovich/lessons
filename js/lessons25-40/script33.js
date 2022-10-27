'use strict';

const arr = [1, 2, 4, 6, 8];

arr.pop(); // удаляет посл. эл-т

arr.push(10); // добавит в конец 10

console.log(arr);

for (let i = 0; i < arr.length; i++) { // классич вариант перебора циклом
    console.log(arr[i]);
}

for (let value of arr) { //метод for of для перебора эл-тов массива, вместо value может быть что угодн
}

arr.forEach(function(item, i, arr) { //в callback передаем 3 арг.: эл-т массива, его номер, сам массив
    console.log(`${i}: ${item} внутри массива ${arr}`); //forEach это более детальный вариант перебора
});

const str  = prompt("", ""); // придет длинная строка
const products = str.split(', '); // указываем разделитель, через который будут идти эл-ты
products.sort(compareNum);
console.log(products); // придет уже массив
console.log(products.join('; ')); // наоборот массив превращает в строку

function compareNum(a, b) { //callback для правильной сортировки чисел
    return a - b;
}
