//declare global variables and retrieve as DOM elements

var beginQuizPage = document.getElementById('beginquiz');
var beginQuizbtn = document.getElementById('beginbutton');
var quiz = document.getElementById('rockquiz');
var quizTimer = document.getElementById ('timer');
var quizQuestions = document.getElementById('questions');
var aButton = document.getElementById ('a');
var bButton = document.getElementById ('b');
var cButton = document.getElementById ('c');
var dButton = document.getElementById ('d');
var resultsRecord = document.getElementById ('results');
var scorepage = document.getElementById ('inputscores');
var finalScore= document.getElementById ('totalscore');
var highScoreInitials = document. getElementById ('initials');
var submitScoreBtn = document.getElementById('submit');
var scoreContainer= document.getElementById('hscontainer');
var highScorePage = document.getElementById('hspage');
var showHighScore = document.getElementById('hsscore');
var gameOverBtns = document.getElementById ('endbuttons');

//declare quiz question array

var rockQuizQuestions =[ 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answerA: "console.log",
        answerB: "terminal",
        answerC: "for loops",
        answerD: "JavaScript",
        rightAnswer: 'a'
    },
    {
        question: "Commonly used data types do NOT include?",
        answerA: "alerts",
        answerB: "strings",
        answerC: "booleans",
        answerD: "numbers",
        rightAnswer:'a',
    },
    {
        question: "The condition in an if/else statement is enclosed with?",
        answerA: "curly brackets",
        answerB: "parenthesis",
        answerC: "brackets",
        answerD: "quotes",
        rightAnswer: 'a',
    },
    {
        question: "Arrays in JavaScript can be used to store?",
        answerA: "booleans",
        answerB: "numbers and strings",
        answerC: "other arrays",
        answerD: "all of the above",
        rightAnswer: 'd',
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables?",
        answerA:"quotes",
        answerB:"commas",
        answerC:"parenthesis",
        answerD: "curly brackets",
        rightAnswer: 'a',

    },
    {
        question: "How do you create a comment in Javascript?",
        answerA: "//...",
        answerB: "/*...",
        answerC: "<<!-->",
        answerD: "none of the above",
        rightAnswer: 'a',
    },
    {
        question: "Bonus: What dinosaur in the Original Jurassic Park caused the cup of water to ripple?",
        answerA: "T-Rex",
        answerB: "Blue the Raptor",
        answerC: "Hadrosaur",
        answerD: "Triceratops",
        rightAnswer: 'a',
    },

];

// lastQuestionIndex finds the final quiz question
var lastQuestionIndex = rockQuizQuestions.length;
//defines the beginning of the array indices
var currentQuestionIndex = 0;
//sets amount of time for quiz
var timeRemaining = 60;
var timerInterval;
//sets beginning score for quiz
var score = 0;
var correct;

//This function cycles through the rockQuizQuestion array and presents a question to the user
function createQuizQuestion (){
    scorepage.style.display ='none';
    if (currentQuestionIndex === lastQuestionIndex){
        return endScore();
    }
var displayQuestion = rockQuizQuestions[currentQuestionIndex];
quizQuestions.innerHTML = "<h4>" + displayQuestion.question + "</h4>";
aButton.innerHTML = displayQuestion.answerA;
bButton.innerHTML = displayQuestion.answerB;
cButton.innerHTML = displayQuestion.answerC;
dButton.innerHTML = displayQuestion.answerD;

};

//This function starts the timer, hides the start and score page, and displays the first question

function beginQuiz (){
    scorepage.style.display = "none";
    beginQuizPage.style.display ='none';
    //calls the createQuizQuestion function
    createQuizQuestion();

    //begins timer
    timerInterval = setInterval(function () {
        //subtracts time from timer
        timeRemaining--;
        //displays remaining time on page
        quizTimer.textContent = "Time Remaining: " + timeRemaining;

        //this ends the game if time runs out
        if (timeRemaining===0){
            clearInterval (timerInterval);
            endScore();
        }

    }, 1000);
    quiz.style.display = "block";


}

//function to show final page and display score

function endScore() {
    quiz.style.display = 'none';
    scorepage.style.display ='flex';
    clearInterval(timerInterval);
    highScoreInitials.value ='';
    finalScore.innerHTML = "You got " + score + "out of " + rockQuizQuestions.length + 'correct';

}

submitScoreBtn.addEventListener("click", function highScore(){
    if(highScoreInitials.value ===""){
        alert ('please enter your initials');
        return false;
    }else{
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores"))||[];
    var user = highScoreInitials.value.trim();
    var currentHighScore ={
        name: user,
        score: score
    };
    scorepage.style.display ='none';
    scoreContainer.style.display ='flex';
    highScorePage.style.display ='block';
    gameOverBtns.style.display='flex';

    savedHighScores.push(currentHighScore);
    localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
    generateHighScores();

}

});

function generateHighScores(){
    highScoreInitials.innerHTML = "";
    showHighScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highScoreInitials.appendChild(newNameSpan);
       showHighScore.appendChild(newScoreSpan);
    }
}

function HighScores() {
    beginQuizPage.style.display= "none";
    scorepage.style.display ='none';
    highScorePage.style.display="block";
    scoreContainer.style.display= "flex";
    gameOverBtns.style.display='flex';

    generateHighScores();
    
}
function clearScore() {
    window.localStorage.clear();
    highScoreInitials.textContent ="";
    showHighScore.textContent ="";
}


//resets quiz
function replay() {
    scoreContainer.style.display ='none';
    scorepage.style.display ='none';
    beginQuizPage.style.display ='flex';
    gameOverBtns.style.display ='none';
    timeRemaining =60;
    score = 0;
    currentQuestionIndex =0;
}

//checks answers
function checkAnswer (answer) {
    correct = rockQuizQuestions[currentQuestionIndex].rightAnswer;

    if(answer === correct && currentQuestionIndex !== lastQuestionIndex){
        score++;
        alert("Correct!") //can't figure out how to change button color before question advances

        currentQuestionIndex ++;
        createQuizQuestion();
    }else if (answer !==correct && currentQuestionIndex !==lastQuestionIndex){
        alert ("Incorrect")
        timeRemaining--;
        currentQuestionIndex++;
        createQuizQuestion();
    }else{
        showScores();
    }

}
beginQuizbtn.addEventListener("click",beginQuiz);










