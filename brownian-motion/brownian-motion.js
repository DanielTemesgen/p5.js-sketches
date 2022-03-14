let bubbles = []; // instantiating the array where the bubbles will be.
let general_properties = {
    background: 20
}
let bubble_properties = {
    def_colour: 150,
    new_colour: 255
}

function setup() { // this sets up the bubbles and assigns their initial properties.
    createCanvas(displayWidth, displayHeight);
    for (let i = 0; i < 300; i++) {
        bubbles[i] = new Bubble();
    }
}

function draw() {
    background(general_properties.background);
    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false; // initialises the overlapping variable to false
        for (let other of bubbles) {
            if ((b !== other && b.overlap(other)) || b.rollover(mouseX, mouseY)) { // if two bubble overlap or the mouse rolls over a bubble, this sets overlapping to true.
                overlapping = true;
            }
        }
        if (overlapping) { // if overlapping is true this changes the colour
            b.change_colour(bubble_properties.new_colour);
        } else {
            b.change_colour(bubble_properties.def_colour);
        }
    }
}

function mouseDragged() { // this function
    let b = new Bubble(mouseX, mouseY);
    bubbles.push(b)
}

class Bubble { //this is a generic template used to define objects
    constructor(x = random(width), y = random(height), r = random(10, 20), def_colour = bubble_properties.def_colour) { // data goes in here
        this.x = x;
        this.y = y;
        this.r = r;
        this.colour = def_colour;
        this.transparency = 20;
    }
    rollover(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.r
    }
    overlap(o) {
        let distance = dist(this.x, this.y, o.x, o.y) - this.r - o.r;
        return distance < 0;
    }
    change_colour(colour = bubble_properties.def_colour) {
        this.colour = colour
    }
    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
    }
    show() {
        noStroke();
        fill(this.colour, this.transparency)
        ellipse(this.x, this.y, this.r * 2)
    }
}
