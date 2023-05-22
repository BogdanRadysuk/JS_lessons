// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calc = (a, b) => (a+b)*2
// console.log(calc(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Scircle = (PI, r) => PI * r ** 2
// console.log(Scircle(3.14, 10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const s_cylinder = (PI, h, r) => 2 * PI * r * h
// console.log(s_cylinder(3.14, 10, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [4,5,324243,'qweqweasd']
// let asdqwe = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// asdqwe(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const asdqwe = (text) => document.write(`<p>${text}</p>`)
// asdqwe('ququruku')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const ququru = (text) =>{
//     document.write('<ul>')
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write('</ul>')
// }
// ququru('sdfsf')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const asdqwe = (text, numb) => {
//     document.write('<ul>')
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// asdqwe('asdf', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const arr = [3,'asdf', true]
// const asdqwe = (array) =>{
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// asdqwe(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const user = [
//     {id: 1, name: 'asdqwe', age: 17},
//     {id: 2, name: 'jhghd', age: 23},
//     {id: 3, name: 'tryerty', age: 18}
// ]
// const asdewq = (arr) => {
//     for (const argument of arr) {
//         document.write(`<div>`)
//         document.write(`${argument.id} ${argument.name} ${argument.age}`)
//         document.write(`</div>`)
//     }
// }
// asdewq(user)

// - створити функцію яка повертає найменьше число з масиву
// const arr = [2,5,9]
// const numb = (number) => {
//     let result = number[0];
//     for (let i = 1; i < number.length; i++) {
//         if (result > number[i]){
//             result = number[i]
//         }
//     }
//     return result
// }
// console.log(numb(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr = [1, 8]
// let sum = (numb) =>{
//     let result = 0
//     for (const sumOfNumbers of numb) {
//         result += sumOfNumbers
//     }
//     return result
// }
// console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) =>{
//     const value1 = arr[index1]
//     const value2 = arr[index2]
//     arr[index1] = value2
//     arr[index2] = value1
//     return arr
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     for (const item of currencyValues) {
//         if (exchangeCurrency === item.currency){
//             return sumUAH / item.value
//         }
//     }
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));

