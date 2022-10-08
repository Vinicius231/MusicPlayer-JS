let antes = document.querySelector('.imgantes')
let play = document.querySelector('.imgplay')
let next = document.querySelector('.imgnext')
let nomedamusica = document.querySelector('.nomedamusica')
let ponta1 = document.querySelector('.ponta1')
let ponta2 = document.querySelector('.ponta2')


var proxima = 0
var img = 0

let music = [
    './music/outside.mp3',
    './music/onon.mp3',
    './music/elektronomia.mp3'
]
let nome = [
    'Outside - The Seige',
    'Cartoon - On & On',
    'Elektronomia - Energy'
]

let audio = new Audio()
audio = new Audio(music[proxima])

function barraclick(){
    let barra = document.querySelector('.barra').value
    audio.currentTime = barra
}


function playclick(){
    if(img == 0 ){
        img = 1
        play.src='./icon/pausab.png'
        audio.play()
    } else if (img == 1){
        img = 0 
        play.src='./icon/playb.png'
        audio.pause()
    }
    nomedamusica.innerHTML = nome[proxima]
    setInterval(bar,800)
}
function nextclick(){
    audio.pause()
    proxima++  
    if(proxima >= music.length){proxima = 0}
    audio = new Audio(music[proxima])
    if(img== 0){
    } else if(img == 1){
        audio.play()
    }
    nomedamusica.innerHTML = nome[proxima]
    
}
function antesclick(){
    audio.pause()
    proxima--
    if(proxima == -1){
        proxima = music.length-1
    }
    audio = new Audio(music[proxima])
    if(img==0){
    } else if (img == 1){
        audio.play()
    }
    nomedamusica.innerHTML = nome[proxima]
}


function antesen(){
    antes.src='./icon/antesb.png' 
}
function antesout(){
    antes.src='./icon/antes.png'
}
function playen(){
    if(img == 0){
        play.src='./icon/playb.png'
    } else if(img == 1){
        play.src='./icon/pausab.png'
    }

}
function playout(){
    if(img == 0 ){
        play.src='./icon/play.png'
    } else if(img == 1){
        play.src='./icon/pausa.png'
    }
}
function nexten(){
    next.src='./icon/nextb.png'
}
function nextout(){
    next.src='./icon/next.png'
}

function bar(){
    let tempoatual = document.querySelector('.tempoatual')
    let tempototal = document.querySelector('.tempototal')

    //tempo total
    var duration = Math.floor(audio.duration)
    var time = Math.floor(audio.currentTime)
    

    let minutos = Math.floor(duration/60)
    let segundos = Math.floor(duration%60) 

    //tempo atual
    
    let minuto = Math.floor(time/60)
    let segundo = Math.floor(time%60)

    if(minutos<10)(minutos = '0'+minutos)
    if(segundos<10)(segundos = '0'+segundos)

    if(minuto < 10){minuto='0'+minuto}
    if(segundo<10){segundo='0'+segundo}

    tempoatual.innerHTML = minuto+':'+segundo
    tempototal.innerHTML = minutos+':'+segundos

    if(time == duration){
        nextclick()
    }

    let barra = document.querySelector('.barra')

    barra.max = duration
    barra.value = time
}


