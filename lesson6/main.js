// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const str = 'hello world'
// console.log(str.length);
// const str1 = 'lorem ipsum'
// console.log(str1.length);
// const str2 = 'javascript is cool'
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const str = 'hello world'
// console.log(str.toUpperCase());
// const str1 = 'lorem ipsum'
// console.log(str1.toUpperCase());
// const str2 = 'javascript is cool'
// console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const str = 'HELLO WORLD'
// console.log(str.toLowerCase());
// const str1 = 'LOREM IPSUM'
// console.log(str1.toLowerCase());
// const str2 = 'JAVASCRIPT IS COOL'
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// const str = ' dirty string   '
// console.log(str.length);
// let s = str.trim();
// console.log(s.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//===========
// let str = 'Ревуть воли як ясла повні'
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let mapArrToStr = arr.map(function (arrays) {
//     return arrays.toString()
// })
// console.log(mapArrToStr);

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// // ======
//
// let nums = [11,21,3]
// let sortNums = (nums, direction) => {
//     if (direction === 'asc'){
//      nums.sort((a,b) => a - b)
//     }else if (direction === 'desc'){
//         nums.sort((a, b)=> b - a)
//     }
// return nums
// }
// console.log(sortNums(nums, 'desc'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let asdqwe = coursesAndDurationArray
//     .sort((a, b) => a.monthDuration - b.monthDuration)
//     .filter(value => {
//         if (value.monthDuration > 5){
//             return value
//         }
//     })
//     .map((value, index) => {
//         return {id: index, ...value}
//     })
// console.log(asdqwe);

//   описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
// ];

// - знайти піковий туз
// let filterAceSpade = cards.filter(value => {
//     if (value.cardSuit === 'spade' && value.value === 'ace'){
//         return value
//     }
// })
// console.log(filterAceSpade);

// - всі шістки
// let filterAllSix = cards.filter(value => {
//     if (value.value === '6'){
//         return value
//     }
// })
// console.log(filterAllSix);

// - всі червоні карти
// let filterAllRedCard = cards.filter(value => {
//     if (value.color ==='red'){
//         return value
//     }
// })
// console.log(filterAllRedCard);

// - всі буби
// let filterDiamondCard = cards.filter(value => {
//     if (value.cardSuit === 'diamond'){
//         return value
//     }
// });
// console.log(filterDiamondCard);

// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//=======
// let filterClubCards = cards.filter(value => {
// return ['9','10', 'jack', 'queen', 'king', 'ace'].includes(value.value) && value.cardSuit === 'clubs'
// })
// console.log(filterClubCards);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//=====
// let reduceCards = cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'diamond'){
//         accumulator.diamonds.push(card)
//     }
//     if (card.cardSuit === 'spade'){
//         accumulator.spades.push(card)
//     }
//     if (card.cardSuit === 'heart'){
//         accumulator.hearts.push(card)
//     }
//     if (card.cardSuit === 'clubs'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// }, {spades:[], diamonds:[], hearts:[], clubs:[]})
// console.log(reduceCards);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass
// let filterSass= coursesArray.filter(value => value.modules.includes('sass'))
// console.log(filterSass)
// --написати пошук всіх об'єктів, в який в modules є docker
// let filterDocker = coursesArray.filter(value => value.modules.includes('docker'))
// console.log(filterDocker);