    let botonesVideo = document.getElementsByClassName("control-video")[0];
    let fondoArticulo = document.getElementsByClassName("entradas-blog");
    let valorVolumen = document.getElementById("valor-volumen");
    valorVolumen.innerText = Math.round(medio.volume*100) + "%";

    console.log(botonesVideo);
    console.log(fondoArticulo);
    function colorArticulo(color) {
        for (const elemento of fondoArticulo) {
            elemento.style.backgroundColor = color;
        }
        botonesVideo.style.backgroundColor = color;
    }
    


function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        document.body.style.backgroundColor = 'whitesmoke';
        colorArticulo("white");
        
    }else {
        medio.play();
        play.value = '||';
        document.body.style.backgroundColor = 'grey';
        colorArticulo("grey");
    }
}
function accionReiniciar() {
    medio.currentTime = 0;
    medio.play();
    play.value = '||';
    document.body.style.backgroundColor = 'grey';

}
function accionRetrasar() {
    if (medio.currentTime > 5) {
        medio.currentTime -= 5;
    } else {
        medio.currentTime = 0;
    }
}

function accionAdelantar() {
    if (medio.currentTime >= 0 && medio.currentTime < medio.duration - 5) {
        medio.currentTime += 5;
    } else {
        if (medio.currentTime >= medio.duration - 5) { //Para que se pause si llega al final
            play.value = '\u25BA'; //\u25BA
            medio.pause();
            medio.currentTime = medio.duration;
            document.body.style.backgroundColor = '#fff';
        }
    }
}

function accionSilenciar() {
    console.log(medio.muted);
    if (medio.muted == true) {
        medio.muted = false;
        silenciar.value = "Silenciar";
    } else {
        medio.muted = true;
        silenciar.value = "Escuchar";
    }
    //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen() {
    console.log(medio.volume);
    if (medio.volume <= 0.9) {
        medio.volume += 0.1;
        if (medio.muted == true) {
            medio.muted = false;
            silenciar.value = "Silenciar";
        }
    }
    valorVolumen.innerText = Math.round(medio.volume*100) + "%";

    //Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen() {
    if (medio.volume >= 0) {
        medio.volume -= .1;
        console.log(medio.volume);
        //Si está silenciado al modificar el volumen cancelamos el silencio
        if (medio.muted == true) {
            medio.muted = false;
            silenciar.value = "Silenciar";
        }
        if (medio.volume < 0.1) {
            //Si el volumen es menos de 0.1 silenciamos el vídeo
            medio.volume = 0;
            medio.muted = true;
            silenciar.value = "Escuchar";
        }
        valorVolumen.innerText = Math.round(medio.volume*100) + "%";


    }
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);