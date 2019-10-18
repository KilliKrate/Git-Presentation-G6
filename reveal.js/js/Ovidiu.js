/* Console Text: https://codepen.io/Tbgse/pen/dYaJyJ */
 
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}

/* Event Listeners: Fragments */

Reveal.addEventListener( 'fragmentshown', function( event ) {

  if (event.fragment.id === 'o-1') { 
    setTimeout(function (){
      consoleText(['program'], 'text',['white']);
    }, 500);
  }

} );