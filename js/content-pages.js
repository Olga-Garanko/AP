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
      }, 600);
      return false;
  });

  /* slick */
  $('.video-list').slick({
  centerMode: true,
  arrows: true,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1
      }
    }
  ]
  });

  /* zoom-galery */
  $('.masonry-galery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
/*      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }*/
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  /* zoom-galery */
  $('.video-list').magnificPopup({
    delegate: 'a',
    //disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  /* plyr */
  plyr.setup(".plyr-video");

  /* lazyload News */
  $('.news-item').hide();
  $('.news-item').slice(0,6).show();
  $('#loadMoreNews').on('click', function(e){
    e.preventDefault();
    $('.news-item:hidden').slice(0,6).slideDown();
    if (!$('.news-item:hidden').length) {
        $(this).hide();
    }
  });

  /* masonry */
  var sizer = '.sizer4';
  var container = $('.masonry-galery');

  container.imagesLoaded(function(){
    container.masonry({
      itemSelector: '.masonry-galery__item',
      columnWidth: sizer,
      percentPosition: true
    });
  });

  /* lazyload Photo*/
  $('.masonry-galery__item').hide();
  $('.masonry-galery__item').slice(0,8).show();

  $('#loadMorePhoto').on('click', function(e){
    e.preventDefault();
    $('.masonry-galery__item:hidden').slice(0,8).css('display','block');
    container.masonry('layout');
    if (!$('.masonry-galery__item:hidden').length) {
        $(this).hide();
    }
  });

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
      $(".navigation").css("display","flex");
      $(".top-menu li").css("display","block");
    };
  });
  
  var menu = $('.navigation');
  $(".top-menu li a").click(function() {
    var wid = $(window).width();
    if(wid < 1281) {
      $(".navigation").fadeOut(600);
      $(".header-block").css("z-index", "1");
      $(".sandwich").toggleClass("active");
    }
  });
  
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 1280 && menu.is(":hidden")){
      menu.removeAttr('style');
    }
  });

});