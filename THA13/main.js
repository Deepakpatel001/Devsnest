const para = document.querySelector('#main');
const author = document.querySelector('#author');

fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        para.innerText = data.content;
        author.innerText = data.author;
    })