// ================navigatsion for mobile device======

const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");
const navClose = document.getElementById("nav--close");


navToggle.addEventListener('click', () =>{
    navMenu.style.left = 0;
});





// ==================search======================
const searchIcon = document.querySelector(".nav__call-search");
const searchContainer = document.querySelector(".search__container");
const searchClose = document.querySelector(".search-close");

searchIcon.addEventListener('click', () =>{
    searchContainer.style.display = "flex"
});

searchClose.addEventListener('click', () =>{
    searchContainer.style.display = "none"
})