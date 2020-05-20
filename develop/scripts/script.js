// Variables
const timeContainer = $(".time");
const timer = $(".timer");
const scoreContainer = $(".score");
const headingsContainer = $(".main headings container");
const quizContainer = $(".quiz-container");
const startButton = $("#start-button");
const correctButton1 = $("#correct-button1");
const correctButton2 = $("#correct-button2");
const correctButton3 = $("#correct-button3");
const correctButton4 = $("#correct-button4");
const correctButton5 = $("#correct-button5");
const button = $(".button");
const backButton = $("#Go-back-button");
const clearButton = $("#Clear-Highscore-button");
const form = $("form-inline");
const slidesContainer = $(".slidesContainer");
const scoreList = $("#score-list");
let score = [];

const assessment1 = $(".assessment1");
const assessment2 = $(".assessment2");
const assessment3 = $(".assessment3");
const assessment4 = $(".assessment4");
const assessment5 = $(".assessment5");

let secondsLeft = 75;

const slide1 = $("#slide1");
const slide2 = $("#slide2");
const slide3 = $("#slide3");
const slide4 = $("#slide4");
const slide5 = $("#slide5");
const slide6 = $("#slide6");
const slide7 = $("#slide7");
const slide8 = $("#slide8");

const slide = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

const assessment1ul = $(".assessment1ul");
const assessment2ul = $(".assessment2ul");
const assessment3ul = $(".assessment3ul");
const assessment4ul = $(".assessment4ul");
const assessment5ul = $(".assessment5ul");
const assessment6ul = $(".assessment6ul");

// Array of objects for quiz questions
// var questionsArray = [
const quiz = [
  {
    name: "slide2",
    questionNumber: "question1",
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctButton: ["wrong1", "wrong1", "correct1", "wrong1"],
    correctAnswer: "3. alerts",
    id: ["1.1", "1.2", "1.3", "1.4"]
  },
  {
    name: "slide3",
    questionNumber: "question2",
    question: "The condition in an if / else statement is enclosed within ___.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctButton: ["wrong2", "correct2", "wrong2", "wrong2"],
    correctAnswer: "2. curly brackets",
    id: ["2.1", "2.2", "2.3", "2.4"]
  },
  {
    name: "slide4",
    questionNumber: "question3",
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctButton: ["wrong3", "wrong3", "wrong3", "correct3"],
    correctAnswer: "4. all of the above",
    id: ["3.1", "3.2", "3.3", "3.4"]
  },
  {
    name: "slide5",
    questionNumber: "question4",
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctButton: ["wrong4", "wrong4", "correct4", "wrong4"],
    correctAnswer: "3. quotes",
    id: ["4.1", "4.2", "4.3", "4.4"]
  },
  {
    name: "slide6",
    questionNumber: "question5",
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is.",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctButton: ["wrong5", "wrong5", "wrong5", "correct5"],
    correctAnswer: "4. console.log",
    id: ["5.1", "5.2", "5.3", "5.4"]
  },
];

// Create a <li> node
let node = document.createElement("LI");

// Create a "right" text node
const textnodeRight = document.createTextNode(" Correct! ");

// Create a "wrong" text node
const textnodeWrong = document.createTextNode(" Wrong! ");

let timerInterval;

// Set timer
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Start quiz
startButton.on("click", function changePage() {
  console.log("Starting quiz!");

  $("#slide1").css("display", "none");
  $("#slide2").css("display", "block");

  setTime();
});

// Slide 1 quiz
$("#question1").innerHTML = quiz[0].question;

for (let i = 0; i < quiz[0].answers.length; i++) {
  console.log(quiz[0].answers[i]);

  $("#list-answers-q1").append(
    `
    <li><button type="button" class="btn btn-primary ${quiz[0].correctButton[i]}" id="button${quiz[0].id[i]}" value="${i} strings">${quiz[0].answers[i]}</button></li>
    `
  );
}

// Slide 1
// Correct
$("#button1.3").on("click", function correct1() {
  if (!$(this).hasClass("correct1")) {
    console.log("1. Correct!");

    // Emtpy the div if there is anything there
    $(".assessment1ul").empty();

    // Append the text to <li>
    node.append(textnodeRight);
    $(".assessment1ul").append(textnodeRight);
  }
});

// Wrong
$(".wrong1").on("click", function wrong1() {
  if (!$(this).hasClass("wrong1")) {
    console.log("1. Wrong!");
    s;
    // Emtpy the div if there is anything there
    $(".assessment1ul").empty();

    // Append the text to <li>
    node.append(textnodeWrong);
    $(".assessment1ul").append(node);

    secondsLeft -= 10;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
});

// Change to Slide 2
$("#next1").on("click", function changePage1() {
  console.log("Go to page 2");

  $("#slide2").css("display", "none");
  $("#slide3").css("display", "block");
});

// Slide 2 quiz
$("#question2").innerHTML = quiz[1].question;

for (let i = 0; i < quiz[1].answers.length; i++) {
  console.log(quiz[1].answers[i]);

  $("#list-answers-q2").append(
    `
      <li><button type="button" class="btn btn-primary ${quiz[1].correctButton[i]}" id="button${quiz[1].id[i]}" value="${i} strings">${quiz[1].answers[i]}</button></li>
      `
  );
}

// Slide 2
// Correct
$(".correct2").on("click", function correct2() {
  if (!$(this).hasClass("correct2")) {
    console.log("2. Correct!");

    // Emtpy the div if there is anything there
    $(".assessment2ul").empty();

    // Append the text to <li>
    node.append(textnodeRight);
    $(".assessment2ul").append(textnodeRight);
  }
});

// Wrong
$(".wrong2").on("click", function wrong2() {
  if (!$(this).hasClass("wrong2")) {
    console.log("2. Wrong!");

    // Emtpy the div if there is anything there
    $(".assessment1ul").empty();

    // Append the text to <li>
    node.append(textnodeWrong);
    $(".assessment1ul").append(node);

    secondsLeft -= 10;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
});

// Change to Slide 3
$("#next2").on("click", function changePage2() {
  console.log("Go to page 3");

  $("#slide3").css("display", "none");
  $("#slide4").css("display", "block");
});

// Slide 3 quiz
$("#question3").innerHTML = quiz[2].question;

for (let i = 0; i < quiz[2].answers.length; i++) {
  console.log(quiz[2].answers[i]);

  $("#list-answers-q3").append(
    `
      <li><button type="button" class="btn btn-primary ${quiz[2].correctButton[i]}" id="button${quiz[2].id[i]}" value="${i} strings">${quiz[2].answers[i]}</button></li>
      `
  );
}

// Slide 3
// Correct
$(".correct3").on("click", function correct3() {
  if (!$(this).hasClass("correct3")) {
    console.log("3. Correct!");

    // Emtpy the div if there is anything there
    $(".assessment3ul").empty();

    // Append the text to <li>
    node.append(textnodeRight);
    $(".assessment3ul").append(textnodeRight);
  }
});

// Wrong
$(".wrong3").on("click", function wrong3() {
  if (!$(this).hasClass("wrong3")) {
    console.log("3. Wrong!");

    // Emtpy the div if there is anything there
    $(".assessment3ul").empty();

    // Append the text to <li>
    node.append(textnodeWrong);
    $(".assessment3ul").append(node);

    secondsLeft -= 10;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
});

// Change to Slide 4
$("#next3").on("click", function changePage3() {
  console.log("Go to page 4");

  $("#slide4").css("display", "none");
  $("#slide5").css("display", "block");
});

// Slide 4 quiz
$("#question4").innerHTML = quiz[3].question;

for (let i = 0; i < quiz[3].answers.length; i++) {
  console.log(quiz[3].answers[i]);

  $("#list-answers-q4").append(
    `
      <li><button type="button" class="btn btn-primary ${quiz[3].correctButton[i]}" id="button${quiz[3].id[i]}" value="${i} strings">${quiz[3].answers[i]}</button></li>
      `
  );
}

// Slide 4
// Correct
$(".correct4").on("click", function correct4() {
  if (!$(this).hasClass("correct4")) {
    console.log("4. Correct!");

    // Emtpy the div if there is anything there
    $(".assessment4ul").empty();

    // Append the text to <li>
    node.append(textnodeRight);
    $(".assessment4ul").append(textnodeRight);
  }
});

// Wrong
$(".wrong4").on("click", function wrong4() {
  if (!$(this).hasClass("wrong4")) {
    console.log("4. Wrong!");

    // Emtpy the div if there is anything there
    $(".assessment4ul").empty();

    // Append the text to <li>
    node.append(textnodeWrong);
    $(".assessment4ul").append(node);

    secondsLeft -= 10;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
});

// Change to Slide 5
$("#next4").on("click", function changePage4() {
  console.log("Go to page 5");

  $("#slide5").css("display", "none");
  $("#slide6").css("display", "block");
});

// Slide 5 quiz
$("#question5").innerHTML = quiz[4].question;

for (let i = 0; i < quiz[4].answers.length; i++) {
  console.log(quiz[4].answers[i]);

  $("#list-answers-q5").append(
    `
      <li><button type="button" class="btn btn-primary ${quiz[4].correctButton[i]}" id="button${quiz[4].id[i]}" value="${i} strings">${quiz[4].answers[i]}</button></li>
      `
  );
}

// Slide 5
// Correct
$(".correct5").on("click", function correct5() {
  if (!$(this).hasClass("correct5")) {
    console.log("5. Correct!");

    // Emtpy the div if there is anything there
    $(".assessment5ul").empty();

    // Append the text to <li>
    node.append(textnodeRight);
    $(".assessment5ul").append(textnodeRight);
  }
});

// Wrong
$(".wrong5").on("click", function wrong5() {
  if (!$(this).hasClass("wrong5")) {
    console.log("5. Wrong!");

    // Emtpy the div if there is anything there
    $(".assessment5ul").empty();

    // Append the text to <li>
    node.append(textnodeWrong);
    $(".assessment5ul").append(node);

    secondsLeft -= 10;
    timeContainer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }
});

// Change to Slide 6
$("#next5").on("click", function changePage5() {
  console.log("Go to page 6");
  $("#slide6").css("display", "none");
  $("#slide7").css("display", "block");

  // stop the timer
  clearInterval(timerInterval);

  // Append the time/score text to <p>
  $(".span").textContent = secondsLeft;
});

// Submit high score

// When form is submitted...
$("#submit-button").on("click", function (event) {
  console.log("Score submitted!");

  event.preventDefault();
  $(".Form-inline").submit();
});

// Append score
// Create a <li> node
let nodeScore = document.createElement("LI");

// Create a text node
let textnodeScore = document.createTextNode(secondsLeft);

// Append the text to <li>
nodeScore.append(textnodeScore);

// Append <li> to <ul>
$(".high-scores-list").append(nodeScore);

// Change to High Scores page
scoreContainer.on("click", function scorePage() {
  console.log("Go to High Scores page");

  $("#slide1").css("display", "none");
  $("#slide2").css("display", "none");
  $("#slide3").css("display", "none");
  $("#slide4").css("display", "none");
  $("#slide5").css("display", "none");
  $("#slide6").css("display", "none");
  $("#slide7").css("display", "none");
  $("#slide8").css("display", "block");
});

// Change to home page
backButton.on("click", function homePage() {
  console.log("Go to home page");

  $("#slide1").css("display", "block");
  $("#slide2").css("display", "none");
  $("#slide3").css("display", "none");
  $("#slide4").css("display", "none");
  $("#slide5").css("display", "none");
  $("#slide6").css("display", "none");
  $("#slide7").css("display", "none");
  $("#slide8").css("display", "none");
});

// Remove score
$("#Clear-Highscore-button").on("click", function scorePage() {
  console.log("Score removed");

  let scoreEL = $(".high-scores-list.li");
  scoreEL.parentNode.children.remove(scoreEL);
});
