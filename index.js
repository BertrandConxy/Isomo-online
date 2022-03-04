// Toggle menu button
const navBar = document.querySelector('.navbar');
const closeMenu = document.getElementById('close-nav');
const openMenu = document.getElementById('menu-btn');

openMenu.addEventListener('click', () => {
  navBar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  closeMenu.classList.toggle('transform');
  setTimeout(() => {
    navBar.classList.remove('active');
  }, 500);
});

//  Registration form
const user = document.getElementById('account-btn');
const closeForm = document.getElementById('close-form');
user.addEventListener('click', () => {
  document.querySelector('.account-form').classList.add('active-form');
});

closeForm.addEventListener('click', () => {
  closeForm.classList.toggle('transform');
  setTimeout(() => {
    document.querySelector('.account-form').classList.remove('active-form');
  }, 500);
});
const loginBtn = document.querySelector('.log-in-btn');
const registerBtn = document.querySelector('.register-btn');

registerBtn.addEventListener('click', () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.login-form').classList.remove('active');
  document.querySelector('.register-form').classList.add('active');
});

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  document.querySelector('.login-form').classList.add('active');
  document.querySelector('.register-form').classList.remove('active');
});

// photo slides
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiper = new Swiper('.home-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

const swiper2 = new Swiper('.home-courses-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper('.teachers-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const swiper4 = new Swiper('.students-reviews', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const swiper5 = new Swiper('.logo-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

const loadBtn = document.querySelector('.btn');
loadBtn.addEventListener('click', () => {
  document.querySelectorAll('.courses .box-container .hide').forEach((show) => {
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
});

// accordions

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});
