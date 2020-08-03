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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/bundle.js":
/*!*****************************!*\
  !*** ./assets/js/bundle.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./assets/js/nav.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./assets/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./assets/js/nav.js":
/*!**************************!*\
  !*** ./assets/js/nav.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Main menu
var mobMenu = document.querySelector("#mobile-menu");
var menuSpan = document.querySelectorAll(".menu-span");
var menuTop = document.querySelector("#menu-top");
var menuLinks = document.querySelector(".menu-top-container"); // const mobLinks = document.querySelector("#menu-about-us");

mobMenu.addEventListener("click", function () {
  for (var index = 0; index < menuSpan.length; index++) {
    menuSpan[index].classList.toggle("open");
  }

  menuTop.classList.toggle("open");
  menuLinks.classList.toggle("clickable");
}); //scroll to top button

var $ = jQuery;
$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  }); //Click event to scroll to top

  $(".scroll-to-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

/***/ }),

/***/ "./assets/js/slider.js":
/*!*****************************!*\
  !*** ./assets/js/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery; // Can also be used with $(document).ready()

$(window).load(function () {
  $(".testimonials-container").flexslider({
    animation: "slide",
    animationSpeed: 600,
    controlNav: true,
    //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
    //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "",
    //String: Set the text for the "previous" directionNav item
    nextText: ""
  });
  $(".welcome-slider-container").flexslider({
    animation: "slide",
    animationSpeed: 600,
    controlNav: true,
    //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
    //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "",
    //String: Set the text for the "previous" directionNav item
    nextText: ""
  });
});

(function () {
  // store the slider in a local variable
  var $window = $(window),
      flexslider = {
    vars: {}
  }; // tiny helper function to add breakpoints

  function getGridSize() {
    return window.innerWidth < 600 ? 2 : window.innerWidth < 900 ? 3 : 4;
  }

  $(function () {
    SyntaxHighlighter.all();
  });
  $window.load(function () {
    $('.services-slides').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: getGridSize(),
      // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value

    });
  }); // check grid size on resize event

  $window.resize(function () {
    var gridSize = getGridSize();
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiXSwibmFtZXMiOlsibW9iTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVTcGFuIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVUb3AiLCJtZW51TGlua3MiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCIkIiwialF1ZXJ5IiwicmVhZHkiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2xpY2siLCJhbmltYXRlIiwibG9hZCIsImZsZXhzbGlkZXIiLCJhbmltYXRpb24iLCJhbmltYXRpb25TcGVlZCIsImNvbnRyb2xOYXYiLCJkaXJlY3Rpb25OYXYiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiJHdpbmRvdyIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImlubmVyV2lkdGgiLCJTeW50YXhIaWdobGlnaHRlciIsImFsbCIsImFuaW1hdGlvbkxvb3AiLCJpdGVtV2lkdGgiLCJpdGVtTWFyZ2luIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsInJlc2l6ZSIsImdyaWRTaXplIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBcIi4vbmF2XCI7XHJcbmltcG9ydCBcIi4vc2xpZGVyXCI7IiwiLy9NYWluIG1lbnVcclxuY29uc3QgbW9iTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnVcIik7XHJcbmNvbnN0IG1lbnVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXNwYW5cIik7XHJcbmNvbnN0IG1lbnVUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdG9wXCIpO1xyXG5jb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9wLWNvbnRhaW5lclwiKTtcclxuLy8gY29uc3QgbW9iTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYWJvdXQtdXNcIik7XHJcbm1vYk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudVNwYW4ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBtZW51U3BhbltpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgfVxyXG4gIG1lbnVUb3AuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgbWVudUxpbmtzLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XHJcbn0pO1xyXG5cclxuLy9zY3JvbGwgdG8gdG9wIGJ1dHRvblxyXG5jb25zdCAkID0galF1ZXJ5O1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAvL0NoZWNrIHRvIHNlZSBpZiB0aGUgd2luZG93IGlzIHRvcCBpZiBub3QgdGhlbiBkaXNwbGF5IGJ1dHRvblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAkKFwiLnNjcm9sbC10by10b3BcIikuZmFkZUluKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnNjcm9sbC10by10b3BcIikuZmFkZU91dCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL0NsaWNrIGV2ZW50IHRvIHNjcm9sbCB0byB0b3BcclxuICAkKFwiLnNjcm9sbC10by10b3BcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDgwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCAkID0galF1ZXJ5O1xyXG5cclxuLy8gQ2FuIGFsc28gYmUgdXNlZCB3aXRoICQoZG9jdW1lbnQpLnJlYWR5KClcclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIudGVzdGltb25pYWxzLWNvbnRhaW5lclwiKS5mbGV4c2xpZGVyKHtcclxuICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsIC8vQm9vbGVhbjogQ3JlYXRlIG5hdmlnYXRpb24gZm9yIHBhZ2luZyBjb250cm9sIG9mIGVhY2ggY2xpZGU/IE5vdGU6IExlYXZlIHRydWUgZm9yIG1hbnVhbENvbnRyb2xzIHVzYWdlXHJcbiAgICBkaXJlY3Rpb25OYXY6IHRydWUsIC8vQm9vbGVhbjogQ3JlYXRlIG5hdmlnYXRpb24gZm9yIHByZXZpb3VzL25leHQgbmF2aWdhdGlvbj8gKHRydWUvZmFsc2UpXHJcbiAgICBwcmV2VGV4dDogXCJcIiwgLy9TdHJpbmc6IFNldCB0aGUgdGV4dCBmb3IgdGhlIFwicHJldmlvdXNcIiBkaXJlY3Rpb25OYXYgaXRlbVxyXG4gICAgbmV4dFRleHQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gICQoXCIud2VsY29tZS1zbGlkZXItY29udGFpbmVyXCIpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgY29udHJvbE5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcGFnaW5nIGNvbnRyb2wgb2YgZWFjaCBjbGlkZT8gTm90ZTogTGVhdmUgdHJ1ZSBmb3IgbWFudWFsQ29udHJvbHMgdXNhZ2VcclxuICAgIGRpcmVjdGlvbk5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXMvbmV4dCBuYXZpZ2F0aW9uPyAodHJ1ZS9mYWxzZSlcclxuICAgIHByZXZUZXh0OiBcIlwiLCAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwcmV2aW91c1wiIGRpcmVjdGlvbk5hdiBpdGVtXHJcbiAgICBuZXh0VGV4dDogXCJcIixcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcbiAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcbiAgICBmbGV4c2xpZGVyID0geyB2YXJzOiB7fSB9O1xyXG5cclxuICAvLyB0aW55IGhlbHBlciBmdW5jdGlvbiB0byBhZGQgYnJlYWtwb2ludHNcclxuICBmdW5jdGlvbiBnZXRHcmlkU2l6ZSgpIHtcclxuICAgIHJldHVybiAod2luZG93LmlubmVyV2lkdGggPCA2MDApID8gMiA6XHJcbiAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkgPyAzIDogNDtcclxuICB9XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgU3ludGF4SGlnaGxpZ2h0ZXIuYWxsKCk7XHJcbiAgfSk7XHJcblxyXG4gICR3aW5kb3cubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2VydmljZXMtc2xpZGVzJykuZmxleHNsaWRlcih7XHJcbiAgICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG4gICAgICBhbmltYXRpb25Mb29wOiBmYWxzZSxcclxuICAgICAgaXRlbVdpZHRoOiAyMTAsXHJcbiAgICAgIGl0ZW1NYXJnaW46IDUsXHJcbiAgICAgIG1pbkl0ZW1zOiBnZXRHcmlkU2l6ZSgpLCAvLyB1c2UgZnVuY3Rpb24gdG8gcHVsbCBpbiBpbml0aWFsIHZhbHVlXHJcbiAgICAgIG1heEl0ZW1zOiBnZXRHcmlkU2l6ZSgpIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcbiAgJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdyaWRTaXplID0gZ2V0R3JpZFNpemUoKTtcclxuXHJcbiAgICBmbGV4c2xpZGVyLnZhcnMubWluSXRlbXMgPSBncmlkU2l6ZTtcclxuICAgIGZsZXhzbGlkZXIudmFycy5tYXhJdGVtcyA9IGdyaWRTaXplO1xyXG4gIH0pO1xyXG59KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=