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

//array of quiz questions and answers
var quizArray = [
    {
        question: "Which team won the 1987 World Series",
        answers: [
            "Atlanta Braves",
            "Milwaukee Brewers",
            "Minnesota Twins", 
            "Cincinatti Reds" 
        ],
        correctAnswer: "Minnesota Twins"
    },      
    {       
        question: "Which team lost Super Bowl 32",
        answers: [
            "Buffalo Bills",
            "Green Bay Packers",
            "Seattle Seahawks",
            "Denver Broncos"
        ],
        correctAnswer: "Green Bay Packers"
    },
    {
        question: "Which team won the 2019 Stanley Cup Finals",
        answers: [
            "Dallas Stars",
            "Los Angeles Kings",
            "St. Louis Blues",
            "Toronto Maple Leafs"
        ],
        correctAnswer: "St. Louis Blues"
    },
    {
        question: "Which team lost the 1979 NBA Finals",
        answers: [
            "Seattle Supersonics", 
            "Los Angeles Lakers",
            "Kansas City Kings",
            "Washington Bullets"
        ],
        correctAnswer: "Washington Bullets"
    },
    {
        question: "Which team won the 2011 WNBA Finals",
        answers: [
            "Minnesota Lynx",
            "Chicago Sky",
            "New York Liberty",
            "Los Angeles Sparks"
        ],
        correctAnswer: "Minnesota Lynx"
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
            }
        }, 1000);

        //Commented out "for loop" per recommendation of AskBCS
        // //Loop through quiz questions
        // for (let i = 0; i < quizArray.length; i++) {
        //     quizArray[Math.floor(Math.random() * quizArray.length)];
        //     console.log(quizArray);
        // }

    }

    function quiz() {
        if (startButton.style.display = "none") {
            
        }
    };

    timer();
});
