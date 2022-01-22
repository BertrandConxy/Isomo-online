// Toggle menu button
const navBar = document.querySelector('.navbar')
const closeMenu = document.getElementById('close-nav')
const openMenu = document.getElementById('menu-btn')

openMenu.addEventListener('click', ()=>{
    navBar.classList.add('active')
});

closeMenu.addEventListener('click', ()=>{
    closeMenu.classList.toggle('transform')
    setTimeout( ()=> {
        navBar.classList.remove('active')
    },500)
    
})