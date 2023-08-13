const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach((sound) => {

const btn= document.createElement('button')
btn.classList.add('btn')
btn.innerText= sound


btn.addEventListener('click' ,() => {
    stopSong()
  document.getElementById(sound).play()
})
document.getElementById('buttons').appendChild(btn)
})

function stopSong(){
    sounds.forEach((sound) =>{
        const sng=document.getElementById(sound)
        sng.pause()
        sng.currentTime=0
    })
}

