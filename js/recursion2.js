let brown1, brown2

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    noLoop()
    background(250)
    strokeJoin(ROUND)
    brown1 = color(93, 69, 20)
    brown2 = color(137, 75, 9)
}

function draw() {    
    translate(width * 0.5, height)
    branch(250)
}

function branch(l) {
    let maxAngle = 45
    strokeWeight(map(l, 20, 250, 1, 10))
    stroke(lerpColor(brown1, brown2, random(0, 1)))
    line(0,0,0,-l)
    translate(0, -l)
    if(l > 10) {
        if(l < 50) {
            //leaves
            let r = 40 + random(-20, 20)
            let g = 140 + random(-20, 20)
            let b = 40 + random(-20, 20)
            fill(r, g, b)
            let size = random(10, 25)
            rotate(random(maxAngle, -maxAngle))
            noStroke()
            // triangle(size * 0.5, 0, -size * 0.5, 0, 0, size * 0.5)
            triangle(- size * 0.5, 0, size*0.5, 0, 0 , -size*0.5)
            triangle(10, - size * 0.5, 10, size*0.5, -size*0.5 , 10)

        } else {
        //branch 1
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.8)
        pop()
        // branch 2
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.5)
        pop()
        //branch 3
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.67)
        pop()
        //branch 4
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.3)
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

