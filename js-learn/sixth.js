// У визначенні значення this є важливий нюанс. Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.

function foo() {
    console.log(this);
}

foo() // window

// У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.

// У суворому режимі значення this у глобальному контексті завжди буде undefined.

"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined



'use strict'

function foo() {
    console.log('This: ', this);
}

const user = {
    userName: 'Diana'
}

user.showContext = foo;

user.showContext();
foo();


// Бувають ситуації, коли функцію потрібно викликати в контексті об'єкта, навіть якщо функція не є методом цього об'єкта. Для цього у JavaScript існують спеціальні методи: call, apply і bind, які дозволяють вказати контекст виклику функції.

foo.call(thisArg, arg1, arg2, ...);

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції


// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.



// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.


function greet(str) {
console.log(`${str}, ${this.userName}, you room is ${this.room}!`);
}

const diana = {
    userName: 'Diana',
    room: 28,
}

const julia = {
    userName: 'Julia',
    room: 22;
}

// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

greet.call(diana, 'Buongiorno');
greet.call(julia, 'Bonjour');


// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

foo.apply(thisArg, [arg1, arg2, ...])

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.


// Метод apply викликає функцію foo таким чином, що значення this у функції буде посилатися на об'єкт obj і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// Розгляньмо приклад, де використаємо раніше оголошену нами функцію greet. Цього разу викликаємо її, використовуючи метод apply замість call.

greet.apply(diana, ['Hello']);
greet.apply(julia, ['Hi'])

// Тобто різниця між call і apply полягає лише у формі передачі аргументів. Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції в конкретній ситуації. У всіх інших аспектах вони працюють ідентично: викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.


// Методи call і apply викликають функцію «на місці», тобто одразу.

// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

const boundFoo = foo.bind(thisArg, arg1, arg2, ...);

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику


'use strict'

const customer = {
    username: 'Jacob',
    sayHello() {
        console.log(`Hello, ${this.username}`);   
    }
}

const greet = customer.sayHello.bind(customer);
greet()


// Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

const showThis = () => {
  console.log("this in showThis: ", this);
};

const user = {
  username: "Mango",
};

user.showContext = showThis;

user.showContext(); // this in showThis: window




const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}



const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis.call({ username: "Mango" }); // this in showThis: window
showThis.apply({ username: "Mango" }); // this in showThis: window

const boundShowThis = showThis.bind({ username: "Mango" }); 
boundShowThis(); // this in showThis: window


// Крок 1

// Це стрілочна функція?

// Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2


// Крок 2

// Чи використовуються методи call, apply або bind?

// Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3


// Крок 3

// Функція викликається як метод об’єкта object.method?

// Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4


// Крок 4

// Скрипт виконується в суворому режимі?

// Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window



// Сполучною ланкою виступає спеціальна службова властивість [[Prototype]], яку ми не змінюємо явно, вона використовується для автоматичного зв'язку об'єктів.

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Розгляньмо приклад:

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі об'єкт animal — це прототип для об'єкта dog.

console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

// Звернення dog.name працює очевидним чином: повертає властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з [[Prototype]], тобто в цьому випадку в об'єкті animal — його прототипі.
// Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.


// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

objA.isPrototypeOf(objB);

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false

const customer = {
	username: "Jacob"
};

const animal = { 
	legs: 4 
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false

// у першому лозі виводиться об'єкт dog із властивістями name і [[Prototype]]. [[Prototype]] вказує на animal як прототип
// у другому — повертається true, оскільки animal є прототипом для dog
// у третьому — повертається false, оскільки прототип не успадковується у зворотному напрямку (від dog до animal)
// у четвертому лозі повертається false, оскільки customer не є прототипом для dog



// Використаємо вже знайомий нам приклад створення об'єкта dog з прототипом animal.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: "Mango", [[Prototype]]: animal}
console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

// Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog.

// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

console.log(dog.hasOwnProperty('name')); //true
console.log(dog.hasOwnProperty('legs')); //false


// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

for (const key in dog) {
  console.log(key); // "name" "legs"
}

// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key). Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false. Розгляньмо приклад:

const animal = { legs: 4 };

const dog = Object.create(animal);
dog.name = 'Mango';

for (const key in dog) {
    if (dog.hasOwnProperty(key)) {
        console.log(key);
    }
}


// Якщо це власна властивість — виконуємо тіло if
// Якщо це невласна властивість — нічого не робимо

// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog));
console.log(Object.values(dog));

for (const key of Object.keys(dog)) {
    console.log(key);
}



// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів.
// Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

const objC = { c: "ObjC" };

const objB = Object.create(objC);
objB.b = 'ObjB';

const objA = Object.create(objB);
objB.a = 'ObjA';

console.log(objA);
console.log(objB);
console.log(objC);

// Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.

console.log(objA.hasOwnProperty("a")); // true
console.log(objA.a); // "objA prop"

console.log(objA.hasOwnProperty("b")); // false
console.log(objA.b); // "objB prop"

console.log(objA.hasOwnProperty("c")); // false
console.log(objA.c); // "objC prop"

console.log(objA.hasOwnProperty("x")); // false
console.log(objA.x); // undefined

// Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:
// Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.
// Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.


const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
