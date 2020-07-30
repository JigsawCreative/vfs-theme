//Main menu
const mobMenu = document.querySelector("#mobile-menu");
const menuSpan = document.querySelectorAll(".menu-span");
const menuTop = document.querySelector("#menu-top");
// const mobLinks = document.querySelector("#menu-about-us");
mobMenu.addEventListener("click", () => {
  for (let index = 0; index < menuSpan.length; index++) {
    menuSpan[index].classList.toggle("open");
  }
  menuTop.classList.toggle("open");
});

//scroll to top button
const $ = jQuery;
$(document).ready(function() {
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
