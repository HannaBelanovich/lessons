'use script';

// touchstart  - возникновение касания
// touchmove  - при касании палец начинает двигаться
// touchend - как только палец оторвался от элемента
// touchenter - ведем пальцем по экрану и наскакиваем на элемент с этим событием
// touchleave - палец продолжил скользить и ушел с элемента
// touchcancel - точка соприкосновения больше не регистрируется на поверхности (напримнер палец вышел за пределы браузера)

window.addEventListener('DOMContentLoaded', () => {
    
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); // обращаемся к первому пальцу и получаем координаты
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// e.touches - список всех пальцев, которые сейчас взаимодействуют с экраном
// targetTouches - список всех пальцев, которые сейчас взаимодействуют с конкретным элементом
// changedTouches - список пальцев, которые учавствуют в текущем событии, если это событие touchend, то список покажет и палец который был убран