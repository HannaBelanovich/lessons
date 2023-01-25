'use strict';

// console.log(document.body);
// console.log(document.head);

// console.log(document.documentElement); //получим html

// console.log(document.body.childNodes); //получим все узлы, даже переносы строк

// console.log(document.body.firstChild); // node
// console.log(document.body.firstElementChild); // element
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode); // получим нод
// console.log(document.querySelector('#current').parentElement); // получим родительский ЭЛЕМЕНТ
// console.log(document.querySelector('#current').parentNode.parentNode); //получим дедушку

// console.log(document.querySelector('[data-current = "3"]')); 

// console.log(document.querySelector('[data-current = "3"]').nextSibling); 
// console.log(document.querySelector('[data-current = "3"]').previousSibling); 

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); 
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling); 

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; // убираем переносы строк
    } 

    console.log(node);
}