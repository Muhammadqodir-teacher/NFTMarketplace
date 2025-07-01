// ================navigatsion for mobile device======
let menuOpened = false

const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");
const navClose = document.getElementById("nav--close");
const navToggleIcon = document.getElementById("nav--toggle-icon");


navToggle.addEventListener('click', () =>{
    navMenu.style.left = 0;
    navToggleIcon.style.rotate = "180deg"
    menuOpened = true
});


navClose.addEventListener('click', () =>{
    navMenu.style.left = '-100%';
    navToggleIcon.style.rotate = "0deg"
    menuOpened = false  
});

document.addEventListener('click', (e) => {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedToggle = navToggle.contains(e.target);

    if (navMenu.style.left === '0px' && !clickedInsideMenu && !clickedToggle ) {
        navMenu.style.left = '-100%';
        navToggleIcon.style.rotate = "180deg"
        menuOpened = true
    }
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