function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    noLoop()
    stroke(247, 203, 101) 
}

function draw() {
    background(95, 178, 212)
    translate(width * 0.5, height)
    branch(250)
}

function branch(l) {
    let maxAngle = 45
    strokeWeight(2)
    line(0,0,0,-l)
    translate(0, -l)
    if(l > 20) {
        //branch 1
        push()
        rotate(random(-maxAngle, maxAngle))
        stroke(244, 225, 104)
        branch(l * 0.75)
        pop()
        // branch 2
        push()
         stroke(230, 187, 100)
        rotate(random(-maxAngle * 0.9, maxAngle * 0.9))
        branch(l * 0.6)
        pop()
        //branch 3
        push()
        rotate(random(-maxAngle * 0.75, maxAngle * 0.75))
        stroke(244, 225, 104)
        branch(l * 0.5)
        pop()
        //branch 4
        push()
        rotate(random(-maxAngle * 0.5, maxAngle * 0.5))
         stroke(230, 187, 100)
        branch(l * 0.75)
        pop()
    }
}
        // stroke(91, 119, 8)
        // stroke(85, 92, 12)
        // background(215, 249, 255)