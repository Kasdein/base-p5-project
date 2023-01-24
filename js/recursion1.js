const Max_lvl = 8
const Min_lvl = 0

function setup() {
    createCanvas(innerWidth, innerHeight)
    background(0)
    stroke(255)
    strokeWeight(1)
    noFill()
    noLoop()
    drawCircle(width * 0.5, height * 0.5, width * 0.25, Max_lvl)
}

function drawCircle(x, y, dm, count) {
    ellipse(x, y, dm)
    if (count-- > Min_lvl) {
        drawCircle(x + dm * 0.5, y, dm, count)
        drawCircle(x - dm * 0.5, y, dm, count)
        // drawCircle(x + dm * 0.5, y, dm * 0.5, count)
        // drawCircle(x - dm * 0.5, y, dm * 0.5, count)
        drawCircle(x, y + dm * 0.5, dm * 0.5, count)
        drawCircle(x, y - dm * 0.5, dm, count)
    }
}

