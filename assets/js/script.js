//variable for start button
var startButton = document.querySelector("#start");
//variable for timer countdown
var timerEl = document.getElementById("timerEl")
//variable for quiz questions and to display "time's up" message
var mainContent = document.getElementById('main-content');
//variable for score(seconds left on countdown)
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
                mainContent.appendChild("Your time is up!")
            }
        }, 1000);

        //Loop through quiz questions
        for (let i = 0; i < quizArray.length; i++) {
            quizArray[Math.floor(Math.random() * quizArray.length)];
            console.log(quizArray);
        }
        //Dynamically adding question to the browser
        //Parent Element
        var quizForm = document.getElementById("quizForm");
        //New list item
        var newQuestionItem = document.createElement("li");
        newQuestionItem.textContent = quizArray.question;
        quizForm.appendChild(newQuestionItem);
    }

    timer();
});

// for (let i = 0; i < quizArray.length; i++) {
//     var quizQuestion = quizArray[Math.floor(Math.random() * quizArray.length)];
//     console.log(quizQuestion);
// }
// //Parent Element
// var quizSection = document.getElementById("quizSection");
// //New list item
// var newListItem = document.createElement("li");
// newListItem.textContent = quizQuestion;
// quizSection.appendChild(newListItem);