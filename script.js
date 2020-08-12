// Clicking Start button begins the timer
// Countdown timer
function startTimer() {
    var time = 90;
    //Setting timer interval
    var timerCount = setInterval(function () {
        time--
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        //Formatting seconds to include zero if less than 10 i.e. 09
        if (seconds < 10) {
          seconds = "0" + seconds
        }
        timer.textContent = "Time Left: " + minutes + ":" + seconds;
        //Clearing timer interval
        if (time === 0) {
          clearInterval(timerCount);
          timer.textContent= "TIME'S UP!";
        }
    }, 1000)
  }
timer.addEventListener("click", startTimer);
timer.addEventListener("click", getQuestion);
// Questions on screen with multiple choice answers
//Question generator
//function startQuiz() {
    var questions = [
        {
            question: "JavaScript is...",
            answerChoices: ["Subjective", "Objective", "Object based", "Evil"],
            correctAnswer: "Object based"
        },
        {
            question: "What does the following expression return? 1 + 5 + 'cans of soda' ",
            answerChoices: ["15 cans of soda","6 cans of soda","Undefined","5 cans of soda"],
            correctAnswer: "6 cans of soda"
        },
        {
            question: "Which of these is the correct mehod for creating a new array?",
            answerChoices: ["var myArray = ()", "var myArray = {}", "var myArray = []", "var myArray = array.length"],
            correctAnswer: "var myArray = []"
        },
        {
            question: "question 4",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 5",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 6",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 7",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 8",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 9",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            question: "question 10",
            answerChoices: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },

    ];

    var mainEl = document.getElementById("main");
    var questionEl = document.createElement("h2");
    var mainQuestion = document.getElementById("questionDiv");
    var increment = 0;

function getQuestion () {
    questionEl.textContent = questions[increment].question;
    mainQuestion.append(questionEl);

    for (var i = 0; i < questions[increment].answerChoices.length; i++) {
        var answerChoiceEl = document.createElement("button");
        answerChoiceEl.addEventListener("click", function (){
            var answerSelected = this.textContent
            if (answerSelected === questions[increment].correctAnswer) {
                console.log("You did it!");
                mainQuestion.innerHTML = "";
                increment++;
                getQuestion();
            } else {
                console.log("This ain't it.");
                mainQuestion.innerHTML = "";
                increment++;
                getQuestion();
            } 

        });
        answerChoiceEl.textContent = questions[increment].answerChoices[i];
        mainQuestion.append(answerChoiceEl); 
    }
}
    
    function answerCorrect() {
        document.getElementById(answerChoiceEl).style.backgroundColor = "green";
    }
    function answerIncorrect() {
        document.getElementById(answerChoiceEl).style.backgroundColor = "red";
    }

// When answer is clicked, a new question/choices appears
// If a question is answered incorrectly, time is removed from the clock
// When all questions are answered or timer reaches 0, game is over
// Intials and score can be saved

