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


