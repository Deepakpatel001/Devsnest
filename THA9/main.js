const wapper = document.querySelector('.wapper');
const seat_remains = document.querySelectorAll('.rows .boxes:not(.clicked)');
const count = document.getElementById('count');
const remain = document.getElementById('remain');
wapper.addEventListener('click', (e) =>{
    if(e.target.classList.contains('boxes')){
        e.target.classList.toggle('clicked');
        updatecount();
    }
})
function updatecount(){
    const selectedbox = document.querySelectorAll('.row .boxes.clicked');
    const selectedboxcount = selectedbox.length;
    const remainingbox = 36-selectedboxcount;
    count.innerText = selectedboxcount;
    remain.innerText = remainingbox;


}
