// Fixed Navbar on Scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Repliega el menú cuando se hace clic en un elemento del menú o cuando el mouse sale del nav
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón del menú y el contenedor del menú
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Cuando el mouse sale del área del menú, se repliega el menú
    navbarCollapse.addEventListener('mouseleave', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // Cuando se hace clic en un ítem del menú, se repliega el menú
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});


// Handle Active Class on Click
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // Ajusta este valor según la altura de tu navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Carousel Swipe Handling
document.querySelectorAll('.carousel').forEach(carousel => {
    let startX, endX;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe(carousel);
    });

    carousel.addEventListener('mousedown', (e) => {
        startX = e.screenX;
    });

    carousel.addEventListener('mouseup', (e) => {
        endX = e.screenX;
        handleSwipe(carousel);
    });

    function handleSwipe(carousel) {
        if (startX > endX) {
            $(carousel).carousel('next');
        } else if (startX < endX) {
            $(carousel).carousel('prev');
        }
    }
});
