'use strict';

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); //интерполяция делалась раньше , сложно

console.log(`https://someurl.com/${category}/4`); // сейчас косые кавычки или бэктики

const userName = 'Ivan';
alert(`Hello, ${userName}`);