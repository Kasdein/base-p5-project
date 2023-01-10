function setup() {
    createCanvas(windowWidth, windowHeight)

    //variables
    let x = 0
    let y = 0
    let theta = 0
    let amplitude = windowHeight*0.025
    let frequency = windowWidth*0.01
    let maxAngle = (windowWidth/frequency) * TAU

    //creates a sine wave
    while(theta < maxAngle){
        y = sin(theta) * amplitude
        ellipse(x, y + height*0.5, 25)
        theta += 0.1
        x = (theta/maxAngle) * windowWidth
    }




    // x = width / 1/3
    // y = height
}

function draw() {   




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
