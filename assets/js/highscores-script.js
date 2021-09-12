var leaderBoard = document.getElementById("score-table");
var games = localStorage.getItem("game");
var initialsEl = document.getElementById("initials");

function highscorePage() {
  var ol = document.createElement("ol");
  var liScore = document.createElement("li");
  leaderBoard.append(ol);
  leaderBoard.append(liScore);
  liScore.setAttribute(
    "style",
    "background-color:#c7f9cc; padding:20px; margin:20px"
  );
  liScore.textContent = localStorage.games;
}

highscorePage();
