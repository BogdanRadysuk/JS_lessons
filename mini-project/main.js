fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('a')
            div.innerText = `${user.id} ${user.name}`
            div.href = 'user-details.html?id=' + user.id
            div.style.display ='block'
            document.body.append(div)
        }
    })