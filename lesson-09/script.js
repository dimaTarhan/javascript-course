// function showName(country, ...args) {
//   //console.log(args);
//   console.log(this);
//   console.log(`${this.name}, welcome to ${country}`);
// }

// const dimaObj = {
//   name: 'Dima',
//   showFriends(callback) {
//     callback()
//   }
// }

// const vasiaObj = {
//   name: 'Vasia'
// }

// showName.call(dimaObj, 'Ukraine');
// showName.call(vasiaObj, 'USA');
// showName.apply(dimaObj, ['Ukraine']);
// const newFunc = showName.bind(vasiaObj, 'Ukraine');
// якщо не передавати обʼєкт, то він буде братися з контексту функції. в даному випадку - window
// const newFunc = showName.bind();
// newFunc('UK', 'Japan');
// console.log(newFunc);
// newFunc.call(vasiaObj, 'Ukraine');
// dimaObj.showFriends(newFunc);

// const myObj = {
//   name: 'Dima',
//   user: {
//     userName: 'dima_user_name',
//     showUserName() {
//       console.log(this.userName);
//     }
//   },
//   // showName: () => {
//   //   console.log(this);
//   // }
//   // myMethod() {
//   //   const showName = () => {
//   //     console.log(this);
//   //   }
//   //   showName();
//   // },
// }

// myObj.myMethod();

// function foo () {
//   console.log(this);
// }
//
// const obj = {
//   logFunc() {
//     console.log(this.logCtx)
//   },
//   // у властивість logCtx ми записуємо декларативну функцію foo
//   logCtx: foo
// }
//
// // obj.logCtx();
// obj.logFunc();

// # Модуль 5. Заняття 9. Контекст виклику функції та this
//
// ## Example 1 - Майстерня коштовностей
//
// Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості `stones`.
//
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const targetStone = this.stones.find((stone) => stone.name === stoneName);
//     if (targetStone) {
//       return targetStone.price * targetStone.quantity
//     }
//     alert('Такого каменю не знайдено!')
//   },
// };
//
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruівапівby')); // 1600
//
// ## Example 2 - Телефонна книга
//
// Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.
//
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };
//
// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// })
// console.log(phonebook.contacts);
//
// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// })
// console.log(phonebook.contacts);
//
// ## Example 3 - Калькулятор
//
// Створіть об'єкт `calculator` з трьома методами:
//
// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.
//
// const calculator = {
//   // firstNumber: 0,
//   // secondNumber: 0,
//   read(firstNumber = 0, secondNumber = 0) {
//     if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//       this.firstNumber = Number(firstNumber);
//       this.secondNumber = Number(secondNumber);
//     } else {
//       alert('Введено невірні значення!')
//     }
//
//     console.log(this.firstNumber, this.secondNumber);
//   },
//   add() {
//     // console.log(this.hasOwnProperty('firstNumber'));
//     if (this.hasOwnProperty('firstNumber') && this.hasOwnProperty('secondNumber')) {
//     // if ((this.firstNumber || this.firstNumber === 0) && (this.secondNumber || this.secondNumber === 0)) {
//       return this.firstNumber + this.secondNumber;
//     } else {
//       alert('Спочатку задайте значення калькулятора!')
//     }
//   },
//   mult() {
//     // console.log(this.hasOwnProperty('firstNumber'));
//     if (this.hasOwnProperty('firstNumber') && this.hasOwnProperty('secondNumber')) {
//       // if ((this.firstNumber || this.firstNumber === 0) && (this.secondNumber || this.secondNumber === 0)) {
//       return this.firstNumber * this.secondNumber;
//     } else {
//       alert('Спочатку задайте значення калькулятора!')
//     }
//   },
// };
//
// calculator.read(0, '20');
// console.log(calculator.add());
// console.log(calculator.mult());


// ПРИКЛАД З bind
// const calculator = {
//   // firstNumber: 0,
//   // secondNumber: 0,
//   read(firstNumber = 0, secondNumber = 0) {
//     if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//       this.firstNumber = Number(firstNumber);
//       this.secondNumber = Number(secondNumber);
//     } else {
//       alert('Введено невірні значення!')
//     }
//
//     console.log(this.firstNumber, this.secondNumber);
//   },
//   // В КОЛБЕК Я ПЕРЕДАЮ ФУНКЦІЮ, ЯКА ПРАЦЮЄ З ОБЄКТОМ calculator (ЗАВДЯКИ bind) ЧЕРЕЗ this
//   add(callback) {
//     // console.log(this.hasOwnProperty('firstNumber'));
//     if (this.hasOwnProperty('firstNumber') && this.hasOwnProperty('secondNumber')) {
//       // if ((this.firstNumber || this.firstNumber === 0) && (this.secondNumber || this.secondNumber === 0)) {
//       // В КОЛБЕК ФУНКЦІЇ Я ВИКОРИСТОВУЮ В this В ЯКОСТІ КОНТЕКСТУ ОБʼЄКТ calculator
//       return callback();
//     } else {
//       alert('Спочатку задайте значення калькулятора!')
//     }
//   },
//   mult() {
//     // console.log(this.hasOwnProperty('firstNumber'));
//     if (this.hasOwnProperty('firstNumber') && this.hasOwnProperty('secondNumber')) {
//       // if ((this.firstNumber || this.firstNumber === 0) && (this.secondNumber || this.secondNumber === 0)) {
//       return this.firstNumber * this.secondNumber;
//     } else {
//       alert('Спочатку задайте значення калькулятора!')
//     }
//   },
// };
//
// // КОЛБЕК ФУНКЦІЯ, ЯКУ Я БУДУ ВИКОРИСТОВУВАТИ ДЛЯ ВИЗНАЧЕННЯ СУМИ
// function calcSum() {
//   console.log('Context: ', this);
//   return this.firstNumber + this.secondNumber;
// }
//
// // РОБЛЮ КОПІЮ ФУНКЦІЇ ТА ПРИВʼЯЗУЮ КОНТЕКСТ ДО ОБʼЄКТУ calculator
// const newFunc = calcSum.bind(calculator);
//
// //
// calculator.read(10, 20);
// // ПЕРЕДАЮ КОЛБЕК ФУНКЦІЮ В МЕТОД ОБʼЄКТУ calculator
// console.log(calculator.add(newFunc));
//
// // В КОЛБЕК ФУНЦІЯХ КОНТЕКСТ НЕ ЗБЕРІГАЄТЬСЯ, ТОМУ В ТАКОМУ ВИПАДКУ this БУДЕ ВКАЗУВАТИ НА Window
// // САМЕ ТАКИЙ ВИПАДОК НАЙПОШИРЕНІШИЙ ДЛЯ ВИКОРИСТАННЯ МЕТОДУ bind
// console.log(calculator.add(calcSum))
