/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const promo = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genreName = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add');
    const addBtn = addForm.querySelector('button');
    const addInput = addForm.querySelector('.adding__input');
    const addCheckBox = addForm.querySelector('[type="checkbox"]');
    
   const deleteAdv = (arr) => { //Удалить все рекламные блоки со страницы (правая часть сайта)
        arr.forEach( item => {
            item.remove();
        })     
   }  

   const makeChanges = () => { //Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        genreName.textContent = "ДРАМА"; //Изменить жанр фильма, поменять "комедия" на "драма"
        
        poster.style.backgroundImage = "url('img/bg.jpg')";   
   };      
   
   const sortArr = (arr) => { //Отсортировать их по алфавиту 
        arr.sort();
   }      

    function addListOfFilms(films, parent) { //Список фильмов на странице сформировать на основании данных из этого JS файла.

        parent.innerHTML = '';
        sortArr(films);  // заново сортируем фильмы

        films.forEach((film, i) => { //Добавить нумерацию выведенных фильмов */
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film} 
                    <div class="delete"></div>
                </li>
            `
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {  //При клике на мусорную корзину - элемент будет удаляться из списка
            btn.addEventListener('click', () => {
                btn.parentElement.remove();  // удаляем родителя
                movieDB.movies.splice(i, 1); // удаляем элемент из массива

                addListOfFilms(films, parent); // заново формируем список фильмов рекурсией
            })
        });
    }

    deleteAdv(promo);
    makeChanges();    
    addListOfFilms(movieDB.movies, movieList);
    
    addForm.addEventListener('submit', function(event) {  //после заполнения формы и нажатия кнопки "Подтвердить" - 
                                                            // новый фильм добавляется в список. 
        event.preventDefault(); // отменили стандартное поведение браузера

        let newFilm = addInput.value.toUpperCase();
        const favourite = addCheckBox.checked; // проверяем стоит ли галочка

        if (newFilm) {

            if (newFilm.length > 21) {  //название фильма больше, чем 21 символ - обрезать его и добавить три точки
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);     //// Новый фильм должен добавляться в movieDB.movies.
            sortArr(movieDB.movies);  // снова сортируем
            addListOfFilms(movieDB.movies, movieList); // заново создаем список
        }

        event.target.reset(); // очистили форму
        
    })
});
