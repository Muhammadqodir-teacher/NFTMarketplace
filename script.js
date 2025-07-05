// =========== show menu ==================
const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");
const navClose = document.getElementById("nav--close");


navToggle.style.color = "#ff0000"

if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show--menu");
        navClose.style.color = "#7fff00"
        navToggle.style.color = "#7fff00"
        navToggle.style.display = "#ff0000"
    })
}

if (navMenu) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show--menu");
        navClose.style.color = "#ff0000"
        navToggle.style.color = "#ff0000"
    })
}

// =========== navlink active =============

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);