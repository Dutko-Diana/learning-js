// Значення функції (посилання на неї) можна зберігати у змінній або передавати в якості аргументу в іншу функцію. У цьому сенсі функції не відрізняються від чисел, рядків або масивів.

function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}



function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
    console.log(`Registering ${name}!`);
    callback(name);
}

registerGuest("Vlad", greet);
registerGuest("Bryan", notify);

// Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.

// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.

// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// Функція вищого порядку(higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату. У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.



// Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// })


// Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

array.forEach(function callback(element, index, array) {
    
});

// // Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array. Зверни увагу, що імена параметрів довільні, але дуже важлива їх послідовність(!). Також не всі параметри обов’язково оголошувати. Якщо тобі потрібен тільки перший параметр element (це найчастіший випадок), то наступні параметри index та array можна не оголошувати.

const numbers = [1, 3, 2, 7, 8, 6];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}, value ${numbers[i]}`);
    
}

numbers.forEach(function callback(number, index) {
    console.log(`Index ${index}, value ${number}`);
    
})


// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.


// Стрілочні функції (сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.
// Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

const arrow = (a, b, c) => {
    console.log(a + b + c);
    
}

// Ключове слово function не використовується
// Одразу зазначається оголошення параметрів
// Після параметрів використовується символ => і тіло функції у фігурних дужках


// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

const add = (a, b, c) => {
    return a + b + c;
}

// Якщо параметр один, його можна оголошувати без круглих дужок.

const square = a => {
    return Math.pow(a, 2);
}
// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
    return `Hello!`
}



// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return).

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення.


// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

const subtract = (a, b, c) => a - b - c;

// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається. Тим не менш, він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, окрім повернення значення.



// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

const Add = (...args) => args;


// Анонімні стрілочні функції відмінно підходять для колбеків перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо якщо код у тілі функції не громіздкий.

const Numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (num, ind) {
    return `Index ${ind}, value ${num}`;
})

numbers.forEach((num, ind) => {
    return `Index ${ind}, value ${num}`;
})


// Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання. Це варто робити, якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.

const logMessage = (num, ind) => {
    return `Index ${ind}, value ${num}`;
}

console.log(numbers.forEach(logMessage));



// Функція з побічними ефектами — це функція, яка в процесі виконання може:
// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо

const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * value;
    }
}

const number = [1, 2, 3, 4, 5];
dirtyMultiply(number, 2);
console.log(number);


// Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// Усі перебираючі методи масивів мають схожий синтаксис. На вихідному масиві array викликається перебираючий метод method , у який аргументом передається колбек-функція callback .

array.method(callback(currentValue, index, array))

// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:
// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array

array.method((item, idx, arr) => {
  // логіка, яка буде виконуватися на кожній ітерації
});

// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові. Назви параметрів можуть бути будь-які, головне, щоб вони були зрозумілі тобі та іншим розробникам.

array.method(item => {
  // логіка, яка буде виконуватися на кожній ітерації
});


// Більшість перебираючих методів масиву — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

array.map((element, index, array) => {
    //тіло
})


// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований


// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.


const cities = ['Portofino', 'Mayorka', 'Gstaad', 'Barselona'];

const citiesInUpperCase = cities.map(city => city.toUpperCase());
console.log(citiesInUpperCase);

const citiesToLower = cities.map(city => city.toLowerCase())
console.log(citiesToLower);

console.log(cities);


// Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names);


// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».



array.flatMap((element, index, array) => {
  // Тіло колбек-функції
});


const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses);

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses);

// Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений (плоский) масив і є результатом роботи flatMap().


// Метод filter(callback) використовується для єдиної операції — фільтрації масиву. Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

array.filter((element, index, array) => {
  // Тіло колбек-функції
});

// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// Якщо колбек повернув true, елемент додається в масив, що повертається.
// Якщо колбек повернув false, елемент не додається в масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.


const values = [15, -2, 82, 992, 1272, 0, -29, 28.9];

const positive = values.filter(value => value > 0);
console.log(positive);

const negative = values.filter(value => value < 0);
console.log(negative);

const huge = values.filter(value => value > 1300);
console.log(huge);

// Отже, метод filter викликає колбек-функцію для кожного елемента вихідного масиву. Якщо результат її виконання true, поточний елемент додається в новий масив.


// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку утворюється новий масив відфільтрованих об'єктів.

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best);

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst);

const average = students.filter(student => student.score >= LOW_SCORE && student.score < HIGH_SCORE);
console.log(average);

console.log(students);



// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

array.find((element, index, array) => {
  // Тіло колбек-функції
});

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined

// Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову. Наприклад, пошук користувача за поштою, автомобіля — за серійним номером, книги — за назвою тощо.


const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];


console.log(colorPickerOptions.find(option => option.label === 'pink')); // видає третій об'єкт
console.log(colorPickerOptions.find(option => option.color === 'red')); // видає undefined



// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

array.every((element, index, array) => {
  // Тіло колбек-функції
});

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо всі елементи масиву задовольняють умову
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає false


console.log([1, 2, 3].every(num => num >= 0)); //true
console.log([1, -2, 3].every(num => num >= 0)); //false


// Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості. Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити, чи всі товари є в наявності.

const countries = [
    {name: 'Italy', timesVisited: 1},
    {name: 'Ukraine', timesVisited: 100},
    {name: 'Spain', timesVisited: 0},
    {name: 'Hungary', timesVisited: 2},
    {name: 'Slovenia', timesVisited: 3},
]

const allCountriesAreVisited = countries.every(country => country.timesVisited > 0);
console.log(allCountriesAreVisited);


// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

array.some((element, index, array) => {
  // Тіло колбек-функції
});

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо хоча б один елемент масиву задовольняє умову
// Повертає false, якщо жоден елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає true


const countries = [
    {name: 'Italy', timesVisited: 1},
    {name: 'Ukraine', timesVisited: 100},
    {name: 'Spain', timesVisited: 0},
    {name: 'Hungary', timesVisited: 2},
    {name: 'Slovenia', timesVisited: 3},
]

const anyCountyIsNotVisited = countries.some(country => country.timesVisited === 0);
console.log(anyCountyIsNotVisited);



// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.

array.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію


// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;

// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:

// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;

// 2-й параметр — поточний елемент масиву;

// 3-й параметр — індекс поточної ітерації;

// 4-й параметр — посилання на вихідний масив.

const total = [2, 4, 8].reduce((acc, num) => {
  return acc + num;
}, 0)

console.log(total); //14


// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.


// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const totalScores = students.reduce((acc, student) => {
  return acc + student.score;
}, 0)

const average = totalScores / students.length;

console.log(average);


// Метод toSorted() сортує елементи масиву.
array.toSorted();

// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.copyWithin(3, 1, 4);
console.log(ascendingScores);

// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode. Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло, якщо знати, що числа були перетворені на рядки.

const scores = [27, 2, 41, 4, 7, 3, 75];
console.log(scores.toSorted());


// Масив рядків сортується за алфавітом.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
console.log(students.toSorted());

// Водночас порядковий номер великих літер менший, ніж у малих.

const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.toSorted());


// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод toSorted() буде викликати її для двох довільних елементів.

array.toSorted((a, b) => {
  // Callback function body
});

// a — перший елемент для порівняння.
// b — другий елемент для порівняння.


// Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b)
console.log(ascendingScores);



// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.
const scores = [61, 19, 74, 35, 92, 56];
console.log(scores.toSorted((a, b) => b - a));


// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.

// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек-функції, числа вже не будуть приводитися до рядків, тобто їх сортування буде очікуваним і звичним.


// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

firstString.localeCompare(secondString)

// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється


// Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inAlphabetOrder);
console.log(inReversedOrder);


// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за трьома різними сценаріями:

// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку


const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted((first, second) => first.score - second.score);
const inDescendingScoreOrder = students.toSorted((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);
const inAlphabetOrder = students.toSorted((first, second) => first.name.localeCompare(second.name));

console.log(inAscendingScoreOrder);
console.log(inDescendingScoreOrder);
console.log(inAlphabetOrder);


// Проблема в тому, що в нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore — зайва. Вона необхідна тільки для зберігання проміжного результату.
// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

  console.log(names);
  

const uniqueSortedClasses = students
  .flatMap(student => student.courses)
  .filter((subject, i, arr) => arr.indexOf(subject) === i)
  .toSorted((a, b) => a - b);
  console.log(uniqueSortedClasses);
  

  // Ланцюжок методів може бути довільної довжини, але зазвичай не більше 2-3 операцій.
// По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного наступного методу — це додаткове перебирання масиву, що за великої кількості може позначитися на продуктивності.


