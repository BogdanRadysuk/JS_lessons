// SetTimeout
// setTimeout(() =>{
//     let x = 1
//     console.log(x)
//     setTimeout(() => {
//         x++
//         console.log(x);
//         setTimeout(() => {
//             x++
//             console.log(x);
//         }, 1000)
//     }, 1000)
// }, 1000)

// Promise
// new Promise(resolve => {
//     setTimeout(() => {
//         let x = 1
//         console.log(x);
//         resolve(x)
//     }, 1000)
// })
//     .then(value => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 value++
//                 console.log(value);
//                 resolve(value)
//             },1000)
//         })
//     })
// .then(value => {
//     return new Promise(resolve => {
//         setTimeout( () =>{
//             value++
//             console.log(value);
//             resolve(value)
//         },1000)
//     })
// })
//     .then(value => {
//         new Promise(resolve => {
//             setTimeout( () =>{
//                 value++
//                 console.log(value);
//                 resolve(value)
//             },1000)
//         })
//     })

// Promise Reject Catch
// new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         let x = 1
//         console.log(x);
//         resolve(x)
//     }, 1000)
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++
//             console.log(value);
//             if (true){
//                 reject('hmmm(((')
//             }else{
//                 resolve(value)
//             }
//
//         }, 1000)
//     })
// })
//     .then(value => {
//         console.log(value++)
//     })
//     .catch(reason => {
//     console.log(reason)
// })

// fetch
// fetch('https://reqres.in/api/users')
//     .then(response => response.json())
//     .then(users => console.log(users))

// Promise All Race Any
// let users = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
// let posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
// Promise.all([users, posts]).then(result => {
//     // let users = result[0]
//     // let posts = result[1]
//     let [users, posts] = result
//     for (const user of users) {
//         user.posts = []
//         for (const post of posts) {
//             if (user.id === post.userId) {
//                 user.posts.push(post)
//             }
//         }
//     }
// })
///////// хто швидше загрузиться, або у випадку поломки однієї API запуститься інша
// Promise.race([server1, server2]).then(value => console.log(value))
// Promise.any([server1, server2]).then(value => console.log(value))

// async await function
// async function foo() {
//     let users = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json());
//     let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
//     console.log(users);
//     console.log(posts);
// }
// foo()