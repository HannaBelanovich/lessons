'use strict';

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
       return 'Ошибка!';
    }
    return str.split('').reverse().join('');
}

console.log(reverse(someString)); //вернули перевернутую строку

// function reverse(str) {

//     if (typeof(str) != 'string') {
//         return 'Ошибка!';
//     }

//     const strArray =  str.split('');
//     let reverseStr = '';

//     strArray.forEach (function(item, i, strArray) {

//         reverseStr += `${strArray[strArray.length - i - 1]}`;
//     });

//     return reverseStr;
// }

// console.log(reverse(someString)); //вернули перевернутую строку, 2й вариант

// function reverse(str) {

//     if (typeof(str) != 'string') {
//         return 'Ошибка!';
//     }

//     const strArray =  str.split('');
//     let reverseStr = '';

//     for (let i = strArray.length - 1; i >= 0; i--) {
//         reverseStr += `${strArray[i]}`;
//     }   

//     return reverseStr;
// }

// console.log(reverse(someString)); //вернули перевернутую строку, 3й вариант

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
    if (arr.length === 0) {
        return "Нет доступных валют";
    }
    
    let availableCurr = 'Доступные валюты:\n';

    for (let value of arr) {
        if (missingCurr === value) {
            continue;
        } 
        availableCurr += `${value}\n`;
    }

    return availableCurr;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')); // Вернет строку:
                                                        // Доступные валюты:
                                                          // UAH
                                                             // RUB