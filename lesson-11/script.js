// запитання 1
// Lesson-10  на 1:10:10  Почему для приватного свойства #permissions выполнилось прямое обращение user1.permissions.push('remove') через get - ер? Как мог срабатывать get-er, если в методе get permissions() нет операций по изменению массива прав #permissions ? (-->> Питання-відповідь по модулям 1-5)

// class User {
//   #permissions;
//   #email;
//   static userDescriptions = {
//     Admin: 'You can view data!',
//     Owner: 'You can change data!',
//     Default: 'You can view and add data!'
//   };
//   static userCounter = 0;
//   constructor({ name, email, actions, desc }) {
//     this.name = name;
//     this.#email = email;
//     this.#permissions = actions;
//     this.desc = desc;
//     User.userCounter += 1;
//   }
//   sayHi(){
//     return `Hello ${this.name}!`;
//   }
//
//   addPermission(value) {
//     if (this.#checkPermission('edit')) {
//       this.#permissions.push(value);
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   removePermission(value) {
//     if (this.#checkPermission('edit')) {
//       const targetPermissionIndex = this.#permissions.indexOf(value);
//       this.#permissions.splice(targetPermissionIndex, 1)
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   // get email() {
//   //   if (this.#checkPermission('view')) {
//   //     return this.#email;
//   //   } else {
//   //     return 'You don\'t have access!';
//   //   }
//   // }
//   //
//   // set email(value) {
//   //   if (this.#checkPermission('edit')) {
//   //     this.#email = value;
//   //   } else {
//   //     console.log('You don\'t have access!');
//   //   }
//   // }
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
//       console.log('You don\'t have access!');
//     }
//   }
//
//   // #checkPermission(permission) {
//   //   return this.#permissions.includes(permission);
//   // }
//
//   #checkPermission(permission) {
//     return this.#permissions.hasOwnProperty(permission);
//   }
// }

// const user1 = new User({
//   name: 'User-1',
//   email: 'user-1@email.com',
//   actions: {
//     'add': 'add',
//     'view': 'view'
//   },
//   desc: User.userDescriptions.Owner
// });
//
// user1.permissions.add = 'remove';
// console.log(user1.permissions);

// Запитання 2
// Не зрозуміло що тут треба зробити, окрім написання класу та оголошення властивості

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
//
//   toggle() {
//     this.on = !this.on;
//   }
// }

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

// Запитання 3
// Чи можна всередині класу звернутися до статичної його властивості або методу через this?
// class User {
//   #permissions;
//   #email;
//   static userDescriptions = {
//     Admin: 'You can view data!',
//     Owner: 'You can change data!',
//     Default: 'You can view and add data!'
//   };
//   static userCounter = 0;
//   constructor({ name, email, actions, desc }) {
//     this.name = name;
//     this.#email = email;
//     this.#permissions = actions;
//     this.desc = desc;
//     User.userCounter += 1;
//   }
//   sayHi(){
//     return `Hello ${this.name}!`;
//   }
//
//   static getCounter () {
//     console.log(this.userCounter)
//     //console.log(this)
//   }
// }

// const user1 = new User({
//   name: 'User-1',
//   email: 'user-1@email.com',
//   actions: {
//     'add': 'add',
//     'view': 'view'
//   },
//   desc: User.userDescriptions.Owner
// });
//
// User.getCounter();

// Запитання 4
// Також про замикання, дякую:)

// function counter() {
//   let count = 0;
//
//   return function () {
//     return count += 1;
//   }
// }

// const counter1 = counter();
// // console.log(counter1);
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// function counter() {
//   let count = 0;
//
//   function plus() {
//     count += 1;
//   }
//
//   function minus() {
//     count -= 1;
//   }
//
//   function getCount() {
//     return count;
//   }
//
//   return {
//     plus,
//     minus,
//     getCount
//   }
// }
//
// const counter1 = counter();
// counter1.plus();
// counter1.plus();
// counter1.plus();
// counter1.minus();
// //console.log(counter1.getCount());
//
// const counter2 = counter();
// console.log(counter2.getCount());

// Запитання 5
// Розкажіть, будь ласка, більше про Window. Що воно нам дає, для чого використовується в реальному житті і чим може бути корисно
// window.sayHi = function (name) {
//   console.log(`Hello, ${name}`);
// }
// console.log(window.sayHi);
// window.sayHi('Dima');
//console.log(window.console);
//window.alert('hello')

// console.log(window.innerWidth);
// window.localStorage.setItem('testLabel', 'testValue');
// window.localStorage.removeItem('testLabel');
// console.log(window);
// window.addEventListener('resize', () => {
//   console.log('hello');
// })

// Приклад 6
// Якщо показали замикання, то вже і рекурсію покажіть заодно)


// const obj1 = {
//   name: 'obj1',
//   childObj: {
//     name: 'obj2',
//     childObj: {
//       name: 'obj3',
//       childObj: {
//         name: 'obj4'
//       }
//     }
//   }
// }
//
// function myFunc(propObj) {
//   if (propObj.childObj) {
//     myFunc(propObj.childObj);
//   } else {
//     console.log(propObj.name);
//   }
// }
//
// myFunc(obj1);

