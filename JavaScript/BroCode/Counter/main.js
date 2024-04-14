document.addEventListener("DOMContentLoaded", function() {
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");
  const countBtn = document.getElementById("countBtn");
  let count = 0;
  
  increase.onclick = function () {
    count++;
    countBtn.textContent = count;
  };
  decrease.onclick = function () {
    count--;
    countBtn.textContent = count;
  };
  reset.onclick = function () {
    count = 0;
    countBtn.textContent = count;
  };
});
