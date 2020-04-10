let spatula = document.getElementById('spatula'),
  burger1 = document.getElementById('burger1'),
  burger2 = document.getElementById('burger2'),
  burger3 = document.getElementById('burger3'),
  burger4 = document.getElementById('burger4'),
  burger5 = document.getElementById('burger5'),
  burger6 = document.getElementById('burger6');

;
(function() {

  var throttle = function(type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function() {

  if (window.pageYOffset < 180) {

    spatula.style.transform = "rotate(-" + window.pageYOffset + "deg)";
    burger1.style.transform = "translateY(" + window.pageYOffset * 0 + "px)";
    burger2.style.transform = "translateY(" + window.pageYOffset * 0.17 + "px)";
    burger3.style.transform = "translateY(" + window.pageYOffset * 0.4 + "px)";
    burger4.style.transform = "translateY(" + window.pageYOffset * 0.57 + "px)";
    burger5.style.transform = "translateY(" + window.pageYOffset * 0.79 + "px)";
    burger6.style.transform = "translateY(" + window.pageYOffset * 1 + "px)";
  } else if (window.pageYOffset < 350) {
    console.log("limit");
    burger1.style.transform = "translateY(" + window.pageYOffset * 0 + "px)";
    burger2.style.transform = "translateY(" + window.pageYOffset * 0.17 + "px)";
    burger3.style.transform = "translateY(" + window.pageYOffset * 0.4 + "px)";
    burger4.style.transform = "translateY(" + window.pageYOffset * 0.57 + "px)";
    burger5.style.transform = "translateY(" + window.pageYOffset * 0.79 + "px)";
    burger6.style.transform = "translateY(" + window.pageYOffset * 1 + "px)";
  }
})
