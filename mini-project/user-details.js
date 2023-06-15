let url = new URL(window.location.href)
let urlID = url.searchParams.get('id')
let div = document.createElement('div')
div.classList.add('divMain')
let h2Id = document.createElement('h2')
let h2Info = document.createElement('h3')
let divAddress = document.createElement('div')
let divCompany = document.createElement('div')
let h3Info = document.createElement('h3')
let divButton = document.createElement('div')
divButton.classList.add('divButton')


//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//search user with him ID
fetch('https://jsonplaceholder.typicode.com/users/' + urlID)
    .then(res => res.json())
    .then(user => {
        // div.innerText = JSON.stringify(user)
        h2Id.innerText = `id:${user.id}  Name:${user.name}`
        h2Info.innerText = `username: "${user.username}" email: "${user.email}" phone: ${user.phone}`
        h3Info.innerText = `website: ${user.website}`
        // divAddress.innerText = `address:`
        divAddress.innerHTML= `<h1>Address:</h1>
<h2>City:${user.address.city} Street:${user.address.street} </h2> 
<h3>
Suite:${user.address.suite} zip:${user.address.zipcode} 
<h4>geo:  lat:${user.address.geo.lat} ing:${user.address.geo.lng}</h4>
</h3>`
        divCompany.innerHTML = `<h1>Company:</h1> <h2>name: ${user.company.name}</h2> <h3>catchPhrase: ${user.company.catchPhrase}</h3> <h3>bs: ${user.company.bs}</h3>`





        console.log(user)
        div.append(h2Id, h2Info, divAddress, divCompany,h3Info)
    })

fetch('https://jsonplaceholder.typicode.com/users/' + urlID + '/posts')
    .then(res => res.json())
    .then(post => {
        // for (const postElement of post) {
        //
        // console.log(postElement.id)
        // }
        let button = document.createElement('button')
        button.innerText = 'post of current user'
        button.classList.add('buttonLi')

        let ulPosts = document.createElement('ul')
        button.onclick = function () {
            for (const divPost of post) {
                let li = document.createElement('li');
                let aPosts = document.createElement('a')
                aPosts.innerHTML += divPost.title
                aPosts.href = 'post-details.html?id=' + divPost.id
                li.appendChild(aPosts)
                ulPosts.appendChild(li)
            }
        }
        divButton.appendChild(button)
        document.body.append(div, divButton,ulPosts)
    })
