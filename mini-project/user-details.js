let url = new URL(window.location.href)
let urlID = url.searchParams.get('id')
let div = document.createElement('div')

//search user with him ID
fetch('https://jsonplaceholder.typicode.com/users/' + urlID)
    .then(res => res.json())
    .then(user => {
        div.innerText = JSON.stringify(user)
    })

fetch('https://jsonplaceholder.typicode.com/users/' + urlID + '/posts')
    .then(res => res.json())
    .then(post => {
        console.log(post)
        // for (const postElement of post) {
        //
        // console.log(postElement.id)
        // }

        let button = document.createElement('button')
        button.innerText = 'post of current user'

        let ulPosts = document.createElement('ul')
        button.onclick = function () {
            for (const divPost of post) {
                let li = document.createElement('li');
                let aPosts = document.createElement('a')
                aPosts.innerHTML += divPost.title
                aPosts.href = 'post-details.html?id=' + divPost.id
                console.log(post.id)


                li.appendChild(aPosts)
                ulPosts.appendChild(li)
            }
        }


        document.body.append(div, button, ulPosts)
    })
