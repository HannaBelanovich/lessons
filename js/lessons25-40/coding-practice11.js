'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const arrFamily = arr.join(' ');
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    return `Семья состоит из: ${arrFamily}`;
}

console.log(showFamily(family)); //  'Семья состоит из: Peter Ann Alex Linda'

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
    for (let value of arr) {
        console.log(value);
    }

}

console.log(standardizeStrings(favoriteCities));