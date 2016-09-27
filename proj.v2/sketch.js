var count;

var boids = [];
var numB = 50;

var sound;

var lopezM;
var lopezH;
var timb;
var bg;

function preload(){
  sound = loadSound("sound.mp3");
}

function setup() {
  count = 0;
  lopezM = loadImage("lopez.png");
  lopezH = loadImage("lopezH.png");
  timb = loadImage("timb.png");
  bg = loadImage("bg.jpg");
  
  createCanvas(600, 600);

  Boid.prototype = new Mover();
  Attractor.prototype = new Mover();
  Repeller.prototype = new Mover();

  b1 = new Boid();
  a = new Attractor();
  r = new Repeller();
  loadBoids();
  sound.play();
}

function draw() {
  
  count ++;
  background(bg);
  //background(100, 232, 126);

  textSize(30);
  fill(255, 0, 0);
  text("Swags == " + count, 10, 60);

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