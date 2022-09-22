'use strict';

// alert('Hello');  предупредить пользователя о чем-то

// const userConfirm = confirm('Are you here?');
// console.log(userConfirm); // true ули да, false если нет

// const userAnswer = prompt("Are you 18?", "18");
// // const userAnswer = prompt("Are you 18?", ""); // можно пустые кавычки
// console.log(userAnswer);

const userAnswers = [];
userAnswers[0] = prompt('Your name?', '');
userAnswers[1] = prompt('Your age?', '');
userAnswers[2] = prompt('Married?', '');

document.write(userAnswers); // тестовый метод, его не используют в проектах 