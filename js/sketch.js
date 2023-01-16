//variables
let x = 0
let y = 0
let theta = 0
let inc = 0.09
let offset = 0 //the ammount offset from beginning of wave
let amplitude
let frequency
let maxAngle

function setup() {
    createCanvas(windowWidth, windowHeight)

    amplitude = windowHeight * 0.075
    frequency = windowWidth * 1.25
    maxAngle = (windowWidth/frequency) * TAU
    // amplitude = windowHeight * 0.042
    // frequency = windowWidth * 32

    // x = width / 1/3
    // y = height
}

function draw() {   

    fill(0, 255, 0)
    background(0)
    noStroke()
    let length = 5

    // amplitude = sin(theta - offset) * (windowHeight/2)
    // amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
    // while 2
    while(theta < maxAngle + offset) {
    //creates a sine wave
    // sine 2
        y = sin(theta) * amplitude
        fill(0, 255, 0)
        ellipse(x, y + height * 0.5, 10)
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)   
    //sine 2
        y = sin(theta) * amplitude
        fill (255, 100, 0)
        ellipse(x, y + height * 0.5, 10)
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)

    //creates a cos wave
    // cos 1
        y = cos(theta) * amplitude
        ellipse(x, y + height * 0.5, 10)
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)
    //cos 2
        y = cos(theta) * amplitude
        fill(0, 200, 0)
        ellipse(x, y + height * 0.5, 10)
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)
    }

    offset += inc
    theta = offset

    // Random Animated balloon 
    // background(250)

    // stroke(25)
    // fill(100)
    // ellipse(x, y, 25, 25)

    // x = x + random(-15, 15)
    // y = y - 2.5
    // }
    // if (y < 0) {
    //     y = height
    // }
}
