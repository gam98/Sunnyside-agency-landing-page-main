const btn = document.getElementById('menu_icon')
const menu = document.querySelector('.menu')

btn.addEventListener('click',()=> {
    menu.classList.toggle('menu--show')
})