export const togglePlay = (video) => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    console.log('togglePlay runs');
};

export const updatePlayButton = (video, iconPlay, iconPause) => {
    console.log({ updatePlayButton: video.paused });
    iconPlay.classList.toggle('hidden');
    iconPause.classList.toggle('hidden');
};

export const fadeOut = (element, direction) => {
    // element.classList.add(`fadeout_${direction}`)
    element.classList.add('fadeout', `fadeout_${direction}`);
};

export const fadeIn = (element, direction) => {
    // element.classList.add(`fadeout_${direction}`)
    element.classList.remove('fadeout', `fadeout_${direction}`);
};

export const timeoutFadeOut = (elem, index) => {
    setTimeout(() => {
        fadeOut(elem, 'top');
    }, index * 300);
};

export const timeoutFadeIn = (elem, index) => {
    setTimeout(() => {
        fadeIn(elem, 'top');
    }, index * 300);
};
