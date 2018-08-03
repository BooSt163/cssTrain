var slideCount = $('.slide-line').children().length; //счетчик количества слайдов
var slideNow = 1;


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
var number;


$('.tabsList li').each(function () { //определяем порядковый номер таба
    var number=$('.tabsList li').index(this);
    console.log('Номер таба:' + number);
});


// $(this).click(function(){
//   chooseTab();
//   console.log(number);
// });


});

$(document).ready(function(){ //присваивание id div со слайдами

    var i=0;
    $('.slide-line div').each(function(){
      i++;
      $(this).attr('id',i);
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


// function chooseTab(getNumber) {  //функция, которая будет сравнивать порядковый номер таба и слайда и крутить пока не совпадет
//       var number = getNumber; //пока вечный цикл
//       while(number + 1 != $('.slide-line div').attr('id') ){
//     slideWidth = -$('.viewport').width() * (slideNow);
//     $('.slide-line').css('transform', 'translate('+ slideWidth +'px, 0)');
//   }
// }
