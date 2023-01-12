//variables
let x = 0
let y = 0
let theta = 0
let inc = 0.012
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
    let length2 = 0

    // while 2
    while(theta < maxAngle + offset) {
        
    amplitude = sin(theta - offset) * (windowHeight/2)
    amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
    //creates a sine wave
    //sine 1
    for(i = length; i > 0; i-= 1.5){
        y = sin(theta - (i * 0.05)) * amplitude
        fill (255/length * i, 100, 150)
        ellipse(x, y + height * 0.5, 10)

         }
    //creates a cos wave
    // cos 1

    for(i = length; i > 0; i-= 1.5){
        y = cos(theta - (i * 0.05)) * amplitude
        fill(50, 255/length * i, 150)
        ellipse(x, y + height * 0.5, 10)
         }
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)
    }
    offset += inc
    theta = offset

    while(theta < maxAngle + offset) {
    amplitude = sin(theta - offset) * (windowHeight/2)
    amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
    // sine 2
    for(i = length2; i < 5; i+= 1.5){
            y = sin(theta - (i * 0.05)) * amplitude
            fill(50, 255/length * i, 150)
            ellipse(x, y + height * 0.5, 10)
 
            }
    //cos 2
    for(i = length2; i < 5; i+= 1.5){
        y = cos(theta - (i * 0.05)) * amplitude
        fill (255*length / i, 100, 100)
        ellipse(x, y + height * 0.5, 10)
        }
        theta += 0.05
        x = ((theta - offset)/maxAngle * windowWidth)
    }
    offset += inc
    theta = offset
}