var timeEl = document.getElementById("timer")
var footerEl = $("#bottom")
var timeLeft = 0;
var i = 0;
var score = 0;
var j = 0;

var pageContentEl = $("#page-content")
var startButtonEl = $(".start-btn")
var titleEl = $("<h1></h2>");
var paragraphEl = $("<p></p>");
var buttonDivEl = $("<div></div>");
var questionText = $("<h2></h2>").addClass("questions-titles")
var questionOlEl = $("<ol></ol>").addClass("choices")
var choiceOne = $("<li></li>")
.addClass("choice")
.attr( 'id', 'choice1')
var choiceTwo = $("<li></li>")
.addClass("choice")
.attr( 'id', 'choice2')
var choiceThree = $("<li></li>")
.addClass("choice")
.attr( 'id', 'choice3')
var choiceFour = $("<li></li>")
.addClass("choice")
.attr( 'id', 'choice4')

var questions = [
    {
    question: "Commonly used data types DO Not Include:",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    answer: $(choiceThree).attr('id')
    },
    {
    question: "The condition in an if/ else statement is enclosed with _________.",
    a: "quotes",
    b: "parenthesis",
    c: "curly brackets",
    d: "square brackets",
    answer: $(choiceTwo).attr('id')
    },
    {
    question: "Arrays in Javascript can be used to store __________.",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    answer: $(choiceFour).attr('id')
    },
    {
    question: "String values must be enclosed with ______ when being assigned to variables",
    a: "quotes",
    b: "curly brackets",
    c: "commas",
    d: "parenthesis",
    answer: $(choiceOne).attr('id')
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console.log",
    answer: $(choiceFour).attr('id')
    }
]


function startTimer() {
    timeLeft =+ 76;
    var countDown = setInterval(function() {
        timeLeft -= 1;
        timeEl.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0 || i >= questions.length) {
            clearInterval(countDown);
            endGame();
        } 
    }, 1000)
    loadQuestions();
};

function loadQuestions(){
    removeAllChildNodes(pageContentEl);
    if (i < questions.length){
        questionsDivEl = $("<div></div>").addClass("questions-container");
        $(questionOlEl).append(choiceOne, choiceTwo, choiceThree, choiceFour);
        $(questionText).text(questions[i].question);
        $(choiceOne).text('1. ' + questions[i].a)
        $(choiceTwo).text("2. " + questions[i].b)
        $(choiceThree).text("3. " + questions[i].c)
        $(choiceFour).text("4. " + questions[i].d)
        $(questionsDivEl).append(questionText);
        $(questionsDivEl).append(questionOlEl);
        $(pageContentEl).append(questionsDivEl);
    }
    choiceOne.on("click", checkAnswer);
    choiceTwo.on("click", checkAnswer);  
    choiceThree.on("click", checkAnswer);  
    choiceFour.on("click", checkAnswer);   
};

function checkAnswer() {
    if (this.id === questions[i].answer){
        timeLeft += 10;
        timeEl.textContent = "Time: " + timeLeft;
        score += 10;
        footerRight();
    }
    else if (this.id != questions[i].answer) {
        timeLeft -= 10;
        footerWrong();
    }
    i++
    removeAllChildNodes(questionsDivEl);
    loadQuestions();  
}  

var footerRight = function(){
    var rightEl = $("<h2></h2>").addClass("answer").text("Right!")
    footerEl.append(rightEl);
    setTimeout(clearFooter, 3000);
}

var footerWrong = function(){
    var wrongEl = $("<h2></h2>").addClass("answer").text("Wrong!")
    footerEl.append(wrongEl);
    setTimeout(clearFooter, 2000); 
};

function clearFooter(){
    removeAllChildNodes(footerEl)
};

function endGame(){
    var h2El = $("<h2></h2>").addClass("endgame-h2").text("All done!");
    var pEl = $("<p></p>").addClass("endgame-p").text("Your final score is " + score);
    var inputFormEl = $("<div></div>").addClass("input-form")
    var initialsEl = $("<p></p>").addClass("endgame-p").text("Enter initials: ");

    var inputEl = $("<input></input>")
    .addClass("input")
    .attr("type", "text")
    .attr("value", "");

    var subBtnEl = $("<button></button>").addClass('submit-btn').text("Submit");
    $(subBtnEl).on("click", submitScore)

    inputFormEl.append(initialsEl);
    inputFormEl.append(inputEl);
    inputFormEl.append(subBtnEl);
    pageContentEl.append(h2El)
    pageContentEl.append(pEl)
    pageContentEl.append(inputFormEl)

 
    function submitScore(){
        inputEl = inputEl.val()
        if (inputEl === "" || inputEl.length > 2 || inputEl.length < 1){
            alert("Enter valid initials")
            removeAllChildNodes(pageContentEl)
            endGame();
        }
        else { 
            loadHighScores(inputEl, score);
        }
    }
};

function saveHighScores(INP, SCR){
    var highscores = JSON.parse(localStorage.getItem('highscores'));
    if(!highscores){
        highscores = {
        inputArr:[],
        scoreArr:[]
        }
        var IArr = highscores.inputArr
        var SArr = highscores.scoreArr
        IArr.push(INP)
        SArr.push(SCR)
    }
    else {
        highscores.inputArr.push(INP)
        highscores.scoreArr.push(SCR)
    } 
    localStorage.setItem('highscores', JSON.stringify(highscores))
    loadHighScores();
}

function loadHighScores(){
    var highscores = JSON.parse(localStorage.getItem('highscores'));
    highscores.scoreArr.sort((a,b)=>b-a)
    console.log(highscores.scoreArr)
};

function removeAllChildNodes(parent) {
        (parent).empty();
};

startButtonEl.on("click", startTimer);

