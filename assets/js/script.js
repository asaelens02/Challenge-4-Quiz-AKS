let question ={

    title:'example question',

    alternatives:["answer 1", "answer 2", "answer 3","answer 4"],

    correctAnswer: 0,

};

function showQuestion(question){

//select element for question title

    var titleDiv = document.getElementById('title');

//modify title

    titleDiv.textContent=question.title;

//select by a query

   var alts= document.querySelectorAll('.alternative');

    alts.forEach(function(element, index) {
       
        element.textContent = question.alternatives[index];

        element.addEventListener('click',function(){

            //check correct answer

            if (question.correctAnswer == index) {

                console.log("correct Answer")
            }

            else {

                console.log("wrong answer")
            }
        });
    });
}

showQuestion(question)

//button

var btn=document.getElementById('btn');

btn.addEventListener("click",function(){

    console.log ('clicked');
})