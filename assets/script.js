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
var score = document.getElementById ('inputscores');
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
        question: "What are the 3 types of rocks?",
        answerA: "sedimentary, metamorphic, igneous",
        answerB: "mineral, sedimentary,igneous",
        answerC: "clastic, mineral, igneous",
        answerD: "clastic, sedimentary, igneous",
        rightAnswer: 'a'
    },
    {
        question: "What mineral is also known as 'Fool's Gold'?",
        answerA: "pyrite",
        answerB: "quartz",
        answerC: "calcite",
        answerD: "dolomite",
        rightAnswer:'a',
    },
    {
        question: "How old is planet Earth?",
        answerA: "4.6 billion years old",
        answerB: "2.6 billion years old",
        answerC: "0.6 billion years old",
        answerD: "20,000 years old",
        rightAnswer: 'a',
    },
    {
        question: "What discipline encompasses the study of fossils?",
        answerA: "paleontology",
        answerB: "seismology",
        answerC: "petrophysics",
        answerD: "sedimentology",
        rightAnswer: 'a',
    },
    {
        questions: "What fossilized tree resin is commonly used in jewelry?",
        answerA:"amber",
        answerB:"maple",
        answerC:"quartz",
        answerD: "coprolite",
        rightAnswer: 'a',

    },
    {
        questions: "What are the 3 types of faults?",
        answerA: "strike-slip, normal, reverse",
        answerB: "convergent, divergent, strike-slip",
        answerC: "strike-slip, normal, divergent",
        answerD: "good, bad, ugly",
        rightAnswer: 'a',
    },
    {
        questions: "What dinosaur in the Original Jurassic Park caused the cup of water to ripple?",
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
var timeRemaining = 90;
var timerInterval;
//sets beginning score for quiz
var score = 0;
var correct;

//This function cycles through the rockQuizQuestion array and presents a question to the user
function createQuizQuestion (){
    scoreDiv.style.display ='none';
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
    score.style.display = 'none';
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
    quiz.style.display = 'block';


}

//function to show final page and display score

function endScore() {
    quiz.style.display = 'none';
    score.style.display ='flex';
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
    score.style.display ='none';
    scoreContainer.style.display ='flex';
    highScorePage.style.display ='block';
    gameOverBtns.style.display='flex';

    savedHighScores.push(currentHighScore);
    localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
    generateHighScores();

}

});

function generateHighScores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}










