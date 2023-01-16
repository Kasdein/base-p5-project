let x = 0
let y = 0
let r
let theta = 0
let inc = 0.12
let offset = 0 //the ammount offset from beginning of wave
let amplitude
let frequency
let maxAngle

function setup() {
    createCanvas(windowHeight, windowWidth)
    background(0)

    amplitude = windowHeight * 0.1
    frequency = windowWidth * 6
    maxAngle = (windowWidth/frequency) * TAU
}

function draw() {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY)
    noStroke()
}

function variableEllipse(x, y, px, py) {
    let length = 5
    while(theta < maxAngle + offset) {
            for (i = length; i > 0; i --){
                // y = mouseY + (cos(theta) * amplitude)
                r = height * 0.12
                // x = mouseX + (r * sin(theta))
                // y = mouseY + (r * sin(theta))
                // fill (255 - (255/length * i), 0, 0)
                // ellipse(x, y, 12, 12)
                px = mouseX + (r * sin(theta))
                py = mouseY + (r * cos(theta))
                fill (255 - (255/length * i), 0, 0)
                ellipse (px, py, 12, 12)
            }
        theta += 0.1
        x = ((theta)) * windowWidth  
        }
        offset += inc
}