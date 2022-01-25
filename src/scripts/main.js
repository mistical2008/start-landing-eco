import { Swiper } from './handlers/swiper';
import { fixViewportHeight } from './utils';
import { devLogEntryLoaded } from './utils/debug';
import { handleWindowResizeEvents } from './events/resize';

devLogEntryLoaded();

const siteHead = document.querySelector('.site-head');
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav--main');
const socialLinksWrapper = document.querySelector('.social-links--wrapper');
const burgerOpened = 'burger-opened';

function initMainNavToggler(navToggle) {
    function showMainNav(timing = 500, className = 'sr-only') {
        setTimeout(() => {
            navMain.classList.remove(className);
        }, timing);
    }

    function showSocials(timing = 500, styles = {opacity: '1', transform: 'translateX(0)'}) {
        setTimeout(() => {
            socialLinksWrapper.style.opacity = styles.opacity
            socialLinksWrapper.style.transform = styles.transform
        }, timing)
    }

    function closeMobileMenu() {
        siteHead.classList.remove(burgerOpened);
        navMain.classList.add('sr-only');
        socialLinksWrapper.style.opacity = '0'
        socialLinksWrapper.style.transform = 'translateX(-10px)'
    }

    navToggle.addEventListener('click', (_) => {
        let menuOpened = siteHead.classList.contains(burgerOpened);

        if (menuOpened) {
            closeMobileMenu();
            return;
        }

        siteHead.classList.add(burgerOpened);
        showMainNav(500);
        showSocials(800);
    });
}

function initSwiper() {
    window.swiper = new Swiper('.swiper-container', {
        mousewheel: {
            invert: false,
            interval: 400,
        },
        navigation: {
            prevEl: '.swiper-plugin-navigation-prevEl',
            nextEl: '.swiper-plugin-navigation-nextEl',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        centeredSlides: true,
        slidesPerView: 1,
    });
}

// Main runtime function
function main() {
    fixViewportHeight();

    // >>> Place your code there
    initMainNavToggler(navToggle);
    initSwiper();
    // <<< Place your code there

    // handle events
    handleWindowResizeEvents(window.swiper.updateSize)
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});

