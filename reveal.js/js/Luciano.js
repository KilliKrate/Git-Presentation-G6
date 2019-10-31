/* Console Text: https://codepen.io/Tbgse/pen/dYaJyJ */

function writeCode(word, target, color, speed) {
    if (typeof (target) == 'string') {
        target = document.getElementById(target)
    }
    letterCount = 0;
    target.setAttribute('style', 'color:' + color)
    let writeInterval = setInterval(function () {
        newLetter = word[letterCount];
        if (newLetter === undefined) clearInterval(writeInterval);
        target.innerHTML += newLetter ? newLetter : "";
        letterCount += 1;
        console.log('eccoci')
    }, speed)
}

/* Simple slider */
var gitSlider = simpleslider.getSlider({
    container: document.getElementById('gitSlider'),
    delay: 2.5,
})
