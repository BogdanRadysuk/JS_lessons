// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function Sprymokytnuk(a, b) {
//     let result = (a + b) * 2
//     return result
// }
// console.log(Sprymokytnuk(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function Scircle(PI, r) {
// let result = PI * r ** 2
//     return result
// }
// console.log(Scircle(3.14, 10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s_cylinder(PI, h, r) {
//     let result = 2 * PI * r * h
//     return result
// }console.log(s_cylinder(3.14, 10, 4))

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [4,5,324243,'qweqweasd']
// function asdqwe(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// asdqwe(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function construct(text) {
//     document.write(`<p>${text}</p>`)
// }
// construct('asdfasdf')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function asdqwe(text) {
//     document.write('<ul>')
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write('</ul>')
// }
// asdqwe('sdfsdf')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function asdqwe(text, numb) {
//     document.write(`<ul>`)
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// asdqwe('asdfasf', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const arr = [23,'sdfgsdfgsfgh',true]
// function asdqwe(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// asdqwe(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 1},
//     {name: 'anya', age: 31, id: 2},
//     {name: 'oleg', age: 28, id: 3},
//     {name: 'andrey', age: 29, id: 4},
//     {name: 'masha', age: 30, id: 5},
//     {name: 'olya', age: 31, id: 6},
//     {name: 'max', age: 31, id: 7}
// ];
// function asdqwe(user) {
//     for (const userElement of user) {
//         document.write(`<div>id: ${userElement.id} ${userElement.name} ${userElement.age} </div>`)
//     }
// }
// asdqwe(users)

// - створити функцію яка повертає найменьше число з масиву
// const arrayOfNumbers = [1, 2]
// function numb(smallest) {
//     const result = smallest[0];
//     for (let i = 1; i < smallest.length; i++) {
//         if (result > smallest[i]){
//             result = smallest[i]
//         }
//     }
//     return result
// }
// console.log(numb(arrayOfNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// const sum = [1,5,8,20]
// function sumOfNumbers(numb) {
//     let result = 0
//     for (const number of numb) {
//         result += number
//     }
//     return result
// }
// console.log(sumOfNumbers(sum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     const value1 = arr[index1]
//     const value2 = arr[index2]
//     arr[index1] = value2
//     arr[index2] = value1
//     return arr
// }
// console.log(swap([193402, 29024, 39351], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//             return sumUAH / item.value
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));