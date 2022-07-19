// https://www.paulwheeler.us/articles/custom-3d-geometry-in-p5js/
// https://p5js.org/reference/#/p5.Geometry

let customModel;

function setup() {

  createCanvas(400, 400, WEBGL);

  customModel = createModel(50);

}

function draw() {

  background(0);

  ambientLight(225);
  
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);

  orbitControl();
  model(customModel);


}
function createModel(size) {

  return new p5.Geometry(
    1, 1,
    function createGeometry() {

      // front
      this.vertices.push(
        new p5.Vector(-size, -size, size),
        new p5.Vector(size, -size, size),
        new p5.Vector(-size, size, size)
      );

      this.faces.push([0, 1, 2]);

      this.vertices.push(
        new p5.Vector(size, -size, size),
        new p5.Vector(size, size, size),
        new p5.Vector(-size, size, size)
      );

      this.faces.push([3, 4, 5]);

      // back
      this.vertices.push(
        new p5.Vector(-size, -size, -size),
        new p5.Vector(size, -size, -size),
        new p5.Vector(-size, size, -size)
      );

      this.faces.push([6, 7, 8]);

      this.vertices.push(
        new p5.Vector(size, -size, -size),
        new p5.Vector(size, size, -size),
        new p5.Vector(-size, size, -size)
      );

      this.faces.push([9, 10, 11]);

      // right
      this.vertices.push(
        new p5.Vector(size, -size, size),
        new p5.Vector(size, -size, -size),
        new p5.Vector(size, size, size),
      );

      this.faces.push([12, 13, 14]);

      this.vertices.push(
        new p5.Vector(size, -size, -size),
        new p5.Vector(size, size, -size),
        new p5.Vector(size, size, size),
      );

      this.faces.push([15, 16, 17]);

      // left
      this.vertices.push(
        new p5.Vector(-size, -size, size),
        new p5.Vector(-size, -size, -size),
        new p5.Vector(-size, size, size),
      );

      this.faces.push([18, 19, 20]);

      this.vertices.push(
        new p5.Vector(-size, -size, -size),
        new p5.Vector(-size, size, -size),
        new p5.Vector(-size, size, size),
      );

      this.faces.push([21, 22, 23]);

      // top
      this.vertices.push(
        new p5.Vector(-size, -size, size),
        new p5.Vector(size, -size, size),
        new p5.Vector(size, -size, -size)
      );

      this.faces.push([24, 25, 26]);
      
      this.vertices.push(
        new p5.Vector(-size, -size, -size),
        new p5.Vector(size, -size, -size),
        new p5.Vector(-size, -size, size)
      );

      this.faces.push([27, 28, 29]);

      // bottom
      this.vertices.push(
        new p5.Vector(-size, size, size),
        new p5.Vector(size, size, size),
        new p5.Vector(size, size, -size)
      );

      this.faces.push([30, 31, 32]);
      
      this.vertices.push(
        new p5.Vector(-size, size, -size),
        new p5.Vector(size, size, -size),
        new p5.Vector(-size, size, size)
      );

      this.faces.push([33, 34, 35]);

      this.computeNormals();

    }
  );

}
