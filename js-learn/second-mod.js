// Інструкція if дозволяє виконати певний блок коду тільки в тому випадку, якщо задана умова істинна (тобто приймає значення true).
// Загальний синтаксис інструкції if виглядає так:



if (condition) {
  // код, який виконується, якщо умова (condition) істинна
}



// Коли інтерпретатор зустрічає інструкцію if, він обчислює вказану умову в круглих дужках (condition), перетворюючи її до логічного типу (boolean).
// Якщо умова (condition) перетворюється до true, виконується блок коду, написаний у фігурних дужках {} — (statement).
// Якщо умова (condition) перетворюється до false, блок коду не виконається і продовжиться виконання програми, що іде після інструкції if.


let price = 100;
const planeClass = "first" //or 'economy';

if (planeClass === "first") {
    price = 1500;
}

console.log(price); //якщо умова виконується, то ціна - 1500. якщо ні - 100

// Інструкція if...else
// Синтаксис інструкції if можна доповнити блоком else для визначення альтернативних варіантів виконання коду.

if (condition) {
  // код, який виконується, якщо умова істинна
} else {
	// код, який виконується, якщо умова хибна
}


const grade = 6;

if (grade >= 9) {
     console.log(`You are in high school`);
} else {
    console.log(`You are in middle school`);
}


// Конструкція else...if розширює конструкцію if...else і дозволяє перевірити та зреагувати на виконання або невиконання кількох умов. Це корисно, коли ми маємо більше однієї умови.

if (condition_1) {
  // код, який виконується, якщо умова (condition_1) істинна
} else if (condition_2) {
  // код, який виконується, якщо умова (condition_2) істинна
} else if (condition_3) {
  // код, який виконується, якщо умова (condition_3) істинна
} else {
	// код, який виконується, якщо всі умови хибні
}

// Якщо умова condition_1 істинна, виконується відповідний блок коду, і перевірка завершується.
// Якщо умова condition_1 хибна, то перевіряється умова_2 і далі.
// Код у блоці else буде виконаний тільки у випадку, якщо жодна з умов у блоках if та else if не є істинною.

const rate = 4;

if (rate === 5) {
    console.log("You american grade would be an A!");
} else if (rate === 4) {
    console.log("You american grade would be a B!");
} else if (rate === 3) {
    console.log("You american grade would be a C!");
}
else if (rate === 2) {
    console.log("You american grade would be a D!");
}
else if (rate === 1) {
    console.log("You american grade would be a F!");
}


// Тернарний оператор — це коротша синтаксична заміна інструкції if...else. Тернарний оператор дозволяє виконувати певну частину коду залежно від умови.

// <condition> ? <expression if condition is true> : <expression if condition is false>
// Він працює таким чином:
// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'

// через тернарний оператор буде виглядати так:

const Age = 20;
const Type = Age >= 18 ? 'Adult' : 'Child';


// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;
console.log(biggerNumber);

// Тернарний оператор рекомендується використовувати у найпростіших випадках операції присвоєння чи повернення. Однак не рекомендується використовувати його для складних розгалужень, оскільки це може ускладнити читання та розуміння коду.

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
 return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
}


// загальний синтаксис оператора switch:

switch (expression) {
  case value1:
    // код, що виконується, якщо вираз (expression) дорівнює value1
    break;
  case value2:
    // код, що виконується, якщо вираз (expression) дорівнює value2
    break;
  // ...
  default:
    // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
}

// Вираз (expression) в операторі switch обчислюється.
// Значення виразу порівнюється з кожним блоком case зверху вниз.
// Якщо значення виразу відповідає значенню в блоці case, виконується код цього блоку.
// Коли виконання коду блоку case завершено, необхідно використовувати оператор break, щоб вийти зі switch. Це запобігає виконанню коду в наступних блоках case.
// Якщо жодне значення не відповідає виразу, виконається код у блоці default (якщо він є).

const fruit = 'banana';
switch (fruit) {
    case 'apple':
        console.log('apple chosen');
        break;
    case 'banana':
        console.log('banana chosen');
        break;
    case 'pear':
        console.log('pear chosen');
        break;
    default:
        console.log('the fruit is not chosen');
}


// Із прикладу видно, що застосування switch обмежене завданнями з одним загальним питанням(що порівнювати) та безліччю варіантів відповідей(з чим порівнювати).

// Вираз у блоці switch — вираз будь - якого типу(змінна чи складні обчислення), результат якого послідовно зверху вниз, суворо порівнюється(===) з усіма значеннями в блоках case. Тобто не можна порівняти на більше чи менше, лише на сувору рівність.

// Оператор break додається наприкінці кожного блоку case. Функція оператора break — перервати подальші перевірки й відразу перейти до коду, що йде після switch, щойно виконався якийсь із блоків case.

// Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням.Для цього в кінці після всіх блоків case додається блок default.

// Оператор break після блоку default не потрібен, тому що це і так останнє, що буде виконано у switch і управління буде передано коду за ним.


// Якщо break не вказано, виконання коду продовжиться в наступному case і далі. Така поведінка називається "провалюванням" (fall-through). Якщо потрібно, щоб кілька блоків case виконували той самий код, можна опустити оператор break між ними.

const day = 4;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Working day');
        break;
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('invalid');
}

// У цьому прикладі кілька блоків (case 1, case 2, case 3, case 4, case 5) провалюються і у випадку їх рівності виразу виконається один і той самий код, тому що між ними немає операторів break.


function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
  return 0;
      break;
    case "professional":
      return 20;
      break;
    case "organization":
      return 50;
      break;
    default:
      return "Invalid subscription type!";
  }
}


// Інструкція if є універсальною.Інструкції if…else і else…if використовуються, коли потрібно прописати декілька умов.Отже, ці інструкції зазвичай довші, ніж інші способи розгалужень.

// Тернарний оператор краще використовувати для присвоєння або повернення значення з тіла функції. В умові тернарного оператора може бути все що завгодно: перевірка рівності / нерівності, на більше / менше, просто перевірка на будь чого.

// Пам’ятай про обмеження: у нього має бути рівно 2 сценарії, не більше.

// Оператор switch перевіряє тільки на сувору рівність.

// Використовуючи оператор switch, завжди:
// — пам’ятай про оператор break;
// — використовуй тільки 1 default, він завжди має бути останнім.



// Область видимості визначає, чи будуть змінні та функції доступними в певних областях коду. Під час оголошення змінної або функції, вона стає "видимою" тільки в певній частині коду. Це впливає на те, де і як можна використовувати ці змінні та функції в коді.

// Змінні або функції, які оголошені поза будь-якими блоками коду — тобто в глобальній області видимості — будуть доступні в будь-якій частині коду. Вони є глобальними змінними.

// Глобальна змінна
const value = "I'm a global variable";

if (true) {
	// Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

// Можна звернутися до глобальної змінної
console.log(value); // "I'm a global variable"



// Будь-яка конструкція, що використовує фігурні дужки {} (умови, функції, цикли тощо) створює нову локальну блочну область видимості. Змінні, оголошені в цій області видимості, можуть бути використані тільки всередині цього блоку коду. Це локальні змінні.
if (true) {
  // Локальна змінна
	const value = "I'm a local variable";
  console.log(value); // "I'm a local variable"
}

// Помилка: локальну змінну не видно за межами блоку
console.log(value); // ReferenceError: value is not defined

// Змінна value оголошена в тілі інструкції if, тобто в локальній області видимості, обмеженій тілом блоку if. Ця змінна буде доступна лише всередині блоку if, і спроба звернення до неї поза блоком if викликає помилку.



const globalVar = "Global";

console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if(true) {
	const aVar = "A";
	console.log(globalVar); // Доступ до globalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
	// Немає доступу до bVar і cVar

	if(true) {
		const bVar = "B";
		console.log(globalVar); // Доступ до globalVariable з блоку B
	  console.log(aVar); // Доступ до aVar з блоку B
	  console.log(bVar); // Доступ до bVar з блоку B
		// Немає доступу до cVar
	}
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if(true) {
	const cVar = "C";
  console.log(globalVariable); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
	// Немає доступу до aVar і bVar
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar



// Логічне перетворення типів означає приведення значення будь-якого типу даних у логічне (булеве) значення true або false. Існує кілька правил, які визначають, які значення перетворюються на true, а які на false.

// Ці правила працюють:

// як для явного перетворення типів за допомогою функції Boolean(),
// так і для неявного в умовних операціях, наприклад, у конструкціях if чи логічних операторах.

// Число 0, значення NaN, null і undefined завжди перетворюються на false. Усі інші числа перетворюються на true.

console.log(Boolean(Nan)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true




if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
}
// Значення в умові інструкцій if приводиться до false. Отже, виконується код із блоку else.


if(5) {
	console.log("Block if")
} else {
	console.log("Block else")
}
// Значення в умові інструкції if приводиться до true. Отже, виконується код із блоку if.

// Порожній рядок ("") приводиться до false. Будь-які інші не пусті рядки приводяться до true.
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true



// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. underfined
// 6. false


// Оператор "І" (&&) наводить усі операнди до логічного типу (true або false) і повертає значення одного з них. Дозволяє перевірити, чи виконані всі умови у виразі.

expression1 && expression2


// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.

console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3



console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

// У прикладі “hello” && 0 лівий операнд приводиться до true, а правий до false, тому результатом виразу буде значення правого операнда, який першим був приведений до false, тобто 0.
// У приклад 0 && “hello” лівий операнд приводиться до false, тому правий операнд не буде обчислюватися. Результатом виразу буде значення лівого операнда, який першим був приведений до false, тобто 0.

// На практиці логічні операції застосовуються для перевірки множинних умов.

const x = 20;
console.log(x > 10 && x < 30); // true && true -> true

const y = 50;
console.log(y > 10 && y < 30); // true && false -> false
console.log(y > 80 && y < 120); // false && true -> false



const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
    console.log("Mobile");
} else if (screenWidth > sm && screenWidth <= md) {
    console.log("Tablet");
} else if (screenWidth > md && screenWidth <= lg) {
    console.log("Desktop");
} else {
    console.log("Godzilla");
}

// Спочатку перевіряється умова if, тобто 700 < 320, вона повертає false, тому тіло блоку if ігнорується і виконання коду переходить далі до блоку else...if.

// У ньому є умова screenWidth > sm && screenWidth ≤ md.

// Спочатку обчислиться лівий операнд, умова 700 > 320 , яка поверне true , потім правий — 700 <= 768 , який теж поверне true.

// Оскільки обидва операнди істинні, то true && true поверне значення крайнього істинного операнда, тобто true . Завдяки тому, що в умові інструкції else...if буде true, виконається її тіло і в консоль виведеться рядок “Tablet screen”

function isNumberInRange(start, end, number) {
  if (number >= start && number <= end) {
    return true;
  } else {
    return false;
  }
}



// Оператор "АБО" (||) перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них. Дозволяє перевіряти, чи є хоча б один із операндів "істинним”. Обчислення оператора відбувається зліва направо.
// Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.

console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

// Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється на true, він зупиняється та повертає його значення. Якщо до істини було перетворено перший операнд, то другий навіть не буде оцінюватися. Це може мати практичне застосування, особливо коли другий операнд є виразом, який має високу вартість обчислення.

console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

// Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.

console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null

// На практиці оператор «АБО» також використовується для перевірки множинних умов.

const q = 5;
console.log(q < 10 || q > 30); // true || false -> true

const w = 50;
console.log(w < 10 || w > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
  // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
}


// Усі оператори, які ми розглядали раніше, були бінарними. Бінарні оператори містять два операнди: лівий і правий.
// Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.

!expression

// Логічне «НІ» приводить операнд до логічного значення (true або false) і потім заперечує (інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.

console.log(!true); //false
console.log(!false); //true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true

// На практиці логічне заперечення використовується для перевірки від зворотного. Наприклад, можна дозволити написати повідомлення в чаті, лише якщо користувач не заблокований.

const isBlocked = false;
const canChat = !isBlocked;
if (canChat) {
    console.log("You can chat");
} else {
    console.log("You are blocked");
    
}

// У прикладі вище бачимо, що значення змінної isBlocked — false . Користувач не заблокований. Результатом canChat буде true .
// Якщо значення змінної isBlocked — true, користувач заблокований. У такому разі результат обчислення canChat буде false. Отже, умова if заборонить користувачеві писати в чаті.

// Логічне заперечення можна поєднувати з іншими логічними операторами. Наприклад, якщо умова можливості писати в чаті залежить від статусу онлайн і блокування.

const isOnline = true;
const isblocked = false;
const allowed = isOnline && !isblocked;
// true && !false -> true && true -> true
if (canChat) {
    console.log("you are allowed");
} else {
    console.log("blocked");
}


function toggleModalVisibility(isVisible) {
  return !isVisible;
}
