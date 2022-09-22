'use strict';

let num = 50;

// while (num <= 55) { //сначала проверить, потом сделать
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);  // сначала сделать, потом проверить
//     num++;
// } while (num <= 55);

// for (let i = 1; i < 8; i++) { //самый популярный вид цикла
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 10; i++) { //самый популярный вид цикла
    if (i === 6) {
        break;      //прервет цикл
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) { //самый популярный вид цикла
    if (i === 6) {
        continue;      //пропустит 6, но продолжит цикл
    }
    console.log(i);
}
// for (let i = 20; i >=10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
    console.log(i);
    }
    i++;
}