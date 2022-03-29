//variable for start button
var startButton = document.querySelector("#start");
//variable for timer countdown
var timerEl = document.getElementById("timerEl")
//variable for score(number of questions answered correctly)
var score = 0;

//array of quiz questions and answers
var quizArray = [
    {
        question: "Which team won the 1987 World Series",
        answers: [
            "Atlanta Braves",
            "Milwaukee Brewers",
            "Minnesota Twins", //correct answer
            "Cincinatti Reds" 
        ],
        correctAnswer: 2
    },      
    {       
        question: "Which team lost Super Bowl 32",
        answers: [
            "Buffalo Bills",
            "Green Bay Packers", //correct answer
            "Seattle Seahawks",
            "Denver Broncos"
        ],
        correctAnswer: 1
    },
    {
        question: "Which team won the 2019 Stanley Cup Finals",
        answers: [
        "Dallas Stars",
        "Los Angeles Kings",
        "St. Louis Blues", //correct answer
        "Toronto Maple Leafs"
        ],
        correctAnswer: 2
    },
    {
        question: "Which team lost the 1979 NBA Finals",
        answers: [
        "Seattle Supersonics", 
        "Los Angeles Lakers",
        "Kansas City Kings",
        "Washington Bullets" //correct answer
        ],
        correctAnswer: 3
    },
    {
        question: "Which team won the 2011 WNBA Finals",
        answers: [
        "Minnesota Lynx", //correct answer
        "Chicago Sky",
        "New York Liberty",
        "Los Angeles Sparks"
        ],
        correctAnswer: 0
    }
]

//event listener for when the start button is clicked the quiz starts
startButton.addEventListener("click", function(){
    //when start button is clicked the button disappears and the timer starts counting down from 30 seconds
    startButton.style.display = "none";
})

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
            displayMessage();
        }
    }, 1000)
}

//randomly select first question
var quizArray = quizArray[Math.floor(Math.random() * quizArray.length)];
console.log(quizArray);
//create new div for question and corresponding answers
var newDiv = document.createElement("div");
newDiv.id = "container";
newDiv.innerHTML = quizArray;
document.main.appendChild(newDiv);
//display question and corresponding answers

//correct answer is logged to the variable score

//after the last question the player is presented with their score

//if the player highscore is equal to or greater than the current high score, replace current high score with the player highscore