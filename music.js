let play = document.getElementById("play")
let next = document.getElementById("next")
let pre = document.getElementById("previous")
let sound = document.getElementById("sound")
let bar = document.getElementById("progressbar")
let songholder = Array.from(document.getElementsByClassName("songBox"))

let audio1Element = new Audio('songs/1.mp3')
let index = 0;
// audio1Element.play()

let songs = [
    { songName: "Kesariya", link: "/songs/1.mp3", pic: "/images/1.jpg" },
    { songName: "Sajni Re", link: "/songs/2.mp3", pic: "/images/2.jpg" },
    { songName: "Saiyara", link: "/songs/3.mp3", pic: "/images/3.jpg" },
    { songName: "Cigarate After Sex", link: "/songs/4.mp3", pic: "/images/4.jpg" },
    { songName: "Nagin Dance", link: "/songs/5.mp3", pic: "/images/5.jpg" },
    { songName: "Khairiyat", link: "/songs/6.mp3", pic: "/images/6.jpg" },
    { songName: "Hawayein", link: "/songs/7.mp3", pic: "/images/7.jpg" },
    { songName: "Mast Magan", link: "/songs/8.mp3", pic: "/images/8.jpg" },
    { songName: "Sanam Teri Kasam", link: "/songs/9.mp3", pic: "/images/9.jpg" },
    { songName: "Saware", link: "/songs/10.mp3", pic: "/images/10.jpg" },
    { songName: "Kishori", link: "/songs/11.mp3", pic: "/images/11.jpg" },
    { songName: "Bagichay Bulbuli Tui", link: "/songs/12.mp3", pic: "/images/12.jpg" },
    { songName: "Paglu dance", link: "/songs/13.mp3", pic: "/images/13.jpg" },
    { songName: "Thodi Si", link: "/songs/14.mp3", pic: "/images/14.jpg" }
]

songholder.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByClassName("image")[0].src = songs[i].pic
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName

})



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

const removeall = () => {
    Array.from(document.getElementsByClassName("image")).forEach((element) => {
        element.classList.remove("img2")
        element.classList.add("img1")
    })
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
}

Array.from(document.getElementsByClassName("image")).forEach((element) => {
    // console.log(element)
    element.addEventListener("click", (e) => {
        // console.log(element.src)
        removeall()
        e.target.classList.remove("img1")
        e.target.classList.add("img2")
        index = parseInt(e.target.id)
        audio1Element.src = `/songs/${index + 1}.mp3`
        audio1Element.currentTime = 0
        audio1Element.play()
        let footerImg = document.getElementById("footerImg")
        footerImg.src = element.src
        let footerText = document.getElementById("footerText")
        footerText.innerHTML = (element.nextElementSibling.innerHTML)
        play.classList.remove('fa-circle-play')
        play.classList.add("fa-circle-pause")
    })
})

next.addEventListener("click", () => {
    if (index < 13) {
        index++
    } else {
        index = 0
    }
    audio1Element.src = `/songs/${index + 1}.mp3`
    audio1Element.currentTime = 0
    audio1Element.play()
    let footerImg = document.getElementById("footerImg")
    footerImg.src = `/images/${index + 1}.jpg`
    let footerText = document.getElementById("footerText")
    footerText.innerHTML = songs[index].songName
    removeall()
    let imageNo = Array.from(document.getElementsByClassName("image"))
    imageNo[index].classList.remove("img1")
    imageNo[index].classList.add("img2")
    play.classList.remove('fa-circle-play')
    play.classList.add("fa-circle-pause")
})

pre.addEventListener("click", () => {
    if (index > 0) {
        index--
    } else {
        index = 13
    }
    audio1Element.src = `/songs/${index + 1}.mp3`
    audio1Element.currentTime = 0
    audio1Element.play()
    let footerImg = document.getElementById("footerImg")
    footerImg.src = `/images/${index + 1}.jpg`
    let footerText = document.getElementById("footerText")
    footerText.innerHTML = songs[index].songName
    removeall()
    let imageNo = Array.from(document.getElementsByClassName("image"))
    imageNo[index].classList.remove("img1")
    imageNo[index].classList.add("img2")
    play.classList.remove('fa-circle-play')
    play.classList.add("fa-circle-pause")
})

sound.addEventListener("click", () => {
    // console.log(audio1Element.muted)
    if (audio1Element.muted) {
        sound.classList.remove("fa-volume-xmark")
        sound.classList.add("fa-volume-high")
        audio1Element.muted = !(audio1Element.muted)
    } else {
        sound.classList.remove("fa-volume-high")
        sound.classList.add("fa-volume-xmark")
        audio1Element.muted = !(audio1Element.muted)
    }

})