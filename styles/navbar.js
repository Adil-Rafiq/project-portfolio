const hamburger = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const mainHeader = document.querySelector('.main_navbar__content');


hamburger.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    primaryNav.classList.toggle('translateNavbar');

    if (visibility == "false")
    {
        primaryNav.setAttribute('data-visible', true);
        hamburger.setAttribute('aria-expanded', true);
    }
    else {
        primaryNav.setAttribute('data-visible', false);
        hamburger.setAttribute('aria-expanded', false);
    }
})