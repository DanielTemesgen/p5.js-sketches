let bubbles = []; // instantiating the array where the bubbles will be.
let bubble_properties = {
    def_colour: 0,
    new_colour: 255
}

function setup() { // this sets up the bubbles and assigns their initial properties.
    createCanvas(displayWidth, displayHeight);
    for (let i = 0; i < 200; i++) {
        bubbles[i] = new Bubble();
    }
}

function draw() { // this sets the background and the move and show methods.
    background(100);
    for (let b of bubbles) {
        b.move();
        b.show();
        overlap = false;
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)) {
                overlap = true;
            }
        }
        if (overlap) {
            b.change_colour(50)
        }
        if (b.rollover(mouseX, mouseY)) {
            b.change_colour(255)
        } else {
            b.change_colour()
        }
    }
}

function mouseDragged() {
    let b = new Bubble(mouseX, mouseY);
    bubbles.push(b)
}

class Bubble { //this is a generic template used to define objects
    constructor(x = random(width), y = random(height), r = random(10, 30), def_colour = 0) { // data goes in here
        this.x = x;
        this.y = y;
        this.r = r;
        this.colour = 0;
        this.transparency = 100;
    }
    change_colour(colour = bubble_properties.def_colour) {
        this.colour = colour
    }
    rollover(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.r
    }
    intersects(o) {
        let d = (this.x, this.y, o.x, o.y);
        return (d < this.r + o.r)
    }
    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
    }
    show() {
        noStroke();
        fill(0, 0, this.colour, this.transparency)
        ellipse(this.x, this.y, this.r * 2)
    }
}
