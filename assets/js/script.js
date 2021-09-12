var startButton = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var startPage = document.querySelector(".starter-page");
var timerElement = document.getElementById("timer");
var submitInitials = document.getElementById("submit-initials");
var finalScore = document.querySelector(".highscore-page-submit");
var main = document.getElementById("main");
var initialsEl = document.getElementById("initials");
var scoreSp = document.getElementById("score");
var timerCount = 30;
var points = 0;
var timer;

//When user clicks on start button, start button will be hidden and quiz will be unhidden and start.

startButton.addEventListener("click", function () {
  quiz = document.querySelector(".quiz");
  quiz.classList.toggle("hidden");
  startButton.remove();
  updateQuestion();
  startTimer();
  if (points >= 50) {
    endGame();
  }
});

// Timer

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    console.log(timerCount);
    timerElement.innerHTML = timerCount + " seconds left";
    if (timerCount === 1) {
      timerElement.innerHTML = timerCount + " second left";
    } else if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// Questions array

var questionEl = document.getElementById("questions");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");

var questions = [
  {
    question: "What is JavaScript?",
    answers: [
      "A client-side scripting language",
      "A client-side and server-side scripting language",
      "The standard markup language for documents designed to be displayed in a web browser",
    ],
    correctAnswer: 1,
  },
  {
    question: "What are JavaScript Data Types",
    answers: ["Number & String", "Boolean & Object", "All of the above"],
    correctAnswer: 2,
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Netscape", "Apple", "Yahoo"],
    correctAnswer: 0,
  },
  {
    question: "What do you mean by NULL in Javascript?",
    answers: [
      "It means something is not working",
      "It means your values are incorrect",
      "It represent no value or no object",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is for-in loop in Javascript?",
    answers: [
      "To loop through the properties of an object",
      "To loop through objects",
      "To loop through functions",
    ],
    correctAnswer: 0,
  },
];

var currentQuestionIndex = 0;
var currentQuestion;

answer1El.addEventListener("click", function () {
  checkAnswer(0);
});

answer2El.addEventListener("click", function () {
  checkAnswer(1);
});

answer3El.addEventListener("click", function () {
  checkAnswer(2);
});

// Next questions

function updateQuestion() {
  currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answer1El.innerText = currentQuestion.answers[0];
  answer2El.innerText = currentQuestion.answers[1];
  answer3El.innerText = currentQuestion.answers[2];
}

// Check that user has clicked on the correct or incorrect answer

function checkAnswer(clickedAnswer) {
  if (!currentQuestion) {
    return;
  }
  if (currentQuestion.correctAnswer === clickedAnswer) {
    console.log("Yay, correct answer!");
    points = points + 10;
    console.log(points);
  } else {
    console.log("Oops, wrong answer");
    timerCount = timerCount - 10;
    if (timerCount <= 0) {
      endGame();
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    updateQuestion();
  } else {
    endGame();
  }
}

submitInitials.addEventListener("click", function () {
  saveGame();
});

function endGame() {
  main.classList.toggle("hidden");
  finalScore.classList.toggle("hidden");
  scoreSp.innerText = points;
}

function saveGame() {
  var game = {
    initials: initialsEl.value,
    score: points,
  };
  if (initialsEl.value === "") {
    alert("Please enter initials");
    return;
  }
  var games = localStorage.getItem("games");
  if (!games) {
    games = [];
  } else {
    JSON.parse(games);
  }
  games.push(game);
  localStorage.setItem("games", JSON.stringify(games));
  window.location.replace("highscores.html");
}
