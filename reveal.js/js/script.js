/* Event Listeners: Fragments */

var oshown = Array(10).fill(false);
var lshown = Array(10).fill(false);
var dshown = Array(10).fill(false);
var ashown = Array(10).fill(false);

Reveal.addEventListener('fragmentshown', function (event) {


    /*

        OVIDIU
        
    */

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


    /*

        LUCIANO
        
    */

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
            lshown[2] = true;
        }, 500);
    }

    if (event.fragment.id === 'l-5' && !lshown[3]) {
        setTimeout(function () {
            consoleText(['git add index.html'], 'l-add-file', ['white'], 500, 'console-add-file');
            lshown[3] = true;
        }, 500);
    }

    if (event.fragment.id === 'l-6' && !lshown[4]) {
        setTimeout(function () {
            consoleText(['git commit -m "First commit"'], 'l-commit', ['white'], 500, 'console-commit');
            lshown[4] = true;
        }, 500);
    }


    /*

        DAVID
    */

    if (event.fragment.id === 'd-2' && !dshown[1]) {
        setTimeout(function () {
            consoleText(['git --version'], 'd-version', ['white'], 500, 'console-version');
            dshown[1] = true;
        }, 500);
    }

    if (event.fragment.id === 'd-3' && !dshown[2]) {
        setTimeout(function () {
            consoleText(['git config --global user.name bob'], 'd-config-u-bob', ['white'], 500, 'console-config-u-bob');
            dshown[2] = true;
        }, 500);
    }

    if (event.fragment.id === 'd-4' && !dshown[3]) {
        setTimeout(function () {
            consoleText(['git config user.name'], 'd-config-u', ['white'], 500, 'console-config-u');
            dshown[3] = true;
        }, 500);
    }
    if (event.fragment.id === 'd-5' && !dshown[4]) {
        setTimeout(function () {
            consoleText(['git status'], 'd-repo-first', ['white'], 500, 'console-repo-first');
            dshown[4] = true;
        }, 500);
    }
    if (event.fragment.id === 'd-6' && !dshown[5]) {
        setTimeout(function () {
            consoleText(['git push [URL] master'], 'd-repo-second', ['white'], 500, 'console-repo-second');
            dshown[5] = true;
        }, 500);
    }



    /*

        ANGELO
        
    */

    if (event.fragment.id === 'a-1' && !ashown[0]) {
        setTimeout(function () {
            consoleText(['git branch new_branch'], 'a-branch-create', ['white'], 500, 'console-branch-create');
            ashown[0] = true;
        }, 500);
    }

    if (event.fragment.id === 'a-2' && !ashown[1]) {
        setTimeout(function () {
            consoleText(['git branch checkout new_branch'], 'a-branch-checkout', ['white'], 500, 'console-branch-checkout');
            ashown[1] = true;
        }, 500);
    }

    if (event.fragment.id === 'a-3' && !ashown[2]) {
        setTimeout(function () {
            consoleText(['git branch checkout -b new_branch'], 'a-branch-create-checkout', ['white'], 500, 'console-branch-create-checkout');
            ashown[2] = true;
        }, 500);
    }

    if (event.fragment.id === 'a-4' && !ashown[3]) {
        setTimeout(function () {
            consoleText(['git branch -d new_branch'], 'a-branch-delete', ['white'], 500, 'console-branch-delete');
            ashown[3] = true;
        }, 500);
    }

    if (event.fragment.id === 'a-5' && !ashown[4]) {
        setTimeout(function () {
            consoleText(['git branch -a'], 'a-branch-list', ['white'], 500, 'console-branch-list');
            ashown[4] = true;
        }, 500);
    }

});