time = 0;
var pageContentEl = document.querySelector("#page-content")
var timeEl = document.createElement("p");
var titleEl = document.createElement("h1");
var paragraphEl = document.createElement("p");
var buttonDivEl = document.createElement("div");

var questions = [
    {
    question: "Commonly used data types DO Not Include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer:  "alerts"
    },
    {
    question: "The condition in an if/ else statement is enclosed with _________.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    answer:  "parenthesis"
    },
    {
    question: "Commonly used data types DO Not Include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer:  "alerts"
        },
]

function createHeader() {
    var headerEl = document.querySelector("header");
    var viewScoresEl = document.createElement("h2");
    viewScoresEl.className = "view-scores";
    viewScoresEl.textContent = "View high scores";
    headerEl.appendChild(viewScoresEl);

    timeEl.className = "time";
    timeEl.textContent = "Time: " + time;
    headerEl.appendChild(timeEl);
    createBody();
};

function createBody() {
    titleEl.className = "title";
    titleEl.textContent = "Coding Quiz Challenge";
    pageContentEl.appendChild(titleEl);

    paragraphEl.className = "instructions";
    paragraphEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    pageContentEl.appendChild(paragraphEl);

    buttonDivEl.className = "start-btn-div"
    var startButtonEl = document.createElement("button");
    startButtonEl.className = "start-btn";
    startButtonEl.textContent = "Start Quiz";
    buttonDivEl.appendChild(startButtonEl)
    pageContentEl.appendChild(buttonDivEl)
}

createHeader();