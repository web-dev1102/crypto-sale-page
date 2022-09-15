(function ($) {
  "use strict";
  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });

  $(document).ready(function () {
    //========== Header  Start =========//

    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $("ul")
      .parent("li")
      .on("hover", function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          var newpos = -$(menu).width();
          menu.css({
            left: newpos
          });
        }
      });

    $(".menu li a").on("click", function (e) {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
      }
    });
    $(".ellepsis-bar").on("click", function (e) {
      var element = $(".header-top");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.slideUp(300, "swing");
        $(".overlayTwo").removeClass("active");
      } else {
        element.addClass("open");
        element.slideDown(300, "swing");
        $(".overlayTwo").addClass("active");
      }
    });
    $(".header-bar").on("click", function () {
      $(this).toggleClass("active");
      $(".menu").toggleClass("active");
    });

    //Header
    var fixed_top = $("header");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header-fixed fadeInUp");
      } else {
        fixed_top.removeClass("header-fixed fadeInUp");
      }
    });

    //========== Header End =========//

    //data asos initial
    AOS.init();

    //============ Scroll to top js =========
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "7%",
          opacity: "1",
          transition: "all .5s ease"
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease"
        });
      }
    });
    //Click event to scroll to top
    $(".scrollToTop").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500
      );
      return false;
    });
  });

  // Completed Project slider start here
  var swiper = new Swiper(".project__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1200,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".project__slider-pagination",
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    loop: true
  });

  // Featured Project slider start here
  var swiper = new Swiper(".project__slider2", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1200,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".project__slider2-next",
      prevEl: ".project__slider2-prev"
    },
    pagination: {
      el: ".project__slider-pagination",
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    },
    loop: true
  });

  // roadmap  slider start here
  var swiper = new Swiper(".roadmap__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1200,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".roadmap__slider-next",
      prevEl: ".roadmap__slider-prev"
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  });

  // Partner slider start here
  var swiper = new Swiper(".partner__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1200,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    },
    loop: true
  });

  //===== farming accordion
  $(".farming__item-header").on("click", function (e) {
    // $(this).text((e, text) => text === "Collapse" ? "Expand" : "Collapse");
    $(`#${$(this).data("toggle-content")}`)
      .stop()
      .slideToggle();
  });
})(jQuery);
