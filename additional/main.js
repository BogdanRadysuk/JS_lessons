// ls2
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3, то
// виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3){
//     console.log('великий масив 3<')
// }else{console.log('маленький масив 3>')}
//
// - Маємо 3 числа і між ними нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться
//  перше число між двома іншими.
// const a = 20
// const b = 30
// const c = 10
// if (b>a && b<c || b>c && b<a){
//     console.log(b)
// }else if (a>b && a<c || a>c && a<b){
//     console.log(a)
// }else if (c>a && c<b || c<a && c>b){
//     console.log(c)
// }else{console.log('?????')}
//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// - Маємо будь-яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним,
// негативним або нулем
// напишіть це тернарним оператором
// let a = 0
// if (a === 0){
//     console.log('zero')
// }else if (a > 0){
//     console.log('positive')
// }else if (a < 0){
//     console.log('negative')
// }else{console.log('??????')}
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//   Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = false
// if (test) {
//     console.log(true)
// } else if (!test) {
//     console.log(false)
// } else {
//     console.log('?????');
// }
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let x = prompt('Яка «офіційна» назва JavaScript?')
// if (x === 'ECMAScript'){
//     console.log('Правильно!')
// }else{console.log('Не знаєте? ECMAScript!');}
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('').
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let x = 50
// if (x > 0 && x <=20){
//     console.log('first')
// }else if (x > 20 && x <= 48){
//     console.log('second')
// }else if (x > 48 && x <= 90){
//     console.log('third')
// }else{
//     console.log('????');}
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
// const number = 10
// if (number === 10){
//     console.log('Вірно!')
// }else{console.log('Невірно!')}
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//   Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
//   Якщо інша температура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// const celsius = +15
// if (celsius > +10 && celsius < +22){
//     console.log('Вчитись')
// }else{
//     console.log('Онлайн');}
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І в залежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д.) і якщо число не підходить тоді
// вивести Повідомлення - що число не вірне ... .
// const num = +prompt('number 1-5')
// switch (num) {
//     case 1:
//         console.log('Авто')
//         break
//     case 2:
//         console.log('Мото')
//         break
//     case 3:
//         console.log('Телефон')
//         break
//     case 4:
//         console.log('Годинник')
//         break
//     case 5:
//         console.log('Ноутбук')
//         break
//     default:console.log('Число не вірне ...')
// }

// ls3



