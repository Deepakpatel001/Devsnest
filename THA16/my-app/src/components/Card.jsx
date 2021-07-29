// const imgss = document.getElementById("imgs");
// fetch("https://meme-api.herokuapp.com/gimme")
//     .then(res => res.json())
//     .then(data => {
//         imgss.src = data.url;
//     })

    const Card = () =>{
    return(
        <div className ="card">
            <img src="https://i.redd.it/naj400c535e71.jpg" alt="" id="imgs" />
            <h2>react Card</h2>
            <p>This is a Card</p>
        </div>
    );
};

export default Card;