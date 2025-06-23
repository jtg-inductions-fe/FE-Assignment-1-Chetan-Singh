const menu = document.getElementById('header-menu');
const nav = document.getElementById('header-nav');
const menuIcon = document.getElementById('icon-menu');

/**
 * function for opening the menu and changing the menu icon to cross
 */
function handleMenuOpen() {
    nav.classList.add('active');
    nav.classList.remove('hidden');

    menuIcon.classList.add('icon-close');
    menuIcon.classList.remove('icon-menu');

    document.body.classList.remove('scroll');
    document.body.classList.add('no-scroll');
}

/**
 * function for closing the menu and changing the menu icon to hamburger
 */
function handleMenuClose() {
    nav.classList.add('hidden');
    nav.classList.remove('active');

    menuIcon.classList.add('icon-menu');
    menuIcon.classList.remove('icon-close');

    document.body.classList.add('scroll');
    document.body.classList.remove('no-scroll');
}

/**
 * event listener for listening to Esc key press
 * and changing the aria attributes accordingly
 */
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuIcon.classList.contains('icon-close')) {
        handleMenuClose();

        menu.setAttribute('aria-expanded', false);
        nav.setAttribute('aria-hidden', true);

        return;
    }
});

/**
 * event listener for listening to the click event on menu icon
 * and changing the aria attributes accordingly
 */
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
