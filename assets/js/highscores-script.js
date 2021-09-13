var leaderBoard = document.getElementById("score-table");
var games = localStorage.getItem("game");
var initialsEl = document.getElementById("initials");
var clearScore = document.getElementById("clear-scores");
var liScore = document.createElement("li");

function highscorePage() {
  var ol = document.createElement("ol");
  leaderBoard.append(ol);
  leaderBoard.append(liScore);
  liScore.setAttribute(
    "style",
    "background-color:#c7f9cc; padding:20px; margin:20px"
  );
  localStorage.setItem("games", JSON.stringify(games));
  liScore.textContent = JSON.parse(games);
}

highscorePage();

clearScore.addEventListener("click", function () {
  liScore.textContent = "";
});
