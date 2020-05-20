// Variables
var timeContainer = document.querySelector(".time");
var timer = document.querySelector(".timer");
var scoreContainer = document.querySelector(".score");
var headingsContainer = document.querySelector(".main headings container");
var quizContainer = document.querySelector(".quiz-container");
var startButton = document.querySelector("#start-button");
var correctButton1 = document.querySelector("#correct-button1");
var correctButton2 = document.querySelector("#correct-button2");
var correctButton3 = document.querySelector("#correct-button3");
var correctButton4 = document.querySelector("#correct-button4");
var correctButton5 = document.querySelector("#correct-button5");
var wrongButton = document.querySelectorAll("#button");
var button = document.querySelector(".button");
var backButton = document.querySelector("#Go-back-button");
var clearButton = document.querySelector("#Clear-Highscore-button");
var form = document.querySelector("form-inline");
var slidesContainer = $(".slidesContainer");
var scoreList = document.querySelector("#score-list");
var score = [];

var assessment1 = document.querySelector(".assessment1");
var assessment2 = document.querySelector(".assessment2");
var assessment3 = document.querySelector(".assessment3");
var assessment4 = document.querySelector(".assessment4");
var assessment5 = document.querySelector(".assessment5");

var secondsLeft = 75;

var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var slide3 = document.querySelector("#slide3");
var slide4 = document.querySelector("#slide4");
var slide5 = document.querySelector("#slide5");
var slide6 = document.querySelector("#slide6");
var slide7 = document.querySelector("#slide7");
var slide8 = document.querySelector("#slide8");

var slide = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

// Array of objects for quiz questions
var questionsArray = [
  {
   name: "slide2",
   questionNumber: "question1",
   question: "Commonly used data types DO NOT include:",
   answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
   correctAnswer: "3. alerts"
  },
  {
    name: "slide3",
    questionNumber: "question2",
    question: "The condition in an if / else statement is enclosed within ___.",
    answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "2. curly brackets"
   },
   {
    name: "slide4",
    questionNumber: "question3",
    question: "Arrays in JavaScript can be used to store ___.",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above"
   },
   {
    name: "slide5",
    questionNumber: "question4",
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes"
   },
   {
   name: "slide6",
   questionNumber: "question5",
   question: "A very useful tool used during development and debugging for printing content to the debugger is.",
   answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
   correctAnswer: "4. console.log"
  }
];

var questionsArrayString = JSON.stringify(questionsArray);


// Create a <li> node
  var node = document.createElement("LI"); 

// Create a "right" text node                
  var textnodeRight = document.createTextNode(" Correct! ");  

// Create a "wrong" text node                
  var textnodeWrong = document.createTextNode(" Wrong! ");  

  var timerInterval;



// Create divs for the quiz with buttons
var createQuiz = function() {
  console.log(slidesContainer);
  for (i = 0; i < questionsArray.length; i++) {
    slidesContainer.append(
      `
      <div class = "slide" id = "${questionsArray[0].name[i]}">
      <div class="row">
          <div class="col-lg-12">
              <div class="main-headings-container">
                  <h1>${questionsArray[0].question[i]}</h1>
              </div>
              <div class="text-container">
                  <ul>
                      <li><button type="button" class="btn btn-primary" id="button${i}" value="1. strings">${questionsArray[0].answers[i]}</button></li>
                  </ul>
              </div>
              <div class="next-page1"><button type="button" class="btn btn-primary" id="next${i}" value="next">Next</button></div>
              <div class="assessment${i}"><ul class="assessment${i}ul"></ul></div>
          </div>
      </div>
  </div>
      `
    );
  }
};

  // call the function

// Start quiz
startButton.addEventListener("click", function changePage() {
  // document.querySelector("#slide1").style.display = "none";
  // document.querySelector("#slide2").style.display = "block";
    
  createQuiz();
  console.log(questionsArray);
  console.log(questionsArrayString);

  // Set timer
  function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeContainer.textContent = "Time: " + secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  setTime();

});


