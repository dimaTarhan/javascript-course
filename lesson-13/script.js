// const inputElement = document.querySelector('input');
// inputElement.addEventListener('input', showCode);
//
// function showCode(event) {
//   console.log(event.currentTarget.value);
// }

// element = document.querySelector("#style");
// console.log(element.innerHTML);
// console.log(element.textContent);

// document.addEventListener('click', clickHandler);
// function clickHandler(event) {
//   console.log(event);
// }

// const obj = {
//   price: 30,
//   count: 10
// }
//
// function calcTotalPrice() {
//   console.log(this.price * this.count);
// }
//
// const buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', calcTotalPrice.bind(obj));
// function changeStyle() {
//   console.dir(this);
//   this.style.backgroundColor = 'lightgreen';
//   this.textContent = 'New content!';
// }

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
//
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
//
// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//
//   logList.insertAdjacentHTML("afterbegin", markup);
//
//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
//
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }
//
// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// let count = 0;
// const buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', buttonClick);
// buttonElement.addEventListener('click', showMessage);
// const counterElement = document.querySelector('.counter');
// function showMessage() {
//   console.log('Hello');
// }
// function buttonClick() {
//   if (count > 19) {
//     buttonElement.removeEventListener('click', buttonClick);
//     return;
//   }
//   count += 1;
//   counterElement.textContent = count;
// }

// document.addEventListener('keyup', showEvent);
// function showEvent(event) {
//   console.log(event.code);
//   console.log(event.key);
//   console.log(event);
// }

// const inputElement = document.querySelector('input');
// inputElement.addEventListener('input', showInputValue);
// inputElement.addEventListener('change', showInputValue);
// function showInputValue(event) {
//   console.log(inputElement.checked);
// }
// inputElement.addEventListener('focus', showValue);
// inputElement.addEventListener('blur', showValue);
// function showValue(event) {
//   console.log(event.currentTarget.value);
// }
//
// inputElement.focus();

// const buttonElement = document.querySelector('button');
// const divElement = document.querySelector('div');
//
// document.addEventListener('click', showMessage);
// buttonElement.addEventListener('click', stop);
// divElement.addEventListener('click', showMessage);
// function stop(event) {
//   event.stopPropagation();
// }
// // function stop(event) {
// //   event.preventDefault();
// // }
// //
// // buttonElement.addEventListener('click', showMessage);
// // buttonElement.addEventListener('click', stop);
// function showMessage() {
//   console.log('Click!')
// }




// Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки

// Додати в модалку логіку закриття при натисканні на кнопку Escape

// Створити форму реєстрації користувача за допомогою js де буде 2 поля
// Поле логіна
// Поле пароль
// Захаркодити вірні логін і пароль в константах
// Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
// Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо h2  з написом “Вхід успішний”
// Якщо логі і пароль не співпадають з даними з констант в пункті 3с
// - показуємо під формою помилку червоним кольором “Логін або пароль не вірні”

// СТВОРЮЮ ТА ВСТАВЛЯЮ РОЗМІТКУ НА СТОРІНКУ
const modalTemplate = `
  <div class="modal hidden">
    <div class="modal__content">
      <span class="modal__close">X</span>
      <h3>Authorization</h3>
      <form name="modal-form">
        <label>
          Login
          <input type="text" name="login" placeholder="Enter Login" />
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="Enter Password" />
        </label>
        <button type="submit">Sign In</button>
     </form>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', modalTemplate);



// ПОШУК В ДОКУМЕНТІ НЕОБХІДНИХ ЕЛЕМЕНТІВ
const modalElement = document.querySelector('.modal');
const showButtonElement = document.querySelector('.show');
const containerElement = document.querySelector('.modal__content');
const closeElement = document.querySelector('.modal__close');
const formElement = document.querySelector('form');

// НАВІШУЮ ПРОСЛУХОВУВАЧ НА КНОПКУ ВІДКРИВАННЯ МОДАЛКИ
showButtonElement.addEventListener('click', openModal);

// ОГОЛОШУЮ ВАЛІДНИЙ ЛОГІН ТА ПАРОЛЬ
const validLogin = 'events';
const validPassword = 'secret';

// ПІДКЛЮЧАЮ ПРОСЛУХОВУВАЧІ ПРИ ВІДКРИВАННІ МОДАЛКИ
function subscribeListeners() {
  modalElement.addEventListener('click', closeModal);
  closeElement.addEventListener('click', closeModal);
  containerElement.addEventListener('click', stop);
  document.addEventListener('keyup', checkClose);
  formElement.addEventListener('submit', validateForm);
}

// ВИДАЛЯЮ ПРОСЛУХОВУВАЧІ ПРИ ЗАКРИВАННІ МОДАЛКИ
function unsubscribeListeners() {
  modalElement.removeEventListener('click', closeModal);
  containerElement.removeEventListener('click', stop);
  closeElement.removeEventListener('click', closeModal);
  document.removeEventListener('keyup', checkClose);
  formElement.removeEventListener('submit', validateForm);
}

// ФУНКЦІЯ ВАЛІДАЦІЇ ПОЛІВ ФОРМИ
function validateForm(event) {
  event.preventDefault();

  const { login, password } = event.currentTarget.elements;
  if (login.value === validLogin && password.value === validPassword) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Login Success!'
    formElement.remove();
    containerElement.append(titleElement);
  } else {
    const errorElement = formElement.querySelector('.error');
    if (errorElement) return;

    const errorTemplate = `<div class="error">Login or Password is incorrect! Try again.</div>`;
    const formButtonElement = formElement.querySelector('button');
    formButtonElement.insertAdjacentHTML('beforebegin', errorTemplate);
  }
}

// ФУНКЦІЯ ПЕРЕВІРКИ НАТИСНЕНОЇ КЛАВІШІ. ЯКЩО ESC, ЗАКРИВАЮ МОДАЛКУ
function checkClose(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    closeModal();
  }
}

// ФУНКЦІЯ, ЯКА ЗАБОРОНЯЄ ІВЕНТУ ЗПЛИВАТИ ВИЩЕ ПО ДЕРЕВУ ДОКУМЕНТА
function stop(event) {
  event.stopPropagation();
}


function openModal() {
  modalElement.classList.remove('hidden');
  subscribeListeners();
}

function closeModal() {
  unsubscribeListeners();
  modalElement.classList.add('hidden');
}
