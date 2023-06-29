$(document).ready(function() {
    $('.carousel-inner').slick({
      dots: true, // tirar numeros e,mbaixo 
      arrows: false,
      infinite: false, // deixar infinito
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 902,
          settings: {
            slidesToShow:2
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow:3
          }
        },
      ]
    });
  });
  