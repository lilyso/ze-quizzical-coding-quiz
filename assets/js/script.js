var startButton = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var startPage = document.querySelector(".starter-page");
var timerElement = document.getElementById("timer");
var timerCount = 30;
var points = 0;

startButton.addEventListener("click", function () {
  quiz = document.querySelector(".quiz");
  quiz.classList.toggle("hidden-quiz");
  startButton.remove();
  updateQuestion();
  startTimer();
});

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

function updateQuestion() {
  currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answer1El.innerText = currentQuestion.answers[0];
  answer2El.innerText = currentQuestion.answers[1];
  answer3El.innerText = currentQuestion.answers[2];
}

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
    if (timerCount === 0);
    {
    }
    // return to submit form
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    updateQuestion();
  } else {
    // clear timer and show submit form
  }
}

answer1El.addEventListener("click", function () {
  checkAnswer(0);
});

answer2El.addEventListener("click", function () {
  checkAnswer(1);
});

answer3El.addEventListener("click", function () {
  checkAnswer(2);
});
