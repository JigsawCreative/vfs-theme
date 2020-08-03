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
});

(function ($) {
  function setup_collapsible_submenus() {
    var $menu = $('#menu-top'),
        top_level_link = '#menu-top > .menu-item-has-children > a';
    $menu.find('a').each(function () {
      $(this).off('click');
      console.log($menu);

      if ($(this).is(top_level_link)) {
        $(this).attr('href', '#');
      }

      if (!$(this).siblings('.sub-menu').length) {
        $(this).on('click', function (event) {
          $(this).parents('.mobile_nav').trigger('click');
        });
      } else {
        $(this).on('click', function (event) {
          event.preventDefault();
          $(this).parent().toggleClass('visible');
        });
      }
    });
  }

  $(window).load(function () {
    setTimeout(function () {
      setup_collapsible_submenus();
    }, 700);
  });
})(jQuery); //scroll to top button


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiXSwibmFtZXMiOlsibW9iTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVTcGFuIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVUb3AiLCJtZW51TGlua3MiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCIkIiwic2V0dXBfY29sbGFwc2libGVfc3VibWVudXMiLCIkbWVudSIsInRvcF9sZXZlbF9saW5rIiwiZmluZCIsImVhY2giLCJvZmYiLCJjb25zb2xlIiwibG9nIiwiaXMiLCJhdHRyIiwic2libGluZ3MiLCJvbiIsImV2ZW50IiwicGFyZW50cyIsInRyaWdnZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsInRvZ2dsZUNsYXNzIiwid2luZG93IiwibG9hZCIsInNldFRpbWVvdXQiLCJqUXVlcnkiLCJyZWFkeSIsInNjcm9sbCIsInNjcm9sbFRvcCIsImZhZGVJbiIsImZhZGVPdXQiLCJjbGljayIsImFuaW1hdGUiLCJmbGV4c2xpZGVyIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uU3BlZWQiLCJjb250cm9sTmF2IiwiZGlyZWN0aW9uTmF2IiwicHJldlRleHQiLCJuZXh0VGV4dCIsIiR3aW5kb3ciLCJ2YXJzIiwiZ2V0R3JpZFNpemUiLCJpbm5lcldpZHRoIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJhbGwiLCJhbmltYXRpb25Mb29wIiwiaXRlbVdpZHRoIiwiaXRlbU1hcmdpbiIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJyZXNpemUiLCJncmlkU2l6ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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VTtBQUtOO0FBQ3pCUSxjQUFRLEVBQUVSLFdBQVcsRUFOVSxDQU1QOztBQU5PLEtBQWpDO0FBUUQsR0FURCxFQWhCVyxDQTJCWDs7QUFDQUYsU0FBTyxDQUFDVyxNQUFSLENBQWUsWUFBWTtBQUN6QixRQUFJQyxRQUFRLEdBQUdWLFdBQVcsRUFBMUI7QUFFQVQsY0FBVSxDQUFDUSxJQUFYLENBQWdCUSxRQUFoQixHQUEyQkcsUUFBM0I7QUFDQW5CLGNBQVUsQ0FBQ1EsSUFBWCxDQUFnQlMsUUFBaEIsR0FBMkJFLFFBQTNCO0FBQ0QsR0FMRDtBQU1ELENBbENBLEdBQUQsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgXCIuL25hdlwiO1xyXG5pbXBvcnQgXCIuL3NsaWRlclwiOyIsIi8vTWFpbiBtZW51XHJcbmNvbnN0IG1vYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51XCIpO1xyXG5jb25zdCBtZW51U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1zcGFuXCIpO1xyXG5jb25zdCBtZW51VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXRvcFwiKTtcclxuY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRvcC1jb250YWluZXJcIik7XHJcbi8vIGNvbnN0IG1vYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWFib3V0LXVzXCIpO1xyXG5tb2JNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnVTcGFuLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgbWVudVNwYW5baW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIH1cclxuICBtZW51VG9wLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIG1lbnVMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2thYmxlXCIpO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblx0IFxyXG5cdGZ1bmN0aW9uIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCkge1xyXG5cdFx0Y29uc3QgJG1lbnUgPSAkKCcjbWVudS10b3AnKSxcclxuICAgICAgdG9wX2xldmVsX2xpbmsgPSAnI21lbnUtdG9wID4gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJztcclxuXHRcdFx0XHJcblx0XHQkbWVudS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5vZmYoJ2NsaWNrJyk7XHJcblx0XHRcdCBjb25zb2xlLmxvZygkbWVudSk7XHJcblx0XHRcdGlmICggJCh0aGlzKS5pcyh0b3BfbGV2ZWxfbGluaykgKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdocmVmJywgJyMnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQgXHJcblx0XHRcdGlmICggISAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5sZW5ndGggKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcubW9iaWxlX25hdicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdCBcclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCk7XHJcblx0XHR9LCA3MDApO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuLy9zY3JvbGwgdG8gdG9wIGJ1dHRvblxyXG5jb25zdCAkID0galF1ZXJ5O1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAvL0NoZWNrIHRvIHNlZSBpZiB0aGUgd2luZG93IGlzIHRvcCBpZiBub3QgdGhlbiBkaXNwbGF5IGJ1dHRvblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAkKFwiLnNjcm9sbC10by10b3BcIikuZmFkZUluKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnNjcm9sbC10by10b3BcIikuZmFkZU91dCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL0NsaWNrIGV2ZW50IHRvIHNjcm9sbCB0byB0b3BcclxuICAkKFwiLnNjcm9sbC10by10b3BcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDgwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCAkID0galF1ZXJ5O1xyXG5cclxuLy8gQ2FuIGFsc28gYmUgdXNlZCB3aXRoICQoZG9jdW1lbnQpLnJlYWR5KClcclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIudGVzdGltb25pYWxzLWNvbnRhaW5lclwiKS5mbGV4c2xpZGVyKHtcclxuICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsIC8vQm9vbGVhbjogQ3JlYXRlIG5hdmlnYXRpb24gZm9yIHBhZ2luZyBjb250cm9sIG9mIGVhY2ggY2xpZGU/IE5vdGU6IExlYXZlIHRydWUgZm9yIG1hbnVhbENvbnRyb2xzIHVzYWdlXHJcbiAgICBkaXJlY3Rpb25OYXY6IHRydWUsIC8vQm9vbGVhbjogQ3JlYXRlIG5hdmlnYXRpb24gZm9yIHByZXZpb3VzL25leHQgbmF2aWdhdGlvbj8gKHRydWUvZmFsc2UpXHJcbiAgICBwcmV2VGV4dDogXCJcIiwgLy9TdHJpbmc6IFNldCB0aGUgdGV4dCBmb3IgdGhlIFwicHJldmlvdXNcIiBkaXJlY3Rpb25OYXYgaXRlbVxyXG4gICAgbmV4dFRleHQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gICQoXCIud2VsY29tZS1zbGlkZXItY29udGFpbmVyXCIpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgY29udHJvbE5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcGFnaW5nIGNvbnRyb2wgb2YgZWFjaCBjbGlkZT8gTm90ZTogTGVhdmUgdHJ1ZSBmb3IgbWFudWFsQ29udHJvbHMgdXNhZ2VcclxuICAgIGRpcmVjdGlvbk5hdjogdHJ1ZSwgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXMvbmV4dCBuYXZpZ2F0aW9uPyAodHJ1ZS9mYWxzZSlcclxuICAgIHByZXZUZXh0OiBcIlwiLCAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwcmV2aW91c1wiIGRpcmVjdGlvbk5hdiBpdGVtXHJcbiAgICBuZXh0VGV4dDogXCJcIixcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcbiAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcbiAgICBmbGV4c2xpZGVyID0geyB2YXJzOiB7fSB9O1xyXG5cclxuICAvLyB0aW55IGhlbHBlciBmdW5jdGlvbiB0byBhZGQgYnJlYWtwb2ludHNcclxuICBmdW5jdGlvbiBnZXRHcmlkU2l6ZSgpIHtcclxuICAgIHJldHVybiAod2luZG93LmlubmVyV2lkdGggPCA2MDApID8gMiA6XHJcbiAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkgPyAzIDogNDtcclxuICB9XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgU3ludGF4SGlnaGxpZ2h0ZXIuYWxsKCk7XHJcbiAgfSk7XHJcblxyXG4gICR3aW5kb3cubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2VydmljZXMtc2xpZGVzJykuZmxleHNsaWRlcih7XHJcbiAgICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG4gICAgICBhbmltYXRpb25Mb29wOiBmYWxzZSxcclxuICAgICAgaXRlbVdpZHRoOiAyMTAsXHJcbiAgICAgIGl0ZW1NYXJnaW46IDUsXHJcbiAgICAgIG1pbkl0ZW1zOiBnZXRHcmlkU2l6ZSgpLCAvLyB1c2UgZnVuY3Rpb24gdG8gcHVsbCBpbiBpbml0aWFsIHZhbHVlXHJcbiAgICAgIG1heEl0ZW1zOiBnZXRHcmlkU2l6ZSgpIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcbiAgJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdyaWRTaXplID0gZ2V0R3JpZFNpemUoKTtcclxuXHJcbiAgICBmbGV4c2xpZGVyLnZhcnMubWluSXRlbXMgPSBncmlkU2l6ZTtcclxuICAgIGZsZXhzbGlkZXIudmFycy5tYXhJdGVtcyA9IGdyaWRTaXplO1xyXG4gIH0pO1xyXG59KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=