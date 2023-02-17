function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  let c = color(255, 0, 0);
  let d = color(255, 204, 0);
  
 if (mouseIsPressed) {
    fill(0);
  } else {
    fill(c);
  }
  ellipse(mouseX, mouseY, 80, 80);
}