const roll = document.getElementById("roll");
const rollBtn = document.getElementById("rollBtn");
const min = 1;
const max = 6;
let random;

rollBtn.onclick = function() {
  random  = Math.floor(Math.random() * max) + min;
  roll.textContent = random;
}
