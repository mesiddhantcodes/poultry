/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */
(function ($) {
  "use strict";

  $(document).ready(function () {
    /* ==================================================
            # Wow Init
         ===============================================*/
    var wow = new WOW({
      boxclassName: "wow", // animated element css className (default is wow)
      animateclassName: "animated", // animation css className (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();

    /* ==================================================
            # Tooltip Init
        ===============================================*/
    $('[data-toggle="tooltip"]').tooltip();

    /* ==================================================
            # Youtube Video Init
         ===============================================*/
    $(".player").mb_YTPlayer();

    /* ==================================================
            # Slide Animated Button
        ===============================================*/
    var $slideLink = $(".text-slide"),
      slideLinkText = $slideLink.find("span")[0];

    $slideLink.on("mouseenter", linkOver);

    function linkOver() {
      TweenLite.to(slideLinkText, 0.3, {
        y: -25,
        ease: Cubic.easeIn,
        onComplete: function () {
          TweenLite.fromTo(
            slideLinkText,
            0.3,
            {
              y: 25,
            },
            {
              y: 0,
              ease: Cubic.easeOut,
            }
          );
        },
      });
    }

    /* ==================================================
            # Scrolla active
        ===============================================*/
    $(".animate").scrolla();

    /* ==================================================
            # imagesLoaded active
        ===============================================*/
    $("#gallery-masonary,.blog-masonry").imagesLoaded(function () {
      /* Filter menu */
      $(".mix-item-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      /* filter menu active className  */
      $(".mix-item-menu button").on("click", function (event) {
        $(this).siblings(".active").removeclassName("active");
        $(this).addclassName("active");
        event.preventDefault();
      });

      /* Filter active */
      var $grid = $("#gallery-masonary").isotope({
        itemSelector: ".gallery-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".gallery-item",
        },
      });

      /* Filter active */
      $(".blog-masonry").isotope({
        itemSelector: ".blog-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".blog-item",
        },
      });
    });

    /* ==================================================
            # Fun Factor Init
        ===============================================*/
    $(".timer").countTo();
    $(".fun-fact").appear(
      function () {
        $(".timer").countTo();
      },
      {
        accY: -100,
      }
    );

    /* ==================================================
            # Magnific popup init
         ===============================================*/
    $(".popup-link").magnificPopup({
      type: "image",
      // other options
    });

    $(".popup-gallery").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      // other options
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainclassName: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $(".magnific-mix-gallery").each(function () {
      var $container = $(this);
      var $imageLinks = $container.find(".item");

      var items = [];
      $imageLinks.each(function () {
        var $item = $(this);
        var type = "image";
        if ($item.hasclassName("magnific-iframe")) {
          type = "iframe";
        }
        var magItem = {
          src: $item.attr("href"),
          type: type,
        };
        magItem.title = $item.data("title");
        items.push(magItem);
      });

      $imageLinks.magnificPopup({
        mainclassName: "mfp-fade",
        items: items,
        gallery: {
          enabled: true,
          tPrev: $(this).data("prev-text"),
          tNext: $(this).data("next-text"),
        },
        type: "image",
        callbacks: {
          beforeOpen: function () {
            var index = $imageLinks.index(this.st.el);
            if (-1 !== index) {
              this.goTo(index);
            }
          },
        },
      });
    });

    /* ==================================================
            _Progressbar Init
         ===============================================*/
    function animateElements() {
      $(".progressbar").each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find(".circle").attr("data-percent");
        var animate = $(this).data("animate");
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data("animate", true);
          $(this)
            .find(".circle")
            .circleProgress({
              // startAngle: -Math.PI / 2,
              value: percent / 100,
              size: 90,
              thickness: 3,
              lineCap: "round",
              emptyFill: "#f1f1f1",
              fill: {
                gradient: ["#6222cc", "#a200be "],
              },
            })
            .on(
              "circle-animation-progress",
              function (event, progress, stepValue) {
                $(this)
                  .find("strong")
                  .text((stepValue * 100).toFixed(0) + "%");
              }
            )
            .stop();
        }
      });
    }

    animateElements();
    $(window).scroll(animateElements);

    /* ==================================================
            # Banner Carousel
         ===============================================*/
    const bannerFade = new Swiper(".banner-fade", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 3000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Services Carousel
         ===============================================*/
    const ServicesStyleOne = new Swiper(".services-style-one-carousel", {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 3,
        },
      },
    });

    /* ==================================================
            # Testimonials Carousel
         ===============================================*/
    const testimonialCarousel = new Swiper(".testimonial-carousel", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Banner Carousel
         ===============================================*/
    const bannerStyleTwo = new Swiper(".banner-style-two-carousel", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 3000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Project Carousel
         ===============================================*/
    const swiperStageRight = new Swiper(".carousel-stage-right", {
      // Optional parameters
      loop: true,
      freeMode: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 2.5,
        },
      },
    });

    /* ==================================================
            # Banner Carousel
         ===============================================*/
    const bannerStyleThree = new Swiper(".banner-style-three-carousel", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 3000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Banner Carousel
         ===============================================*/
    const bannerSlide = new Swiper(".banner-slide", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      grabCursor: true,
      autoplay: true,
      speed: 2000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Brand Carousel
         ===============================================*/
    const brand6col = new Swiper(".brand5col", {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1199: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      },
    });

    /* ==================================================
            # Offer Product Carousel
         ===============================================*/
    const productOffer = new Swiper(".product-offer-carousel", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      // If we need pagination
      pagination: {
        el: ".product-offer-carousel-pagination",
        type: "bullets",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".product-offer-carousel-next",
        prevEl: ".product-offer-carousel-prev",
      },

      // And if we need scrollbar
      /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
    });

    /* ==================================================
            # Product Gallery Carousel
         ===============================================*/
    const productGallery = new Swiper(".product-gallery-carousel", {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    /* ==================================================
            # Related Product Carousel
         ===============================================*/
    const relatedProduct = new Swiper(".related-product-carousel", {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }); // end document ready function

  /* ==================================================
    	Preloader Init
    ===============================================*/
  $(window).on("load", function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });
})(jQuery); // End jQuery

window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://sugunafoods.com/wp-includes/js/wp-emoji-release.min.js?ver=6.5.3",
  },
};
/*! This file is auto-generated */
!(function (i, n) {
  var o, s, e;

  function c(e) {
    try {
      var t = {
        supportTests: e,
        timestamp: new Date().valueOf(),
      };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }

  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === r[t];
    });
  }

  function u(e, t, n) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\uddfa\ud83c\uddf3",
              "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b");
    }
    return !1;
  }

  function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : i.createElement("canvas"),
      a = r.getContext("2d", {
        willReadFrequently: !0,
      }),
      o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        o[e] = t(a, e, n);
      }),
      o
    );
  }

  function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = {
      everything: !0,
      everythingExceptFlag: !0,
    }),
    (e = new Promise(function (e) {
      i.addEventListener("DOMContentLoaded", e, {
        once: !0,
      });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(",") +
                "));",
              r = new Blob([e], {
                type: "text/javascript",
              }),
              a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
              });
            return void (a.onmessage = function (e) {
              c((n = e.data)), a.terminate(), t(n);
            });
          } catch (e) {}
        c((n = f(s, u, p)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);
