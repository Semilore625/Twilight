let randomNum = Math.floor(Math.random() * 20 + 1);
const body = document.querySelector("body");
const btnReset = document.querySelector(".btna");
let questMark = document.querySelector(".mark");
const guess = document.querySelector("#rec");
const btnCheck = document.querySelector(".check");
let mainScore = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".guessp").innerHTML = message;
};

function reset() {
  randomNum = Math.floor(Math.random() * 20 + 1);
  score = 20;
  mainScore.textContent = 20;
  questMark.innerHTML = "?";
  guess.value = "";
  displayMessage("Start guessing...");
  // highscore = highScore;
  body.style.backgroundColor = "#444";
  console.log(randomNum);
}

// btnReset.addEventListener("click", reset);

btnCheck.addEventListener("click", () => {
  if (!guess.value) {
    displayMessage("No Number⛔");
  } else if (+guess.value === randomNum) {
    displayMessage("Hot🔥");
    body.style.backgroundColor = "#60b347";
    questMark.style.width = "150px";
    questMark.innerHTML = guess.value;
    if (score > highscore) {
      highscore = score;
      highScore.textContent = score;
    }
  } else if (+guess.value !== randomNum) {
    if (score > 1) {
      displayMessage(+guess.value < randomNum ? "Cold" : "Warm");
      score--;
      mainScore.textContent = score;
    }
  } else {
    displayMessage("Game over.");
    mainScore.textContent = 0;
  }
});

// function check() {
//   if (+input.value === randomNum) {
//     questMark = highscore;
//   } else {
//     questMark.innerHTML = questMark;
//   }
// }

// if (!+guess) {
//   displayMessage = "No Number";
// } else if (+input.value > randomNum) {
//   displayMessage = "Cold🥶";
// } else if (+input.value < randomNum) {
//   displayMessage = "Warm🥵";
// } else if (+input.value === randomNum) {
//   displayMessage = "Hot🔥";
// } else {
//   displayMessage = "Game Over";
// }
