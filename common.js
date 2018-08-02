var line = $('.slide-line').width();
var slide = line /(line / $('.slide-item').width());
var slideCount = $('.slide-line').children().length;
var slideNow = 1;

$(document).ready(function(){

  $(function nextSlide(){

    if(slideNow > slideCount){
      $('#slider').find('.next').click(function(){
        $('.slide-line').css('transform','translateX(0)')
        slideNow = 1;
      })
    }else{
      $('#slider').find('.next').click(function(){
        $('.slide-line').css('transform','translateX(-'+slide+'px)')
        slideNow++;
      });
    }
    console.log(slideNow);
  });

  $(function prevSlide(){
      $('#slider').find('.prev').click(function(){
        $('.slide-line').css('transform','translateX('+slide+'px)')
      });
  });
});
