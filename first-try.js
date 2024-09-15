'use strict';
// виводить дані в дужках в консоль
console.log("Buongiorno! Come va?");

// оголошення змінних

// const age = 20;
// const username = "Diana";

// const - ключове слово (ще є let), age i username - імена змінних, = оператор присвоєння, ; обов'язково вкінці кожного рядка

const age = 36;
console.log(age);
let username = "Mango";
console.log(username);
username = "Dutko";
console.log(username);

// можна не задавати знвчення першій змінній з let

let userdate;
console.log(userdate);
userdate = 25;
console.log(userdate);

// Правило використання const та let може бути таким: — Використовуй const за замовчуванням для оголошення змінних. — Використовуй let, якщо потрібно змінювати значення змінної під час виконання скрипту. Це правило допоможе писати більш надійний, зрозумілий код, який легко підтримувати.


// значення змінної null означає, що змінна немає даних взагалі:
const userName = null;
console.log(userName);

// Значення undefined вказує на невизначеність значення змінної, тобто каже нам, що значення на даний момент невідоме чи невизначене:
let value;
console.log(value);

// Оператор typeof використовується для визначення типу даних значення або виразу. 
typeof operand
// Замість operand вказувати змінну, літерал або вираз, тип якого ти хочеш визначити. Результатом оператора typeof буде рядок, який вказує тип даних.

console.log(typeof userName); виведе тип даних змінної userName

// Оператор (%) повертає остачу від ділення одного числа на інше.
const x = 8;
const y = 6;
console.log(x % y);

// Оператор (**) використовується для піднесення числа до степеня.

const z = 8;
const f = 5;
console.log(z ** f); // 32768


// Додавання: +=. Приклад: x += y еквівалентно x = x + y

// Віднімання: -=.Приклад: x -= y еквівалентно x = x - y

// Множення: *=.Приклад: x *= y еквівалентно x = x * y

// Ділення: /=. Приклад: x / = y еквівалентно x = x / y

// Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y


let userAge = 17;
userAge = userAge + 1;
console.log(userAge);

// or

let UserAge = 17;
UserAge += 1;
console.log(UserAge);


// Якщо застосувати оператор + до рядка та будь-якого іншого типу даних, результатом буде новий рядок, що містить об'єднання вихідних значень. Це називається конкатенація (склеювання).

const message = "Diana " + "ama " + "l'Italia!";
console.log(message); // "Diana ama l'Italia!"

// Під час конкатенації можна використовувати значення змінних, щоб складати рядки з динамічними значеннями. Для цього необхідно вказати ім'я змінної, у це місце буде підставлено її значення.

const pet = "cane";
console.log("Diana ha uno" + pet);

// Проте порядок операндів має значення. Перетворення типів відбувається лише в момент операції додавання з рядком. До цього моменту застосовуються нормальні правила математики.

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"


// Явне перетворення типів виконується програмістом і використовується за потребою. Для перетворення будь-якого значення на рядок можна використовувати вбудовану функцію String(), яка повертає результат у вигляді рядка.

console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"


// Неявне перетворення типів відбувається автоматично під час виконання операцій або обчислень.

console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"


// Шаблонні рядки — це синтаксис, який полегшує об'єднання статичного тексту з динамічним (тобто текстом, що містить змінні, обчислення тощо). Шаблонні рядки огортаються зворотними лапками (англ. backticks) (``)

const questName = "Diana";
const hotelName = "Hotel de Paris Monte-Carlo";
const greeting = `Welcome to ${hotelName}, ${questName}!`;
console.log(greeting);


// Для доступу до властивості (property) сутності (objectName) використовується синтаксис із крапкою: сутність.властивість
// Довжина рядка визначається кількістю символів у ньому. Щоб дізнатися довжину рядка, використовується вбудована властивість length. Щоб отримати значення цієї властивості, необхідно звернутися до неї через крапку після імені змінної чи рядкового літералу.

const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12
