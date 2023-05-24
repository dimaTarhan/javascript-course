// // Коли не потрібно робити return
// let a = 10;
// function foo(b) {
//   if (b > 10) {
//     a = b;
//   }
// }
//
// foo(20);
// console.log(a);

// Функція, яка не має return
// const foo = function () {
//   const a = 5;
// }
// console.log(foo());


// Різні варіанти оголошення функції
// foo(5); // => так не працює. Виклик функції має бути після оголошення змінної
// const foo = function (a) {
//   console.log(a);
// }

// foo(5); // => Так працює. Ініціалізація відбувається через ключове слово function
// function foo(a) {
//   console.log(a)
// }


// # Модуль 2. Заняття 4. Функції
//
// ## Example 1 - Індекс маси тіла
//
// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.
//
//   Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   const newWeight = Number(weight.replace(',', '.'));
//   const newHeight = Number(height.replace(',', '.'));
//
//   return (newWeight / Math.pow(newHeight, 2)).toFixed(1);
// }
//
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
//
// ## Example 2 - Найменше з чисел
//
// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
//
// function min(a, b) {
//   return Math.min(a, b);
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
//
// ## Example 3 - Площа прямокутника
//
// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.
//
// function getRectArea(dimensions) {
//   const valuesArr = dimensions.split(' ');
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//
//   return width * height;
// }
// console.log(getRectArea('8 11'));

// function getRectArea(dimensions) {
//   if (!dimensions) {
//     return 'Error';
//   }
//
//   const valuesArr = dimensions.split(' ');
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//
//   return width * height;
// }
// console.log(getRectArea('8 11'));

//
// ## Example 4 - Логування елементів
//
// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
//   `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.
//
//   Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.
// function logItems(itemsArr) {
//   for (let i = 0; i < itemsArr.length; i += 1) {
//     console.log(`Element ${i + 1}: `, itemsArr[i]);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//
// ## Example 5 - Логування контактів
//
// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.


// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');
//
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: `, phonesArr[i]);
//   }
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
//
// ## Example 6 - Пошук найбільшого елемента
//
// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// масиві.
// function findLargestNumber(numbersArr) {
//   let max;
//
//   for (let number of numbersArr) {
//     if (max === undefined || number > max) {
//       max = number
//     }
//   }
//
// // console.log(max);
//
//   return max;
// }
//
// const maxValue = findLargestNumber([2, 17, 94, 1, 23, 37]);
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
// ## Example 7 - Середнє значення
//
// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage(...args) {
//   console.log(args);
//   let sum = 0;
//
//   for (let argument of args) {
//     sum += argument;
//   }
//
//   return sum / args.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function calAverage() {
//   console.log(arguments);
//   let sum = 0;
//
//   for (let argument of arguments) {
//     sum += argument;
//   }
//
//   return sum / arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


//
// ## Example 8 - Форматування часу
//
// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// function formatTime(timeInMinutes) {
//   const hours = Math.floor(timeInMinutes / 60);
//   const minutes = timeInMinutes % 60;
//
//   // const hoursString = hours < 10 ? `0${hours}` : hours;
//   // const minutesString = minutes < 10 ? `0${minutes}` : minutes;
//
//   const hoursString = `${hours}`.padStart(2, 0);
//   const minutesString = `${minutes}`.padStart(2, 0);
//
//   return `${hoursString}:${minutesString}`
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//
// ## Example 9 - Колекція курсів
//
// Напишіть функції для роботи з колекцією навчальних курсів `courses`:
//
// - додає курс до кінця колекції
// - видаляє курс із колекції
// - змінює ім'я на нове
//
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
//
// function addCourse(name) {
//   // if (courses.includes(name)) {
//   //   console.log('Ви вже маєте такий курс');
//   //   return;
//   // }
//   //
//   // console.log('Hello');
//
//   if (courses.includes(name)) {
//     console.log('Ви вже маєте такий курс');
//   } else {
//     courses.push(name);
//   }
// }
// addCourse('Express');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse('CSS'); // 'Ви вже маєте такий курс'
//
// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const courseIndex = courses.indexOf(name);
//     courses.splice(courseIndex, 1);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// removeCourse('React');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// //removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
//
// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     const courseIndex = courses.indexOf(oldName);
//     courses.splice(courseIndex, 1, newName);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// console.log(courses);
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

