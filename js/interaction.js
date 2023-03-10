let x = 0
let y = 0
let r
let theta = 0
let inc = 0.12
let offset = 0 //the ammount offset from beginning of wave
let frequency
let maxAngle

// 
let num = 25; 
// the size of the 'cursor'
let mx = []; 
// an array 
let my = [];
let mx2 = []; 
let my2 = [];

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    // frameRate(20)
    frequency = windowWidth * 6
    maxAngle = (windowWidth/frequency) * TAU

// cursor  
for (let i = 0; i < num; i++) {
    mx.push(i) 
    my.push(i) 
    my2.push(i)
    mx2.push(i)
    }
}

function draw() {
    // cursor 
    background(0)

        variableEllipse(mouseX, mouseY, mouseX, mouseY)
    }


function variableEllipse(x, y, x2, y2) {
    let length = 5
    while(theta < maxAngle + offset) {
            for (i = length; i > 0; i --){
                r = height * 0.08
                x = mouseX + (r * cos(theta))
                y = mouseY + (r * sin(theta))
                x2 = mouseX + (r * sin(theta))
                y2 = mouseY + (r * cos(theta))
                let which = frameCount % num
                mx[which] = x 
                my[which] = y
                mx2[which] = x2
                my2[which] = y2
                for (let i = 0; i < num; i++) {
                // which+1 is the smallest (the oldest in the array)        
                let index = (which + 1 + i) % num
                let index2 = (which + 1 + i) % num
                noStroke()
                fill(77, 153, 250)
                ellipse(mx[index], my[index], i, i)
                fill(250, 153, 77)
                ellipse(mx2[index2], my2[index2], i, i)
                }
            }
        theta += 0.02
        x = ((theta)) * windowWidth  
        }
        offset += inc
}

