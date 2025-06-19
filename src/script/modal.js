const menu = document.getElementById('header-menu');
const modal = document.getElementById('header-nav');

menu.addEventListener('click', () => {
    modal.classList.toggle('active');
});
