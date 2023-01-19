'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // получим коллекцию эл-тов, псевдомассив
console.log(btns);

const btn = document.getElementsByTagName('button')[1]; // получим 2ю кнопку
console.log(btn);

const circles = document.getElementsByClassName('circle');
console.log(circles); // получим коллекцию эл-тов, псевдомассив

const hearts = document.querySelectorAll('.heart'); // БОЛЕЕ УНИВЕРСАЛЬНЫЙ, есть метод FOR EACH
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //получим 1й эл-т