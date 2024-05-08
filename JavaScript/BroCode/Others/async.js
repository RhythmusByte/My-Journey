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

// scoreBoard.positive(5);
// scoreBoard.negative(2);
// scoreBoard.getScore();

function neg(callback) {
  setTimeout(() => {scoreBoard.negative(4), callback}, 3000);
}

function pos(total) {
  setTimeout(() => {scoreBoard.positive(12), total}, 2000);
}

function sco() {
  scoreBoard.getScore();
}

neg(pos(sco));
