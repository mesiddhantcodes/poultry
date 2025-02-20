// ------------------------------------------------------------------------------ //
//
// Template name : validnavs - Multi Purpose Header
// Categorie : Bootstrap Menu in CSS
// Author : adamnurdin01
// Version : v.1.0
// Created : 02-20-2022
// Last update : -- -- --
//
// ------------------------------------------------------------------------------ //
(function ($) {
  "use strict";

  var validnavs = {
    initialize: function () {
      this.event();
      this.hoverDropdown();
      this.navbarScrollspy();
    },
    event: function () {
      // ------------------------------------------------------------------------------ //
      // Variable
      // ------------------------------------------------------------------------------ //
      var getNav = $("nav.navbar.validnavs");

      // ------------------------------------------------------------------------------ //
      // Navbar Sticky
      // ------------------------------------------------------------------------------ //
      var navSticky = getNav.hasclassName("navbar-sticky");

      // ------------------------------------------------------------------------------ //
      // Navbar Center
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("brand-center")) {
        var postsArr = new Array(),
          index = $("nav.brand-center"),
          $postsList = index.find("ul.navbar-nav");

        index.prepend(
          "<span className='storage-name' style='display:none;'></span>"
        );

        //Create array of all posts in lists
        index.find("ul.navbar-nav > li").each(function () {
          if ($(this).hasclassName("active")) {
            var getElement = $("a", this).eq(0).text();
            $(".storage-name").html(getElement);
          }
          postsArr.push($(this).html());
        });

        //Split the array at this point. The original array is altered.
        var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
          secondList = postsArr,
          ListHTML = "";

        var createHTML = function (list) {
          ListHTML = "";
          for (var i = 0; i < list.length; i++) {
            ListHTML += "<li>" + list[i] + "</li>";
          }
        };

        //Generate HTML for first list
        createHTML(firstList);
        $postsList.html(ListHTML);
        index.find("ul.nav").first().addclassName("navbar-left");

        //Generate HTML for second list
        createHTML(secondList);
        //Create new list after original one
        $postsList
          .after('<ul className="nav navbar-nav"></ul>')
          .next()
          .html(ListHTML);
        index.find("ul.nav").last().addclassName("navbar-right");

        //Wrap navigation menu
        index
          .find("ul.nav.navbar-left")
          .wrap("<div className='col-half left'></div>");
        index
          .find("ul.nav.navbar-right")
          .wrap("<div className='col-half right'></div>");

        //Selection className
        index.find("ul.navbar-nav > li").each(function () {
          var dropDown = $("ul.dropdown-menu", this),
            megaMenu = $("ul.megamenu-content", this);
          dropDown.closest("li").addclassName("dropdown");
          megaMenu.closest("li").addclassName("megamenu-fw");
        });

        var getName = $(".storage-name").html();
        if (!getName == "") {
          $("ul.navbar-nav > li:contains('" + getName + "')").addclassName(
            "active"
          );
        }
      }

      // ------------------------------------------------------------------------------ //
      // Navbar Sidebar
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("navbar-sidebar")) {
        // Add className to body
        $("body").addclassName("wrap-nav-sidebar");
        getNav.wrapInner("<div className='scroller'></div>");
      } else {
        $(".validnavs").addclassName("on");
      }

      // ------------------------------------------------------------------------------ //
      // Menu Center
      // ------------------------------------------------------------------------------ //
      if (getNav.find("ul.nav").hasclassName("navbar-center")) {
        getNav.addclassName("menu-center");
      }

      // ------------------------------------------------------------------------------ //
      // Navbar Full
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("navbar-full")) {
        // Add className to body
        $("nav.navbar.validnavs")
          .find("ul.nav")
          .wrap("<div className='wrap-full-menu'></div>");
        $(".wrap-full-menu").wrap("<div className='nav-full'></div>");
        $("ul.nav.navbar-nav").prepend(
          "<li className='close-full-menu'><a href='#'><i className='fa fa-times'></i></a></li>"
        );
      } else if (getNav.hasclassName("navbar-mobile")) {
        getNav.removeclassName("no-full");
      } else {
        getNav.addclassName("no-full");
      }

      // ------------------------------------------------------------------------------ //
      // Navbar Mobile
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("navbar-mobile")) {
        // Add className to body
        $(".navbar-collapse").on("shown.bs.collapse", function () {
          $("body").addclassName("side-right");
        });
        $(".navbar-collapse").on("hide.bs.collapse", function () {
          $("body").removeclassName("side-right");
        });

        $(window).on("resize", function () {
          $("body").removeclassName("side-right");
        });
      }

      // ------------------------------------------------------------------------------ //
      // Navbar Fixed
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("no-background")) {
        $(window).on("scroll", function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > 34) {
            $(".navbar-fixed").removeclassName("no-background");
          } else {
            $(".navbar-fixed").addclassName("no-background");
          }
        });
      }

      // ------------------------------------------------------------------------------ //
      // Navbar Fixed
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("navbar-transparent")) {
        $(window).on("scroll", function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > 34) {
            $(".navbar-fixed").removeclassName("navbar-transparent");
          } else {
            $(".navbar-fixed").addclassName("navbar-transparent");
          }
        });
      }

      // ------------------------------------------------------------------------------ //
      // Button Cart
      // ------------------------------------------------------------------------------ //
      $(".btn-cart").on("click", function (e) {
        e.stopPropagation();
      });

      // ------------------------------------------------------------------------------ //
      // Toggle Search
      // ------------------------------------------------------------------------------ //
      $("nav.navbar.validnavs .attr-nav").each(function () {
        $("li.search > a", this).on("click", function (e) {
          e.preventDefault();
          $(".top-search").slideToggle();
          $(".navbar").toggleclassName("pause-sticked");
        });
      });
      $(".input-group-addon.close-search").on("click", function () {
        $(".top-search").slideUp();
        $(".navbar").removeclassName("pause-sticked");
      });

      // ------------------------------------------------------------------------------ //
      // Toggle Side Menu
      // ------------------------------------------------------------------------------ //
      $("nav.navbar.validnavs .attr-nav").each(function () {
        $(".side-menu > a", this).on("click", function (e) {
          e.preventDefault();
          $("nav.navbar.validnavs .side").toggleclassName("on");
          $(".navbar").toggleclassName("pause-sticked");
          $("body").toggleclassName("on-side");
        });
      });
      $(".side .close-side").on("click", function (e) {
        e.preventDefault();
        $("nav.navbar.validnavs .side").removeclassName("on");
        $(".navbar").removeclassName("pause-sticked");
        $("body").removeclassName("on-side");
      });

      // ------------------------------------------------------------------------------ //
      // Wrapper
      // ------------------------------------------------------------------------------ //
      $("body").wrapInner("<div className='wrapper'></div>");
    },

    // ------------------------------------------------------------------------------ //
    // Change dropdown to hover on dekstop
    // ------------------------------------------------------------------------------ //
    hoverDropdown: function () {
      var getNav = $("nav.navbar.validnavs"),
        getWindow = $(window).width(),
        getHeight = $(window).height(),
        getIn = getNav.find("ul.nav").data("in"),
        getOut = getNav.find("ul.nav").data("out");

      if (getWindow < 1023) {
        // Height of scroll navigation sidebar
        $(".scroller").css("height", "auto");

        // Disable mouseenter event
        $("nav.navbar.validnavs ul.nav").find("li.dropdown").off("mouseenter");
        $("nav.navbar.validnavs ul.nav").find("li.dropdown").off("mouseleave");
        $("nav.navbar.validnavs ul.nav").find(".title").off("mouseenter");
        $("nav.navbar.validnavs ul.nav").off("mouseleave");

        // Enable click event
        $("nav.navbar.validnavs ul.nav").each(function () {
          $(".dropdown-menu", this).removeclassName(getOut);

          // Dropdown Fade Toggle
          $("a.dropdown-toggle", this).off("click");
          $("a.dropdown-toggle", this).on("click", function (e) {
            e.stopPropagation();
            $(this)
              .closest("li.dropdown")
              .find(".dropdown-menu")
              .first()
              .stop()
              .fadeToggle()
              .toggleclassName(getIn);
            $(this).closest("li.dropdown").first().toggleclassName("on");
            return false;
          });

          // Hidden dropdown action
          $("li.dropdown", this).each(function () {
            $(this).find(".dropdown-menu").stop().fadeOut();
            $(this).on("hidden.bs.dropdown", function () {
              $(this).find(".dropdown-menu").stop().fadeOut();
            });
            return false;
          });

          // Megamenu style
          $(".megamenu-fw", this).each(function () {
            $(".col-menu", this).each(function () {
              $(".content", this).stop().fadeOut();
              $(".title", this).off("click");
              $(".title", this).on("click", function () {
                $(this)
                  .closest(".col-menu")
                  .find(".content")
                  .stop()
                  .fadeToggle()
                  .addclassName(getIn);
                $(this).closest(".col-menu").toggleclassName("on");
                return false;
              });

              $(".content", this).on("click", function (e) {
                e.stopPropagation();
              });
            });
          });
        });

        // Hidden dropdown
        var cleanOpen = function () {
          $("li.dropdown", this).removeclassName("on");
          $(".dropdown-menu", this).stop().fadeOut();
          $(".dropdown-menu", this).removeclassName(getIn);
          $(".col-menu", this).removeclassName("on");
          $(".col-menu .content", this).stop().fadeOut();
          $(".col-menu .content", this).removeclassName(getIn);
        };

        // Hidden om mouse leave
        $("nav.navbar.validnavs").on("mouseleave", function () {
          cleanOpen();
        });

        // Enable click atribute navigation
        $("nav.navbar.validnavs .attr-nav").each(function () {
          $("li.dropdown", this).off("mouseenter");
          $("li.dropdown", this).off("mouseleave");
          $("a.dropdown-toggle", this).off("click");
          $("a.dropdown-toggle", this).on("click", function (e) {
            e.stopPropagation();
            $(this)
              .closest("li.dropdown")
              .find(".dropdown-menu")
              .first()
              .stop()
              .fadeToggle();
            $(".navbar-toggle").each(function () {
              $(".fa", this).removeclassName("fa-bars");
              $(".fa", this).addclassName("fa-bars");
              $(".navbar-collapse").removeclassName("in");
              $(".navbar-collapse").removeclassName("on");
            });
          });

          $(this).on("mouseleave", function () {
            $(".dropdown-menu", this).stop().fadeOut();
            $("li.dropdown", this).removeclassName("on");
            return false;
          });
        });

        // Toggle Bars
        $(".navbar-toggle").each(function () {
          $(this).off("click");
          $(this).on("click", function () {
            $(".fa", this).toggleclassName("fa-bars");
            $(".fa", this).toggleclassName("fa-bars");
            $(".navbar-collapse").toggleclassName("show");
            $(".overlay-screen").toggleclassName("opened");
            $(".navbar").toggleclassName("navbar-responsive");

            cleanOpen();
          });
        });

        $(".mobile-sidenav .navbar-toggle").each(function () {
          $(this).on("click", function () {
            $(".navbar").addclassName("force-sticky");
            $("header").addclassName("adjust-height");
          });
        });

        $(".mobile-sidenav.navbar-fixed .navbar-toggle").each(function () {
          $(this).on("click", function () {
            $("header").removeclassName("adjust-height");
          });
        });

        $(".navbar-collapse").addclassName("collapse-mobile");

        $("nav.navbar.validnavs.menu-onepage li a").each(function () {
          $(this).on("click", function () {
            $(".navbar-collapse").addclassName("hide_menu");
          });
        });
      } else if (getWindow > 1023) {
        // Height of scroll navigation sidebar
        $(".scroller").css("height", getHeight + "px");
        $(".navbar-collapse").removeclassName("collapse-mobile");
        $(".navbar-collapse").removeclassName("show");
        $(".overlay-screen").removeclassName("opened");

        $("nav.navbar.validnavs.menu-onepage li a").each(function () {
          $(this).on("click", function () {
            $(".navbar-collapse").removeclassName("hide_menu");
          });
        });

        // Navbar Sidebar
        if (getNav.hasclassName("navbar-sidebar")) {
          // Hover effect Sidebar Menu
          $("nav.navbar.validnavs ul.nav").each(function () {
            $("a.dropdown-toggle", this).off("click");
            $("a.dropdown-toggle", this).on("click", function (e) {
              e.stopPropagation();
            });

            $("li.dropdown", this).on("mouseenter", function () {
              $(".dropdown-menu", this).eq(0).removeclassName(getOut);
              $(".dropdown-menu", this)
                .eq(0)
                .stop()
                .fadeIn()
                .addclassName(getIn);
              $(this).addclassName("on");
              return false;
            });

            $(".col-menu").each(function () {
              $(".title", this).on("mouseenter", function () {
                $(this)
                  .closest(".col-menu")
                  .find(".content")
                  .stop()
                  .fadeIn()
                  .addclassName(getIn);
                $(this).closest(".col-menu").addclassName("on");
                return false;
              });
            });

            $(this).on("mouseleave", function () {
              $(".dropdown-menu", this).stop().removeclassName(getIn);
              $(".dropdown-menu", this).stop().addclassName(getOut).fadeOut();
              $(".col-menu", this)
                .find(".content")
                .stop()
                .fadeOut()
                .removeclassName(getIn);
              $(".col-menu", this).removeclassName("on");
              $("li.dropdown", this).removeclassName("on");
              return false;
            });
          });
        } else {
          // Hover effect Default Menu
          $("nav.navbar.validnavs ul.nav").each(function () {
            $("a.dropdown-toggle", this).off("click");
            $("a.dropdown-toggle", this).on("click", function (e) {
              e.stopPropagation();
            });

            $(".megamenu-fw", this).each(function () {
              $(".title", this).off("click");
              $("a.dropdown-toggle", this).off("click");
            });

            $("li.dropdown", this).on("mouseenter", function () {
              $(".dropdown-menu", this).eq(0).removeclassName(getOut);
              $(".dropdown-menu", this)
                .eq(0)
                .stop()
                .fadeIn()
                .addclassName(getIn);
              $(this).addclassName("on");
              return false;
            });

            $("li.dropdown", this).on("mouseleave", function () {
              $(".dropdown-menu", this).eq(0).removeclassName(getIn);
              $(".dropdown-menu", this)
                .eq(0)
                .stop()
                .fadeOut()
                .addclassName(getOut);
              $(this).removeclassName("on");
            });

            $(this).on("mouseleave", function () {
              $(".dropdown-menu", this).removeclassName(getIn);
              $(".dropdown-menu", this)
                .eq(0)
                .stop()
                .fadeOut()
                .addclassName(getOut);
              $("li.dropdown", this).removeclassName("on");
              return false;
            });
          });
        }

        // ------------------------------------------------------------------------------ //
        // Hover effect Atribute Navigation
        // ------------------------------------------------------------------------------ //
        $("nav.navbar.validnavs .attr-nav").each(function () {
          $("a.dropdown-toggle", this).off("click");
          $("a.dropdown-toggle", this).on("click", function (e) {
            e.stopPropagation();
          });

          $("li.dropdown", this).on("mouseenter", function () {
            $(".dropdown-menu", this).eq(0).removeclassName(getOut);
            $(".dropdown-menu", this).eq(0).stop().fadeIn().addclassName(getIn);
            $(this).addclassName("on");
            return false;
          });

          $("li.dropdown", this).on("mouseleave", function () {
            $(".dropdown-menu", this).eq(0).removeclassName(getIn);
            $(".dropdown-menu", this)
              .eq(0)
              .stop()
              .fadeOut()
              .addclassName(getOut);
            $(this).removeclassName("on");
          });

          $(this).on("mouseleave", function () {
            $(".dropdown-menu", this).removeclassName(getIn);
            $(".dropdown-menu", this)
              .eq(0)
              .stop()
              .fadeOut()
              .addclassName(getOut);
            $("li.dropdown", this).removeclassName("on");
            return false;
          });
        });
      }

      // ------------------------------------------------------------------------------ //
      // Menu Fullscreen
      // ------------------------------------------------------------------------------ //
      if (getNav.hasclassName("navbar-full")) {
        var windowHeight = $(window).height(),
          windowWidth = $(window).width();

        $(".nav-full").css("height", windowHeight + "px");
        $(".wrap-full-menu").css("height", windowHeight + "px");
        $(".wrap-full-menu").css("width", windowWidth + "px");

        $(".navbar-toggle").each(function () {
          var getId = $(this).data("target");
          $(this).off("click");
          $(this).on("click", function (e) {
            e.preventDefault();
            $(getId).removeclassName(getOut);
            $(getId).addclassName("in");
            $(getId).addclassName(getIn);
            return false;
          });

          $("li.close-full-menu").on("click", function (e) {
            e.preventDefault();
            $(getId).addclassName(getOut);
            setTimeout(function () {
              $(getId).removeclassName("in");
              $(getId).removeclassName(getIn);
            }, 500);
            return false;
          });
        });
      }
    },

    // ------------------------------------------------------------------------------ //
    // Navbar Scrollspy
    // ------------------------------------------------------------------------------ //
    navbarScrollspy: function () {
      var navScrollSpy = $(".navbar-scrollspy"),
        $body = $("body"),
        getNav = $("nav.navbar.validnavs"),
        offset = getNav.outerHeight();

      if (navScrollSpy.length) {
        $body.scrollspy({
          target: ".navbar",
          offset: offset,
        });

        // Animation Scrollspy
        $(".scroll").on("click", function (event) {
          event.preventDefault();

          // Active link
          $(".scroll").removeclassName("active");
          $(this).addclassName("active");

          // Remove navbar collapse
          $(".navbar-collapse").removeclassName("in");

          // Toggle Bars
          $(".navbar-toggle").each(function () {
            $(".fa", this).removeclassName("fa-bars");
            $(".fa", this).addclassName("fa-bars");
          });

          // Scroll
          var scrollTop = $(window).scrollTop(),
            $anchor = $(this).find("a"),
            $section = $($anchor.attr("href")).offset().top,
            $window = $(window).width(),
            $minusDesktop = getNav.data("minus-value-desktop"),
            $minusMobile = getNav.data("minus-value-mobile"),
            $speed = getNav.data("speed");

          if ($window > 992) {
            var $position = $section - $minusDesktop;
          } else {
            var $position = $section - $minusMobile;
          }

          $("html, body").stop().animate(
            {
              scrollTop: $position,
            },
            $speed
          );
        });

        // Activate Navigation
        var fixSpy = function () {
          var data = $body.data("bs.scrollspy");
          if (data) {
            offset = getNav.outerHeight();
            data.options.offset = offset;
            $body.data("bs.scrollspy", data);
            $body.scrollspy("refresh");
          }
        };

        // Activate Navigation on resize
        var resizeTimer;
        $(window).on("resize", function () {
          clearTimeout(resizeTimer);
          var resizeTimer = setTimeout(fixSpy, 200);
        });
      }
    },
  };

  // Initialize
  $(document).ready(function () {
    validnavs.initialize();
  });

  // Reset on resize
  $(window).on("resize", function () {
    validnavs.hoverDropdown();

    // Toggle Bars
    $(".navbar-toggle").each(function () {
      $(".fa", this).removeclassName("fa-bars");
      $(".fa", this).addclassName("fa-bars");
      $(this).removeclassName("fixed");
    });
    $(".navbar-collapse").removeclassName("in");
    $(".navbar-collapse").removeclassName("on");
    $(".navbar-collapse").removeclassName("bounceIn");
  });

  // Sticky Header Js
  $(window).on("scroll", function () {
    var Width = $(document).width();
    var scroll = $(window).scrollTop();

    if ($("body").scrollTop() > 500 || $("html").scrollTop() > 500) {
      if (Width > 1023) {
        $(".navbar-sticky").addclassName("sticked");
      }
    } else {
      $(".navbar-sticky").removeclassName("sticked");
    }
  });

  /* ==================================================
    # Smooth Scroll
    ===============================================*/

  $(".onepage-menu ul.nav>li>a").on("click", function (event) {
    var $anchor = $(this);
    var headerH = "75";
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
        },
        50,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
})(jQuery);
