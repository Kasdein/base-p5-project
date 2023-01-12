//variables
let x = 0
let y = 0
let theta = 0
let inc = 3.9
let offset = 0 //the ammount offset from beginning of wave
let amplitude
let frequency
let maxAngle

function setup() {
    createCanvas(windowWidth, windowHeight)

    amplitude = windowHeight * 0.75
    frequency = windowWidth * 1.25
    maxAngle = (windowWidth/frequency) * TAU
}

function draw() {   

    fill(0, 255, 0)
    background(0)
    noStroke()
    let length = 5

    // while 2
    while(theta < maxAngle + offset) {
        
    amplitude = sin(theta - offset) * (windowHeight/2)
    amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
    //creates a sine wave
    //sine 1
    for(i = length; i > 0; i--){
        y = sin(theta - (i * 0.05)) * amplitude
        fill (255/length * i, 50, 50)
        ellipse(x, y + height * 0.5, 10)

         }
    //creates a cos wave
    // cos 1

    for(i = length; i > 0; i--){
        y = cos(theta - (i * 0.05)) * amplitude
        fill(0, 255/length * i, 50)
        ellipse(x, y + height * 0.5, 10)
         }
    theta += 0.05
    x = ((theta - offset)/maxAngle * windowWidth)
    }
    offset += inc
    theta = offset
}