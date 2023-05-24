
// ---------------- jQuery ----------------------
$(document).ready(function () {
    // Initiate the wowjs
    new WOW().init();

    // Owl carousel
    $('#products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1280:{
                items:4
            }
        }
    })
})




// ---------------- Javascript ----------------------
const navLinks = document.querySelectorAll('.header #collapseNavbarMenu .navbar-nav .nav-item .nav-link');

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active')
        })
    })
}

