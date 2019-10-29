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
    container: document.getElementById('gitSlider')
})

/* Git Graph */
const graphContainer = document.getElementById("branchesGraph");

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("master");
master.commit({
    author: "Jacky <prince@dutunning.com>", subject: "Initial commit"
});

const develop = gitgraph.branch("develop");
develop.commit("Add TypeScript");

const aFeature = gitgraph.branch("a-feature");
aFeature
    .commit("Make it work")
    .commit("Make it right")
    .commit("Make it fast");

develop.merge(aFeature);
develop.commit("Prepare v1");

master.merge(develop).tag("v1.0.0");