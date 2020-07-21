


let spatula = document.getElementById('spatula'),
  burger1 = document.getElementById('burger1'),
  skill1 = document.getElementById('skill1'),
  burger2 = document.getElementById('burger2'),
  skill2 = document.getElementById('skill2'),
  burger3 = document.getElementById('burger3'),
  skill3 = document.getElementById('skill3'),
  burger4 = document.getElementById('burger4'),
  skill4 = document.getElementById('skill4'),
  burger5 = document.getElementById('burger5'),
  skill5 = document.getElementById('skill5'),
  burger6 = document.getElementById('burger6'),
  skill6 = document.getElementById('skill6');

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

console.log(pageYOffset);


if ((window.pageYOffset < 127) && (window.matchMedia("(min-width: 412px)").matches)){
  spatula.style.transform = "rotate(-" + window.pageYOffset + "deg)";
} else if ((window.pageYOffset < 180) && (window.matchMedia("(min-width: 412px)").matches)) {
    spatula.style.transform = "rotate(-" + window.pageYOffset + "deg)";
    burger1.style.transform = "translateX(" + (window.pageYOffset-127) * 0 + "px)";
    burger2.style.transform = "translateY(" + (window.pageYOffset-127) * 0.17 + "px)";
    burger3.style.transform = "translateY(" + (window.pageYOffset-127) * 0.4 + "px)";
    burger4.style.transform = "translateY(" + (window.pageYOffset-127) * 0.57 + "px)";
    burger5.style.transform = "translateY(" + (window.pageYOffset-127) * 0.79 + "px)";
    burger6.style.transform = "translateY(" + (window.pageYOffset-127) * 1 + "px)";
  } else if ((window.pageYOffset < 450) && (window.matchMedia("(min-width: 412px)").matches)) {
    console.log("limit");
    burger1.style.transform = "translateX(" + (window.pageYOffset-127) * 0 + "px)";
    burger2.style.transform = "translateY(" + (window.pageYOffset-127) * 0.17 + "px)";
    burger3.style.transform = "translateY(" + (window.pageYOffset-127) * 0.4 + "px)";
    burger4.style.transform = "translateY(" + (window.pageYOffset-127) * 0.57 + "px)";
    burger5.style.transform = "translateY(" + (window.pageYOffset-127) * 0.79 + "px)";
    burger6.style.transform = "translateY(" + (window.pageYOffset-127) * 1 + "px)";
  } else if ((window.pageYOffset < 120) && (window.matchMedia("(max-width: 412px)").matches)){
    spatula.style.transform = "rotate(-" + window.pageYOffset + "deg)";
  } else if ((window.pageYOffset < 350) && (window.matchMedia("(max-width: 412px)").matches)) {
    spatula.style.transform = "rotate(-" + window.pageYOffset + "deg)";
  } else if ((window.pageYOffset < 350) && (window.matchMedia("(min-width: 412px)").matches)) {
  }
})
