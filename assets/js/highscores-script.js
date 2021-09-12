var leaderBoard = document.getElementById("score-table");

function highscorePage() {
  var ol = document.createElement("ol");
  var liScore = document.createElement("li");
  leaderBoard.append(ol);
  leaderBoard.append(liScore);
  liScore.textContent = JSON.parse(games);
}

highscorePage();
