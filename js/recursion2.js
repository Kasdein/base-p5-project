let brown1, brown2, slider
let green1, green2
let yellow1, yellow2
let red1

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    noLoop()

    strokeJoin(ROUND)

    brown1 = color(93, 69, 20)
    brown2 = color(137, 75, 9)
    green1 = color(60, 120, 60)
    green2 = color(20, 160, 20)
    yellow1 = color(246, 231, 115)
    yellow2 = color(234, 189, 81)
    red1 = color(247, 113, 56)

    slider = createSlider(15, 35, 25, 1)
    slider.position(windowWidth - 250, windowHeight - 50)
    slider.style("width", "200px")
    slider.input(draw)
}

function draw() {    
    background(250)
    resetMatrix()
    translate(width * 0.5, height)
    branch(250)
    resetMatrix()
    translate(width * 0.5, height)
    branch(100)
}

function branch(l) {
    let maxAngle = slider.value()
    strokeWeight(map(l, 20, 250, 1, 10))
    noStroke()
    ellipse(0, 0, 8, 36)
    ellipse(0, 0, 36, 8)
    fill(lerpColor(yellow1, red1, random(0, 1)))
    translate(0, -l)
    if(l > 20) {
        if(l < 55) {
            //leaves
            noStroke()
            fill(lerpColor(yellow1, red1, random(0, 1)), 75)
            ellipse(0, 0, 4, 16)
            ellipse(0, 0, 16, 4)
            rotate(45)
            ellipse(0, 0, 4, 16)
            ellipse(0, 0, 16, 4)
        } else {
        //branch 1
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.4)
        pop()
        // branch 2
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.6)
        pop()
        //branch 3
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.3)
        pop()
        //branch 4
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.5)
        pop()
        //branch 5
        push()
        rotate(random(-maxAngle*1.4, maxAngle*1.4))
        branch(l * 0.9)
        pop()
        //branch 6
        push()
        rotate(random(-maxAngle*1.6, maxAngle*1.6))
        branch(l * 0.1)
        pop()
        //branch 7
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.2)
        pop()
        }
    }
}
        // stroke(91, 119, 8)
        // stroke(85, 92, 12)
        // stroke(244, 225, 104)
        // stroke(230, 187, 100)
        // stroke(247, 203, 101) 
        // background(215, 249, 255)
        // background(95, 178, 212)

