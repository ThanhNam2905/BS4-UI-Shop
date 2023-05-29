
// ---------------- jQuery ----------------------
$(window).on('load', function() {
    setTimeout(function() {
        $("#preloader").fadeOut('slow')
    }, 1500);
})


$(document).ready(function () {

    // Initiate the wowjs
    new WOW().init();

    // Owl carousel
    $('#products-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1280: {
                items: 4
            }
        }
    });

    $('#testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })

    // Add scrollspy to body
    $('body').scrollspy({ target: '.navbar-nav', offset: 68 });

    $('.navbar-nav .nav-item .nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1500);

        // $('.navbar-collapse').collapse("hide");
    });
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

