// const element1 = document.querySelector('.element-1');
// const element2 = document.querySelector('.element-2');
// const myElem = document.querySelector('.element-1');
//
// console.log(element1 === myElem);
//
// document.body.append(element1);

// document.addEventListener('keydown', showEvent);
// function showEvent(event) {
//   console.log(event)
// }

// const inputElem = document.querySelector('input');
// inputElem.addEventListener('keydown', someFunc);
// function someFunc(event) {
//   console.log(event);
//   event.preventDefault();
// }

// const containerElem = document.querySelector('.button-container');
// containerElem.addEventListener('click', changeCount);
// function changeCount(event) {
//   console.dir(event.target);
//   if (event.target.tagName === 'BUTTON') {
//     const nextElem = event.target.nextElementSibling
//     nextElem.textContent = `${Number(nextElem.textContent) + 1}`
//   }
// }

// const elem1 = document.querySelector('.element-1');
// const elem2 = document.querySelector('.element-2');
// const elem3 = document.querySelector('.element-3');
//
// elem1.addEventListener('click', showMessage1, { capture: true });
// elem2.addEventListener('click', showMessage2, { capture: true });
// elem3.addEventListener('click', showMessage3, { capture: true });
//
//
// function showMessage1(event) {
//   console.log('Element-1')
//   event.stopPropagation()
// }
// function showMessage2() {
//   console.log('Element-2')
// }
// function showMessage3() {
//   console.log('Element-3')
// }




// Створити гелерею з картинок використовуючи масив
// При кліку на картинку показувати модалку з написом що зберігіється в полі title.
// Використовувати делегування при обробці кліків

// // Код модалки з минулої лекції
// const modalElement = document.querySelector('.modal');
// const containerElement = document.querySelector('.modal__content');
// const closeElement = document.querySelector('.modal__close');
// function subscribeListeners() {
//   modalElement.addEventListener('click', closeModal);
//   closeElement.addEventListener('click', closeModal);
//   containerElement.addEventListener('click', stop);
//   document.addEventListener('keyup', checkClose);
// }
//
// // ВИДАЛЯЮ ПРОСЛУХОВУВАЧІ ПРИ ЗАКРИВАННІ МОДАЛКИ
// function unsubscribeListeners() {
//   modalElement.removeEventListener('click', closeModal);
//   containerElement.removeEventListener('click', stop);
//   closeElement.removeEventListener('click', closeModal);
//   document.removeEventListener('keyup', checkClose);
// }

// function checkClose(event) {
//   console.log(event.code);
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// }
//
// // ФУНКЦІЯ, ЯКА ЗАБОРОНЯЄ ІВЕНТУ СПЛИВАТИ ВИЩЕ ПО ДЕРЕВУ ДОКУМЕНТА
// function stop(event) {
//   event.stopPropagation();
// }

// function openModal() {
//   modalElement.classList.remove('hidden');
//   subscribeListeners();
// }
//
// function closeModal() {
//   unsubscribeListeners();
//   modalElement.classList.add('hidden');
// }

// // РЕАЛІЗАЦІЯ ГАЛЕРЕЇ
// const images = [
//   {
//     "title": "Коник стрибунець",
//     "src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg"
//   },
//   {
//     "title": "Фрукт",
//     "src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
//   },
//   {
//     "title": "Люди",
//     "src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
//   },
//   {
//     "title": "Годиник",
//     "src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg"
//   },
//   {
//     "title": "Метро",
//     "src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
//   },
//   {
//     "title": "Хмари",
//     "src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
//   },
// ]

// // ФОРМУЮ МАСИВ З ВЕРСТКОЮ КАРТИНОК
// const imagesListArr = images.map((image, index) => {
//   return `<div class="image-item"><img data-index="${index}" src="${image.src}" alt=""></div>`
// })
// // ФОРМУЮ ЗАГАЛЬНУ ВЕРСТКУ ГАЛЕРЕЇ ТА ВСТАВЛЯЮ НА СТОРІНКУ
// const listTemplate = `
//   <div class="image-list">${imagesListArr.join('')}</div>
// `;
// document.body.insertAdjacentHTML('beforeend', listTemplate);
//
// // НАВІШУЮ ОБРОБНИКИ ДЛЯ ДЕЛЕГУВАННЯ ПОДІЙ
// const listElem = document.querySelector('.image-list');
// listElem.addEventListener('click', showTitle);
// listElem.addEventListener('click', showMessage);
//
// // ПЕРЕВІРЯЮ КЛІК ТА ВСТАВЛЯЮ ТАЙТЛ В МОДАЛКУ, ВІДКРИВАЮ МОДАЛКУ
// const valueElem = document.querySelector('.modal__value');
// function showTitle(event) {
//   console.dir(event.target);
//
//   if (event.target.tagName === 'IMG') {
//     const imgIndex = event.target.dataset.index;
//     console.log(imgIndex);
//     valueElem.textContent = images[imgIndex].title;
//     openModal();
//   }
// }

// function showMessage(event) {
//   if (event.target.tagName === 'IMG') {
//     const imgIndex = event.target.dataset.index;
//     console.log(images[imgIndex].title);
//   }
// }

