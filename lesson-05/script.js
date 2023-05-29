// const user = {
//   name: 'Dima',
//   // метод обʼєкту
//   sayHello() {
//     alert(this.name);
//   }
// }


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2));
// console.log(animals);


// метод масиву push()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// animals.push('dog', 'cat');
// console.log(animals);


// let arr = [];
// console.log(fillArray(2, 10));
// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     // console.log(i);
//     // console.log(arr.push(i));
//     // arr.push(i) повертає довжину масиву
//     // return припиняє виконання функції (і циклу відповідно) та повертає значення
//     // return arr.push(i);
//     // arr.push(i);
//     // console.log(arr);
//     // return arr;
//   }
// }


// # Модуль 3. Заняття 1. Об'єкти
//
// ## Example 1 - Основи об'єктів
//
// Напиши скрипт, який для об'єкта `user`, послідовно:
//
// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`
//
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // методи виводу ключів та значень властивостей обʼєкту
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user))

// user.mood = 'happy';
// // console.log(user);
//
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
// delete user.hobby;
// console.log(user);

// const keysArray = Object.keys(user);
// // console.log(keysArray);
//
// for (const key of keysArray) {
//   console.log(`${key}: ${user[key]}`)
// }
//
// ## Example 2 - метод Object.values()
//
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.
//
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
//
// function getSalarySum(companySalaries) {
//   const valuesArr = Object.values(companySalaries);
//   // if (!valuesArr.length) return 0;
//   let sum = 0;
//
//   for (const value of valuesArr) {
//     sum += value;
//   }
//
//   return sum;
// }

// console.log(getSalarySum(salaries));


//
// ## Example 3 - Масив об'єктів
//
// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта
//
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stonesArr, stoneName) {
//   for (const stone of stonesArr) {
//     console.log(stone);
//
//     if (stone.hasOwnProperty('name') && stone.name === stoneName) {
//       console.log('Target stone price: ', stone.price);
//       return stone.price * stone.quantity;
//     }
//   }
// }
//
// console.log(calcTotalPrice(stones, 'Щебінь'));

//
// ## Example 4 - Комплексні завдання
//
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.
//
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// let idCounter = 0;
//
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//
//   // Історія транзакцій
//   transactions: [],
//
//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     idCounter += 1;
//
//     // const transactionObj = {
//     //   id: idCounter,
//     //   type,
//     //   amount,
//     // }
//     // return transactionObj;
//
//     return {
//       id: idCounter,
//       type,
//       amount,
//     }
//   },
//
//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     // console.log(this);
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },
//
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert('Недостатньо коштів');
//       return;
//     }
//
//     this.balance -= amount;
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//   },
//
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },
//
//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },
//
//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(100);
// account.deposit(1000);
// account.withdraw(500);
//
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
//
// // account.withdraw(1000);
//
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//
// console.log(account.transactions);


