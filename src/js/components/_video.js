import slick from 'slick-carousel';

var slider_ = $('.js-slider');

slider_.on('init', function(slick) {
  var this_ = $(this);
  var videoFirst = this_.find($('.js-video'))[1];
  //   console.log(videoFirst);
  var src = $(videoFirst).data('src');
  $(videoFirst).attr('src', src);
});
    
slider_.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});
    
    
var slideTrue = $('.slick-slide').not('.slick-cloned');
var video = slideTrue.find($('.js-video'));

slider_.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    
  var videoNext = video[nextSlide];
  //   console.log(slick);
  var src = $(videoNext).data('src');
  $(videoNext).attr('src', src);
}
);

slider_.on('afterChange', function(event, slick, currentSlide) {
//   console.log(slick);
  var slideHidden = $('.slick-slide').not('.slick-active');
  var videoHidden = slideHidden.find($('.js-video'));

  $(videoHidden).removeAttr('src');
}
);
