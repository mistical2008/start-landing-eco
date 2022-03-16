import {
    updatePlayButton,
    togglePlay,
    timeoutFadeIn,
    timeoutFadeOut,
} from '../handlers/hero-player';

const videoOverlay = document.querySelector('.player__overlay');
const video = document.querySelector('.player__video');
const buttonPlay = document.querySelector('.player__button');
const iconPlay = document.querySelector('#player-btn-play');
const iconPause = document.querySelector('#player-btn-pause');

const heroHeader = document.querySelector('.hero__header');
const heroLid = document.querySelector('.hero__lid-wrapper');
const sidestick = document.querySelector('.sidestick-wrapper');

const elems = [buttonPlay, heroHeader, heroLid, sidestick];

console.log('player-module');
video.addEventListener('play', () =>
    updatePlayButton(video, iconPlay, iconPause)
);
video.addEventListener('play', (_e) => {
    for (let i = 0, len = elems.length; i < len; i++) {
        timeoutFadeOut(elems[i], i);
    }
});
video.addEventListener('pause', () =>
    updatePlayButton(video, iconPlay, iconPause)
);
video.addEventListener('pause', (_e) => {
    for (let i = 0, len = elems.length; i < len; i++) {
        timeoutFadeIn(elems[i], i);
    }
});
videoOverlay.addEventListener('click', () => togglePlay(video));
buttonPlay.addEventListener('click', () => togglePlay(video));
