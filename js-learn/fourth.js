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


// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція, така властивість називається методом об'єкта.

const obj = {
  method(value) {
    console.log(`I am a method with ${value}`);
    
  }
}

obj.method(5);
obj.method(10);


// Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі). Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».

// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.

const bookShelf = {
  books: ["gygxg", "w8eyd9"],
  getBooks() {
    return "Get all books";
  },
  addBook(bookName) {
    return `You added a book named ${bookName}`;
  }
}

bookShelf.getBooks(); //
bookShelf.addBook("New book 1"); //
bookShelf.addBook("New book 2"); //


// Методи використовуються для роботи з властивостями об'єкта та їх змінних. Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.

// Ключове слово this — це контекст виконання функції.

const Bookshelf = {
  books: ["owuhw", "ijoidwoie"],
  getBooks() {
    console.log(this);
    
  }
}

Bookshelf.getBooks();

// Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це посилання на об'єкт Bookshelf

// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

const BookShelf = {
  books: ["owuhw", "ijoidwoie"],
  getBooks() {
    console.log(this.books);
    
  }
}

Bookshelf.getBooks();



const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};


// У властивості books об'єкта bookShelf зберігається масив. Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.

const shelf = {
  books: ["kingdom"]
}

shelf.books.push("mist", "isjixw");
console.log(shelf);
console.log(shelf.books);


// У прикладі нижче в ключовому слові this зберігається посилання на об'єкт, що викликав відповідний метод. Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books. Це означає, що його можна змінювати за посиланням, наприклад, використавши метод масиву push() для додавання нового елемента.

const Shelf = {
  books: ["odhcud"],
  getBooks() {
    console.log(this.books);
    
  },
  addBook(bookName) {
    this.books.push(bookName)
  }
}

Shelf.getBooks();
Shelf.addBook("pidjuhde");



const bookshelf = {
  books: [
    { name: 'ishocos', rating: 7 },
    { name: 'uhfowo', rating: 4 },
  ],

  getAverageRating() {
    let total = 0;
    for (const book of this.books) {
      total += book.rating;
    }
    console.log(total);
    
  }
}

bookshelf.getAverageRating();


// Ціла група завдань зводиться до зміни значення властивості певного об'єкта в масиві. Наприклад, зміна рейтингу книги. Пошук необхідного об'єкта в масиві виконується за унікальним значенням властивості, наприклад, за ім'ям книги.

const travels = {
  countries: [
    { name: "Italy", rating: 10, isVisited: true },
    { name: "Spain", rating: 8, isVisited: false },
    {name: "Switzerland", rating: 9, isVisited: false}
  ],

  changeStatus(countryName, newRating, newVisit = this.countries.isVisited) {
    for (const country of this.countries) {
      if (this.countries === countryName) {
        country.rating = newRating;
        country.isVisited = newVisit;
      }
    }
    console.log(this.countries);
    
  }
}

travels.changeStatus("Switzerland", 12, true);
travels.changeStatus("Spain", 7);
travels.changeStatus("New Zealand", 8, true);


// Починаючи зі стандарту ES6, з'явилася концепція залишкових параметрів (...rest). Це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів у масив.

function multiply(...args) {
  console.log(args);
  
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 6, 8, 7);
multiply(1, 2, 6, "doudh", true);

// Вільні параметри можуть бути позначені через три крапки .... Буквально це означає: "збери параметри, що залишилися, і поклади їх у масив". Ім'я параметра може бути довільним. Найчастіше його називають args або rest.

function add(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}


// Операція (...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна. Для цього потрібно оголосити параметри до «збирання». Можна покласти перші кілька параметрів у змінні, а решту — зібрати в масив.

function multiply(first, second, ...rest) {
  console.log(first, second, rest);
  
}
multiply(1, 2);
multiply(1, 3, 5);
multiply(1, 4, 5, 63, 5);

// Операція rest збирає решту всіх аргументів, а тому повинна завжди бути останньою в підписі функції, інакше виникне помилка SyntaxError: Rest parameter must be last formal parameter.

function addOverNum(value, ...args) {
  let total = 0;
  for (let arg of args) {
    if (arg > value) {
      total += arg;
    }
  }
  return total;
}



// Інколи потрібно зробити протилежне — передати масив поелементно у функцію, яка викликається. Наприклад, є вбудована функція 
// Math.max(), яка шукає та повертає найбільший з аргументів(чисел), тобто очікує не масив значень, а довільну кількість аргументів.

Math.max(14, -4, 25, 8, 11);

const temps = [14, -4, 25, 8, 11];
console.log(Math.max(temps));

// Тут доцільно використати оператор розпилення ...spread. Він схожий на залишкові параметри — теж використовує ..., але робить абсолютно протилежне. Коли функціонал ...spread використовується при виклику функції, він перетворює масив на список аргументів.

console.log(Math.max(...temps));

function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores)
  }
}


// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те саме в коротшій формі.

const Temps = [14, -4, 25, 8, 11];
// Це точна, але незалежна копія масиву temps
const copy = [...Temps];
console.log(copy);



const lastWeek = [11, 24, 16];
const current = [23, 17, 22];
const all = [...lastWeek, ...current];
console.log(all);



const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


// Під час розпилення можна додавати властивості в довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

const first = { A: 5, B: 10 };
const second = { C: 20, D: 15 };
const third = { ...first, ...second };
const fourth = { ...second, ...first };
console.log(third);
console.log(fourth);

