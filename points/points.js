function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  var spot = {
  x    : random(0,windowWidth),
  y    : random(0,windowHeight),
  size : random(10,30)
  }
  
  thing = map(mouseX, 0, windowWidth, 30, 255);

  var col = {
  r : random(0,0),
  g : random(0,0),
  b : random(30, thing),
  a : random(0,255)
}

  noStroke()
  fill(col.r, col.g, col.b, col.a);
  ellipse(spot.x, spot.y, spot.size, spot.size);
}
