// # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach


// function foo(callback) {
//   callback(10);
// }
//
// function logger(value) {
//   console.log(value);
// }
//
// // спочатку буде виклик logger з аргументом 5
// // потім виконається foo з undefined
// //foo(logger(5));
//
// // правильно
// foo(logger);

// задачка з таблиці запитань
// const models = [];
// for (const vehicle of vehicles) {
//   console.group(Date.now());
//   models.push(vehicle.model);
//   console.log(vehicle.model);
//   console.log(models);
//   console.groupEnd();
// }
// console.log(models);
//
// function getModels(cars) {
//   const models = [];
//
//   for (const car of cars) {
//     models.push(car.model);
//   }
//
//   return models;
// }
//
// console.log(getModels(vehicles));
//
// /**
//  //? ЗАМЕНИТЬ НАЗВАНИЕ МОДЕЛИ
//  */
//
// const oldModelName = 'Mazda 6';
// const newModelName = 'Hello world';
//
// // 1. Перебираем массив поэлементно
//
// for (const vehicle of vehicles) {
//   if (vehicle.model === oldModelName) {
//     console.log(vehicle);
//     vehicle.model = newModelName;
//   }
// }
//
// console.table(vehicles);
//
// function changeModel(cars, oldModelName, newModelName) {
//   for (const car of cars) {
//     if (car.model === oldModelName) {
//       car.model = newModelName;
//     }
//   }
// }
//
// changeModel(vehicles, 'Mazda 6', 'Hello world');
// console.table(vehicles);
//
// changeModel(vehicles, 'Fusion', 'AAAAAA');
// console.table(vehicles);
//
// changeModel(vehicles, 'F-150', 'BBBBBB');
// console.table(vehicles);
//
// /**
//  *? ПОЛУЧИТЬ ОБЩУЮ ЦЕНУ ВСЕХ МАШИН
//  */
//
// function getTotalPrice(cars) {
//   let totalPrice = 0;
//
//   for (const car of cars) {
//     totalPrice += car.price;
//   }
//
//   return totalPrice;
// }
//
// console.log('total price: ', getTotalPrice(vehicles));

// ## Example 1 - Коллбек функції
//
// Напишіть наступні функції:
//
//   - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
// коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
// консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну
// вартість товару в консоль
//

// console.log(Date.now());
// function createProduct(product, callback) {
//   const newProductObj = {
//     id: Date.now(),
//     ...product
//   }
//
//   callback(newProductObj);
// }
//
// function logProduct(product) {
//   console.log(product);
// }
//
// function logTotalPrice(product) {
//   console.log(`Total price: ${product.price * product.quantity}`);
// }
//
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
//
// ## Example 2 - Коллбек функції
//
// Додайте в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
//   `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.
//
//   Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.
//
//   Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.
//
// const TRANSACTION_LIMIT = 1000;
//
// function handleError(message) {
//   console.log(`Error! ${message}`);
// }
//
// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }
//
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Amount balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more then 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Amount balance: ${this.balance}`);
//     }
//   }
// }
// //
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
//
// ## Example 3 - Коллбек функції
//
// Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.
//
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
//
// ## Example 4 - Стрілочні функції
//
// Виконайте рефакторинг коду першої задачі за допомогою стрілочних функцій.
//
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
//
// ## Example 5 - Стрілочні функції
//
// Виконайте рефакторинг коду задачі 2 за допомогою стрілочних функцій.
//
//
// ## Example 6 - Інлайн стрілочні функції
//
// Виконайте рефакторинг коду задачі 3 за допомогою стрілочних функцій.
//
//
// ## Example 7 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
//
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//
// ## Example 8 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
//
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
//
// ## Example 9 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
//
// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
