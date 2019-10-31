/* Event Listeners: Fragments */

var oshown = Array(10).fill(false);
var lshown = Array(10).fill(false);
var dshown = Array(10).fill(false);

Reveal.addEventListener('fragmentshown', function (event) {

    if (event.fragment.id === 'o-1' && !oshown[0]) {
        setTimeout(function () {
            consoleText(['program'], 'o-program', ['#76ff03'], 500, 'program');
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
        oshown[1] = true;
    }

    if (event.fragment.id === "o-3" && !oshown[2]) {
        setTimeout(function () {
            var d = document.getElementById("smoke-1");
            d.className += " smoke-animation";
        }, 2000);
    }

    if (event.fragment.id === "o-4" && !oshown[3]) {
        setTimeout(function () {
            var d = document.getElementById("smoke-2");
            d.className += " smoke-animation";
        }, 3000);
    }

    if (event.fragment.id === 'o-5' && !oshown[4]) {
        setTimeout(function () {
            consoleText(['git init'], 'o-init', ['white'], 500, 'console');
            oshown[4] = true;
        }, 500);
    }

    if (event.fragment.id === 'l-1' && !lshown[0]) {
        child = document.createElement('span');
        child.className += 'hljs-title';
        setTimeout(function () {
            document.getElementById('who-did-what').append(document.createElement('br'))
            document.getElementById('who-did-what').append(child)
            writeCode('//You want to know who wrote a line of code', child, ['#c2bda5'], 75)
        }, 500);
        lshown[0] = true;
    }

    if (event.fragment.id === 'l-2') {
        document.getElementById('gitCollaboration').style['width'] = '50%';
        document.getElementById('gitCollaboration').style['margin-left'] = '0%';
    }

    if (event.fragment.id === 'l-3' && !lshown[1]) {
        setTimeout(function () {
            consoleText(['git status'], 'l-status', ['white'], 500, 'console-status');
            lshown[1] = true;
        }, 500);
    }

    if (event.fragment.id === 'l-4' && !lshown[2]) {
        setTimeout(function () {
            consoleText(['git add .'], 'l-add', ['white'], 500, 'console-add');
            lshown[1] = true;
        }, 500);
    }

    if (event.fragment.id === 'l-5' && !lshown[3]) {
        setTimeout(function () {
            consoleText(['git commit'], 'l-commit', ['white'], 500, 'console-commit');
            lshown[1] = true;
        }, 500);
    }

    if (event.fragment.id === 'd-1' && !dshown[0]) {
        setTimeout(function () {
            var typed3 = new Typed('#commands', {
                stringsElement: '#typed-commands',
                smartBackspace: true,
                loop: false,
                startDelay: 500,
                typeSpeed: 50,
                backSpeed: 40,
            });
        }, 500);
        dshown[0] = true;
    }

});