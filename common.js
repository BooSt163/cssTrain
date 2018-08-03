var slideCount = $('.slide-line').children().length; //счетчик количества слайдов
var slideNow = 1;
var tabCount = Array.from({ length: slideCount }, (v, k) => k); // порядковые номера слайдов


$(document).ready(function() {
  $('.next').click(function(){
    nextSlide();
  });

  $('.prev').click(function(){
    prevSlide();
  });

  console.log(tabCount);


    for (var i = 1; i <= slideCount; i++) { //метод, который берет порядковый номер слайда, и выводит заголовок - ссылку на него (еще нет)
    	$('.tabsList').append('<li>Test Tab</li>')
    }

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
