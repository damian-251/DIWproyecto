'use strict'

// Incluye un botón fijo en la esquina inferior derecha de la pantalla.
//  El botón debe incluir un icono de flecha hacia arriba. 
//  Este botón debe aparecer cuando el usuario haya hecho scroll. 
//  Cuando es presionado sube hasta arriba del todo de forma animada. 
//  Puedes guiarte del siguiente ejemplo: codepen.io/Eniun/pen/VwYbKZG.

$(document).ready(function(){
    $("#toTop").css("display", "none");
       $(window).scroll(function(){
           if($(window).scrollTop() > 500){
               $("#toTop").fadeIn("slow");
           }
           else {
               $("#toTop").fadeOut("slow");
           }
       });
   });

$("#toTop").click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
});

