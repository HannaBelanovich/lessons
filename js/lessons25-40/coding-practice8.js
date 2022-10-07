'use strict';

function getTimeFromMinutes(num) {
    let hours = parseInt(num / 60);
    let minutes = num % 60;
    
    if (typeof(num) != 'number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка, проверьте данные";
    } else {
        if (hours == 1) {
            return `Это ${hours} час и ${minutes} минут`;
        } else if (hours >= 2 && hours <=4) {
            return `Это ${hours} часа и ${minutes} минут`;
        } else {
            return `Это ${hours} часов и ${minutes} минут`;
        }        
    }
}

console.log(getTimeFromMinutes(-5));

function findMaxNumber(num1, num2, num3, num4) {
    
    if (arguments.length < 4 || typeof(num1) !== 'number' ||        
    typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number') {
        return 0;
    } else {
        return Math.max(num1, num2, num3, num4);
    }
}

console.log(findMaxNumber(3, 12.7, 20, '45'));

