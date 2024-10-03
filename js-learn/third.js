
// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів. Масиви можуть містити елементи різних типів даних, таких як числа, рядки, булеві значення тощо.
// Для створення масиву в JavaScript використовується літерал масиву: квадратні дужки []. Усередині дужок перераховуються елементи масиву, розділені комами.

const cities = ['Portofino', 'Santorini', 'Florence', 'Gstaad'];
const billions = [1, 5, 8, 38, 177493];
const life = ['wealth', 2, 'family', 3, true];


//  Індексація елементів масиву починається з нуля, тобто перший елемент має індекс 0, другий елемент — індекс 1 і так далі.

// Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:

arrayName[index];

console.log(cities[1]); //'Santorini'
console.log(billions[3]); //38
console.log(life[0]); //'wealth'


// Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.

const dreamCity = cities[0];
console.log(dreamCity); //portofino

// Спроба доступу до неіснуючого індексу поверне значення undefined.

const sum = billions[10]; //undefined


// Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення. Цей процес називається "перевизначенням" значення елемента.

const countries = ['Italy', 'France', 'Ukraine', 'Switzerland'];
countries[1] = 'Greece';
countries[2] = 'Spain';

console.log(countries);


// Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка автоматично змінюється під час додавання або видалення елементів.

const Planets = ['Earth', 'Mars', 'Venus'];
console.log(planets.length); // 3

// У цьому прикладі в нас є масив planets із трьома елементами. Вираз planets.length поверне значення 3, оскільки в масиві міститься три елементи.
// Знання довжини масиву корисно, коли нам потрібно перевірити, скільки елементів у масиві на даний момент.

const planets = ['Earth', 'Mars', 'Venus'];

if (planets.length >= 3) {
    console.log('3 or more elements');
    
} else {
    console.log('less then 3 elements');
    
}


// Щоб знайти значення останнього елемента масиву, нам потрібно знати його індекс. Індекс останнього елемента можна визначити за допомогою формули довжина_масиву -1.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // "Venus"



// Під час присвоєння за значенням (by value) змінним виділяється новий осередок пам'яті, і в нього копіюються дані. Аналогія з множинними копіями паперового аркуша має цілком реальне втілення, окремий аркуш для кожної копії.

// При присвоєнні за посиланням (by reference), замість створення нового значення, змінній присвоюється посилання (покажчик) на вже існуючий масив, тобто на його місце в пам'яті. Таким чином, кілька змінних можуть вказувати на один і той самий масив, за аналогією із закритою кімнатою, у користувачів є ключ доступу до оригіналу аркуша.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

// Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.

// Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.


a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

// Те, що зберігається в b, також змінилося, тому що b, як і a, просто містить посилання на одне й те саме місце в пам'яті — масив.

// Результат повторюється, якщо використовувати посилання у змінній b для зміни масиву.

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]


// Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false

// У прикладах масиви містять однакові значення, але оператор === поверне false, тому що він перевіряє рівність посилань на масиви, а не самих елементів усередині масивів. Це можна порівняти з тим, що змінні arr1 та arr2 посилаються на різні кімнати, в яких різні папірці, але з однаковим вмістом.


// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.

const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

// При перетворенні масиву в число алгоритм складається з двох кроків:
// спочатку масив приводиться до рядка,
// а потім цей рядок приводиться до числового значення.

// Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.

console.log(Number([])); // 0
console.log(Number([3])); // 3
console.log(Number([1, 2, 3])); // NaN


// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if(emptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}

if(nonEmptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}


// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок. У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

// const words = ["JavaScript", "is", "amazing"];
console.log(words.join(""));
console.log(words.join(" "));
console.log(words.join("-"));

// ----------------------------------------------------

function transformString(string) {
	const words = string.split("_");
	return words.join("-");
}

transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"



// -----------------------------------------------------

function getLength(array) {
  const newString = array.join("");
  return newString.length;
}

// -----------------------------------------------------


// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.

// Якщо роздільник є порожнім рядком (рядком, у якому нема символів), то вийде масив окремих символів рядка. Роздільником може бути один або кілька символів. Результат роботи методу можна зберегти у змінну для подальшого використання.


const name = 'Diana';
const letters = name.split('');
console.log(letters);


const message = 'I love Italy';
const words = message.split(' ');
console.log(words);;

const slug = 'french-toast-recipe';
const slugParts = slug.split('-');
console.log(slugParts);



function calculateEngravingPrice(message, pricePerWord) {
  const array = message.split(' ');
  const totalPrice = array.length * pricePerWord;
  return totalPrice;
}


// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.

const planet = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planet.slice(0, 2)); // ['Earth', 'Mars']
console.log(planet.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planet.slice(1, 3)); // ['Mars', 'Venus']

// Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:

// Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:

// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, скільки вказано в параметрі begin):

console.log(planet.slice(-2));


// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(result);

// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat(). Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

// Порядок аргументів методу визначає порядок розташування елементів у новому масиві.


// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1



// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
array.push(element1, element2, ..., elementN);

// array — це вихідний масив, до якого потрібно додати елементи;
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву.

const planats = ['jup', 'sat', 'earth'];

planats.push('mars');
console.log(planats);

planats.push('merc', 'venice');
console.log(planats);


//
// За допомогою циклу ми можемо виконувати повторювані операції і використовувати метод push для додавання нових елементів у масив на кожній ітерації. Це дуже корисно, коли нам потрібно створити масив з елементами, які можна динамічно додавати.

const tags = [];

for (let i = 0; i < 3; i++) {
    const element = array[i];
    tags.push(`tag-${i}`);
}
console.log(tags);
