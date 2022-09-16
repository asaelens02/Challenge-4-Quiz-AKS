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
    }

]










