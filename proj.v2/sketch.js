
var boids = [];
var numB = 50;

function setup() {
  createCanvas(600, 600);

  Boid.prototype = new Mover();
  Attractor.prototype = new Mover();
  Repeller.prototype = new Mover();

  b1 = new Boid();
  a = new Attractor();
  r = new Repeller();
  loadBoids();
}

function draw() {

  background(0);
  //background(100, 232, 126);

  r.run();
  a.run();

  for (var i = 0; i < boids.length; i++) {
    boids[i].run();
  }
}

function loadBoids() {
  for (var i = 0; i < numB; i++) {
    boids.push(new Boid());
  }
}