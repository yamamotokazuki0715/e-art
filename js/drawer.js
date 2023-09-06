$(document).ready(function () {
  $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
  });
});


/***** スマホでのhoverを無効にする *****/

var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

$(window).scroll(function () {
  if($(window).scrollTop() >= 75) {
    $("#nav-toggle span").css({
      backgroundColor: "#20c6fe"
    });
    $("#drawer-nav").css({
      backgroundColor: "#fff"
    });
    $("#drawer-nav a").css({
      color: "#20c6fe"
    });
  }else {
    $("#nav-toggle span").css({
      backgroundColor: "#fff"
    });
    $("#drawer-nav").css({
      backgroundColor: "#20c6fe"
    });
    $("#drawer-nav a").css({
      color: "#fff"
    });
  }
});
