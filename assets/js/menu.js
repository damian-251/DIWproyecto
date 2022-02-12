'use strict'

let control = true;
$('#trigger').on("click", function(e){
  e.preventDefault();
  if(control){
    $('nav').stop().slideToggle('fast');
    control = false;
    console.log('x es true');
  }else{
      console.log('x es otro');
    $('nav').stop().slideToggle('fast', function(){
      $('nav').css('display','');
      control = true;
    })
  } 
});