'use strict';

function calculateVolumeAndArea(num) {
    let volume = num * num * num;
    let square = 6 * (num * num);

    if (typeof(num) != 'number' || num <= 0 || !Number.isInteger(num)) {
        return "При вычислении произошла ошибка";
    } else {
        return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
    }
}
console.log(calculateVolumeAndArea(5)); // 'Объем куба: 125, площадь всей поверхности: 150'

console.log(calculateVolumeAndArea(15));  // 'Объем куба: 3375, площадь всей поверхности: 1350'

console.log(calculateVolumeAndArea(15.5));  // 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea('15'));// 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea(-15));// 'При вычислении произошла ош

function getCoupeNumber(seat) {
    if (seat === 0 || seat > 36) {
        return "Таких мест в вагоне не существует";
    } 
    if (!Number.isInteger(seat) || seat < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if ((seat % 4) == 0) {
        return seat/4;
    } else {
        return parseInt(seat/4) + 1;
    }
}

console.log(getCoupeNumber(-4));