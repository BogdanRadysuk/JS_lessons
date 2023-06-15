fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('a')
            div.classList.add('mainDiv')
            div.innerText = `${user.id} ${user.name}`
            div.href = 'user-details.html?id=' + user.id
            document.body.append(div)
        }
    })