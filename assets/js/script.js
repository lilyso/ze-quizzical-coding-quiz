var startButton = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var startPage = document.querySelector(".starter-page");
var timerElement = document.getElementById("timer");

startButton.addEventListener("click", function () {
  element = document.querySelector(".quiz");
  element.classList.toggle("hidden-quiz");
  startButton.remove();
  startTimer();
});

function startTimer() {
  var timerCount = 30;
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

// const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },

// var questionEl = document.getElementById("questions")
// var questionEl = document.getElementById("answer1")
// var questionEl = document.getElementById("answer2")
// var questionEl = document.getElementById("answer3")

// var questions = [
//     {
//         questions: dfjdlsfklds?
//         answers: {"s", "j", "d"},
//         correctAnswer: 0
//     },
//     {
//         questions: dfjdlsfklds?
//         answers: {"s", "j", "d"},
//         correctAnswer: 0
//     },
// ];

// var currentQuestions = 0;
// function updateQuestions() {
// var currentQuestion = [questionQuestion];
// questionEl.innerText = currentQuestion.question;
// answer1El.innterText = currentQestion.answer[0];
// answer1El.innterText = currentQestion.answer[1];
// answer1El.innterText = currentQestion.answer[2];

// currentQuestionIndex++;

// }

// function checkAnswer() {}
// answer1El.addEventListenter("click", function(
//     { checkAnswer(0;)
//     });

// updateQuestions();

// const question1 = {
//   question: "What is JavaScript?",
//   answer1: ["A client-side scripting language", false],
//   answer2: ["A server-side scripting language", false],
//   answer3: ["A client-side and server-side scripting language", true],
//   answer4: [
//     "The standard markup language for documents designed to be displayed in a web browser",
//     false,
//   ],
// };
