//1.Напишите функцию calculateBMI, которая принимает объект с данными о человеке (имя, рост, вес) и возвращает его индекс массы тела (BMI).

// function calculateBMI(person) {
//   if (!person || !person.name || !person.height || !person.weight) {
//     return "Неверные данные";
//   }

//   const heightInMeters = person.height / 100; //
//   const bmi = person.weight / (heightInMeters * heightInMeters);
//   return bmi.toFixed(2);
// }

// const user = {
//   name: "Sam",
//   height: 178,
//   weight: 70,
// };

// const result = calculateBMI(user);
// console.log(`${user.name}, your BMI : ${result}`);

//2.Создайте функцию findLongestWord, которая принимает массив слов и возвращает самое длинное слово из этого массива.

// function findLongestWord(words) {
//   if (!Array.isArray(words) || words.length === 0) {
//     return "Неверные данные";
//   }

//   let longestWord = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// const wordArray = ["apple", "banana", "kiwi", "strawberry", "blueberry"];
// const longestWordResult = findLongestWord(wordArray);
// console.log("Longest word :", longestWordResult);

//3.Напишите функцию createUser, которая принимает имя и возраст пользователя, а затем возвращает объект, представляющий этого пользователя со свойствами name и age.

// function createUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// const newUser = createUser("Sam", 25);
// console.log(newUser)

//4.Создайте функцию filterProductsByPrice, которая принимает массив объектов с информацией о продуктах (название и цена), а затем возвращает новый массив с продуктами, цена которых меньше определенной суммы.

// function filterProductsByPrice(products, maxPrice) {
//   if (!Array.isArray(products) || typeof maxPrice !== "number") {
//     return "Неверные данные";
//   }
//   const filteredProducts = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price < maxPrice) {
//       filteredProducts.push(products[i]);
//     }
//   }
//   return filteredProducts;
// }

// const productsArray = [
//   { name: "Product1", price: 20 },
//   { name: "Product2", price: 30 },
//   { name: "Product3", price: 15 },
//   { name: "Product4", price: 25 },
// ];

// const maxPrice = 25;
// const filteredProducts = filterProductsByPrice(productsArray, maxPrice);
// console.log("продукты ценой ", maxPrice , " : " , filteredProducts);

//5.Напишите функцию getFullName, которая принимает объект с данными о человеке (имя и фамилия) и возвращает его полное имя в формате "Имя Фамилия".

// function getFullName(person) {
//   if (!person || !person.firstName || !person.lastName) {
//     return "Неверные данные";
//   }
//   return `${person.firstName} ${person.lastName}`;
// }

// const user = {
//   firstName: "Sam",
//   lastName: "Samovsky",
// };

// const fullName = getFullName(user);
// console.log("Full name: ", fullName);

//6.Создайте функцию sortByAge, которая принимает массив объектов с информацией о людях (имя и возраст), а затем возвращает этот массив, отсортированный по возрастанию возраста.

// function sortByAge(people) {
//   const n = people.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let a = 0; a < n - i - 1; a++) {
//       if (people[a].age > people[a + 1].age) {
//         const temp = people[a];
//         people[a] = people[a + 1];
//         people[a + 1] = temp;
//       }
//     }
//   }

//   return people;
// }

// const peopleArray = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Eva", age: 28 },
// ];

// const sortPeople = sortByAge(peopleArray);
// console.log(sortPeople);

//7.Напишите функцию formatDate, которая принимает объект с информацией о дате (год, месяц, день) и возвращает строку с отформатированной датой в формате "ГГГГ-ММ-ДД".

// function formatDate(dateObject) {
//   const formattedMonth =
//     dateObject.month < 10 ? "0" + dateObject.month : dateObject.month;
//   const formattedDay =
//     dateObject.day < 10 ? "0" + dateObject.day : dateObject.day;
//   return dateObject.year + "-" + formattedMonth + "-" + formattedDay;
// }

// const date = {
//   year: 2024,
//   month: 3,
//   day: 6,
// };

// const formattedDate = formatDate(date);
// console.log(formattedDate);

// 8. Напишите функцию calculateAverageGrade, которая принимает объект с данными о студенте (имя и массив оценок) и возвращает средний балл этого студента.

// function calculateAverageGrade(student) {
//   let totalGrades = 0;
//   for (let i = 0; i < student.grades.length; i++) {
//     totalGrades += student.grades[i];
//   }

//   const averageGrade = totalGrades / student.grades.length;
//   return averageGrade.toFixed(2);
// }

// const studentData = {
//   name: "Sam",
//   grades: [85, 90, 78, 92, 88],
// };

// const averageGrade = calculateAverageGrade(studentData);
// console.log(`${studentData.name}, your average grade : ${averageGrade}`);

// 9. Создайте функцию findProductByName, которая принимает массив объектов с информацией о продуктах (название и цена) и название продукта для поиска, а затем возвращает объект с данными о найденном продукте.

// const products = [
//   { name: "Coffee", price: 2.5 },
//   { name: "Beer", price: 5.0 },
//   { name: "Milk", price: 1.0 },
// ];

// function findProductByName(productArray, productName) {
//   for (let i = 0; i < productArray.length; i++) {
//     if (productArray[i].name === productName) {
//       return productArray[i];
//     }
//   }
//   return null;
// }

// const productNameToFind = "Beer";
// const foundProduct = findProductByName(products, productNameToFind);

// if (foundProduct) {
//   console.log(foundProduct);
// } else {
//   console.log("Продукт не найден");
// }

// 10. Напишите функцию mergeObjects, которая принимает два объекта и возвращает новый объект, содержащий все свойства из обоих объектов.

// function mergeObjects(obj1, obj2) {
//   const mergedObject = {};
//   for (let key in obj1) {
//     if (obj1.hasOwnProperty(key)) {
//       mergedObject[key] = obj1[key];
//     }
//   }
//   for (let key in obj2) {
//     if (obj2.hasOwnProperty(key)) {
//       mergedObject[key] = obj2[key];
//     }
//   }
//   return mergedObject;
// }

// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };

// const mergedObject = mergeObjects(object1, object2);
// console.log(mergedObject);

// 11. Создайте функцию filterByCategory, которая принимает массив объектов с информацией о товарах (название, категория и цена) и название категории для фильтрации, а затем возвращает новый массив товаров только из указанной категории.

// const products = [
//   { name: "T-Shirt", category: "Wear", price: 15.0 },
//   { name: "Laptop", category: "Electronics", price: 800.0 },
//   { name: "Apple", category: "Fruits", price: 3.0 },
// ];

// function filterByCategory(productsArray, targetCategory) {
//   const filteredProducts = [];
//   for (let i = 0; i < productsArray.length; i++) {
//     if (productsArray[i].category === targetCategory) {
//       filteredProducts.push(productsArray[i]);
//     }
//   }
//   return filteredProducts;
// }

// const targetCategoryToFilter = "Electronics";
// const filteredProducts = filterByCategory(products, targetCategoryToFilter);

// console.log(filteredProducts);

//12. Напишите функцию getTotalPages, которая принимает объект с информацией о книге (название и количество страниц) и возвращает общее количество страниц в книге, если она состоит из нескольких частей.

// function getTotalPages(book) {
//   if (typeof book.pages === "number") {
//     return book.pages;
//   }
//   if (Array.isArray(book.parts)) {
//     let totalPages = 0;
//     for (let i = 0; i < book.parts.length; i++) {
//       if (typeof book.parts[i].pages === "number") {
//         totalPages += book.parts[i].pages;
//       }
//     }

//     return totalPages;
//   }

//   return 0;
// }

// const bookSinglePart = { title: "Книга без частей", pages: 200 };
// const bookMultiPart = {
//   title: "Многотомная книга",
//   parts: [{ pages: 150 }, { pages: 120 }, { pages: 180 }],
// };

// console.log(getTotalPages(bookSinglePart));
// console.log(getTotalPages(bookMultiPart));
