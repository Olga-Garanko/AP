$(document).ready(function() {

  /* scroll Up */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });
  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1500, "easeInOutCubic");
      return false;
  });

  /* slick */
  $('.album-list').slick({
  centerMode: true,
  arrows: true,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1
      }
    }
  ]
  });

  /* masonry */
  $('.masonry-galery__item').hover(
  function(){
    $(this).find(".masonry-galery__cover").fadeIn();
  },
  function(){
    $(this).find(".masonry-galery__cover").fadeOut();
  }
  );

  var sizer = '.sizer4';
  var container = $('.masonry-galery');

  container.imagesLoaded(function(){
    container.masonry({
      itemSelector: '.masonry-galery__item',
      columnWidth: sizer,
      percentPosition: true
    });
  });

  /* plyr */
  plyr.setup("#plyr-video, .plyr-audio");
  $('.plyr').addClass('grayscale');
  $(".video-block").click(function() {
    $('.plyr').removeClass('grayscale');
    $(".video-cover").css('display','none');
    $(".video .left-block").addClass('active');
  });

  /* slow scroll */
  $("#menu li a, .start-link").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500, "easeInOutCubic");
  });

  /** after effect **/
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'js/data.json'
    });
    animation.setSpeed(2);

  /* waypoint */
  $('.biography')
  .waypoint(function() {
      $('.biography .text').addClass('active');
      }, {
      offset: 190
  })

  /***** menu ****/
  $(".top-menu li a").click(function() {
    $(".top-menu li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".toggle_menu").click(function() {
    if ($(".navigation").is(":visible")) {
      $(".navigation").fadeOut(600);
      $(".top-menu li a").removeClass("fadeInUp animated");
      $(".header-block").css("z-index", "1");
    } else {
      $(".navigation").fadeIn(600);
      $(".header-block").css("z-index", "20");
      $(".top-menu li a").addClass("fadeInUp animated");
      $(".navigation").css("display","block");
      $(".top-menu li").css("display","block");
    };
  });
 
  var menu = $('.navigation');
  $(".top-menu li a").click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".navigation").fadeOut(600);
      $(".header-block").css("z-index", "1");
      $(".sandwich").toggleClass("active");
    }
  });
  
  $(window).resize(function(){
    if(window.matchMedia("(min-width: 769px)").matches && menu.is(":hidden")){
      menu.removeAttr('style');
    }
  });

});