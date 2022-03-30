var timeEl = document.getElementById("timer")
var footerEl = document.getElementById("bottom")
var timeLeft = 0;
var i = 0;
var score = 0;

var pageContentEl = document.querySelector("#page-content")
var startButtonEl = document.querySelector(".start-btn")
var titleEl = document.createElement("h1");
var paragraphEl = document.createElement("p");
var buttonDivEl = document.createElement("div");
var questionText = document.createElement("h2")
questionText.className = "question-titles"
var questionOlEl = document.createElement("ol")
var choiceOne = document.createElement("li")
var choiceTwo = document.createElement("li")
var choiceThree = document.createElement("li")
var choiceFour = document.createElement("li")
choiceOne.className = "choice1";
choiceTwo.className = "choice2";
choiceThree.className = "choice3";
choiceFour.className = "choice4";
questionOlEl.className = "choices"

var questions = [
    {
    question: "Commonly used data types DO Not Include:",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    answer: choiceThree.className
    },
    {
    question: "The condition in an if/ else statement is enclosed with _________.",
    a: "quotes",
    b: "curly brackets",
    c: "parenthesis",
    d: "square brackets",
    answer: choiceThree.className
    },
    {
    question: "Arrays in Javascript can be used to store __________.",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    answer: choiceFour.className
    },
    {
    question: "String values must be enclosed with ______ when being assigned to variables",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parenthesis",
    answer: choiceThree.className
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console.log",
    answer: choiceFour.className
    }
]


function startTimer() {
    timeLeft =+ 76;
    var countDown = setInterval(function() {
        timeLeft -= 1;
        timeEl.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countDown);
            endGame();
        } 
    }, 1000)
    loadQuestions();
};

function loadQuestions(){
    removeAllChildNodes(pageContentEl);
    if (i < questions.length){
        questionsDivEl = document.createElement("div");
        questionsDivEl.className = "questions-container";
        questionOlEl.appendChild(choiceOne);
        questionOlEl.appendChild(choiceTwo);
        questionOlEl.appendChild(choiceThree);
        questionOlEl.appendChild(choiceFour);
        questionText.textContent = questions[i].question
        choiceOne.textContent = questions[i].a
        choiceTwo.textContent = questions[i].b
        choiceThree.textContent = questions[i].c
        choiceFour.textContent = questions[i].d
        questionsDivEl.appendChild(questionText);
        questionsDivEl.appendChild(questionOlEl);
        pageContentEl.appendChild(questionsDivEl);
    }
    else if (i >= questions.length) {
        endGame();
    }
};

function checkAnswer() {
    if (this.className === questions[i].answer){
        timeLeft += 10;
        timeEl.textContent = "Time: " + timeLeft;
        score += 10;
        removeAllChildNodes(footerEl)
        footerRight();
    }
    else if (this.className != questions[i].answer) {
        timeLeft -= 10;
        removeAllChildNodes(footerEl)
        footerWrong();
    }
    i++
    removeAllChildNodes(questionsDivEl);
    loadQuestions();  
}  

var footerRight = function(){
    var rightEl = document.createElement("h2")
    rightEl.className = "answer"
    rightEl.textContent = "Right!"
    footerEl.appendChild(rightEl) 
}

var footerWrong = function(){
    var wrongEl = document.createElement("h2")
    wrongEl.className = "answer"
    wrongEl.textContent = "Wrong!"
    footerEl.appendChild(wrongEl) 
}

function endGame(){
    console.log("hi")
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
startButtonEl.addEventListener("click", startTimer);
choiceOne.addEventListener("click", checkAnswer);
choiceTwo.addEventListener("click", checkAnswer);  
choiceThree.addEventListener("click", checkAnswer);  
choiceFour.addEventListener("click", checkAnswer);   