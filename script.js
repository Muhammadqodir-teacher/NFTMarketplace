let sections = document.querySelector(".section");
let navLInk = document.querySelector(".nav__link");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top  = window.screenY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLInk.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id  +']'),classList.add('active');
            })
        };
    });
}