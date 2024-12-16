// script.js
const heroSection = document.querySelector('.hero');

heroSection.addEventListener('mouseover', () => {
    heroSection.classList.add('hover-animation');
});

heroSection.addEventListener('mouseout', () => {
    heroSection.classList.remove('hover-animation');
});