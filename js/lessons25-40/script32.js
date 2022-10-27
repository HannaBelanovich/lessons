'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colours: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest();

// delete options.name;

// console.log(options['colours']['border']); так делать не очень

const {border, bg} = options.colours; //деструктуризация Объекта
console.log(border);

console.log(Object.keys(options).length);//т к получим массив из св-в, у которого уже есть св-во length

let counter = 0; // счетчик, чтобы посчитать сколько св-в

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter); // этот способ не очень хорош, лучше метот Object.keys()