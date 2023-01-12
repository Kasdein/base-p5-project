//variables
let x = 0
let y = 0
let theta = 0
let inc = 0.025
let offset = 0 //the ammount offset from beginning of wave
let amplitude
let frequency
let maxAngle

function setup() {
    createCanvas(windowWidth, windowHeight)

    amplitude = windowHeight * 0.1
    frequency = windowWidth * 0.8
    maxAngle = (windowWidth/frequency) * TAU
}

function draw() { 

    fill(0, 153, 0)
    background(0)
    noStroke()
    let length = 5

    while(theta < maxAngle + offset) {
    // amplitude = sin(theta - offset) * (windowHeight/2)
    // amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
        for (i = length; i > 0; i --){
            y = sin(theta - (i * 0.05)) * amplitude
            fill (255 - (255/length * i), 100, 100)
            ellipse (x, y + height * 0.5, 12)
        }
        for (i = length; i > 0; i--){
            y = cos(theta - (i * 0.05)) * amplitude
            fill(100, 200, 255 - (255/length * i))
            ellipse(x, y + height*0.5, 12)
        }
    theta += 0.1
    x = ((theta - offset)/maxAngle) * windowWidth  
    }
    offset += inc
    theta = offset
}