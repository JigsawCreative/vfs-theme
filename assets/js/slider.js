const $ = jQuery;

// Can also be used with $(document).ready()
$(window).load(function () {
  $(".testimonials-container").flexslider({
    animation: "slide",
    animationSpeed: 600,
    controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "", //String: Set the text for the "previous" directionNav item
    nextText: "",
  });

  $(".welcome-slider-container").flexslider({
    animation: "slide",
    animationSpeed: 600,
    controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "", //String: Set the text for the "previous" directionNav item
    nextText: "",
  });
});


(function () {

  // store the slider in a local variable
  var $window = $(window),
    flexslider = { vars: {} };

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
      (window.innerWidth < 900) ? 3 : 4;
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
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });

  // check grid size on resize event
  $window.resize(function () {
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());