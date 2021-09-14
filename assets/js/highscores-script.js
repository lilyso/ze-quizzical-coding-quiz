var leaderBoard = document.getElementById("score-table");
var clearScore = document.getElementById("clear-scores");
var storedGames = JSON.parse(localStorage.getItem("games"));

//Renders scores in a list as <li> elements

function renderScores() {
  storedGames.sort(compare);
  storedGames.reverse();
  for (var i = 0; i < storedGames.length; i++) {
    var gameValues =
      storedGames[i]["initials"] + " - " + storedGames[i]["score"];
    console.log(gameValues);
    leaderBoard.innerHTML += `<li>${gameValues}</li>`;
  }
}

// Arrange scores in order from highest to lowest

function compare(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}

// Render leaderboard only if scores are available

if (storedGames !== null) {
  renderScores();
}

// Clear scores from leaderboard

clearScore.addEventListener("click", function () {
  localStorage.removeItem("games");
  leaderBoard.innerHTML = `<li>No scores</li>`;
});
