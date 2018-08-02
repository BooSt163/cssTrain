var slideCount = $('.slide-line').children().length;
var slideNow = 1;



$(document).ready(function() {
  $('.next').click(function(){
    nextSlide();
  });

  $('.prev').click(function(){
    prevSlide();
  });
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
    $('.slide-line').css('transform', 'translate(0,0)');
    slideNow = 1;
  }else{
    slideWidth = -$('.viewport').width() * (slideNow);
    $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
    slideNow++;
  }
};

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount){
      slideWidth = -$('.viewport').width() * (slideCount - 1);
      $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
      slideNow = slideCount;
    }else{
      slideWidth = -$('.viewport').width() * (slideNow - 2);
      $('.slide-line').css('transform', 'translate(' + slideWidth + 'px, 0)');
    }
    slideNow--;
};
