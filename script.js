var questions = [ {

    Question:"What color is grass?",

    Answers: {

        A: "red",
        B: "blue",
        C:  "green",
        D:  "purple",
    },
        
    Correct: "c",
},
{  
    Question:"What color is the sky?",

    Answers: {

        A: "red",
        B: "blue",
        C:  "green",
        D:  "purple",
    },

    Correct: "c",
},
{
    Question: "What color is the main color of a stop sign?",
 
    Answers: {

        A: "red",
        B: "blue",
        C:  "green",
        D:  "purple",
    },

    Correct: "a",
},
{
    Question: "What color is red and blue mixed?",

    
    Answers: {

        A: "red",
        B: "blue",
        C:  "green",
        D:  "purple",
    },

    Correct: "d",


}];
const buttons = document.getElementsByClassName("btn");
const currentQuestion = document.getElementById("current-question");
const answerA = document.getElementById ("A");
const answerB = document.getElementById ("B");
const answerC = document.getElementById ("C");
const answerD = document.getElementById ("D");

answerA.innerHTML=questions[0].Answers.A;
answerB.innerHTML=questions[0].Answers.B;
answerC.innerHTML=questions[0].Answers.C;
answerD.innerHTML=questions[0].Answers.D;
currentQuestion.innerHTML = questions[0].Question;

//function to randomize questions

//how to select answer and move to next question

    //let firstQuestion= 0

   // buttonStart.addeventlistener("click", () =>{
        //startQuestion(firstQuestion) })
    //const startQuestion = (index)=> {
        //const question = questions[firstQuestion]

//function getRandomItem (questions) {

    //const randomIndex= (Math.floor(Math.random()*Array.length));
    //const item = questions[randomIndex];
    //return item;
    //const result = getRandomItem(questions); 

   // question.innerHTML= result.question;
   //question.answers.forEach("answerbuttons")=result.question;