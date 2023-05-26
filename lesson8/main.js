// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'dfsfew','sfgbn', 'wrtbfraswt@email.com', '+380461235423'),
//     new User(2, 'efdwsa','sdfbvswtr', 'sdfcvsdff@email.com', '+380461235423'),
//     new User(3, 'edfdsaw','thbtygn', 'wrtb@email.com', '+380461235423'),
//     new User(4, 'eythsde','btrwestb', 'wrtb@email.com', '+380461235423'),
//     new User(5, 'ysdgyhbn','sdfgsv', 'wretsfgvbty@email.com', '+380461235423'),
//     new User(6, 'eybnesd','zcvsaer', 'twasrdfgb@email.com', '+380461235423'),
//     new User(7, 'srwadtfh','sdfgewfvs', 'wertvwrt@email.com', '+380461235423'),
//     new User(8, 'wrhbgtrw','dsaweq', 'twrbfgw@email.com', '+380461235423'),
//     new User(9, 'hwasrh','sdfgt', 'asdfcvare3@email.com', '+380461235423'),
//     new User(10, 'thwreadf','vrtwbtw', 'grwetsbvwasrt@email.com', '+380468235423')
// ];
// console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = users.filter((value) =>value.id % 2 === 0)
// console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//     let sortUser = arr.sort((a, b) => b.id - a.id)
// console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// створити пустий масив, наповнити його 10 об'єктами Client
// let arrClient = [
//     new Client(1, 'dfsfew','sfgbn', 'wrtbfraswt@email.com', '+380461235423',['qweasdf','afgrejwi','rjvnmekawn']),
//     new Client(2, 'efdwsa','sdfbvswtr', 'sdfcvsdff@email.com', '+380461235423',['qweasdf',]),
//     new Client(3, 'edfdsaw','thbtygn', 'wrtb@email.com', '+380461235423',['qweasdf','afgrejwi','rjvnmekawn']),
//     new Client(4, 'eythsde','btrwestb', 'wrtb@email.com', '+380461235423',['qweasdf']),
//     new Client(5, 'ysdgyhbn','sdfgsv', 'wretsfgvbty@email.com', '+380461235423',['qweasdf','rjvnmekawn']),
//     new Client(6, 'eybnesd','zcvsaer', 'twasrdfgb@email.com', '+380461235423',['qweasdf','afgrejwi','rjvnmekawn']),
//     new Client(7, 'srwadtfh','sdfgewfvs', 'wertvwrt@email.com', '+380461235423',['qweasdf',]),
//     new Client(8, 'wrhbgtrw','dsaweq', 'twrbfgw@email.com', '+380461235423',['qweasdf','afgrejwi','rjvnmekawn']),
//     new Client(9, 'hwasrh','sdfgt', 'asdfcvare3@email.com', '+380461235423',['qweasdf','rjvnmekawn']),
//     new Client(10, 'thwreadf','vrtwbtw', 'grwetsbvwasrt@email.com', '+380468235423',['qweasdf','afgrejwi'])
// ]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientSort = arrClient.sort((a, b) => a.order > b.order)
// console.log(clientSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     this.drivers = [];
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {console.log(`виробник - ${this.producer},
// модель - ${this.model},
// рік випуску - ${this.year},
// максимальна швидкість - ${this.maxSpeed},
// об'єм двигуна - ${this.volume},
// водій - ${JSON.stringify(this.drivers)}`);}
//
//     this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed = newSpeed}
//     this.changeYear = function (newValue){this.year = newValue}
//     this.addDriver = function (driver) {
//         this.drivers = driver
//     }
// }
// let car = new Car('M5 CS', 'BMW', '2023', 260, 5.5);
// car.drive()
// car.increaseMaxSpeed(350)
// car.changeYear(2005)
// car.addDriver({name: 'Valera', age: 35})
// car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.volume = volume
//         this.drivers = [];
//     }
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//         info = function () {console.log(`виробник - ${this.producer},
// модель - ${this.model},
// рік випуску - ${this.year},
// максимальна швидкість - ${this.maxSpeed},
// об'єм двигуна - ${this.volume},
// водій - ${JSON.stringify(this.drivers)}`);}
//         increaseMaxSpeed(newSpeed) {this.maxSpeed = newSpeed}
//         changeYear(newValue){this.year = newValue}
//         addDriver(driver) {
//             this.drivers = driver
//         }
// }
//     let car = new Car('M5 CS', 'BMW', '2023', 260, 5.5);
//     car.drive()
//     car.increaseMaxSpeed(350)
//     car.changeYear(2005)
//     car.addDriver({name: 'Valera', age: 35})
//     car.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// class Princess {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
// let princesses = [
//     new Princess('popelyushka', 19, 29),
//     new Princess('popelyushka', 19, 30),
//     new Princess('popelyushka', 19, 31),
//     new Princess('popelyushka', 19, 32),
//     new Princess('popelyushka', 19, 33),
//     new Princess('popelyushka', 19, 34),
//     new Princess('popelyushka', 19, 35),
//     new Princess('popelyushka', 19, 36),
//     new Princess('popelyushka', 19, 37),
//     new Princess('popelyushka', 19, 38),
//     new Princess('popelyushka', 19, 39)
// ]
// class Prince {
//     constructor(name, age, footer) {
//         this.name = name;
//         this.age = age;
//         this.footer = footer;
//     }
// }
// let prince = new Prince('Kokos', 23, 38);
// for (const item of princesses) {
//     if (item.foot === prince.footer) {
//         console.log(item)
//     }
// }
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let filterPrincess = princesses.filter(value => value.foot === prince.footer)
// console.log(filterPrincess)
// let findPrincess = princesses.find(value => value.foot === prince.footer)
// console.log(findPrincess)