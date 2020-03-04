$(document).ready(function(){
  $('.coaches-list').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
     responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
