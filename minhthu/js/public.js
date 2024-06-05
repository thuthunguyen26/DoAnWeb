// ----------------------------------------------------------------modal----------------------------------------------------------------
var iconOpenModal = document.querySelector('.icon-menu-header')
var modal = document.querySelector('.modal')
var iconExitModal = document.querySelector('.modal-exit')

iconOpenModal.addEventListener('click', () => {
    modal.style.transform = 'translateX(0%)'
})

iconExitModal.addEventListener('click', () => {
    iconExitModal.style.transform = 'rotate(720deg) scale(1.2) '
    setTimeout(() => {
        modal.style.transform = 'translateX(100%)'
        iconExitModal.style.transform = 'rotate(0deg) scale(1)'
    }, 300)
})
// ----------------------------------------------------------------popup------------------------------------------------
var iconPop = document.querySelector('.pop-js')
var popup = document.querySelector('.popup')

iconPop.addEventListener('click', () => {
    popup.classList.toggle('open-popup')

})