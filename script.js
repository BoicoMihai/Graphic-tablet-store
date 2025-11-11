const imgs = document.getElementById('imgs')
const preBtn = document.getElementById('pre')
const nxtBtn = document.getElementById('next')

const img = document.querySelectorAll('#imgs img')
let idx = 0
let interval = setInterval(run, 2000)

function run(){
    idx++
    slideShow()
}

function slideShow(){
    if(idx > img.length -1){
        idx = 0
    } else if(idx < 0){
        idx = img.length -1
    }
    imgs.style.transform  = `translateX(${-idx * 100}%)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 3500)
}

nextBtn.addEventListener('click', ()=>{
    idx++
    slideShow()
    resetInterval()
})

preBtn.addEventListener('click', ()=>{
    idx--
    slideShow()
    resetInterval()
})