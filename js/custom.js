$(document).ready(function(){
  $(document).scroll(function(){
    if($(document	).scrollTop() > 200){
      $('.semi-circle').hide();
    }
  });
});