function outer() {
  let score = 0;

  function positive(points){
    score += points;
    console.log(`Points increased by ${points}`);
  }

  function negative(points){
    score -= points;
    console.log(`Points decreased by ${points}`);
  }

  function getScore() {
    console.log(`The total score is ${score}`)
  }

  return {positive, negative, getScore};
}

let scoreBoard = outer();

scoreBoard.positive(5);
scoreBoard.negative(2);
scoreBoard.getScore();
