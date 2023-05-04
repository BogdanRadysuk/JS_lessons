// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = ['asdf', null, true, false, 123, 234, 345, 456, 567, 789]
// console.log(arr);
// console.log(arr[0]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book = {
//     title: 'qweasd',
//     pageCount: 34,
//     genre: 'asdfasdf'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book = {
//     title: 'qweasd',
//     pageCount: 34,
//     genre: 'asdfasdf'
//     authors:[
//         {name: 'Deyn', age: 29}
//         {name: 'Ronald', age: 23}
//     ]
// }

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'asdfasdf', username: 'qwerqwe', password: '1'},
//     {name: 'asdfasdf',username: 'asdfff',password: '2'},
//     {name: 'asdfasdf',username: 'qwerqwe', password: '3'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '4'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '5'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '6'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '7' },
//     {name: 'asdfasdf',username: 'qwerqwe',password: '8'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '9'},
//     {name: 'asdfasdf',username: 'qwerqwe',password: '10'}
// ]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1
// if (x !== 0) {
//     console.log('true');
// } else {
//     console.log('false')
// }

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 1
//
// if (time>0 && time<=15){
//     console.log('1quarter')
// }else if (time > 15 && time <= 30){
//     console.log('2quarter')
// }else if (time > 30 && time <= 45){
//     console.log('3quarter')
// }else if (time > 45 && time <= 60){
//     console.log('4quarter')
// }else{
//     console.log('?????')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
// let day = 26
// if (day >0 && day<=10){
//     console.log('1')
// }else if (day >10 && day<=20){
//     console.log('2')
// }else if (day > 20 && day <= 31){
//     console.log('3')
// }else{
//     console.log('????')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('day?')
// switch (day) {
//     case 1:
//         console.log('1')
//         break
//     case 2:
//         console.log('2')
//         break
//     case 3:
//         console.log('3')
//         break
//     case 4:
//         console.log('4')
//         break
//     case 5:
//         console.log('5')
//         break
//     case 6:
//         console.log('6')
//         break
//     case 7:
//         console.log('7')
//         break
//     default:
//         console.log('idk')
// }

//  - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
// let num = 8;
// let num1 = 7;
//
// if (num > num1){
//     console.log(num)
// }else if (num1>num){
//     console.log(num1)
// }else if (num===num1){
//     console.log('nullllllll')
// }else{
//     console.log('????');
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = null
// if (x === '' || x === null || x === undefined || x === 0){
//     x = 'default'
// }
// console.log(x)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// if (coursesArray[0].monthDuration > 5){
//     console.log(coursesArray[0].title, 'super')
// }
// if (coursesArray[1].monthDuration > 5){
//     console.log(coursesArray[1].title, 'super')
// }
// if (coursesArray[2].monthDuration > 5){
//     console.log(coursesArray[2].title, 'super')
// }
// if (coursesArray[3].monthDuration > 5){
//     console.log(coursesArray[3].title, 'super')
// }
// if (coursesArray[4].monthDuration > 5){
//     console.log(coursesArray[4].title, 'super')
// }
// if (coursesArray[5].monthDuration > 5){
//     console.log(coursesArray[5].title , 'super')
// }