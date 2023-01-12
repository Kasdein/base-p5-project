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

    // let speed = abs(x-px) + abs(y - py)
    let length = 5
    // stroke(speed, speed - 50, speed - 200)
    // fill(speed, speed - 100, speed - 50)
    // ellipse(x, y, speed, speed)
    while(theta < maxAngle + offset) {
        // amplitude = sin(theta - offset) * (windowHeight/2)
        // amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
            for (i = length; i > 0; i --){
                y = mouseY + (cos(theta) * amplitude)
                r = height * 0.12
                x = mouseX + (r * sin(theta))
                // y = mouseY + (r * sin(theta))
                fill (255 - (255/length * i), 0, 0)
                // for(i = 0; i < 10; i ++){ 
                ellipse(x, y, 12, 12)
                // rotate(PI/5)
                // }
            }
            for (i = length; i > 0; i--){
                y = mouseY + (sin(theta) * amplitude)
                r = height * 0.12
                x = mouseX + (r * cos(theta))
                // y = mouseY + (r * sin(theta))
                fill(0, 0, 255 - (255/length * i))
                // for(i = 0; i < 10; i ++){ 
                ellipse(x, y, 12, 12)
                // rotate(PI/5)
                // }
            }
        theta += 0.1
        // x = ((theta)) * windowWidth  
        }
        offset += inc
        // theta = offset
}