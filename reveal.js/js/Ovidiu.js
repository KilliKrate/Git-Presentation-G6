/* Console Text: https://codepen.io/Tbgse/pen/dYaJyJ */

function consoleText(words, id, colors, interval) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {
    if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, interval)
}


/* Event Listeners: Fragments */

var oshown = [false, false]

Reveal.addEventListener('fragmentshown', function (event) {

  if (event.fragment.id === 'o-1' && !oshown[0]) {
    setTimeout(function () {
      consoleText(['program'], 'o-program', ['white'], 500);
      oshown[0] = true;
    }, 500);
  }

  if (event.fragment.id === 'o-2' && !oshown[1]) {
    setTimeout(function () {
      var typed2 = new Typed('#o-essay', {
        stringsElement: '#o-typed-essay',
        smartBackspace: true,
        loop: false,
        startDelay: 500,
        typeSpeed: 50,
        backSpeed: 40,
      });
    }, 500);
  }

});

/* Event Listeners: Slides*/

Reveal.addEventListener('gone-slide', function () {
  setTimeout(function () {
    var d = document.getElementById("smoke");
    d.className += " smoke-animation";
  }, 4000);
}, false);