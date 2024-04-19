const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
let attempts = 0;
let guess;
let isRunning = true;

while(isRunning) {
  guess = window.prompt(`Enter a number within ${minNum} and ${maxNum}`);
  guess = Number(guess);
  
  if(isNaN(guess)){
    window.alert(`Enter a valid number`);
  }
  else if (guess < minNum || guess > maxNum) {
    window.alert(`Enter a number within ${minNum} and ${maxNum}`);
  }
  else {
    attempts++;
    if(guess < answer) {
      window.alert(`TOO LOW! Try Again`);
    }
    else if(guess > answer) {
      window.alert(`TOO HIGH! Try Again`);
    }
    else {
      window.alert(`Your answer is correct! The answer was ${answer}. You find your answer in ${attempts} attempts!`);
      isRunning = false;
    }
  }
}
