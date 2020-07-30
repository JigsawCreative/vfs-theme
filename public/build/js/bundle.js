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
var menuTop = document.querySelector("#menu-top"); // const mobLinks = document.querySelector("#menu-about-us");

mobMenu.addEventListener("click", function () {
  for (var index = 0; index < menuSpan.length; index++) {
    menuSpan[index].classList.toggle("open");
  }

  menuTop.classList.toggle("open");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiXSwibmFtZXMiOlsibW9iTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVTcGFuIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVUb3AiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCIkIiwialF1ZXJ5IiwicmVhZHkiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2xpY2siLCJhbmltYXRlIiwibG9hZCIsImZsZXhzbGlkZXIiLCJhbmltYXRpb24iLCJhbmltYXRpb25TcGVlZCIsImNvbnRyb2xOYXYiLCJkaXJlY3Rpb25OYXYiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiJHdpbmRvdyIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImlubmVyV2lkdGgiLCJTeW50YXhIaWdobGlnaHRlciIsImFsbCIsImFuaW1hdGlvbkxvb3AiLCJpdGVtV2lkdGgiLCJpdGVtTWFyZ2luIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsInJlc2l6ZSIsImdyaWRTaXplIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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LENBQUNHLE1BQUQsQ0FBZjtBQUFBLE1BQ0VRLFVBQVUsR0FBRztBQUFFUSxRQUFJLEVBQUU7QUFBUixHQURmLENBSFcsQ0FNWDs7QUFDQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFdBQVFqQixNQUFNLENBQUNrQixVQUFQLEdBQW9CLEdBQXJCLEdBQTRCLENBQTVCLEdBQ0psQixNQUFNLENBQUNrQixVQUFQLEdBQW9CLEdBQXJCLEdBQTRCLENBQTVCLEdBQWdDLENBRGxDO0FBRUQ7O0FBRURyQixHQUFDLENBQUMsWUFBWTtBQUNac0IscUJBQWlCLENBQUNDLEdBQWxCO0FBQ0QsR0FGQSxDQUFEO0FBSUFMLFNBQU8sQ0FBQ1IsSUFBUixDQUFhLFlBQVk7QUFDdkJWLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCVyxVQUF0QixDQUFpQztBQUMvQkMsZUFBUyxFQUFFLE9BRG9CO0FBRS9CWSxtQkFBYSxFQUFFLEtBRmdCO0FBRy9CQyxlQUFTLEVBQUUsR0FIb0I7QUFJL0JDLGdCQUFVLEVBQUUsQ0FKbUI7QUFLL0JDLGNBQVEsRUFBRVAsV0FBVyxFQUxVO0FBS047QUFDekJRLGNBQVEsRUFBRVIsV0FBVyxFQU5VLENBTVA7O0FBTk8sS0FBakM7QUFRRCxHQVRELEVBaEJXLENBMkJYOztBQUNBRixTQUFPLENBQUNXLE1BQVIsQ0FBZSxZQUFZO0FBQ3pCLFFBQUlDLFFBQVEsR0FBR1YsV0FBVyxFQUExQjtBQUVBVCxjQUFVLENBQUNRLElBQVgsQ0FBZ0JRLFFBQWhCLEdBQTJCRyxRQUEzQjtBQUNBbkIsY0FBVSxDQUFDUSxJQUFYLENBQWdCUyxRQUFoQixHQUEyQkUsUUFBM0I7QUFDRCxHQUxEO0FBTUQsQ0FsQ0EsR0FBRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBcIi4vbmF2XCI7XHJcbmltcG9ydCBcIi4vc2xpZGVyXCI7IiwiLy9NYWluIG1lbnVcclxuY29uc3QgbW9iTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnVcIik7XHJcbmNvbnN0IG1lbnVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXNwYW5cIik7XHJcbmNvbnN0IG1lbnVUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdG9wXCIpO1xyXG4vLyBjb25zdCBtb2JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1hYm91dC11c1wiKTtcclxubW9iTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW51U3Bhbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG1lbnVTcGFuW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICB9XHJcbiAgbWVudVRvcC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxufSk7XHJcblxyXG4vL3Njcm9sbCB0byB0b3AgYnV0dG9uXHJcbmNvbnN0ICQgPSBqUXVlcnk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIC8vQ2hlY2sgdG8gc2VlIGlmIHRoZSB3aW5kb3cgaXMgdG9wIGlmIG5vdCB0aGVuIGRpc3BsYXkgYnV0dG9uXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5mYWRlSW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vQ2xpY2sgZXZlbnQgdG8gc2Nyb2xsIHRvIHRvcFxyXG4gICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgODAwKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxufSk7XHJcbiIsImNvbnN0ICQgPSBqUXVlcnk7XHJcblxyXG4vLyBDYW4gYWxzbyBiZSB1c2VkIHdpdGggJChkb2N1bWVudCkucmVhZHkoKVxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi50ZXN0aW1vbmlhbHMtY29udGFpbmVyXCIpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgY29udHJvbE5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcGFnaW5nIGNvbnRyb2wgb2YgZWFjaCBjbGlkZT8gTm90ZTogTGVhdmUgdHJ1ZSBmb3IgbWFudWFsQ29udHJvbHMgdXNhZ2VcclxuICAgIGRpcmVjdGlvbk5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXMvbmV4dCBuYXZpZ2F0aW9uPyAodHJ1ZS9mYWxzZSlcclxuICAgIHByZXZUZXh0OiBcIlwiLCAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwcmV2aW91c1wiIGRpcmVjdGlvbk5hdiBpdGVtXHJcbiAgICBuZXh0VGV4dDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgJChcIi53ZWxjb21lLXNsaWRlci1jb250YWluZXJcIikuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwic2xpZGVcIixcclxuICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICBjb250cm9sTmF2OiB0cnVlLCAvL0Jvb2xlYW46IENyZWF0ZSBuYXZpZ2F0aW9uIGZvciBwYWdpbmcgY29udHJvbCBvZiBlYWNoIGNsaWRlPyBOb3RlOiBMZWF2ZSB0cnVlIGZvciBtYW51YWxDb250cm9scyB1c2FnZVxyXG4gICAgZGlyZWN0aW9uTmF2OiB0cnVlLCAvL0Jvb2xlYW46IENyZWF0ZSBuYXZpZ2F0aW9uIGZvciBwcmV2aW91cy9uZXh0IG5hdmlnYXRpb24/ICh0cnVlL2ZhbHNlKVxyXG4gICAgcHJldlRleHQ6IFwiXCIsIC8vU3RyaW5nOiBTZXQgdGhlIHRleHQgZm9yIHRoZSBcInByZXZpb3VzXCIgZGlyZWN0aW9uTmF2IGl0ZW1cclxuICAgIG5leHRUZXh0OiBcIlwiLFxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyBzdG9yZSB0aGUgc2xpZGVyIGluIGEgbG9jYWwgdmFyaWFibGVcclxuICB2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcclxuICAgIGZsZXhzbGlkZXIgPSB7IHZhcnM6IHt9IH07XHJcblxyXG4gIC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG4gIGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkgPyAyIDpcclxuICAgICAgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSA/IDMgOiA0O1xyXG4gIH1cclxuXHJcbiAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICBTeW50YXhIaWdobGlnaHRlci5hbGwoKTtcclxuICB9KTtcclxuXHJcbiAgJHdpbmRvdy5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5zZXJ2aWNlcy1zbGlkZXMnKS5mbGV4c2xpZGVyKHtcclxuICAgICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICAgIGFuaW1hdGlvbkxvb3A6IGZhbHNlLFxyXG4gICAgICBpdGVtV2lkdGg6IDIxMCxcclxuICAgICAgaXRlbU1hcmdpbjogNSxcclxuICAgICAgbWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuICAgICAgbWF4SXRlbXM6IGdldEdyaWRTaXplKCkgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNoZWNrIGdyaWQgc2l6ZSBvbiByZXNpemUgZXZlbnRcclxuICAkd2luZG93LnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cclxuICAgIGZsZXhzbGlkZXIudmFycy5taW5JdGVtcyA9IGdyaWRTaXplO1xyXG4gICAgZmxleHNsaWRlci52YXJzLm1heEl0ZW1zID0gZ3JpZFNpemU7XHJcbiAgfSk7XHJcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==