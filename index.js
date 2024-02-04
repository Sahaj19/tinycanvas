const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let size = 20;
isPressed = false;
let color = "black";
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
  ctx.fillStyle = color;
  ctx.fill();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(drawing a line)

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
