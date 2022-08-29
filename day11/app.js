// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', addModal)
closeBtn.addEventListener('click', removeModal)

function addModal(){
    modalOverlay.classList.add('open-modal')
}

function removeModal (){
    modalOverlay.classList.remove('open-modal')
}
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
