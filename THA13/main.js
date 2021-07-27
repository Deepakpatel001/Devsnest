const para = document.querySelector('#main');

fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        para.innerText = data.content;
    })