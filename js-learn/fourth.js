//                                                        OBJECTS

// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт магазину — чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"]
}


// Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

const user = {
    name: "Richard",
    age: 39,
    location: {
        country: "Switzerland",
        city: "Gstaad",
    },
    status: ["healthy", "wealthy", "generous", "old money"],
    whoHeLikes: "Diana Dutko from Ukraine",
}


// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.

// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.


const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined


// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Значення властивості — це вкладений об’єкт.
// Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:

// user.location — це звернення (шлях) до об'єкта у властивості location,
// user.location.country — звернення до властивості country в цьому об'єкті.

// Тобто «крапка» вказує наступну вкладеність.

console.log(user.location);
console.log(user.location.city);

// ---------------------------------------------

console.log(user.status);
console.log(user.status[1]);
console.log(user.status.includes("generous"));

// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

console.log(user["age"]);


const family = "whoHeLikes";
console.log(user.family);
console.log(user[family]);


// Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

user.age = 40;
user.location.country = "Italy";
user.status.push("married");

console.log(user.age);
console.log(user.location.country);
console.log(user.status);


// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.

book.price = {
  hardcover: 39,
  softcover: 29
}
book.pages = 526;
book.lang = "eng";
book.trans = ["ua", "it"];


// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

const name = "Diana";
const age = 32;

const wife = {
  name,
  age,
  status: `Married with ${user.name}`
}

console.log(wife);

// Замість name: name, використали name. А замість age: age, — age.
// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.


// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.Значенням обчислювальної властивості може бути будь-який валідний вираз.

const kids = "kidGender";
const Family = {
  husband: "Richard",
  wife: "Diana",
  [kids]: "girl",
  kidName: "Clair"
}


// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

for (const key in object) {
  //instructions
}

// Змінна key доступна тільки в тілі циклу.
// На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.
// Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

const Book = {
  title: "How to stop worrying and start living",
  author: "Dale Carnegie",
  rating: 9.5,
  trans: ["ua", "eng"]
}

for (const key in Book) {
  console.log(key); // ключ/ім'я властивості
  console.log(Book[key]); // значення властивості
}


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for(const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}


// Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

const Keys = Object.keys(Book);
console.log(Keys);

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.


const ygsu = Object.keys(Book);
for (const key of ygsu) {
  console.log(key);
  console.log(Book[key]);
}

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо ключ і значення властивості.


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (let key of keys) {
  values.push(apartment[key]);
}


function countProps(object) {
  let propCount = 0;

  const arr = Object.keys(object);

  for (let key of arr) {
    propCount += 1;
  }
  return propCount;
}



// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object) повертає масив значень його властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.


function countTotalSalary(salaries) {
  let totalSalary = 0;

  const arr = Object.values(salaries);
  for (let value of arr) {
    totalSalary += value;
  }
  return totalSalary;
}


// Для опису групи сутностей використовується масив об'єктів.
// Уяви, що треба описати бібліотеку. Кожна книга — це окремий об’єкт, що містить інформацію про назву, автора, кількість сторінок, рейтинг тощо. Якщо книга — це один об’єкт, то біблотека — це колекція книг, тобто масив об’єктів.

const family = [
  {
    role: 'father',
    name: 'Richard',
    age: 32
  },
  {
    role: 'mother',
    name: 'Diana',
    age: 25
  },
  {
    role: 'kid',
    name: 'Matthew',
    age: 2
  }
]

console.log(family);

for (const member of family) {
  console.log(member);
  console.log(member.name);
  
}

// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.

for (const book of books) {
  console.log(book); // Об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (let color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}


// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:

// перебрати масив у циклі;
// додати умову, виконання якої означатиме успішний результат пошуку.

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const rightAuthor = 'Bernard Cornwell';

for (const book of books) {
  if (book.author === rightAuthor) {
    console.log(book);
    console.log(book.name);
    
  }
}

// У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той, у якого порівняння значення властивості author і authorToSearchFor поверне true. Щойно об’єкт з необхідним автором знайдено, виконається тіло if, де ми вже можемо працювати зі знайденим об'єктом.


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (let product of products) {
    if (product.name === productName) {
      return product.price;
    } 
  }
  return null;
}


// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг. Для цього необхідно:

// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.

const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

const authors = [];
const totalRating = 0;

for (const book of books) {
  authors.push(book.author);
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(authors);
console.log(averageRating);



function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

for (let product of products) {
  if (product.name === productName) {
    return product.price * product.quantity;
  }
}
  return `Product ${productName} not found!`
}