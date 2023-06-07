// # Модуль 4. Заняття 8. Перебираючі методи масиву
//
// ## Колекція об'єктів для всіх прикладів з автомобілями
//
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
//
// ## Example 1 - Метод map
//
// Нехай функція `getModels` повертає масив моделей (поле model) всіх
// автомобілів.
//
// const getModels = cars => {
//   return cars.map((car) => car.model);
// };

// const getModels = cars => cars.map((car) => car.model);

//
// console.table(getModels(cars));
//
// ## Example 2 - Метод map
//
// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.
//
// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => {
//     return {
//       ...car,
//       price: car.price * (1 - discount)
//     }
//   })
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: car.price * (1 - discount)
//   }))
// };
//
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
//
// ## Example 3 - Метод filter
//
// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша
// ніж значення параметра `threshold`.
//
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => {
//     return car.price < threshold;
//   })
// };

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold)
// };
//
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
//
// ## Example 4 - Метод filter
//
// Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
// onSale яких true.
//
// const getCarsWithDiscount = cars => {
//   return cars.filter((car) => car.onSale);
// };
//
// console.table(getCarsWithDiscount(cars));
//
// ## Example 5 - Метод filter
//
// Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
// збігається зі значенням параметра `type`.
//
// const getCarsWithType = (cars, type) => {
//   return cars.filter((car) => car.type === type);
// };
//
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
//
// ## Example 6 - Метод find
//
// Нехай функція `getCarByModel` повертає автомобіль, модель якого
// збігається зі значенням параметра `model`.
//
//

// { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
// const getCarByModel = (cars, model) => {
//   return cars.find((car) => car.model === model);
// };
//
// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
//
// ## Example 7 - Метод sort
//
// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за
// зростанням значення `amount`.
//
// const sortByAscendingAmount = cars => {
//   return [...cars].sort((prevCar, nextCar) => nextCar.amount - prevCar.amount);
//
//   //return [...cars].sort((prevCar, nextCar) => prevCar.amount - nextCar.amount);
// };
//
// console.table(sortByAscendingAmount(cars));
//
// ## Example 8 - Метод sort
//
// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`.
//
// const sortByDescendingPrice = cars => {
//   return [...cars].sort((prevCar, nextCar) => nextCar.price - prevCar.price);
// };
//
// console.table(sortByDescendingPrice(cars));
//
// ## Example 9 - Метод sort
//
// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.
//
// const sortByModel = (cars, order) => {
//   return [...cars].sort((prevCar, nextCar) => {
//     if (order === 'asc') {
//       return prevCar.model.localeCompare(nextCar.model);
//     } else {
//       return nextCar.model.localeCompare(prevCar.model);
//     }
//   })
// };

// const sortByModel = (cars, order) => {
//   return [...cars].sort((prevCar, nextCar) => order === 'asc' ? prevCar.model.localeCompare(nextCar.model) : nextCar.model.localeCompare(prevCar.model));
// };
//
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
//
// ## Example 10 - Метод reduce
//
// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).
//

// const getTotalAmount = cars => {
//   return cars.reduce((totalAmount, currentCar) => {
//     console.log(totalAmount);
//     return totalAmount += currentCar.amount;
//   }, 0)
// };
//
// // const getTotalAmount = cars => {
// //   return cars.reduce((totalAmount, currentCar) => totalAmount += currentCar.amount, 0)
// // };
//
// console.log(getTotalAmount(cars));
//
// ## Example 11 - Ланцюжки методів
//
// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.
//
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
// const getModelsOnSale = cars => {
//   return cars
//     .filter((car) => car.onSale)
//     .map((car) => car.model)
// };

// const getModelsOnSale = cars => {
//   return cars.reduce((carsArr, currentCar) => {
//     return currentCar.onSale ? [...carsArr, currentCar.model] : [...carsArr];
//   }, [])
// };

// const getModelsOnSale = cars => {
//   return cars.reduce((carsArr, currentCar) => {
//     if (currentCar.onSale) {
//       return [...carsArr, currentCar.model]
//     } else {
//       return [...carsArr]
//     }
//   }, [])
// };
//
// console.table(getModelsOnSale(cars));
//
// ## Example 12 - Ланцюжки методів
//
// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.
//
// const getSortedCarsOnSale = cars => {
//   return cars
//     .filter((car) => car.onSale)
//     .sort((prevCar, nextCar) => prevCar.price - nextCar.price)
// };

// const getSortedCarsOnSale = cars => {
//   return cars
//     .filter((car) => car.onSale)
//     .map((car) => car.model)
//     .sort()
// };

// // так робити можна, але не потрібно
// // на кожній ітерації перебору відбувається сортування масиву carsArr
// const getSortedCarsOnSale = cars => {
//   return cars.reduce((carsArr, currentCar) => {
//     if (currentCar.onSale) {
//       return [...carsArr, currentCar].sort((prevCar, nextCar) => prevCar.price - nextCar.price)
//     } else {
//       return carsArr
//     }
//   }, [])
// };

// console.table(getSortedCarsOnSale(cars));
