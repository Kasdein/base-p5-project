let x = 0
let y = 0
let r
let theta = 0
let inc = 0.12
let offset = 0 //the ammount offset from beginning of wave
let amplitude
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
    amplitude = windowHeight * 0.1
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
        variableEllipse(mouseX, mouseY, pmouseX, pmouseY)
    }


function variableEllipse(x, y, px, py) {
    let length = 5
    while(theta < maxAngle + offset) {
            for (i = length; i > 0; i --){
                // y = mouseY + (cos(theta) * amplitude)
                r = height * 0.12
                x = mouseX + (r * cos(theta))
                y = mouseY + (r * sin(theta))
                // fill (255 - (255/length * i), 0, 0)
                // ellipse(x, y, 12, 12)
                px = mouseX + (r * sin(theta))
                py = mouseY + (r * cos(theta))
                let circleColor = color(0)
                let which = frameCount % num
                mx[which] = px 
                my[which] = py
                mx2[which] = x
                my2[which] = y
                for (let i = 0; i < num; i++) {
                // which+1 is the smallest (the oldest in the array)        
                let index = (which + 1 + i) % num
                let index2 = (which + 1 + i) % num
                // stroke(circleColor)
                // noStroke()
                // fill (255 - (255/length * i), 0, 0)
                ellipse(mx[index], my[index], i, i)
                ellipse(mx2[index2], my2[index2], i, i)
                }
            }
        theta += 0.1
        x = ((theta)) * windowWidth  
        }
        offset += inc
}

// function setup() {    
// cursor    for (let i = 0; i < num; i++) {        
// mx.push(i);        my.push(i);    }
// }

// function draw() {    
// cursor    let which = frameCount % num;    
// mx[which] = mouseX;    my[which] = mouseY;    
// for (let i = 0; i < num; i++) {        
// which+1 is the smallest (the oldest in the array)        
// let index = (which + 1 + i) % num;        
// ellipse(mx[index], my[index], i, i);        
// stroke(circleColor);    }
// }

