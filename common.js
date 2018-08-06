(function () {
  

}());
var slideCount = $('.slide-line').children().length; //счетчик количества слайдов
var slideNow = 1;
var tabId = 0;


$(document).ready(function() {


  $('.arrow').click(function(){
    var ths = $(this);
    nav(ths);
  })

  for (var i = 1; i <= slideCount; i++) { //метод, который берет порядковый номер слайда, и выводит заголовок - ссылку на него
    $('.tabsList').append('<li class="tabItem"></li>');
  };

  for(var i = 0; i <= slideCount; i++){
    slideTitle = $($('.slide-item .title')[i]).text();
    $($('.tabItem')[i]).text(slideTitle);
  };

  $('.tabItem').click(function(){ //Навигация по табам
    tabId = $(this).index();
    if (tabId + 1 != slideNow){
      slideWidth = -$('.viewport').width() * (tabId);
      $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
      slideNow = tabId + 1;
    }
  });

});

function nav(arrow) {
  if (arrow.hasClass('next')) {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
      $('.slide-line').css('transform', 'translate(0,0)');
      slideNow = 1;
    }else{
      slideWidth = -$('.viewport').width() * (slideNow);
      $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
      slideNow++;
    }
  } else if (arrow.hasClass('prev')) {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount){
      slideWidth = -$('.viewport').width() * (slideCount - 1);
      $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
      slideNow = slideCount;
    }else{
      slideWidth = -$('.viewport').width() * (slideNow - 2);
      $('.slide-line').css('transform', 'translate(' + slideWidth + 'px, 0)');
    }
    slideNow--;
  }
}
