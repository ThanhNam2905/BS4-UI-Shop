

const navLinks = document.querySelectorAll('.header #collapseNavbarMenu .navbar-nav .nav-item .nav-link');

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active')
        })
    })
}