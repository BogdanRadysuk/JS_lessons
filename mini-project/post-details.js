let url = new URL(window.location.href)
let urlID = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/posts/' + urlID)
    .then(res => res.json())
    .then(post => {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(post)


        document.body.appendChild(div)
    })

fetch('https://jsonplaceholder.typicode.com/posts/' + urlID + '/comments')
    .then(res => res.json())
    .then(postCom => {
        for (const divElement of postCom) {

            let div = document.createElement('div');
            div.innerText = JSON.stringify(divElement.body)

            document.body.appendChild(div)
        }
    })