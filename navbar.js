
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// Navbar color change
const navbar = document.querySelector('.navbar-wrapper');
const section = document.getElementById('project');
const projectsection = document.getElementById('#project-hero');
window.addEventListener('scroll', function () {
    if (window.scrollY > projectsection.offsetTop) {
        navbar.classList.add('bg-color-change');
    }
    else {
        navbar.classList.remove('bg-color-change');
    }
})
$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});