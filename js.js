let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    if(window.scrollY > 0){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


// navbar active JavaScript Code

var sec = document.querySelectorAll('.section');
var links = document.querySelectorAll(".header .nav a");

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;                
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            links.forEach(links => {
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};