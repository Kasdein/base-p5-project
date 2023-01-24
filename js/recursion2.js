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
    strokeWeight(map(l, 50, 175, 0.1, 15))
    stroke(lerpColor(yellow1, yellow2, random(0, 1)))
    line(0,0,0,-l)
    translate(0, -l)
    if(l > 10) {
        if(l < 65) {
            //leaves
            let r = 40 + random(-20, 20)
            let g = 140 + random(-20, 20)
            let b = 40 + random(-20, 20)
            let r2 = 40 + random(-20, 20)
            let g2 = 180 + random(-20, 20)
            let b2 = 240 + random(-20, 20)
            // let size = random(10, 25)
            noStroke()
            fill(r, g, b, 225)
            ellipse(0, 0, 8, 85)
            // triangle(size * 0.5, 0, -size * 0.5, 0, 0, size * 0.5)
            // triangle(- size * 0.5, 0, size*0.5, 0, 0 , -size*0.5)
            // triangle(10, - size * 0.5, 10, size*0.5, -size*0.5 , 10)

            
            // beginShape()

            // let radius = random (12, 30)
            // for(let i = 55; i < 185; i++){
            //     let x = radius * cos(i)
            //     let y = radius * sin(i)
            //     // rotate(random(maxAngle, -maxAngle))
            //     vertex(x, y)
            // }
            // for (let i = 85; i > 55; i--){
            //     let x = radius * cos(i)
            //     let y = radius * sin(-i)
            //     vertex(x, y)
            // }
            // endShape(CLOSE)
            // beginShape()
            // fill(r2, g2, b2, 200)
            // radius = random (1, 8)
            // for(let i = 1; i < 180; i++){
            //     let x = radius * cos(i)
            //     let y = radius * sin(i)

            //     rotate(random(maxAngle, -maxAngle))
            //     translate(- x, -y)
            //     vertex(x, y)
            // }
            // for (let i = 180; i > 1; i--){
            //     let x = radius * cos(i)
            //     let y = radius * sin(-i)
            //     vertex(x, y)
            // }
            // endShape(CLOSE)

        } else {
        //branch 1
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.4)
        pop()
        // branch 2
        // push()
        // rotate(random(-maxAngle, maxAngle))
        // branch(l * 0.67)
        // pop()
        //branch 3
        push()
        rotate(random(-maxAngle, maxAngle))
        branch(l * 0.8)
        pop()
        //branch 4
        push()
        rotate(random(-maxAngle*1.75, maxAngle*1.75))
        branch(l * 0.55)
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

