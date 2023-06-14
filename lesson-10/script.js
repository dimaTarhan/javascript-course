// const obj = {
//   name: 'Object name',
//   email: 'object@email.com'
// }
//
// const obj1 = Object.create(obj);
// //console.log('name' in obj1);
// //Object.keys(obj1).forEach((key) => console.log(key));
// // for (const key in obj1) {
// //   console.log(key);
// // }
//
// const obj2 = Object.create(obj);
// obj2.description = 'I\'m object 2';
// // console.log(obj2.email);
//
// const obj3 = Object.create(obj2);
// console.log(obj3.description);
// console.log(obj3.name);
// console.log(obj3.email);

// class User {
//   #permissions;
//   static userDescriptions = {
//     Admin: 'You can view data!',
//     Owner: 'You can change data!',
//     Default: 'You can view and add data!'
//   };
//   static userCounter = 0;
//   constructor({ name, email, actions, desc }) {
//     this.name = name;
//     this.email = email;
//     this.#permissions = actions;
//     this.desc = desc;
//     User.userCounter += 1;
//   }
//   sayHi(){
//     return `Hello ${this.name}!`;
//   }
//
//   get permissions() {
//     if (this.#checkPermission('view')) {
//       return this.#permissions;
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   set permissions(value) {
//     if (this.#checkPermission('edit')) {
//       this.#permissions = value;
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   #checkPermission(permission) {
//     return this.#permissions.includes(permission);
//   }
// }
//console.log(User.userDescriptions.Owner);

// const user1 = new User({
//   name: 'User-1',
//   email: 'user-1@email.com',
//   actions: ['add', 'edit', 'view'],
//   desc: User.userDescriptions.Owner
// });
//
// console.log(user1);

//console.log(user1.sayHi());
//console.log(user1.permissions);
// user1.permissions = ['add', 'edit', 'remove', 'view'];
// console.log(user1.permissions);
// console.log(user1);
// console.log(User.userCounter);

// const user2 = new User({
//   name: 'User-2',
//   email: 'user-2@email.com',
//   actions: ['add', 'edit', 'view'],
//   desc: User.userDescriptions.Admin
// })
// console.log(User.userCounter);
// console.log(user2.permissions);


//const arr = [1, 2, 3];
//console.log(arr);

//console.log(obj);


// # Модуль 5. Заняття 10. Прототипи та класи
//
// ## Example 1 - Блогер
//
// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:
//
// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер
//
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// class Blogger {
//   constructor({email, age, numberOfPosts, topics}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
//
//   // get numberOfPosts() {
//   //   return this.#numberOfPosts;
//   // }
// }
//
// Додай метод `getInfo()`, який, повертає рядок:
//   `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.
//
//     Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.
//
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
//
// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
//
// ## Example 2 - Сховище
//
// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.
//
// class Storage {
//   constructor(productList) {
//     this.items = productList;
//   }
//
//   getItems() {
//     return this.items;
//   }
//
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     } else {
//       console.log('Product already exist!');
//     }
//   }
//
//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const productIndex = this.items.indexOf(item);
//       this.items.splice(productIndex, 1);
//       // this.items.splice(this.items.indexOf(item), 1);
//       //!!~
//     } else {
//       console.log('Product not found!');
//     }
//   }
// }
//   Додай методи класу:
//
//   - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.
//
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
//
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
//
// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// //
// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
//
// ## Example 3 - User
//
// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.
//
// class User {
//   #login;
//   #email;
//
//   constructor({login, email}) {
//     // some code
//   }
//
//   get email() {
//     //
//   }
//   set email() {
//     //
//   }
//
//   get login() {
//     //
//   }
//   set login() {
//     //
//   }
// }
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });
//
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
//
// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
//
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
//
// ## Example 4 - Нотатки
//
// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
//   Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.
//
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   };
//   constructor(noteData) {
//     this.items = noteData;
//   }
// }
//
// Додай методи `addNote(note)`, `removeNote(text)` та
//   `updatePriority(text, newPriority)`.
//
// const myNotes = new Notes([]);
//
// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);
//
// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);
//
// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);
//
// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
//
// ## Example 5 - Toggle
//
// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

// class Toggle {
//   on = false;
//
//   constructor(settingsObj) {
//     if (settingsObj) {
//       this.on = settingsObj.isOpen
//     }
//   }
// }
//
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');
//
// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
