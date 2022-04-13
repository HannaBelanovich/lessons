"use strict";

if (4 == 9) {
    console.log("Ok");
} else {
    console.log("error");
}

/* const num = 50;

if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("too much");
} else {
    console.log("Ok");
}

// тернарный оператор
(num === 50) ? console.log('ok') : console.log('Error'); */

const num = 50;

switch (num) {
    case 49:
        console.log("no");
        break;
    case 100:
        console.log("no");
        break;
    case 50:
        console.log('yep');
        break;
    default:
        console.log("not this time");
        break;
}