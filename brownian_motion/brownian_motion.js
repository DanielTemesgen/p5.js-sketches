let bubbles = []; // instantiating the array where the bubbles will be.
let bubble_properties = {
    def_colour : 0,
    new_colour : 255
}

function setup() { // this sets up the bubbles and assigns their initial properties.
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 2000; i++) {
      bubbles[i] = new Bubble();
  }
}

function draw() { // this sets the background and the move and show methods.
  background(100);
  for (let b of bubbles) {
      if (b.rollover(mouseX, mouseY)){
          b.change_colour(255)
      } else {
          b.change_colour()
      }
//      if (b.intersect(bubble)){
//          background()
//      }
      b.move();
      b.show();
  }
}

function mouseDragged(){
    let r = random(bubble_properties.min_size, bubble_properties.max_size);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b)
}

class Bubble { //this is a generic template used to define objects
  constructor(x = random(width), y = random(height), r=random(10,30), def_colour = 0){  // data goes in here
      this.x = x;
      this.y = y;
      this.r = r;
      this.colour = def_colour;
      this.transparency = 10;
  }
  change_colour(colour = bubble_properties.def_colour){
      this.colour = colour
  }
rollover(px, py){
    let d = dist(px, py, this.x, this.y);
    return d < this.r
}
intersect(other){
    let d = (this.x, this.y, other.x, other.y)
    return (d < this.x + other.x)
}
move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
}
show(){
    noStroke();
    fill(0, 0, this.colour, this.transparency)
    ellipse(this.x, this.y, this.r*2)
  }
}
