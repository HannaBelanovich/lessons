'use script';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b); // 10
// console.log(a); // 5 все ок

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // !!! здесь передается ссылка на уже существующий объект

// copy.a = 10; // модифицируем первонач. о. по ссылке, а не копию

// console.log(copy); //10, 1
// console.log(obj); // 10, 1, т е перезаписалось и в оригинальном объекте


// создаем поверхностную копию с циклом for in
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;                
}

const numbers = {   //mainObj
    a: 2,
    b: 4,
    c: {
        x: 7, 
        y: 4
    }
}

const newNumbers = copy(numbers); // копия

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers); //a = 10, c = 10
console.log(numbers); // a = 2, c = 10!, т е с вложенными не работает

const add = {
    d: 17,
    e: 20
};


// создаем поверхностную копию с Object.assign

console.log(Object.assign(numbers, add)); // соеденить несколько объектов, создав независим.поверх.коп

const clone = Object.assign({}, add);//создать копию старого объекта

clone.d = 1;

console.log(clone);
console.log(add);

// создаем поверхностную копию Массива с .slice()

const oldArray = ['1', '2', '3'];
const newArray = oldArray.slice(); // копия старого Массива

newArray[1] = 'asdasdsad';

console.log(oldArray); // не изменится
console.log(newArray); //изменится

// создаем поверхностную копию Массива с spread оператором

const video = ['youtube', 'vimeo'],
      blogs = ['wordpress', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'instagram']; // spread оператор, соединил 3 массива вместе

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 3, 5]; //этот М. нам нужно вывести как отдыльные 3 аргумента в Ф.

log(...num); // spread рператор развернул М. на отдельные эл-ты

const array = ['a', 'b']; 
const arrayTwin = [...array]; // просто создаем поверхн. копию массива

console.log(arrayTwin);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // просто создаем поверхн. копию объекта

console.log(newQ);