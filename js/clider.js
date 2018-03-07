$(function () {
    owl_icon();
    owl_hostel();
    parallax();
    poput_wind();
});
function owl_icon() {
  $(".owl-lake").owlCarousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    loop:true,
    marginleft: 5,
    marginright: 5,
    nav:true,
    item:5,
      dots: false,
    navText : ["",""],
    responsive:{
      0:{
        items:1
      },
      767:{
        items:2
      },
      990:{
        items:3
      },
      1200:{
        items:3
      },
      1601:{
        items:5
      },
    }
  });
}
function owl_hostel() {
    $(".owl-hostel ").owlCarousel({
        navigation : true,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop:true,
        nav:true,
        navigation : true,
        pagination : true,
        // autoplay:true,
        // autoplayTimeout:3000,
        item:1,
        dots: true,
        navText : ["",""],
        responsive:{
            0:{
                items:1
            },
        }
    });
}

function parallax() {
 AOS.init({
  disable: 'mobile'
});
}

function poput_wind() {
    $("a[href=#js-popup-call]").fancybox();
    $("a[href=#js-popup-city]").fancybox();
      $("a[href=#js-popup-partner]").fancybox();
    $("a[href=#js-popup-hostel]").fancybox();
    $("a[href=#js-popup-table]").fancybox();
}






