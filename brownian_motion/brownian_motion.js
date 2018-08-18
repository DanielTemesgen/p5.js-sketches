let bubbles = []; // instantiating the array where the bubbles will be.
let bubble_properties = {
  min_size : 10, 
  max_size : 20,
  transparency : 10
}

function setup() { // this sets up the bubbles and assigns their initial properties.
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2000; i++) {
    let x = random(width);
    let y = random(height)
    let r = random(bubble_properties.min_size, bubble_properties.max_size)
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() { // this sets the background and the move and show methods.
  background(100);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }
}

function mouseDragged(){
  let r = random(bubble_properties.min_size, bubble_properties.max_size);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b)
}

class Bubble { //this is a generic template used to define objects
  constructor(x, y, r){  // data goes in here
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  
  show(){
    noStroke();
    fill(0, 0, 0, bubble_properties.transparency)
    ellipse(this.x, this.y, this.r*2)
  }
}
