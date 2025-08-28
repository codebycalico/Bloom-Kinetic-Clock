// Calico Rose
// August 27, 2025
// Kinetic Bloom Clock
// Following tutorial from Patt Vira:
// https://www.youtube.com/watch?v=5DbKk29lroE

let Ax = 0, Ay = 0, Cx = 0;
let Bx, By, Cy_tri;

// length of side of crank
let AB = 100;
// length of connecting rod
let BC = AB * 1.1;
let angle = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  // length of the crank
  Bx = AB * cos(angle);
  By = AB * sin(angle);

  if (BC > AB) {
    // reflect way want to move
    Cy_tri = By - sqrt(BC * BC - Bx * Bx)
  } else {
    Cy_tri = 0;
  }
  
  let Cy_osc = AB * sin(angle) - AB;

  translate(width/2, height/2);

  // show the difference between the real world and the digital design
  // red shows code but doesn't represent accurate reality
  // black shows real world mechanical
  fill(0);
  stroke(0);
  ellipse(Ax, Ay, 5, 5);
  line(Ax, Ay, Bx, By);
  ellipse(Bx, By, 5, 5);
  line(Bx, By, Cx, Cy_tri);
  ellipse(Cx, Cy_tri, 5, 5);
  line(0, 0, Cx, Cy_tri);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  line(Bx, By, Cx, Cy_osc);
  ellipse(Cx, Cy_osc, 5, 5);
  line(0, 0, Cx, Cy_osc);

  angle += 0.01;
}
