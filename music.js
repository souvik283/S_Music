let play=document.getElementById("play")
let next=document.getElementById("next")
let pre =document.getElementById("previous")
let sound=document.getElementById("sound")
let bar=document.getElementById("progressbar")

let audio1Element = new Audio('2.mp3')
// audio1Element.play()

let songs =[
    {songName: "laila main laila", link:"/song/1.mp3", pic:"/image/1.jpg"},
    {songName: "laila main laila", link:"/song/1.mp3", pic:"/image/1.jpg"},
    {songName: "laila main laila", link:"/song/1.mp3", pic:"/image/1.jpg"},
    {songName: "laila main laila", link:"/song/1.mp3", pic:"/image/1.jpg"}

]
play.addEventListener("click", ()=>{
    if(audio1Element.paused || audio1Element.currentTime <= 0){
        audio1Element.play()
        play.classList.remove('fa-circle-play')
        play.classList.add("fa-circle-pause")
      
    }else{
        audio1Element.pause()
        play.classList.remove("fa-circle-pause")
        play.classList.add("fa-circle-play")
    }
})
