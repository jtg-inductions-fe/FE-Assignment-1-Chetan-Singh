const menu = document.getElementById('header-menu');
const nav = document.getElementById('header-nav');
const menuIcon = document.getElementById('icon-menu');

menu.addEventListener('click', () => {
    let isMenuOpen = menuIcon.classList.contains('icon-close');

    if (isMenuOpen) {
        nav.classList.add('hidden');
        nav.classList.remove('active');

        menuIcon.classList.add('icon-menu');
        menuIcon.classList.remove('icon-close');
    } else {
        nav.classList.add('active');
        nav.classList.remove('hidden');

        menuIcon.classList.add('icon-close');
        menuIcon.classList.remove('icon-menu');
    }

    menu.setAttribute('aria-expanded', isMenuOpen.toString());
    nav.setAttribute('aria-hidden', (!isMenuOpen).toString());
});
