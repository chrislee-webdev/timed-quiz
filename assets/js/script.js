//variable for start button
var startButton = document.querySelector("#start");
//variable for timer countdown
var timerEl = document.getElementById("timerEl")
//variable for quiz questions and to display "time's up" message
var mainContent = document.getElementById("main-content");
//variable for score(seconds left on countdown)
var score = 0;
//variable to hold question index number
var quizArrayIndex = quizArray;
//variable to keep track of questions
var questionNumber = 0;
//variable for cointainer to hold the quiz
var quizContainer = document.getElementById("quizContainer");
//variable for startScren to hold startButton
var startScreen = document.getElementById("startScreen");

var choiceButton = document.getElementsByClassName("choiceButton");

//array of quiz questions and answers
var quizArray = [
    {
        question: "Which team won the 1987 World Series:",
        choices: [
            "Atlanta Braves",
            "Milwaukee Brewers",
            "Minnesota Twins", 
            "Cincinatti Reds" 
        ],
        //correctAnswer: "Minnesota Twins"
    },      
    {       
        question: "Which team lost Super Bowl 32:",
        choices: [
            "Buffalo Bills",
            "Green Bay Packers",
            "Seattle Seahawks",
            "Denver Broncos"
        ],
        //correctAnswer: "Green Bay Packers"
    },
    {
        question: "Which team won the 2019 Stanley Cup Finals:",
        choices: [
            "Dallas Stars",
            "Los Angeles Kings",
            "St. Louis Blues",
            "Toronto Maple Leafs"
        ],
        //correctAnswer: "St. Louis Blues"
    },
    {
        question: "Which team lost the 1979 NBA Finals:",
        answers: [
            "Seattle Supersonics", 
            "Los Angeles Lakers",
            "Kansas City Kings",
            "Washington Bullets"
        ],
        //correctAnswer: "Washington Bullets"
    },
    {
        question: "Which team won the 2011 WNBA Finals",
        choices: [
            "Minnesota Lynx",
            "Chicago Sky",
            "New York Liberty",
            "Los Angeles Sparks"
        ],
        //correctAnswer: "Minnesota Lynx"
    }
]

//event listener for when the start button is clicked the quiz starts
startButton.addEventListener("click", function(){
    //when start button is clicked the button disappears and the timer starts counting down from 30 seconds
    startButton.style.display = "none";
    //timer function
    function timer() {
    var countdown = 30;
        var coundownFunction = setInterval(function() {
            if (countdown > 1) {
                timerEl.textContent = countdown + " seconds";
                countdown--;
            } else {
                timerEl.textContent = "";
                clearInterval(coundownFunction);
                let timeUpDiv = document.createElement("div");
                timeUpDiv.innerHTML = "<h1>Time's Up</h1>";
                mainContent.appendChild(timeUpDiv);
                quizContainer.classList.add("hide");
            }
        }, 1000);

        //Commented out "for loop" per recommendation of AskBCS
        // //Loop through quiz questions
        // for (let i = 0; i < quizArray.length; i++) {
        //     quizArray[Math.floor(Math.random() * quizArray.length)];
        //     console.log(quizArray);
        // }
        
        //Create question div and append question
        

        //Create answer list and append choices
    }

    timer();
    getQuestion();
});

function getQuestion() {
    quizContainer.classList.remove("hide");
    startScreen.classList.add("hide");
    let currentQuestionObj = quizArray[questionNumber];

    var currentQuestion = document.createElement("h1");
    currentQuestion.innerText = currentQuestionObj.question;
    quizContainer.appendChild(currentQuestion);

    for (let i = 0; i <= currentQuestionObj.choices.length; i++) {
        let choiceButton = document.createElement("button");
        var currentChoice = currentQuestionObj.choices[i];
        choiceButton.setAttribute("value", currentChoice);
        choiceButton.setAttribute("class", 'choiceBtn');
        choiceButton.textContent = currentChoice;
        quizContainer.appendChild(choiceButton);
        console.log(choiceButton);
    }
}


 choiceButton.addEventListener("click", function(){
     if (choiceButton.innerText === correctAnswer.innerText) {
         choiceButton.display.style.background = "lightgreen";
     }
 });
