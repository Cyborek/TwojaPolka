document.addEventListener("DOMContentLoaded", function(){

var navOffset = $('nav').offset().top;

$(window).scroll(function(){
   var scrollPositon = $(window).scrollTop();

   if(scrollPositon > navOffset){
      $('nav').addClass('sticky');
   } else{
      $('nav').removeClass('sticky')
   }
   function startAnimate(){
      var coloms = $('.coloms').scrollTop();
      if(scrollPositon > coloms){
         $('.coloms').addClass('animated zoomIn');
      }
   }

   startAnimate();

});
function setBindings(){
   $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );

     if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
           scrollTop: target.offset().top
        }, 1000);
     }
  });
}
setBindings();

$('#h-content').addClass('animated fadeIn');

});

