const decrease_pencil_size = document.querySelector("#decrease_size");
const actual_pencil_size = document.querySelector("#pencil_size");
const increase_pencil_size = document.querySelector("#increase_size");
const user_color = document.querySelector("#color");
const clear_canvas = document.querySelector("#clear_canvas_button");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let size = 5;
isPressed = false;
let pencil_color = "black";
let x;
let y;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(canvas functionality when mouse is clicked)
canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

//(canvas functionality when mouse is unclicked)
canvas.addEventListener("mouseup", (event) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

//(canvas functionality when mouse is clicked and moving)
canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    let x2 = event.offsetX;
    let y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(drawing a circle)

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = pencil_color;
  ctx.fill();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(drawing a line)

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = pencil_color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(increased pencil size button functionality)
increase_pencil_size.addEventListener("click", () => {
  size = size + 5;

  if (size >= 20) {
    size = 20;
  }

  actual_pencil_size.innerHTML = size;
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(decreased pencil size button functionality)
decrease_pencil_size.addEventListener("click", () => {
  size = size - 5;

  if (size <= 5) {
    size = 5;
  }

  actual_pencil_size.innerHTML = size;
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(picking personalized pencil color)
user_color.addEventListener("change", (event) => {
  pencil_color = event.target.value;
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(Let's clear our canvas)
clear_canvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
