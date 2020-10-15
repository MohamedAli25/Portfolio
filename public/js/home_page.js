/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/home_page.js":
/*!***********************************!*\
  !*** ./resources/js/home_page.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

AOS.init({
  duration: 800,
  easing: "slide-up",
  once: true
});

(function ($) {
  "use strict"; // bootstrap dropdown hover
  // loader

  var loader = function loader() {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };

  loader();
  $("nav .dropdown").hover(function () {
    var $this = $(this);
    $this.addClass("show");
    $this.find("> a").attr("aria-expanded", true);
    $this.find(".dropdown-menu").addClass("show");
  }, function () {
    var $this = $(this);
    $this.removeClass("show");
    $this.find("> a").attr("aria-expanded", false);
    $this.find(".dropdown-menu").removeClass("show");
  });
  $(".navbar .dropdown > a").click(function () {
    location.href = this.href;
  });
  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  }); // home slider

  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    dragTouch: false,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });
  $(".nonloop-block-11").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    autoplay: true,
    stagePadding: 20,
    margin: 50,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
    responsive: {
      600: {
        stagePadding: 20,
        items: 1
      },
      800: {
        stagePadding: 20,
        items: 2
      },
      1000: {
        items: 2
      }
    }
  }); // owl carousel

  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }); // owl carousel

  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  var siteStellar = function siteStellar() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll"
    });
  };

  siteStellar();

  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $(".element-animate").waypoint(function (direction) {
      if (direction === "down" && !$(this.element).hasClass("element-animated")) {
        i++;
        $(this.element).addClass("item-animate");
        setTimeout(function () {
          $("body .element-animate.item-animate").each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data("animate-effect");

              if (effect === "fadeIn") {
                el.addClass("fadeIn element-animated");
              } else if (effect === "fadeInLeft") {
                el.addClass("fadeInLeft element-animated");
              } else if (effect === "fadeInRight") {
                el.addClass("fadeInRight element-animated");
              } else {
                el.addClass("fadeInUp element-animated");
              }

              el.removeClass("item-animate");
            }, k * 100);
          });
        }, 100);
      }
    }, {
      offset: "95%"
    });
  };

  contentWayPoint();

  var slideImage = function slideImage() {
    $(".slide-image").each(function () {
      var bg = $(this).data("bg");
      var pos = $(this).data("kenburn-start");
      $(this).css({
        "background-image": "url(" + bg + ")",
        "transform-origin": pos
      });
    });
  };

  slideImage();
})(jQuery);

/***/ }),

/***/ "./resources/sass/home_page.scss":
/*!***************************************!*\
  !*** ./resources/sass/home_page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/portfolio_website/main.scss":
/*!****************************************************!*\
  !*** ./resources/sass/portfolio_website/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************!*\
  !*** multi ./resources/js/home_page.js ./resources/sass/home_page.scss ./resources/sass/portfolio_website/main.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! G:\Work\portfolio\resources\js\home_page.js */"./resources/js/home_page.js");
__webpack_require__(/*! G:\Work\portfolio\resources\sass\home_page.scss */"./resources/sass/home_page.scss");
module.exports = __webpack_require__(/*! G:\Work\portfolio\resources\sass\portfolio_website\main.scss */"./resources/sass/portfolio_website/main.scss");


/***/ })

/******/ });