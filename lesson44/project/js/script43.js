'use script';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button'); // получим коллекцию эл-тов, псевдомассив
const btn = document.getElementsByTagName('button')[1]; // получим 2ю кнопку
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart'); // БОЛЕЕ УНИВЕРСАЛЬНЫЙ, есть метод FOR EACH
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// console.dir(box); // увидеть все св-ва объекта

// box.style.backgroundColor = 'yellow';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 400px'; // сразу несколько стилец указать

// btns[1].style.borderRadius = '100%';

// circles[2].style.backgroundColor = 'red'; //обязательно ИНДЕКС

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach( item => {
    item.style.backgroundColor = 'green';
})


const div = document.createElement('div'); // сгенерить эл-т с помощью js

div.classList.add('black'); // добавили класс

wrapper.append(div); // вставили в конец wrapper
// wrapper.appendChild(div); // более УСТАРЕВШИЙ метод

// wrapper.prepend(div); // вставили в начало wrapper

// hearts[0].before(div); // вставить перед эл-том
// hearts[0].after(div); // вставить после  эл-та
// wrapper.insertBefore(div, hearts[0]); //более УСТАРЕВШИЙ метод

// circles[0].remove(); //удалить эл-т
// wrapper.removeChild(hearts[1]); //более УСТАРЕВШИЙ метод

// hearts[0].replaceWith(circles[0]); // заменить один эл-т другим
// wrapper.replaceChild(circles[0], hearts[0]); //более УСТАРЕВШИЙ метод

div.innerHTML = '<h1>HI</h1>'; // добавить html и текст
// div.textContent = 'hello'; // только текст

div.insertAdjacentHTML('beforebegin', '<h2>bla</h2>'); // вставить кусочек кода перед или после тегов (afterbegin, beforeend, afterend)
