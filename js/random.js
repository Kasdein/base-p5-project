
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  
    // translucent stroke using alpha value
    stroke(255, 255, 50, 15);
  }
  
  function draw() {
    // draw two random chords each frame
    randomChord();
    randomChord();
  }
  
  function randomChord() {
    // find a random point on a circle
    let angle1 = random(0, 2 * PI);
    let xpos1 = (mouseX + mouseY * cos(angle1)) * 0.25
    let ypos1 = (mouseX - mouseY * sin(angle1)) * 0.25
  
    // find another random point on the circle
    let angle2 = random(0, 2 * PI);
    let xpos2 = (mouseX + mouseY * cos(angle1)) * 1.25
    let ypos2 = (mouseX - mouseY * sin(angle1)) * 1.25
  
    // draw a line between them
    line(xpos1, ypos1, xpos2, ypos2);
  }
  