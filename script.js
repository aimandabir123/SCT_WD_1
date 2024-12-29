  // script.js
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active link based on scroll position
    let fromTop = window.scrollY;

    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop + 60 &&
            section.offsetTop + section.offsetHeight > fromTop + 60
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
