/* Event Listeners: Fragments */

var oshown = [false, false];
var lshown = [false, false];

Reveal.addEventListener('fragmentshown', function (event) {

    if (event.fragment.id === 'o-1' && !oshown[0]) {
        setTimeout(function () {
            consoleText(['program'], 'text', ['white']);
            oshown[0] = true;
        }, 500);
    }

    if (event.fragment.id === 'o-2' && !oshown[1]) {
        setTimeout(function () {
            var typed2 = new Typed('#essay', {
                stringsElement: '#typed-essay',
                smartBackspace: true,
                loop: false,
                startDelay: 500,
                typeSpeed: 50,
                backSpeed: 40,
            });
        }, 500);
    }

    if (event.fragment.id === 'l-1' && !lshown[0]) {
        child = document.createElement('span');
        child.className += 'hljs-title';
        setTimeout(function () {
            Reveal.nextFragment();
            document.getElementById('who-did-what').append(document.createElement('br'))
            document.getElementById('who-did-what').append(child)
            writeCode('//You want to know who wrote a line of code', child, ['#c2bda5'], 75)
            oshown[0] = true;
        }, 1500);
        lshown[0] = true;
    }

    if (event.fragment.id === 'l-2' && !lshown[1]) {
        setTimeout(function () {
            event.fragment.style['margin-left'] = '0%';
            setTimeout(function () {
                Reveal.nextFragment()
            }, 1000)
        }, 2000)
    }


});

/* Event Listeners: Slides*/

Reveal.addEventListener('gone-slide', function () {
    setTimeout(function () {
        var d = document.getElementById("smoke");
        d.className += " smoke-animation";
    }, 2000);
}, false);