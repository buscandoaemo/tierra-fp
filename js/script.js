// Fixed Navbar on Scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Dynamic Active Class on Scroll
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    let foundActive = false; // Variable para verificar si se encuentra una sección activa

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop - 50; // Ajusta según la altura de tu navbar
        let sectionHeight = section.offsetHeight;
        let scrollPosition = window.pageYOffset;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
            foundActive = true; // Se encontró una sección activa
        }
    });

    // Si no se encuentra ninguna sección activa, remover la clase 'active' de todos los enlaces
    if (!foundActive) {
        navLinks.forEach(link => link.classList.remove("active"));
    }
};

// Ancla
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 40; // Ajusta este valor según la altura de tu navbar
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

// Carrousel
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
