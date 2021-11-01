const video = document.querySelector(".hero__bg-video")
const buttonPlay = document.querySelector(".player__button")
const videoOverlay = document.querySelector(".hero__overlay")
const heroHeader = document.querySelector(".hero__header")
const heroLid = document.querySelector(".hero__lid-wrapper")
const sidestick = document.querySelector(".sidestick-wrapper")
const elems = [buttonPlay, heroHeader, heroLid, sidestick]

const togglePlay = () => {
  const method = video.paused ? "play" : "pause"
  video[method]()
}

const updatePlayButton = () => {
  console.log(video.paused)
}

const fadeOut = (element, direction) => {
  // element.classList.add(`fadeout_${direction}`)
  element.classList.add("fadeout", `fadeout_${direction}`)
}

const fadeIn = (element, direction) => {
  // element.classList.add(`fadeout_${direction}`)
  element.classList.remove("fadeout", `fadeout_${direction}`)
}

const timeoutFadeOut = (elem, index) => {
  setTimeout(() => {
    fadeOut(elem, "top")
  }, index * 300)
}

const timeoutFadeIn = (elem, index) => {
  setTimeout(() => {
    fadeIn(elem, "top")
  }, index * 300)
}

video.addEventListener("play", updatePlayButton)
video.addEventListener("play", (e) => {
  for (let i = 0, len = elems.length; i < len; i++) {
    timeoutFadeOut(elems[i], i)
  }
})
video.addEventListener("pause", updatePlayButton)
video.addEventListener("pause", (e) => {
  for (let i = 0, len = elems.length; i < len; i++) {
    timeoutFadeIn(elems[i], i)
  }
})
videoOverlay.addEventListener("click", togglePlay)
buttonPlay.addEventListener("click", togglePlay)
