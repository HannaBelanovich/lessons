'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay')

// btn.onclick = function() {
//     alert('click');
// }

// btn.addEventListener('click', () => {
//     alert('click');
// })

// btn.addEventListener('click', () => {
//     alert('click2'); // отработает после первого клика
// })

let i = 0;
const findElement = (e) => { // лучше выносить Ф в переменную    
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('mouseenter', findElement); // удаляем обработчик события
    // }
}

// btn.addEventListener('click', findElement); // передаем функцию как callback
// overlay.addEventListener('click', findElement); // передаем функцию как callback
btns.forEach(item => {
    item.addEventListener('click', findElement, {once: true});
})

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // отменили стандартное поведение браузера

    console.log(event.target);
})
