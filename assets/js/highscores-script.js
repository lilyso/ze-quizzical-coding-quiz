var leaderBoard = document.getElementById("score-table");
var clearScore = document.getElementById("clear-scores");
var liScore = document.createElement("li");
var storedGames = JSON.parse(localStorage.getItem("games"));

// The following function renders items in a list as <li> elements
function renderScores() {
  for (var i = 0; i < storedGames.length; i++) {
    liScore.setAttribute(
      "style",
      "background-color:#c7f9cc; padding:20px; margin:20px"
    );

    leaderBoard.appendChild(liScore);

    liScore.textContent =
      storedGames[i]["initials"] + " - " + storedGames[i]["score"];
  }

  //     leaderBoard.appendChild(liScore);
  //   }
}

// function init() {
//   if (storedGames !== null) {
//     gameScores = storedGames;
//   }
// }

renderScores();
// init();

// clearScore.addEventListener("click", function () {
//   liScore.textContent = "";
// });
