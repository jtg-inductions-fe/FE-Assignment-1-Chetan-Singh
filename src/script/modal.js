const menu = document.getElementById('header-menu');
const nav = document.getElementById('header-nav');
const focusables = document.querySelectorAll('.header__nav .btn--link');

const n = focusables.length;
const firstEm = focusables[0];
const lastEm = focusables[n - 1];

function handleTabIndex(value) {
    focusables.forEach((item) => (item.tabIndex = value));
}

if (!nav.classList.contains('active')) {
    handleTabIndex('-1');
}

menu.addEventListener('click', () => {
    const isActive = nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        firstEm.focus();
        handleTabIndex('0');
        document.body.style.overflow = 'hidden';
    } else {
        handleTabIndex('-1');
        document.body.style.overflow = 'auto';
    }

    menu.setAttribute('aria-expanded', isActive.toString());
    nav.setAttribute('aria-hidden', (!isActive).toString());
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstEm) {
                e.preventDefault();
                lastEm.focus();
            }
        } else {
            if (document.activeElement === lastEm) {
                e.preventDefault();
                firstEm.focus();
            }
        }
    }
});
