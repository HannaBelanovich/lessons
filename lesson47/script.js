'use strict';

// возведение в степень с помощью цикла
// function pow(x, n) {
//     let result = 1;

//     for (i = 0; i < n; i++) {
//         result = result*x;
//     }

//     return result;
// }

// console.log(pow(2, 3));

// возведение в степень с помощью рекурсии
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n-1);
//     }
// }

// pow(2, 4);

// работа Функции:
// 1. return 2 * pow(2, 3) = 16
// 2. return 2 * pow(2, 2) = 8
// 3. return 2 * pow(2, 1) = 4
// 4. return 2 - БАЗА, низшая ступень , дальше идем наверх
// 5. 2 * 2 = 4 (возврат 4))
// 6. 2 * 4 = 8 (возврат 8))
// 7. 2 * 8 = 16 (возврат 16))

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Anna',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// задача по вычислению общего прогресса всех студентов, общее число прогресса разделить на всех студентов 

// с помощью итерации, не очень универсально, код очень громоздкий с вложенностями
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of (Object.values(data))) { // получаем массив св-в с помощью values и перебираем массив с пом for of
        if (Array.isArray(course)) { // проверяем явл. ли курс массивом
            students += course.length; // посчитали студентов

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress; //посчитали прогресс
            }
        } else { //проверяем явл. ли курс объектом
            for (let subCourse of (Object.values(course))) {
                students += subCourse.length;  // посчитали студентов

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;//посчитали прогресс
                }
            }
        }
    }

    return total/students;
}

console.log(getTotalProgressByIteration(students));

// с помощью рекурсии, так лучше, т к все однотипные действия заключены в Ф, которая вызывает сама себя
// базой рекурсии будет проверка на массив
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) { // проверяем явл. ли курс массивом, это наша БАЗА
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress; //посчитали прогресс
        }

        return [total, data.length]; // нам нужно обязательно вернуть значения (сразу два с помощбю массива), т к это рекурсия. 
    } else { //сама рекурсия
        let total = [0, 0];

        for (let subData of (Object.values(data))) { // попадаем на О и перебираем его
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] = subDataArray[0];
            total[1] = subDataArray[1];
        }
    }
}