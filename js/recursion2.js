let brown1, brown2, slider
let green1, green2
let yellow1, yellow2

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

    slider = createSlider(5, 25, 15, 1)
    slider.position(windowWidth - 250, windowHeight - 50)
    slider.style("width", "200px")
    slider.input(draw)
}

function draw() {    
    background(250)
    resetMatrix()
    translate(width * 0.5, height)
    branch(250)
}

function branch(l) {
    let maxAngle = slider.value()
    strokeWeight(map(l, 20, 250, 1, 10))
    // stroke(lerpColor(yellow1, yellow2, random(0, 1)))
    stroke(0, 0, 0, 0)
    line(0,0,0,-l)
    translate(0, -l)
    if(l > 10) {
        if(l < 65) {
            //leaves
            let r = random(0,255)
            let g = random(0,255)
            let b = random(0, 255)
            noStroke()
            fill(r, g, b, 75)
            ellipse(0, 0, 8, 25)
            ellipse(0, 0, 25, 8)
            rotate(45)
            ellipse(0, 0, 8, 25)
            ellipse(0, 0, 25, 8)
        } else {
        //branch 1
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.5)
        pop()
        // branch 2
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.75)
        pop()
        //branch 3
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.3)
        pop()
        //branch 4
        push()
        rotate(random(-maxAngle*1.75, maxAngle*1.75))
        branch(l * 0.67)
        pop()
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.9)
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

