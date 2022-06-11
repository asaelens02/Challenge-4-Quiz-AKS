//questions list//

var questions = [

    {
        id:0,
        question: "This is sample question 1",
        answer: [{text:"Answer Text A", isRight: false},
                 {text:"Answer Text B", isRight: true},
                 {text:"Answer Text C", isRight: false},
                 {text:"Answer Text D", isRight: false}
        ]

    },
    {
        id:1,
        question: "This is sample question 2",
        answer: [{text:"Answer Text A", isRight: true},
                 {text:"Answer Text B", isRight: false},
                 {text:"Answer Text C", isRight: false},
                 {text:"Answer Text D", isRight: false}
        ]
    },
    {
        id:2,
        question: "This is sample question 3",
        answer: [{text:"Answer Text A", isRight: false},
                 {text:"Answer Text B", isRight: false},
                 {text:"Answer Text C", isRight: true},
                 {text:"Answer Text D", isRight: false}
        ]

    },
    {
        id:3,
        question: "This is sample question 4",
        answer: [{text:"Answer Text A", isRight: false},
                 {text:"Answer Text B", isRight: false},
                 {text:"Answer Text C", isRight: false},
                 {text:"Answer Text D", isRight: true}
        ]

    },
    

]


var start = true;
//get question//

function iterate(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question =document.getElementById("question");

    //could not retrieve question using .innerText had to use innerHTML//
    question.innerHTML=questions[id].question;

    //defines each answer option//
    const A =document.getElementById("A");
    const B =document.getElementById("B");
    const C =document.getElementById("C");
    const D =document.getElementById("D");

    
    //displays text for each answer option//
    A.innerText =questions[id].answer[0].text;
    B.innerText =questions[id].answer[1].text;
    C.innerText =questions[id].answer[2].text;
    D.innerText =questions[id].answer[3].text;

    //indicates correct answer for each question//
    A.value =questions[id].answer[0].isRight;
    B.value =questions[id].answer[1].isRight;
    C.value =questions[id].answer[2].isRight;
    D.value =questions[id].answer[3].isRight;

    //variable to declare what is selected by the user//

    var selected ="";

    //colors buttons based on answer selected//

    A.addEventListener ("click", () => {

        A.style.backgroundColor="purple";
        A.style.color="white";
        B.style.backgroundColor="blue";
        B.style.color="white";
        C.style.backgroundColor="blue";
        C.style.color="white";
        D.style.backgroundColor="blue";
        D.style.color="white";
        selected=A.value;

    })

    B.addEventListener ("click", () => {

        A.style.backgroundColor="blue";
        A.style.color="white";
        B.style.backgroundColor="purple";
        B.style.color="white"
        C.style.backgroundColor="blue";
        C.style.color="white";
        D.style.backgroundColor="blue";
        D.style.color="white";
        selected=B.value;

    })

    C.addEventListener ("click", () => {

        A.style.backgroundColor="blue";
        A.style.color="white";
        B.style.backgroundColor="blue";
        B.style.color="white";
        C.style.backgroundColor="purple";
        C.style.color="white";
        D.style.backgroundColor="blue";
        D.style.color="white";
        selected=C.value;
    })

    D.addEventListener ("click", () => {

        A.style.backgroundColor="blue";
        A.style.color="white";
        B.style.backgroundColor="blue";
        B.style.color="white";
        C.style.backgroundColor="blue";
        C.style.color="white"; 
        D.style.backgroundColor="purple";
        D.style.color="white";
        selected=D.value;
    
    });
    //identifies submit button and logs result as true or false//
    const submit = document.getElementsByClassName("submit");

    submit[0].addEventListener("click", () => {

        if (selected=="true") {

            result [0].innerHTML ="true";
            result[0].style.backgroundColor ="green"; 
        } else {
            result [0].innerHTML ="false";
            result[0].style.backgroundcolor = "red";
        }

    })
}

//calls function//
if (start) {

    iterate("0");

}
//next button, that I can't seem to get to work yet//
var next = document.getElementsByClassName("next")[0];
var id =0;

next.addEventListener("click",() => {
    start=false;
    if (id<2) {

        id++;
        iterate(id);
        console.log(id);
    }

})
