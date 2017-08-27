$(document).ready(function(){
   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.semi-circle').fadeOut();
     }
    else
     {
      $('.semi-circle').fadeIn();
     }
 });

});