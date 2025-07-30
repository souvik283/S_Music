let play = document.getElementById("play")
let next = document.getElementById("next")
let pre = document.getElementById("previous")
let sound = document.getElementById("sound")
let bar = document.getElementById("progressbar")

let audio1Element = new Audio('songs/3.mp3')
// audio1Element.play()

let songs = [
    { songName: "laila main laila", link: "/songs/1.mp3", pic: "/images/1.jpg" },
    { songName: "dhfh", link: "/songs/2.mp3", pic: "/images/2.jpg" },
    { songName: "dil se dil tak", link: "/songs/3.mp3", pic: "/images/3.jpg" },
    { songName: "cigarate after sex", link: "/songs/4.mp3", pic: "/images/4.jpg" }

]

play.addEventListener("click", () => {
    if (audio1Element.paused || audio1Element.currentTime <= 0) {
        audio1Element.play()
        play.classList.remove('fa-circle-play')
        play.classList.add("fa-circle-pause")

    } else {
        audio1Element.pause()
        play.classList.remove("fa-circle-pause")
        play.classList.add("fa-circle-play")
    }
})

audio1Element.addEventListener("timeupdate", () => {
    // console.log(timeupdate)
    let istime = parseInt((audio1Element.currentTime / audio1Element.duration) * 100)
    bar.value = istime
})

bar.addEventListener("change", () => {
    audio1Element.currentTime = ((bar.value * audio1Element.duration) / 100)
})