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

function startQuiz(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        var timeLeft = 76;
        setInterval(function() {
            timeLeft -= 1;
            timeEl.textContent = "Time: " + timeLeft;
        }, 1000)
        startQuestions(); 
    }
};

function startQuestions(event) {
    titleEl.remove();
    paragraphEl.remove();
    buttonDivEl.remove();
        var questionText = document.createElement("h2")
        var questionUlEl = document.createElement("ul")
        var choiceOne = document.createElement("li")
        var choiceTwo = document.createElement("li")
        var choiceThree = document.createElement("li")
        var choiceFour = document.createElement("li")
        questionUlEl.appendChild(choiceOne);
        questionUlEl.appendChild(choiceTwo);
        questionUlEl.appendChild(choiceThree);
        questionUlEl.appendChild(choiceFour);
        questionText.textContent = questions[0].question
        choiceOne.textContent = questions[0].choice1
        choiceTwo.textContent = questions[0].choice2
        choiceThree.textContent = questions[0].choice3
        choiceFour.textContent = questions[0].choice4
        pageContentEl.appendChild(questionText);
        pageContentEl.appendChild(questionUlEl)
};
pageContentEl.addEventListener("click", startQuiz);

createHeader();