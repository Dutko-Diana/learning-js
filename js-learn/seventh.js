// ECMAScript (скорочено ES) — це стандарт, який описує мову програмування JavaScript. Цей стандарт визначає синтаксис і семантику мови, а також набір вбудованих об'єктів і функцій для роботи з даними, текстом, датами та іншими аспектами програмування. ECMAScript надає основну структуру мови, на якій базується JavaScript. Різні версії JavaScript реалізуються через різні версії стандарту ECMAScript. Наприклад, ES5, ES6 (або ES2015), ES2016, ES2017 тощо — це різні версії ECMAScript, які впроваджують нові можливості та покращення в мову.

// Об'єктна модель документа (Document Object Model) — незалежний інтерфейс для роботи з HTML-документом. Ця модель містить набір властивостей і методів, що дозволяють шукати, створювати й видаляти елементи, реагувати на дії користувача і багато іншого, тобто поєднує сторінку з мовою програмування.

// DOM — це відображення HTML-документа. Виглядає як деревоподібна структура, у якій кожен вузол — це JavaScript-об'єкт із властивостями та методами, що становить частину HTML-документа. Кожен елемент у документі, весь документ в цілому, заголовок, посилання, абзац — це частини DOM цього документа, тому всі вони можуть бути змінені з JavaScript-коду.

// Об'єктна модель браузера (Browser Object Model) — незалежний від мови інтерфейс для роботи з браузером. Містить набір властивостей і методів, що дозволяють отримати доступ до ряду функцій браузера. Саме завдяки BOM можна отримувати розміри вікна браузера, читати URL, працювати з історією навігації, місцем розташування тощо.


// Згідно з DOM-моделлю, кожен тег утворює окремий елемент-вузол (element node), а кожен фрагмент тексту всередині елемента — текстовий вузол (text node).

// HTML-документ — це ієрархічне дерево, у якому кожен елемент (окрім кореневого - 'document') вкладений в один батьківський елемент.

// Щоб відобразити HTML-документ, браузер спочатку перетворює його у формат, який він розуміє — DOM. Інтерпретатор браузера має спеціальний фрагмент коду — HTML-парсер, який використовується для перетворення HTML у DOM.

// Браузер будує DOM поступово, щойно надходять перші фрагменти коду, він починає парсити HTML, додаючи вузли в деревоподібну структуру.

// Після того як DOM-дерево побудовано, у ньому можна знайти елемент за допомогою JavaScript. Оскільки кожен елемент має інтерфейс із безліччю властивостей і методів, з ним можна виконувати необхідні дії.


// Група методів elem.querySelector* — це сучасний стандарт для пошуку елементів. Вони дозволяють знайти елемент або групу елементів за CSS-селектором.

element.querySelector();

// Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.

// Повертає перший знайдений елемент усередині element, що відповідає рядку CSS-селектора selector. Навіть якщо їх декілька, завжди повернеться посилання тільки на перший елемент у DOM-дереві.
// Якщо нічого не знайдено, то поверне null

ul.list -> li.list-item
        -> li.list-item
        -> li.list - item
        
const item = document.querySelector('.list-item'); // поверне першу лішку

// Доступ до DOM починається з об'єкта document, з нього можна дістатися до будь-яких елементів. Об’єкт document — це частина глобального об'єкта window, який доступний у скрипті, коли він виконується в браузері. Так само як alert, console.log і багато інших.


element.querySelectorAll();

// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором. Наприклад, усі елементи списку з класом list-item.

// Повертає псевдомасив усіх елементів всередині element, які відповідають CSS-селектору selector
// Якщо нічого не знайдено, поверне порожній масив

const listItems = document.querySelectorAll('.list-item'); // поверне всі лішки


// Елементи DOM-дерева мають ієрархічне відношення один до одного. Для опису відносин використовуються терміни предок (ancestor), нащадок (descendant), батько (parent), дитина (child) і сусід (sibling).

// Найвищий елемент називається кореневим (root node).
// Кожен елемент, крім кореневого, має тільки один батьківський.
// В елемента може бути скільки завгодно дітей.
// Сусіди — це елементи зі спільним батьківським елементом.
// Дочірні елементи (діти) — елементи, що безпосередньо вкладені в поточний елемент (елементи першого рівня вкладеності).
// Нащадки — усі елементи, які знаходяться в поточному елементі, разом з їхніми дітьми, дітьми їхніх дітей тощо. Тобто все на зразок дерева.



// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.

// Розберемо приклад:

// Якщо в HTML є тег посилання,

<a class="link" href="https://goit.global">GoIT</a>;

// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href

const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться.

const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"
link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"


// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).

<p class="text">Username: <span class="sub-text">Mango</span></p>

// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.

const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")
console.log(el.textContent);
console.log(nested.textContent);

// Властивість textContent можна як читати, так і змінювати. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

el.textContent = "I am Mango!"


// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS-класу в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

// Властивість classList — це спеціальний тип об’єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.

// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента

// Але самі по собі value та length майже не використовуються, тому що для операцій з класами (додавання, видалення тощо) є спеціальні методи.

        <a class="link is-active" href = "https://goit.global" > GoIT </a>

const link = document.querySelector(".link");
console.log(link.classList); // ["link", "is-active", length: 2, value: "link is-active"]

// Метод classList.contains(className)

// Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.

// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass = link.classList.contains("title"); // false



// Метод classList.add(className)

// Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

link.classList.add("special");
console.log(link.classList); 
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

// !!! Можна додавати більше одного класу, вказавши кілька аргументів через кому.


// Метод classList.remove(className)

// Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

link.classList.remove("is-active");
console.log(link.classList); 
// ["link", "special", length: 2, value: "link special"]

// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.


// Метод classList.toggle(className)

// Метод працює як перемикач:

// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його


// Метод classList.replace(oldClassName, newClassName)

// Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.

link.classList.replace("special", "regular");
console.log(link.classList);  // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.

// Властивість style використовується для читання та зміни вбудованих стилів з DOM-елементів. Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.

// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS, тобто background-color перетворюється на backgroundColor.

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object


// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.

// Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда.


// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.

// Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.

<img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />


// Метод element.hasAttribute(nameAttribute)

// Метод приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності на елементі element — true чи false.

const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false


// Метод element.getAttribute(nameAttribute)

// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.

console.log(image.getAttribute("alt")); // "Rocks and waterfall"


// Метод element.setAttribute(nameAttribute, value)

// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature


// Метод element.removeAttribute(nameAttribute)

// Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду.

// А ось видалити або перевірити наявність буде зручніше, використовуючи відповідний метод.


// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.

<button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editore</button>

// Отримання значень

// Для отримання значення data-атрибута використовується властивість dataset, після якої через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);

// Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.

saveBtn.dataset.action = 'update';
saveBtn.dataset.role = 'admin';
console.log(saveBtn.dataset.action);
console.log(saveBtn.dataset.role);


// document.createElement(tagName)

// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.

const heading = document.createElement('h1');
heading.textContent = 'Hello heading';
heading.classList.add('title');
console.log(heading);

const imge = document.createElement('img');
imge.src = 'https://picsum.photos/id/11/320/240';
imge.alt = 'Nature';
console.log(imge);


// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// У всіх цих методах el — це елементи або рядки, у будь-якому поєднанні та кількості. Рядки додаються, як текстові вузли.

// Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.


// Для того щоб видалити елемент, використовується метод element.remove().
// Він викликається на елементі element, який необхідно видалити.


// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код.

// Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM-дерево.

const main = document.querySelector('.main');
console.log(main.innerHTML);

const newMain = '<a href="https://lalala">Tap here</a> <p>hi <br> there</p>'
main.innerHTML = newMain;
console.log(main.innerHTML);

// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.

const footer = document.querySelector('.footer');
footer.innerHTML = '';
console.log(footer.innerHTML); // empty string
console.log(footer); // <footer class="footer"></footer>


// Однотипна (шаблонна) розмітка створюється із масиву даних.

// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(), не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка за допомогою методу join()

const countries = ['Ukraine', 'Italy', 'Switzerland', 'Greece', 'Spain', 'France'];

const list = document.createElement('ul');
list.style.listStyleType = 'georgian';
const body = document.querySelector('body');
body.append(list);

const favouriteCountries = countries
    .map((country, i) => `<li>${i + 1}: ${country}</li>`)
    .join('');

list.innerHTML = favouriteCountries;

// Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків елемента element. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на повторне створення вже існуючої розмітки, а це погано.

footer.innerHTML += '<p>Thank You!</p>';

// Використовуй властивість element.innerHTML для додавання тільки у разі,
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element


// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

element.insertAdjacentHTML(position, string)

// Аргумент position — це рядок, який визначає позицію щодо елемента element. Він приймає одне з чотирьох значень.

"beforebegin" — перед element
"afterbegin" — всередині element, перед усіма дітьми
"beforeend" — всередині element, після усіх дітей
"afterend" — після element


// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві. Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM-дереві.

const list = document.querySelector('.list');
const newChapters = ['chapter 4', 'chapter 5'];

const markup = newChapters
    .map(chapter => `<li class="list-item"><p>${chapter}</p></li>`)
    .join('');

list.insertAdjacentHTML('beforeend', markup);
list.insertAdjacentHTML('beforebegin', '<h2 class="chapters">Chapters</h2>');


// Метод addEventListener()

// Подія — це сигнал від браузера про те, що на вебсторінці щось відбулося. Існує багато видів подій: події миші, події клавіатури, події елементів форм, зміни розмірів вікна, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу тощо. Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.

// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.

// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

element.addEventListener(event, handler, options);

// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log('Hello!');
    
})

const firstBtnClick = () => {
    console.log("Hello 1!");
}
const secondBtnClick = () => {
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/id/11/320/240';
    img.alt = 'Nature'
    body.prepend(img);
}
const thirdBtnClick = () => {
    btn.style.display = 'none';
}

btn.addEventListener('click', firstBtnClick);
btn.addEventListener('click', secondBtnClick);
btn.addEventListener('click', thirdBtnClick);

// На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.



// Метод removeEventListener() видаляє слухача події з елемента.

// Аргументи аналогічні методу addEventListener():

element.removeEventListener(event, handler, options)

// Для того щоб мати можливість видаляти слухача події з елемента через removeEventListener, важливо використовувати ту саму функцію-обробник, яка була призначена в addEventListener. З цієї причини рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);


// Для обробки події недостатньо знати, що подія — це клік або натискання клавіші. Розробнику можуть знадобитися інші деталі, а саме: елемент, на якому відбулася подія, його поточне значення текстового поля, вбудовані методи тощо.

// Кожна подія — це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Усі події відбуваються з базового класу Event.

const handleClick = event => {
        console.log(event);
};

button.addEventListener('click', handleClick);

// Параметр event — це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.

// Деякі властивості об'єкта події:

// event.type — тип події.
// event.currentTarget — елемент, на якому виконується обробник події.

const button = document.querySelector('.btn');

const handleClick = event => {
    console.log('event: ', event);
    console.log('event type: ', event.type);
    console.log('event current target: ', event.currentTarget);
    
};

button.addEventListener("click", handleClick);


// Існує дві основні події клавіатури:

// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили

// На відміну від інших подій, події клавіатури обробляються на документі, а не на конкретному елементі. Об'єкти подій клавіатури походять від базового класу KeyboardEvent.

document.addEventListener('keydown', event => {
        console.log('Key is pressed:', event);
});

document.addEventListener('keyup', event => {
        console.log('Key is not pressed:', event);
})

// Події keydown і keyup спрацьовують при натисканні будь-якої клавіші, включно зі службовими (Ctrl, ShiftAltEscape тощо).
// На практиці переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup і користувач раніше бачить результат натискання.


// Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:

// стан клавіш-модифікаторів, наприклад Shift
// поточну мову

// Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

document.addEventListener('keydown', event => {
        console.log('key:', event.key);
        console.log('code: ', event.code);
})



// Події елементів форм
// Подія submit

// Відправлення форми відбувається:

// при кліку на кнопку з атрибутом type = "submit"
// Або
// при натисканні клавіші Enter під час перебування в будь - якому її текстовому полі форми

// Подія submit відбувається безпосередньо на формі(тег form), тому обробник подій слід встановлювати саме на ній.

const form = document.querySelector('.form');
form.addEventListener('submit', () => {...});

// Найчастіше ця поведінка небажана і її необхідно скасувати. Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

form.addEventListener('submit', event => {
    event.preventDefault();
})

// Подію submit можна застосувати для валідації (перевірки) форми перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми.

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// Властивість elements DOM-елемента форми містить об'єкт з посиланнями на всі її елементи, які мають атрибут name. Саме тому в прикладі ми отримуємо значення полів, звертаючись до event.target.elements.login.value і event.target.elements.password.value.

// Подія change відбувається після зміни елемента форми.

// Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу. Це не завжди зручно. Уяви, що користувач набирає щось у текстовому полі — подія відсутня. Щойно фокус пропав, відбудеться подія change.

// Для інших елементів, наприклад, select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час вибору значення.

// Зверни увагу на корисні властивості при роботі з елементом <select> у прикладі.

// Визнач, що зберігається у властивостях value, selectedIndex і options.


// Подія input відбувається тільки на текстових полях і textarea.

// Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input — це найголовніша подія для роботи з текстовими полями форми.

// Подія input:

// відбувається при кожній зміні значення (при введенні або видаленні)
// не залежить від втрати фокусу


// Подія change:

// відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі


// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.

// Момент отримання і втрати фокусу дуже важливий. Отримуючи фокус, ми можемо завантажити дані для автозаповнення, почати відстежувати зміни тощо.

// Під час втрати фокусу — перевірити введені дані.

// подія focus відбувається під час фокусування на елементі
// подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана

// Активувати або скасувати фокус можна програмно. Для цього треба викликати в коді для елемента однойменні методи focus() і blur().



// Пошук DOM-елементів

// element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
// element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.


// Властивості DOM-елемента

// element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
// element.innerHTML - містить HTML-вміст елемента element.
// element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.


// CSS класи на DOM-елементах

// element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
// element.classList.add(className) - додає клас className до списку класів елемента element.
// element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
// element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
// element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.


// Створення та видалення DOM-елементів

// document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
// element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
// element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
// element.remove() - видаляє DOM-елемент з DOM дерева.
// insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.


// Події

// element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
// element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
// keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
// submit - подія, яка виникає при відправці форми.
// change - подія, яка виникає при зміні значення елемента форми.
// input - подія, яка виникає при введенні даних в текстове поле.
// focus - подія, яка виникає, коли елемент отримує фокус.
// blur - подія, яка виникає, коли елемент втрачає фокус.