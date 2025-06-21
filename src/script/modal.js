const menu = document.getElementById('header-menu');
const nav = document.getElementById('header-nav');
const menuIcon = document.getElementById('icon-menu');

function handleMenuOpen() {
    nav.classList.add('active');
    nav.classList.remove('hidden');

    menuIcon.classList.add('icon-close');
    menuIcon.classList.remove('icon-menu');
}

function handleMenuClose() {
    nav.classList.add('hidden');
    nav.classList.remove('active');

    menuIcon.classList.add('icon-menu');
    menuIcon.classList.remove('icon-close');
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuIcon.classList.contains('icon-close')) {
        handleMenuClose();

        menu.setAttribute('aria-expanded', false);
        nav.setAttribute('aria-hidden', true);

        return;
    }
});

menu.addEventListener('click', () => {
    const isMenuOpen = menuIcon.classList.contains('icon-close');

    if (isMenuOpen) {
        handleMenuClose();
    } else {
        handleMenuOpen();
    }

    menu.setAttribute('aria-expanded', !isMenuOpen);
    nav.setAttribute('aria-hidden', isMenuOpen);
});
