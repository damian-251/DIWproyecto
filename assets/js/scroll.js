'use strict'

let salto = 100; //Para tener en cuenta el menú de arriba
let numeroEntradas = $(".entrada").length;
let x;

$(document).ready(function(){
  for (let index = 1; index <= numeroEntradas; index++) {
    $(".entrada" + index + "href").click(function(){
      console.log(index);
      x = $("#entrada"+ index +"").offset();
      $('html, body').animate({scrollTop:x.top - salto}, 'slow');
    });
  }
});
