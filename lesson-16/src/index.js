import { getStorageData, setStorageData } from './helpers/storage';

// localStorage.setItem('param', 'param value');
// localStorage.setItem('param-2', 'param 2 value');
//
// // console.log(localStorage);
// // console.log(localStorage.getItem('param'));
//
// // localStorage.removeItem('param');
//
// localStorage.clear();
//
// console.log(localStorage);

// sessionStorage.setItem('param', 'param value');

// Завдання
// Написати to-do-list де можна створювати,
// видаляти елементи та реалізувати збереження списку в локал сторедж

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('.add-btn');
const listElement = document.querySelector('.list');

buttonElement.addEventListener('click', addNewItem);
listElement.addEventListener('click', listHandlerClick);

let listData = getStorageData('toDoList') || [];

if (listData.length) {
  const itemsTemplateArr = listData.map((item) => {
    return `<li class="${item.done ? 'checked' : ''}" data-identity="${item.id}">${item.text} <span class="close">&#215;</span></li>`
  })

  listElement.insertAdjacentHTML('beforeend', itemsTemplateArr.join(''));
}

function listHandlerClick(event) {
  if (event.target.classList.contains('close')) {
    const itemIdentity = event.target.parentElement.dataset.identity;
    listData = listData.filter((item) => item.id !== itemIdentity);
    setStorageData('toDoList', listData);
    event.target.parentElement.remove();
  } else if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    const targetIndex = listData.findIndex((item) => item.id === event.target.dataset.identity);
    listData[targetIndex].done = !listData[targetIndex].done;
    setStorageData('toDoList', listData);
  }
}

function addNewItem() {
  if (!inputElement.value) {
    return alert('You must write something!');
  }

  const dateNow = Date.now();
  const itemTemplate = `
    <li data-identity="${dateNow}">
        ${inputElement.value} <span class="close">&#215;</span>
    </li>
  `;
  listElement.insertAdjacentHTML('beforeend', itemTemplate);
  listData.push({ id: String(dateNow), text: inputElement.value, done: false })
  setStorageData('toDoList', listData);
  inputElement.value = '';
}


