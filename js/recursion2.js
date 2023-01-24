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
            let r2 = 40 + random(-20, 20)
            let g2 = 180 + random(-20, 20)
            let b2 = 240 + random(-20, 20)
            // let size = random(10, 25)
            noStroke()
            // triangle(size * 0.5, 0, -size * 0.5, 0, 0, size * 0.5)
            // triangle(- size * 0.5, 0, size*0.5, 0, 0 , -size*0.5)
            // triangle(10, - size * 0.5, 10, size*0.5, -size*0.5 , 10)

            beginShape()
            fill(r, g, b, 200)
            let radius = random (10, 30)
            for(let i = 55; i < 185; i++){
                let x = radius * cos(i)
                let y = radius * sin(i)
                // rotate(random(maxAngle, -maxAngle))
                vertex(x, y)
            }
            for (let i = 85; i > 55; i--){
                let x = radius * cos(i)
                let y = radius * sin(-i)
                vertex(x, y)
            }
            endShape(CLOSE)
            beginShape()
            fill(r2, g2, b2, 200)
            radius = random (1, 10)
            for(let i = 5; i < 180; i++){
                let x = radius * cos(i)
                let y = radius * sin(i)

                rotate(random(maxAngle, -maxAngle))
                translate(- x, -y)
                vertex(x, y)
            }
            for (let i = 180; i > 5; i--){
                let x = radius * cos(i)
                let y = radius * sin(-i)
                vertex(x, y)
            }
            endShape(CLOSE)
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
        rotate(random(-maxAngle*1.75, maxAngle*1.75))
        branch(l * 0.5)
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

