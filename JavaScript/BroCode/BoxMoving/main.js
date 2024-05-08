const box = document.getElementById("box");

/* box.addEventListener("click", event => {
  event.target.style.backgroundColor = "aquamarine";
  event.target.textContent = "GOODIES ❤️";
})



document.addEventListener("keydown", event  => {
  box.textContent = "😉";
  box.style.backgroundColor = "aquamarine";
})

document.addEventListener("keyup", event => {
  box.textContent = "🥶";
  box.style.backgroundColor = "aqua";
})

*/

let moveAmount = 10;
let x = 0
let y = 0;

document.addEventListener("keydown", event => {

  if(event.key.startsWith("Arrow")) {

    switch(event.key){
      case "ArrowUp":
        y -= moveAmount;
        box.textContent = "😉";
        box.style.backgroundColor = "tomato";
        break;
      case "ArrowDown":
        y += moveAmount;
        box.textContent = "😒";
        box.style.backgroundColor = "black";
        break;
      case "ArrowRight":
        x += moveAmount;
        box.textContent = "🤣";
        box.style.backgroundColor = "red";
        break;
      case "ArrowLeft":
        x -= moveAmount;
        box.textContent = "😗";
        box.style.backgroundColor = "purple";
        break;
    }
  
    box.style.top = `${y}px`
    box.style.left = `${x}px`
  }
});
