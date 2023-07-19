const iconOpen = document.querySelector('#icon-open');
const navbar = document.querySelector('#page-navbar');
const iconClose = document.querySelector('#icon-close');



iconOpen.addEventListener('click', () => {
    navbar.classList.add('visible');
})

iconClose.addEventListener('click', () => {
    navbar.classList.remove('visible');
})

