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

//  Registration form 
const user = document.getElementById('account-btn')
const closeForm = document.getElementById('close-form')
user.addEventListener('click', ()=>{
    document.querySelector('.account-form').classList.add('active-form')
});

closeForm.addEventListener('click', ()=>{
    closeForm.classList.toggle('transform')
    setTimeout( ()=> {
        document.querySelector('.account-form').classList.remove('active-form')
    },500)
    
})
const loginBtn = document.querySelector('.log-in-btn')
const registerBtn = document.querySelector('.register-btn')

registerBtn.addEventListener('click', ()=>{
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    document.querySelector('.login-form').classList.remove('active')
    document.querySelector('.register-form').classList.add('active')

})

loginBtn.addEventListener('click', ()=>{
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
    document.querySelector('.login-form').classList.add('active')
    document.querySelector('.register-form').classList.remove('active')

});

// photo slides

const swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
  });