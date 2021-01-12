// * HAMBURGER TOGGLE * \\
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// * REVEAL ELEMENTS ON SCROLL * \\
// Distance = from bottom to top 
// Duration = animation time 
// Easing = animation mode 
// Interval = for the delay effect between the img and the text in the second main section
ScrollReveal().reveal('.reveal', { distance: '50px', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 400 });




