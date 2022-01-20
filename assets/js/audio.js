'use strict'

let botonesAudio = document.getElementsByClassName("audio-selector");
let cancionesMp3 = ["","ciudad.mp3", "estanque.mp3", "misa.mp3", "obra.mp3" ];
let i = 0;

Array.from(botonesAudio, function(botonAudio, i) {
    botonAudio.addEventListener("click", function(event) {
        click++;
        console.log(click);
        let audioObject = new Audio("./assets/audio/" + cancionesMp3[i]);
        audioObject.play();
        console.log(audioObject.play());     
    });
    i++;
});
