let spots = []; // this initiates an empty array of spots, to be filled in the draw function

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let new_spot = new Spot(random(width), random(height), random(5, 15)); // this brings in a new spot in every loop
  spots.push(new_spot); // this pushs it to the array of spots
  spots[spots.length - 1].show(); // this shows the spot that has just been made
}

class Spot {
  constructor(x, y, r){
    // location and size
    this.x = x;
    this.y = y;
    this.r = r;
    // colour
    this.rgba = [0, 0, random(0, map(mouseX, 0, windowWidth, 30, 255)), random(0, 255)];
  }
  show(){
    noStroke();
    fill(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3]);
    ellipse(this.x, this.y, this.r*2);
  }
}
