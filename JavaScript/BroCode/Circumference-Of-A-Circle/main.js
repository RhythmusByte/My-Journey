const PI = 3.14;
let circumference, radius;

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("radius").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("result").textContent = `Circumference of the circle is ${circumference} cm`;
};
