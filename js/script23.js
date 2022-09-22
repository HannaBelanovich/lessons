'use script';

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n'; //добавляем к пустой строке перенос
// }

// console.log(result);



first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                continue first; // добавили метку first, пропустили вложенные итерации
            }
            console.log(`third level: ${k}`);
        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                break first; // добавили метку first, прервали циклы
            }
            console.log(`third level: ${k}`);
        }
    }
}

for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

// const arr = [];
// let b = 0;
// for (let i = 5; i <= 10; i++) {
    
//     arr[b] = i;
//     b++;
    
// }
// console.log (arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const arr2 = [];


// for (let i = 0; i < arr.length; i++) {    
//     arr2[i] = arr[i];   
// }
// console.log (arr2);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string') {
//         data[i] += ' - done'; 
//     } else if (typeof(data[i]) === 'number') {
//         data[i] = data[i]*2;
//     }
// }

// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let b = 0;

// for (let i = (data.length-1); i >= 0; i--) {
//     result[b] = data[i];
//     b++;
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }

//     console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)