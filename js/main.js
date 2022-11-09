$(function() {
// $(".accordion-wrap").on("click", function(){
//     $(this).children().eq(1).slideToggle(300);
//     $(this).children().eq(0).toggleClass("accordion-no-bar");
//     $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
//     $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
//     $(this).find(".accordion-header").toggleClass("accordion-gold");
//     $(this).find(".fa").toggleClass("rotate-fa");

//     $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
// });
   // slider rooms index _map-kemping 
    $('#rooms').slick({
      dots:false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      
      responsive: [
        {
          breakpoint: 1213,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    //slider comments  index _review
    $('#comments').slick({
      dots:false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      
      responsive: [
        {
          breakpoint: 1213,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    //slider photo  index section _slider-photo
    $('#slid-photo').slick({
      dots:false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      
      responsive: [
        {
          breakpoint: 1213,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  
      
});
