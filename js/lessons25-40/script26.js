'use script';

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) { // напрямую не передаем переменные в ф-и!!
    console.log(amount * curr);
}

convert(500, usdCurr);
convert(500, eurCurr);