
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  
    // translucent stroke using alpha value
    stroke(255, 255, 50, 25);
  }
  
  function draw() {
    // draw two random chords each frame
    if(mouseIsPressed){
    randomChord();
    randomChord();
    }
  }
  
  function randomChord() {
    // find a random point on a circle
    let angle1 = random(0, 2 * PI);
    let xpos1 = (mouseX + cos(angle1))
    let ypos1 = ( mouseY + sin(angle1))
  
    // find another random point on the circle
    let angle2 = random(0, 2 * PI);
    let xpos2 = (mouseX + (cos(angle1)* 55))
    let ypos2 = (mouseY + (sin(angle1)* 55))
  
    // draw a line between them
    line(xpos1, ypos1, xpos2, ypos2);
  }
  