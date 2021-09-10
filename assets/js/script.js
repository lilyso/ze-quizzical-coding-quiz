var startButton = document.getElementsByClass("start-button");
var quiz = document.getElementsByClass("quiz");
var startPage = document.getElementsByClass("starter-page");

startButton.addEventListener("startQuiz", function () {});

const question1 = {
  question: "What is JavaScript?",
  answer1: ["A client-side scripting language", false],
  answer2: ["A server-side scripting language", false],
  answer3: ["A client-side and server-side scripting language", true],
  answer4: [
    "The standard markup language for documents designed to be displayed in a web browser",
    false,
  ],
};

// const question1 = {
//   question: "What is JavaScript?",
//   answers: [
//     {text: "A client-side scripting language",
//     correct: false},
//     {text: "A server-side scripting language",
//     correct: false},
//     {text: "A client-side and server-side scripting language",
//     correct: false},
//     {text: "The standard markup language for documents designed to be displayed in a web browser",
//     correct: false}
//   ]
// };

question1.answer1[0];
