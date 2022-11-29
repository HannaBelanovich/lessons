'use strict';

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

// john.__proto__ = soldier; // УСТАРЕЛО!!!

Object.setPrototypeOf(john, soldier); // установить прототип если новый О. уже есть

console.log(john.armor);

const billy = Object.create(soldier); // указать прототип на этапе СОЗДАНИЯ О.

console.log(billy.health);
