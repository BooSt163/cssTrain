
(function(){
  function Slider(options){
    var _ = this;
    _.slider_wrap = $(options.slider).length != 0 ? $(options.slider) : $('.slider');
    _.arrow = $(options.arrow).length != 0 ? $(options.arrow) : $('.arrow');
    _.slider = _.slider_wrap.find(options.viewport).length != 0 ? _.slider_wrap.find(options.viewport) : _.slider_wrap.find('.multislide');
    _.slider_inner = _.slider_wrap.find(options.slide_line).length != 0 ? _.slider_wrap.find(options.slide_line) : _.slider_wrap.find('.multislide-wrap');
    _.item = _.slider_wrap.find(options.item).length != 0 ? _.slider_wrap.find(options.item) : _.slider_wrap.find('.slide-item');
    tabId = 0;
    slideNow = 1;
    slideCount = $('.slide-line').children().length; //счетчик количества слайдов
    _.itemBuilder = function(){
      for (var i = 1; i <= slideCount; i++) { //метод, который берет порядковый номер слайда, и выводит заголовок - ссылку на него
        $('.tabsList').append('<li class="tabItem"></li>');
      };
      for(var i = 0; i <= slideCount; i++){
        slideTitle = $($('.slide-item .title')[i]).text();
        $($('.tabItem')[i]).text(slideTitle);
      };
    };
    _.tabNav = function(){
      $('.tabItem').click(function(){ //Навигация по табам
        tabId = $(this).index();
        if (tabId + 1 != slideNow){
          slideWidth = -$('.viewport').width() * (tabId);
          $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
          slideNow = tabId + 1;
        }
      });
    };
    _.navLogic = function(){
      _.arrow.click(function(){
        if ($(this).closest('.arrow').hasClass('next')) {
          if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
            $('.slide-line').css('transform', 'translate(0,0)');
            slideNow = 1;
          }else{
            slideWidth = -$('.viewport').width() * (slideNow);
            $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
            slideNow++;
          }
        } else if ($(this).closest('.arrow').hasClass('prev')) {
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
      });
      };

    _.init = function(){
      _.itemBuilder();
      _.tabNav();
      _.navLogic();
    };
}
window.sslider = Slider;
})();

var slider = new sslider({
  slider: '.slider1',
  arrow: '.arrow',
  viewport: '.viewport',
  slide_line: '.slide-line',
  item: '.slide-item'
});
slider.init();

var slider_second = new sslider({
  slider: '.slider2',
  arrow: '.arrow',
  viewport: '.viewport',
  slide_line: '.slide-line',
  item: '.slide-item'
});
slider_second.init();
