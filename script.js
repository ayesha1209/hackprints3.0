const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

$(window).scroll(function () {
  if ($(window).scrollTop() < 50) {
    $("#rocketmeluncur").slideUp(500);
  } else {
    $("#rocketmeluncur").slideDown(500);
  }
  var ftrocketmeluncur = $("#ft")[0] ? $("#ft")[0] : $(document.body)[0];
  var scrolltoprocketmeluncur = $("rocketmeluncur");
  var viewPortHeightrocketmeluncur = parseInt(
    document.documentElement.clientHeight
  );
  var scrollHeightrocketmeluncur = parseInt(
    document.body.getBoundingClientRect().top
  );
  var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
  var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
  if (basewrocketmeluncur < 1000) {
    var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)["left"]);
    leftrocketmeluncur =
      leftrocketmeluncur < swrocketmeluncur
        ? leftrocketmeluncur * 2 - swrocketmeluncur
        : leftrocketmeluncur;
    scrolltoprocketmeluncur.style.left =
      basewrocketmeluncur + leftrocketmeluncur + "px";
  } else {
    scrolltoprocketmeluncur.style.left = "auto";
    scrolltoprocketmeluncur.style.right = "10px";
  }
});

$("#rocketmeluncur").click(function () {
  $("html, body").animate(
    { scrollTop: "0px", display: "none" },
    {
      duration: 600,
      easing: "linear",
    }
  );

  var self = this;
  this.className += " " + "launchrocket";
  setTimeout(function () {
    self.className = "showrocket";
  }, 800);
});

var items = document.querySelectorAll(".custom-timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
