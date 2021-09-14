var leaderBoard = document.getElementById("score-table");
var clearScore = document.getElementById("clear-scores");
var liScore = document.createElement("li");
var storedGames = JSON.parse(localStorage.getItem("games"));

// The following function renders items in a list as <li> elements
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

function compare(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}

if (storedGames !== null) {
  renderScores();
}

clearScore.addEventListener("click", function () {
  localStorage.removeItem("games");
  leaderBoard.innerHTML = `<li>No scores</li>`;
});
