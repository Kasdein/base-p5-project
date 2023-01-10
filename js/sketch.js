    //variables
    let x = 0
    let y = 0
    let theta = 0
    let inc = 0.05
    let offset = 0 //the ammount offset from beginning of wave
    let amplitude
    let frequency
    let maxAngle


function setup() {
    createCanvas(windowWidth, windowHeight)

    // amplitude = windowHeight*0.25
    // frequency = windowWidth*0.001


    // amplitude = windowHeight * 0.042
    // frequency = windowWidth * 32


    amplitude = windowHeight * 0.25
    frequency = windowWidth * 2
    maxAngle = (windowWidth/frequency) * TAU





    // x = width / 1/3
    // y = height
}

function draw() {   

    // fill(0, 153, 0)


    background(0)
    noStroke()

    while(theta < maxAngle + offset) {
    //creates a sine wave
    // sine 2
        y = sin(theta) * amplitude
        fill(204, 255, 255)
        ellipse(x, y + height * 0.5, 25)
        theta += 0.1
        x = ((theta - offset)/maxAngle * windowWidth)   
    //sine 2
        y = sin(theta) * amplitude
        fill (255, 204, 153)
        ellipse(x, y + height * 0.5, 25)
        theta += 0.1
        x = ((theta - offset)/maxAngle * windowWidth)

    //creates a cos wave
    // cos 1
        y = cos(theta) * amplitude
        ellipse(x, y + height * 0.5, 25)
        theta += 0.1
        x = ((theta - offset)/maxAngle * windowWidth)
    //cos 2
        y = cos(theta) * amplitude
        fill(204, 255, 255)
        ellipse(x, y + height * 0.5, 25)
        theta += 0.1
        x = ((theta - offset)/maxAngle * windowWidth)
    }
    offset += inc
    theta = offset

    // background(250)

    // stroke(25)
    // fill(100)
    // ellipse(x, y, 25, 25)

    // x = x + random(-15, 15)
    // y = y - 2.5

    // if (y < 0) {
    //     y = height
    // }
}
