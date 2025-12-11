$(document).ready(function () {
    // new WOW().init();

    var HeadH = $('#header').outerHeight();
    // $('body').css('padding-top', HeadH);

    var scrollWindow = function() {
        $(window).on('load scroll',function() {
            var navbar = $('#header');
            
            // if ($(this).scrollTop() > HeadH) {
            if ($(this).scrollTop() > 250) {
                if (!navbar.hasClass('is-sticky')) {
                    navbar.addClass('is-sticky');
                     $('body').css('padding-top', HeadH);
                }
            }
            // if ($(this).scrollTop() < HeadH) {
            if ($(this).scrollTop() < 250) {
                if (navbar.hasClass('is-sticky')) {
                    navbar.removeClass('is-sticky');
                    $('body').css('padding-top', 0);
                }
            }
            // if ($(this).scrollTop() > HeadH*2) {
            if ($(this).scrollTop() > 250) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }
            }
            // if ($(this).scrollTop() < HeadH*2) {
            if ($(this).scrollTop() < 50) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                }
            }
            // if ($(this).scrollTop() >= 400) { 
            //     $('.back_top').addClass('active');
            // }
            // else {
            //     $('.back_top').removeClass('active');
            // }
        });
    };
    scrollWindow();


    var btn = $('#top-button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    // $('.back_top').click(function(){
    //     $('html, body').animate({scrollTop:0}, 500);
    // });

    // $('.back_top').click(function () {
    //     $('html, body').animate({ scrollTop: 0 }, 500);
    // });

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.back_top').fadeIn();
    //     } else {
    //         $('.back_top').fadeOut();
    //     }
    // });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("menu-opened");
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".overlay").fadeToggle();
    });

    $(".overlay").click(function () {
        $(this).fadeToggle();
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".navbar-toggler").toggleClass("menu-opened");
    });


    $(window).on("resize", function (e) {
        checkScreenSize();
    });
    var logo = $(".navbar-brand img").attr("src");

    checkScreenSize();
    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth <= 991) {
            $("#header .collapse:not(.show)").find(".mobile_logo").remove();
            $("#header .collapse:not(.show)").append("<div class='mobile_logo'>" + "<img src=" + logo + " alt=''>" + "</div>");
        }
    }


    //Dashboard Menu
    $(function() {
          var $nav = $('nav.greedy');
          var $btn = $('nav.greedy button');
          var $vlinks = $('nav.greedy .links');
          var $hlinks = $('nav.greedy .hidden-links');

          var numOfItems = 0;
          var totalSpace = 0;
          var breakWidths = [];

          // Get initial state
          $vlinks.children().outerWidth(function(i, w) {
            totalSpace += w;
            numOfItems += 1;
            breakWidths.push(totalSpace);
          });

          var availableSpace, numOfVisibleItems, requiredSpace;

          function check() {

            // Get instant state
            availableSpace = $vlinks.width() - 10;
            numOfVisibleItems = $vlinks.children().length;
            requiredSpace = breakWidths[numOfVisibleItems - 1];

            // There is not enought space
            if (requiredSpace > availableSpace) {
              $vlinks.children().last().prependTo($hlinks);
              numOfVisibleItems -= 1;
              check();
              // There is more than enough space
            } else if (availableSpace > breakWidths[numOfVisibleItems]) {
              $hlinks.children().first().appendTo($vlinks);
              numOfVisibleItems += 1;
            }
            // Update the button accordingly
            $btn.attr("count", numOfItems - numOfVisibleItems);
            if (numOfVisibleItems === numOfItems) {
              $btn.addClass('hidden');
            } else $btn.removeClass('hidden');
          }

          // Window listeners
          $(window).resize(function() {
            check();
          });

          $btn.on('click', function() {
            $hlinks.toggleClass('hidden');
          });

          check();

        });



    // $('.box-loader').fadeOut('slow');

    var Wheight = $(window).height();
    var Hheight = $('#header').outerHeight();
    var Fheight = $('.footer_wrapper').outerHeight();

    var Innheight = Wheight - (Fheight + Hheight);

    $('.cms_section').css('min-height', Innheight);
});






// $('.home_banner').slick();




$('.home_banner').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  slide: 'div',
  cssEase: 'linear'
});

$('.testimonial_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

   











$('.spaces-slider').slick({
    dots:false,
    arrows:false,   
    infinite:true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:5000,

    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2
            }
        },

        {
            breakpoint:767,
            settings:{
                slidesToShow:1
            }
        }
    ]
});




$(document).ready(function(){

  $('.work-left').slick({
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
      dots:false,
      infinite:true,
      autoplay:true,
      autoplaySpeed:0,
      speed:6500,
      cssEase:'linear',
      pauseOnHover:false,
      pauseOnFocus:false,
      rtl:false  // LEFT → RIGHT
  });

  $('.work-right').slick({
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
      dots:false,
      infinite:true,
      autoplay:true,
      autoplaySpeed:0,
      speed:6500,
      cssEase:'linear',
      pauseOnHover:false,
      pauseOnFocus:false,
      rtl:true   // RIGHT → LEFT
  });

});















// 

$('.work-slider-left').slick({
  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 0,     // No pause
  speed: 11000,          // continuous motion timing

  cssEase: 'linear',   // smooth marquee movement
  infinite: true,

  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,

  swipe: false,
  draggable: false
});






$('.work-slider-right').slick({
  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 0,     // No pause
  speed: 16000,          // continuous motion timing

  cssEase: 'linear',   // smooth marquee movement
  infinite: true,

  rtl: true,           // ✅ RIGHT → LEFT direction

  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,

  swipe: false,
  draggable: false
});





$(document).ready(function(){

  $('.testimonial-slider').slick({

    slidesToShow: 1,   // ✅ one testimonial at a time
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 4000,

    arrows: true,
    dots:  false,

    infinite: true,
    adaptiveHeight: true

  });

});



document.querySelectorAll('.truncate-4').forEach(para => {

  const btn = para.nextElementSibling;

  // Check overflow
  if (para.scrollHeight <= para.clientHeight) {
     btn.style.display = 'none';
  }

  btn.addEventListener('click', () => {

    para.classList.toggle('expand');

    btn.innerText = para.classList.contains('expand')
      ? 'Read Less'
      : 'Read More';

    // slick height refresh
    $('.testimonial-slider').slick('setPosition');

  });

});

// $('.testimonial-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,

//   autoplay: true,
//   autoplaySpeed: 3000,

//   arrows: true,
//   dots: false,

//   infinite: true,
//   adaptiveHeight: true  // ✅ MOST IMPORTANT FIX
// });









