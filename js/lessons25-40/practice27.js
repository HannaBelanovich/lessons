'use script';

function sayHello(name) {
    return `hello,  ${name}!`;
}

console.log(sayHello("Аня"));

function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(mainNum, multiplier) {

    let str = '';

    if (typeof(multiplier) != 'number' || multiplier <= 0) {
        return mainNum;
    }

    for (let i = 1; i <= multiplier; i++) {        

        if (i === multiplier) {
            str += `${mainNum * i}`;
        } else {
            str += `${mainNum * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(5, 3)); // 5---10---15