const box = document.getElementById("box");

/* box.addEventListener("click", event => {
  event.target.style.backgroundColor = "aquamarine";
  event.target.textContent = "❤️";
})

 */

document.addEventListener("keydown", event  => {
  box.textContent = "😉";
  box.style.backgroundColor = "aquamarine";
})

document.addEventListener("keyup", event => {
  box.textContent = "🥶";
  box.style.backgroundColor = "aqua";
})
