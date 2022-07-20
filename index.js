window.alert('Hello fellas welcome to my first repository');
let closedHand = document.querySelector('.closed');
let openHand = document.querySelector('.opened');
closedHand.addEventListener('click', () =>{
    if(openHand.classList.contains('opened')){
        openHand.classList.add('active');
        closedHand.classList.remove('active');
    }
})
openHand.addEventListener('click', ()=> {
    if(closedHand.classList.contains('closed')){
        openHand.classList.remove('active');
        closedHand.classList.add('active');
    }
})