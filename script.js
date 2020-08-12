// Clicking Start button begins the timer
// Countdown timer
//var startQuizBtn = document.getElementById("button");
//var timer = document.getElementById("timer");
//function startTimer() {
//  var eightMin = 8 * 60;
//  setInterval(function () {
//      eightMin--
//      var minutes = eightMin / 60;
//      var seconds = eightMin % 60;
//      timer.textContent = (Math.floor(minutes)) + " : " + (Math.floor(seconds));
//  }, 1000)
//}
//startQuizBtn.addEventListener ("click", startTimer);
//
//// Variable declarations
//var start = document.getElementById("start");
//var quiz = document.getElementById("quiz");
//var questions = document.getElementById("questions");
//var answers = document.getElementById("answers");
//var choiceA = document.getElementById("choiceA");
//var choiceB = document.getElementById("choiceB");
//var choiceC = document.getElementById("choiceC");
//var choiceD = document.getElementById("choiceD");

// Questions are on the screen with multiple choice answers
//Question generator

var questions = [
    {
        question: "Do you like pina coladas?",
        answerChoices: ["sort of", "yes", "no", "ew"],
        correctAnswer: "no"
    },
    {
        question: "",
        answersChoices: {
            choiceA:"",
            choiceB:"",
            choiceC:"",
            choiceD:""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answersChoices: {
            choiceA:"",
            choiceB:"",
            choiceC:"",
            choiceD:""
        },
        correctAnswer: ""
    },

];

var mainEl = document.getElementById("main");
var questionEl = document.createElement("div");
var increment = 0

questionEl.textContent = questions[increment].question;
mainEl.append(questionEl)

for (var i = 0; i < questions[increment].answerChoices.length; i++) {
    var answerChoiceEl = document.createElement("div");
    answerChoiceEl.addEventListener("click", function (){
        var answerSelected = this.textContent
        if (answerSelected === questions[increment].correctAnswer) {
            console.log("You did it!");
        } else {
            console.log("This ain't it.");
        }
    })
    answerChoiceEl.textContent = questions[increment].answerChoices[i];
    mainEl.append(answerChoiceEl); 
    }


// When answer is clicked, a new question/choices appears
// If a question is answered incorrectly, time is removed from the clock
// When all questions are answered or timer reaches 0, game is over
// Intials and score can be saved

