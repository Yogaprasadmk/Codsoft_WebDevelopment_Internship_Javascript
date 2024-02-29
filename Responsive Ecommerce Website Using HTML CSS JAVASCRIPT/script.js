const bar = document.getElementById('id');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}