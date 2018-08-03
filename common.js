var slideCount = $('.slide-line').children().length; //счетчик количества слайдов
var slideNow = 1;
var slidePos = Array.from({ length: slideCount }, (v, k) => k); // порядковые номера слайдов


$(document).ready(function() {
  $('.next').click(function(){
    nextSlide();
  });

  $('.prev').click(function(){
    prevSlide();
  });


    for (var i = 1; i <= slideCount; i++) { //метод, который берет порядковый номер слайда, и выводит заголовок - ссылку на него (еще нет)
    	$('.tabsList').append('<li>Test</li>')
    };

var tabCount = $('.tabsList').children().length; //до цикла не существует поэтому объявлено тут
var tabPos = Array.from({ length: tabCount }, (v, k) => k); //порядковые номера табов

$('.tabsList').on('click', 'li', function () { //определяем порядковый номер таба  на который кликнули
    var n=$('.tabsList li').index(this);
    console.log(n);
});


// $(this).click(function(){
//   chooseTab();
// });

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


// function chooseTab() {  //функция, которая будет сравнивать порядковый номер таба и слайда и крутить пока не совпадет
//   while(n != slideNow ){
//     slideWidth = -$('.viewport').width() * (slideNow);
//     $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
//   }
// }
