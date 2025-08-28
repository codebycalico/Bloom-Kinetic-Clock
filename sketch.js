/*
----- Coding Tutorial by Patt Vira ----- 
Name: Bloom Kinetic Clock
Video Tutorial: https://youtu.be/5DbKk29lroE

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let Ax = 0, Ay = 0, Cx = 0;
let Bx, By, Cy;
let AB = 40; let BC = AB * 1.1;
let angle = 0;

let petalCount = 12;
let colors;

function setup() {
  createCanvas(400, 400);
  //colors = ["#2A5934", "#D048A7", "#f49cbb"];
  colors = ["#FF2400 ", "#4169E1", "#FFFF00"];
}

function draw() {
  background(255);
  let h = hour() % 12;
  let m = minute();
  let s = second();
  
  let hAngle = map(h + m/60, 0, 12, -PI/2, 3 * PI/2);
  let mAngle = map(m + s/60, 0, 60, -PI/2, 3 * PI/2);
  let sAngle = map(s, 0, 60, -PI/2, 3 * PI/2);
  
  
  Bx = AB * cos(hAngle);
  By = AB * sin(hAngle);
  
  // Method 1: Crank-slider system 
  // if (BC > AB) {
  //   Cy = By - sqrt(BC * BC - Bx * Bx);
  // } else {
  //   Cy = 0;
  // }
  
  // Method 2: Oscillation 
  Cy = AB * sin(sAngle) - AB;
  
  let baseRadius = abs(Cy) + AB;
  let outerRadius = baseRadius + 10;
  let innerRadius = baseRadius - 10; 

  translate(width/2, height/2);
  
  // Draw the flower shapes 
  drawFlower(outerRadius + 20, outerRadius - 10, color(colors[0]), sAngle);
  drawFlower(outerRadius + 10, baseRadius * 0.7, color(colors[1]), sAngle);
  drawFlower(outerRadius, baseRadius * 0.5, color(colors[2]), hAngle);
  drawFlower(innerRadius, baseRadius * 0.6, color(colors[1]), hAngle);
  
  // Draw the clock arms 
  fill(0);
  stroke(0);
  strokeWeight(2);
  //ellipse(Ax, Ay, 5, 5);
  line(Ax, Ay, Bx, By); // AB crank
  //ellipse(Bx, By, 5, 5);
  //line(Bx, By, Cx, Cy); // BC connecting rod 

  //stroke(150);
  //fill(150);
  //ellipse(Cx, Cy, 5, 5);
  line(0, 0, Cx, Cy); // C Slider 
  
  angle += 0.01;
}

function drawFlower(outerR, innerR, c, offsetAngle) {
  fill(c);
  noStroke();
  for (let i=0; i<petalCount; i++) {
    let baseAngle = (TWO_PI / petalCount) * i + offsetAngle; 
    let nextAngle = (TWO_PI / petalCount) * (i + 1) + offsetAngle;
    let middleAngle = (baseAngle + nextAngle) / 2;
    
    let x1 = outerR * cos(baseAngle);
    let y1 = outerR * sin(baseAngle);
    let x2 = outerR * cos(nextAngle);
    let y2 = outerR * sin(nextAngle);
    let x3 = innerR * cos(middleAngle);
    let y3 = innerR * sin(middleAngle);
    
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    endShape(CLOSE);
  }
}