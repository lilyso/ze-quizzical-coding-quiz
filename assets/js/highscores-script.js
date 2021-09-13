var leaderBoard = document.getElementById("score-table");
var clearScore = document.getElementById("clear-scores");
var liScore = document.createElement("li");
var gameScores = [];
var storedGames = JSON.parse(localStorage.getItem("games"));

// The following function renders items in a list as <li> elements
function renderScores() {
  leaderBoard.textContent = gameScores.length;
  for (var i = 0; i < gameScores.length; i++) {
    var gameScore = gameScores[i];
  }
  var li = document.createElement("li");
  li.textContent = gameScore;
  li.setAttribute("data-index", i);
  leaderBoard.append(li);
  liScore.textContent = "test";
}

function init() {
  if (storedGames !== null) {
    gameScores = storedGames;
  }
}

renderScores();
init();

// Render scores
// function highscorePage() {
//   var ol = document.createElement("ol");
//   leaderBoard.append(ol);
//   leaderBoard.append(liScore);
//   liScore.setAttribute(
//     "style",
//     "background-color:#c7f9cc; padding:20px; margin:20px"
//   );
//   var games = localStorage.getItem("games");
//   liScore.textContent = games[index];
//   for (let index = 0; index < games.length; index++) {
//     leaderBoard.append(ol);
//     leaderBoard.append(liScore);
//     liScore.setAttribute(
//       "style",
//       "background-color:#c7f9cc; padding:20px; margin:20px"
//     );
//   }
// }

// highscorePage();

// clearScore.addEventListener("click", function () {
//   liScore.textContent = "";
// });
