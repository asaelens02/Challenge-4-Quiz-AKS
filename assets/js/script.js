const question= document.getElementById("question");

const answers= Array.from(document.getElementsByClassName("answerButtons"));

const timer= document.getElementById("timer");

/*const points= 20;

const maxQuestions=5;

var currentQuestion = {};

var correctAnswer = true;

var score = 0;*/

var questionNumber = 0;

var availableQuestions= [];

var questions = [ {

        question:"Commonly used data types do NOT include___",

            answers:[ {text:"strings", correctAnswer:false}, {text:"booleans", correctAnswer:false}, {text:"alerts", correctAnswer:true}, {text:"numbers", correctAnswer:false}]
    },
    {
        question:"Arrays in Javascript can be used to store___",
            answers:[ {text:"numbers and strings", correctAnswer:false}, {text:"other arrays", correctAnswer:false}, {text:"booleans", correctAnswer:false}, {text:"all of the above", correctAnswer:true}]

    },
    {
        question:"The condition in an if/else statement is enclosed with___",
            answers:[ {text:"quotes", correctAnswer:false}, {text:"curly brackets", correctAnswer:true}, {text:"parenthesis", correctAnswer:false}, {text:"square brackets", correctAnswer:false}]
    },

    { 
        question:"String values must be enclosed with ____ when being assigned to variables",
            answers:[ {text:"commas", correctAnswer:false}, {text:"curly brackets", correctAnswer:false}, {text:"quotes", correctAnswer:true}, {text:"parethesis", correctAnswer:false}]

    },
    {

        question:" A very useful tool for debugging and printing content to the debugger is___",
            answers:[ {text:"console.log", correctAnswer:true}, {text:"for loops", correctAnswer:false}, {text:"JavaScript", correctAnswer:false}, {text:"terminal/bash", correctAnswer:false}]
    }
    
]
    let firstQuestion= 0

    buttonStart.addeventlistener("click", () =>{
        startQuestion(firstQuestion) })
    const startQuestion = (index)=> {
        const question = questions[firstQuestion]
    }



///for(var i=0; i<questions.length; i++);
    //var response=window.prompt(questions[i].prompt);
   // if (response == question[i].correctAnswer) {

   //     score++
   // }


function getRandomItem (questions) {

    const randomIndex= (Math.floor(Math.random()*Array.length));
    const item = questions[randomIndex];
    return item;

}

    const result = getRandomItem(questions); 

    question.innerHTML= result.question;
   question.answers.forEach("answerbuttons")=result.question;


   
  








































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