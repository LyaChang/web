"use strict";

// loading animation
$('.loader-inner').loaders();

window.onload = function () {
  setTimeout(function () {
    TweenMax.to(".loader-inner", 0.3, {
      opacity: "0"
    });
    TweenMax.to(".loading_bg", 0.7, {
      delay: "0.3",
      scaleX: "0%",
      transformOrigin: "100% 0%",
      ease: Power2.easeOut
    });
  }, 600);
}; //selection


var winH = $(window).width();

function masonry_fn() {
  if (winH > 576) {
    $('#masonry').imagesLoaded(function () {
      $('#masonry').masonry({
        itemSelector: '.item',
        columnWidth: 10,
        isAnimated: true
      });
    });
  } else {
    $('#masonry').masonry('destroy');
  }
}

;

function errorOne() {// console.log('first image load error!');
}

$(document).ready(function () {
  $('.kind_lists_work li a').on('click', function () {
    var name = $(this).data("value"); // console.log(name)

    if (name == "web") {
      $(".web").css("display", "block");
      $(".banner,.app").css("display", "none");
      TweenMax.to(".web", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      TweenMax.to(".app", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".banner", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      $(".kind_lists a").removeClass("active");
      $(".segment-1 a").addClass("active");
    } else if (name == "app") {
      $(".web,.banner").css("display", "none");
      $(".app").css("display", "block");
      TweenMax.to(".app", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      TweenMax.to(".web", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".banner", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      $(".kind_lists a").removeClass("active");
      $(".segment-2 a").addClass("active");
    } else if (name == "banner") {
      $(".web,.app").css("display", "none");
      $(".banner").css("display", "block");
      TweenMax.to(".app", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".web", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".banner", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists a").removeClass("active");
      $(".segment-3 a").addClass("active");
    } else {
      $(".banner,.app,.web").css("display", "block");
      TweenMax.to(".web,.app,.banner", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists a").removeClass("active");
      $(".segment-0 a").addClass("active");
    }
  });
  $('.kind_lists_banner li a').on('click', function () {
    var name = $(this).data("value"); // console.log(name)

    if (name == "work") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".work").css("display", "block");
      $(".work").show();
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".work", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-1 a").addClass("active");
    } else if (name == "test") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".test").css("display", "block");
      $(".test").show();
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".test", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-2 a").addClass("active");
    } else if (name == "act") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".act").css("display", "block");
      $(".act").show();
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".act", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-3 a").addClass("active");
    } else if (name == "travel") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".travel").css("display", "block");
      $(".travel").show;
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".travel", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-4 a").addClass("active");
    } else if (name == "pd") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".pd").css("display", "block");
      $(".pd").show;
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".pd", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-5 a").addClass("active");
    } else if (name == "game") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".game").css("display", "block");
      $(".game").show;
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".game", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-6 a").addClass("active");
    } else if (name == "holiday") {
      $(".banner_block").css("display", "none");
      $(".banner_block").hide();
      $(".holiday").css("display", "block");
      $(".holiday").show;
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "0",
        ease: Power2.easeOut
      });
      TweenMax.to(".holiday", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-7 a").addClass("active");
    } else {
      $(".banner_block").css("display", "block");
      $(".banner_block").show();
      masonry_fn();
      TweenMax.to(".banner_block", 1, {
        opacity: "1",
        ease: Power2.easeOut
      });
      $(".kind_lists_banner a").removeClass("active");
      $(".segment-0 a").addClass("active");
    }
  });
  $('.dropmenu').on('click', function () {
    TweenMax.to(".dropmenu_space", .6, {
      opacity: "0.94",
      ease: Power2.easeOut,
      "display": "block"
    });
  });
  $('#menu_content li a').on('click', function () {
    TweenMax.to(".dropmenu_space", .6, {
      opacity: "0",
      ease: Power2.easeOut,
      "display": "none"
    });
    var name = $(this).data("value");

    if (name == "web") {
      $(".dropmenu .words").html("WEB");
      $(".dropmenu span").html("5");
    } else if (name == "all") {
      $(".dropmenu .words").html("ALL");
      $(".dropmenu span").html("6");
    } // else if(name == "app"){
    //     $(".dropmenu .words").html("APP");
    //     $(".dropmenu span").html("1");
    // }
    else if (name == "banner") {
        $(".dropmenu .words").html("BANNER");
        $(".dropmenu span").html("1");
      }
  });
  $('#menu_content_banner li a').on('click', function () {
    TweenMax.to(".dropmenu_space", .6, {
      opacity: "0",
      ease: Power2.easeOut,
      "display": "none"
    });
    var name = $(this).data("value");

    if (name == "work") {
      $(".dropmenu .words").html("RECRUIT");
      $(".dropmenu span").html("4");
    } else if (name == "all") {
      $(".dropmenu .words").html("ALL");
      $(".dropmenu span").html("59");
    } else if (name == "test") {
      $(".dropmenu .words").html("TEST-AD");
      $(".dropmenu span").html("5");
    } else if (name == "act") {
      $(".dropmenu .words").html("ACTIVITY");
      $(".dropmenu span").html("3");
    } else if (name == "travel") {
      $(".dropmenu .words").html("TRAVEL");
      $(".dropmenu span").html("1");
    } else if (name == "pd") {
      $(".dropmenu .words").html("PRODUCT");
      $(".dropmenu span").html("30");
    } else if (name == "game") {
      $(".dropmenu .words").html("GAME");
      $(".dropmenu span").html("10");
    } else if (name == "holiday") {
      $(".dropmenu .words").html("HOLIDAY");
      $(".dropmenu span").html("7");
    }
  });
  $('.dropmenu_space .cancel_btn').on('click', function () {
    TweenMax.to(".dropmenu_space", .6, {
      opacity: "0",
      ease: Power2.easeOut,
      "display": "none"
    });
  }); //nav

  $('#nav').on('click', function () {
    TweenMax.to(".nav_mobile", .6, {
      opacity: "0.98",
      ease: Power2.easeOut,
      "display": "block"
    });
  });
  $('.nav_mobile .cancel_btn').on('click', function () {
    TweenMax.to(".nav_mobile", .6, {
      opacity: "0",
      ease: Power2.easeOut,
      "display": "none"
    });
  });
  masonry_fn(); //$('.gif').gifplayer({label:""});

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    $(window).resize(function () {
      //改變視窗時重新整理一次
      this.location.reload();
      masonry_fn();
    });
  }

  lazyload();
});
//# sourceMappingURL=all.js.map
