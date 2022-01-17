import { Swiper } from './handlers/swiper';
import { fixViewportHeight } from './utils';
import { devLogEntryLoaded } from './utils/debug';

devLogEntryLoaded();

const siteHead = document.querySelector('.site-head');
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav--main');
const socialLinksWrapper = document.querySelector('.social-links--wrapper');
const burgerOpened = 'burger-opened';

function initMainNavToggler(navToggle) {
    navToggle.addEventListener('click', (_) => {
        let menuOpened = siteHead.classList.contains(burgerOpened);
        socialLinksWrapper.style.display = menuOpened ? 'none' : void 0;
        socialLinksWrapper.style.opacity = menuOpened ? '0' : '100';

        setTimeout(() => {
            socialLinksWrapper.style.display = menuOpened ? 'none' : 'block';
        }, 1000);

        if (menuOpened) {
            siteHead.classList.remove(burgerOpened);
            navMain.classList.add('sr-only');
            // navMain.classList.remove('not-sr-only');
            // socialLinksWrapper.classList.add('opacity-0');
            // socialLinksWrapper.classList.remove('opacity-100');

            setTimeout(() => {
                // debugger;
                // navMain.classList.add('opacity-0');
                // navMain.classList.remove('opacity-100');
                // socialLinksWrapper.classList.add('hidden');
                // socialLinksWrapper.classList.remove('block');
            }, 500);

            return;
        }

        siteHead.classList.add(burgerOpened);
        // navMain.classList.add('opacity-100');
        // navMain.classList.remove('opacity-0');
        // socialLinksWrapper.classList.add('block');
        // socialLinksWrapper.classList.remove('hidden');
        // socialLinksWrapper.classList.add('opacity-100');
        // socialLinksWrapper.classList.remove('opacity-0');
        socialLinksWrapper.style.display = menuOpened ? void 0 : 'block';

        setTimeout(() => {
            // navMain.classList.add('not-sr-only');
            navMain.classList.remove('sr-only');
        }, 500);
    });
}

function initSwiper() {
    const swiper = new Swiper('.swiper-container', {
        mousewheel: {
            invert: false,
            interval: 400,
        },
        navigation: {
            prevEl: '.swiper-plugin-navigation-prevEl',
            nextEl: '.swiper-plugin-navigation-nextEl',
        },
        centeredSlides: true,
    });
}

// Main runtime function
function main() {
    fixViewportHeight();

    // >>> Place your code there
    initMainNavToggler(navToggle);
    initSwiper();
    // <<< Place your code there
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});

