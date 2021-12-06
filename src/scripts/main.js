import { fixViewportHeight } from './utils';
import { devLogEntryLoaded } from './utils/debug';

devLogEntryLoaded();

const siteHead = document.querySelector('.site-head');
const navToggle = document.querySelector('.nav-toggle');
const burgerOpened = 'burger-opened';

function toggleMainNav (navToggle) {
    navToggle.addEventListener('click', (_) => {
        siteHead.classList.toggle(burgerOpened);
    })
}

// Main runtime function
function main() {
    fixViewportHeight();

    // >>> Place your code there
    toggleMainNav(navToggle);
    // <<< Place your code there
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});
