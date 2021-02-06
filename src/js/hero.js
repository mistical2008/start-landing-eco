const video = document.querySelector(".hero__bg-video")
const buttonPlay = document.querySelector(".player__button")
const videoOverlay = document.querySelector(".player__overlay")
const heroHeader = document.querySelector(".hero__header")
const heroLid = document.querySelector(".hero__lid-wrapper")
const sidestick = document.querySelector(".sidestick-wrapper")
const elems = [buttonPlay, heroLid, sidestick, heroHeader]

const togglePlay = () => {
  const method = video.paused ? "play" : "pause"
  video[method]()
}

const updatePlayButton = () => {
  console.log(video.paused)
  const classNames = video.paused ? ["pause", "play"] : ["play", "pause"]
  buttonPlay.classList.remove(classNames[0])
  buttonPlay.classList.add(classNames[1])
}

const updateOverlay = () => {
  const method = video.paused ? "add" : "remove"
  videoOverlay.classList[method]("player__overlay_dark")
}

const fadeOut = (element, direction) => {
  element.classList.add("fadeout", `fadeout_${direction}`)
}

const fadeIn = (element, direction) => {
  element.classList.remove("fadeout", `fadeout_${direction}`)
}

const timeoutFadeOut = (elem, index) => {
  setTimeout(() => {
    fadeOut(elem, "top")
  }, index * 200)
}

const timeoutFadeIn = (elem, index) => {
  setTimeout(() => {
    fadeIn(elem, "top")
  }, index * 200)
}

video.addEventListener("play", updatePlayButton)
video.addEventListener("play", updateOverlay)
video.addEventListener("play", (e) => {
  for (let i = 0, len = elems.length; i < len; i++) {
    timeoutFadeOut(elems[i], i)
  }
})
video.addEventListener("pause", updatePlayButton)
video.addEventListener("pause", updateOverlay)
video.addEventListener("pause", (e) => {
  for (let i = 0, len = elems.length; i < len; i++) {
    timeoutFadeIn(elems[i], i)
  }
})
videoOverlay.addEventListener("click", togglePlay)
buttonPlay.addEventListener("click", togglePlay)