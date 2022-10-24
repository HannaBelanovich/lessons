'use strict';

function learnJs(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('я прошел этот урок');
}

learnJs('JavaScript', done);