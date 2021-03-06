// Clicking Start button begins the timer
timer.addEventListener("click", startTimer);
timer.addEventListener("click", getQuestion);
// Disables button
document.getElementById("timer").onclick = function() {
    this.disabled = true;
}

// Countdown timer
var time;
function startTimer() {
    time = 90;
    // Setting timer
    var timerCount = setInterval(function () {
        time--;
        minutes = Math.floor(time / 60);
        seconds = Math.floor(time % 60);
        // Seconds
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        timer.textContent = "Time Left: " + minutes + ":" + seconds;
        //Clearing timer when time is up or questions are finished
       if (time <= 0 || increment === 5) {
            clearInterval(timerCount);
            timer.textContent= "TIME'S UP!";
            // Prompt with score and intials input, saved to local storage
            setTimeout(function() { 
            alert("You scored: " + score + " points.");
            var initials = prompt("Enter your initials below.");
            var currentRoundScore = [initials , score];
            //Logs current score; Could not get it to replace current score with highest score
            if (score > localStorage.getItem(currentRoundScore)) {
                localStorage.setItem("High Score", JSON.stringify(currentRoundScore));
                alert("You set a new high score of " + score +"!");
            }
            }, 1000);
        }
    }, 1000)
}

// Question and answer choice object arrays
var questions = [
    {
        question: "JavaScript is...",
        answerChoices: ["Subjective", "Objective", "Object based", "Evil"],
        correctAnswer: "Object based",
    },
    {
        question: "What does the following expression return? 1 + 5 + 'cats' ",
        answerChoices: ["15 cats","6 cats","Undefined","5 cats"],
        correctAnswer: "6 cats",
    },
    {
        question: "Which of these is the correct mehod for creating a new array?",
        answerChoices: ["var myArray = ()", "var myArray = {}", "var myArray = []", "var myArray = array.length"],
        correctAnswer: "var myArray = []",
    },
    {
        question: "Which one of these is NOT a logical operator?",
        answerChoices: ["&", "||", "&&", "!"],
        correctAnswer: "&",
    },
    {
        question: "JavaScript has the following variable types: boolean, number, object, and ",
        answerChoices: ["double", "order", "string", "console"],
        correctAnswer: "string",
    },
];

// Variable for getQuestion function
var mainEl = document.getElementById("main");
var questionEl = document.createElement("h2");
var mainQuestion = document.getElementById("questionDiv");
var increment = 0;
var score = 0;

// Function which iterates through questions array
function getQuestion () {
    questionEl.textContent = questions[increment].question;
    mainQuestion.append(questionEl);
    // For loop for answer choices
    for (var i = 0; i < questions[increment].answerChoices.length; i++) {
        var answerChoiceEl = document.createElement("button");
        // Answer button styling 
        // I see the limitations of creating the buttons in js as opposed to HTML
        answerChoiceEl.style.backgroundColor = "#F0FFFF";
        answerChoiceEl.style.padding = "10px";
        answerChoiceEl.style.fontSize = "large";
        answerChoiceEl.style.borderRadius = "10px";
        answerChoiceEl.style.marginInlineStart = "10px";
        // Event listener for answer choices
        answerChoiceEl.addEventListener("click", function (){
            var answerSelected = this.textContent
            if (answerSelected === questions[increment].correctAnswer) {
                console.log("You did it!");
                mainQuestion.innerHTML = "";
                // 10 Point increase for correct answer
                score = score + 10;
                console.log(score);
                // Move to next question/answer combo
                increment++;
                getQuestion();
            } else {
                console.log("This ain't it.");
                mainQuestion.innerHTML = "";
                // Time penalty for wrong answer
                time = time - 10;
                // Move to next questions/answer combo
                increment++;
                getQuestion();
            } 
        });
        answerChoiceEl.textContent = questions[increment].answerChoices[i];
        mainQuestion.append(answerChoiceEl); 
    }  
}


