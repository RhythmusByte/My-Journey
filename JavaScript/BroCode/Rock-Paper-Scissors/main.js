const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const comDisplay = document.getElementById('comDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
  let result = '';
  let comChoice = choices[Math.floor(Math.random() * 3)];

  if(playerChoice === comChoice) {
    result = "IT'S A TIE";
  }
  else {
    switch(playerChoice) {
      case "rock":
        result = (comChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "paper":
        result = (comChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissors":
        result = (comChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;  
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  comDisplay.textContent = `COMPUTER: ${comChoice}`;
  resultDisplay.textContent = result;
}
