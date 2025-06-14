import 'normalize.css';
import '../styles/sass/main.scss';

// Modal functionality
const menu = document.querySelector('.icon-menu');
const modal = document.querySelector('.header__nav');

menu.addEventListener('click', () => {
    modal.classList.toggle('active');
});
