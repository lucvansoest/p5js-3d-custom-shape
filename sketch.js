
function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {

  background(200);

  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);

  drawCube(100, 100, 100);

  orbitControl();
}

function drawCube(w, h, d) {

  fill(255);

  beginShape(TESS);

  // Front
  vertex(0, 0, 0);
  vertex(0, h, 0);
  vertex(w, h, 0);
  vertex(w, 0, 0);
  // Back
  vertex(0, 0, d);
  vertex(0, h, d);
  vertex(w, h, d);
  vertex(w, 0, d);
  // Left
  vertex(0, 0, 0);
  vertex(0, h, 0);
  vertex(0, h, d);
  vertex(0, 0, d);
  // Right
  vertex(w, 0, 0);
  vertex(w, h, 0);
  vertex(w, h, d);
  vertex(w, 0, d);
  // Bottom
  vertex(0, 0, 0);
  vertex(0, 0, d);
  vertex(w, 0, d);
  vertex(w, 0, 0);
  // Top
  vertex(0, h, 0);
  vertex(0, h, d);
  vertex(w, h, d);

  endShape(CLOSE);

  pop();

}