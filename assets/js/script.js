const question= document.getElementById("question");

const answers= Array.from(document.getElementsByClassName("buttons"));

var currentQuestion = {};

var correctAnswer = true;

var score = 0;

var questionNumber = 0;

var availableQuestions= [];

var questions = [ {

        question:"Commonly used data types do NOT include___",
        answer0: "strings",
        answer1: "booleans",
        answer2: "alerts",
        answer3: "numbers",

        correctAnswer:[2],
    },
    {
        question:"Arrays in Javascript can be used to store___",
        answer0: "numbers and strings",
        answer1: "other arrays",
        answer2: "booleans",
        answer3: "all of the above",

        correctAnswer:[3],

    },
    {
        question:"The condition in an if/else statement is enclosed with___",
        answer0:"quotes",
        answer1:"curly brackets",
        answer2:"parenthesis",
        answer3:"square brackets",

        correctAnswer:[1],
    },

    { 
        question:"String values must be enclosed with ____ when being assigned to variables",
        answer0:"commas",
        answer1:"curly brackets",
        answer2: "quotes",
        answer3: "parenthesis",

        correctAnswer:[2],
    },
    {

        question:" A very useful tool for debugging and printing content to the debugger is___",
        answer0: "console.log",
        answer1: "for loops",
        answer2: "JavaScript",
        answer3: "terminal/bash",

        correctAnswer:[0],
    }
    
]

const points =20;
const maxQuestions=5;

startQuiz = function() {

    questionNumber = 0;
    score = 0;
    availableQuestions=[...questions];
    NewQuestions();
}
NewQuestions= function() {

    if (availableQuestions.length ===0 || questionNumber>=maxQuestions){

        return window.location.assign('/end.html');
    }
    questionNumber++;
    question.innerText = currentQuestion.question;
}

NewQuestions();








































//var question ={

//     title:'example question',

//     alternatives:["answer 1", "answer 2", "answer 3","answer 4"],

//     correctAnswer: 0,

// };

// function showQuestion(question){

// //select element for question title

//     var titleDiv = document.getElementById('title');

// //modify title

//     titleDiv.textContent=question.title;

// //select by a query

//    var alts= document.querySelectorAll('.alternative');

//     alts.forEach(function(element, index) {
       
//         element.textContent = question.alternatives[index];

//         element.addEventListener('click',function(){

//             //check correct answer

//             if (question.correctAnswer == index) {

//                 console.log("correct Answer")
//             }

//             else {

//                 console.log("wrong answer")
//             }
//         });
//     });
// }

// showQuestion(question)

// //button

// var btn=document.getElementById('btn');

// btn.addEventListener("click",function(){

//     console.log ('clicked');
// })