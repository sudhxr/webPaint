var c1 = document.getElementById("canvas1");
var context = c1.getContext("2d");
var color = 'black';
var radius = 10;
var isPainting = false;
  
// This function to set WxH of the canvas
function setCanvasSize() {
  var tb1 = document.getElementById("setW").value;
  var tb2 = document.getElementById("setH").value;
  
  c1.width = tb1;
  c1.height = tb2;

}

// Function to clear canvas
function clearCanvas () {
  context.clearRect(0, 0, c1.width, c1.height);
}

// Function to draw circle
function paintCircle (x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// To start painting
function startPainting(x, y) {
  isPainting = true;
  doPaint(x,y);
}

function stopPainting() {
  isPainting = false;
}

function doPaint(x, y) {
  if (isPainting == true) {
    paintCircle (x, y);
  }
}

function changeColor(newColor) {
  color = newColor;
}

function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}