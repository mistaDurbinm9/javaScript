var mover;
var balls;

function setup() {
  createCanvas(600, 600);
  mover = new Mover();
  balls = new Balls();
  
  loadBalls();
  
}

function draw() {
  background(0);
  
  mover.run();
  balls.run();
}

function mouseDragged() {
  balls.addBall(new Ball(mouseX,mouseY));
}

function loadBalls() {
  for(var i = 0; i < 50; i++){
    var b = new Ball(width/2, height/2);
    balls.addBall(b);
  }
}

function Balls() {
  this.balls = [];
}

Balls.prototype.run = function() {
  for(var i = 0; i < this.balls.length; i++){
    this.balls[i].run(this.balls);
  }
}

Balls.prototype.addBall = function(b) {
  this.balls.push(b)
}

function Mover(x,y) {
  this.vel = createVector(random(-2,2),random(-2,2));
  this.loc = createVector(random(width),random(height));
  this.acc = createVector(random(.3),random(.3));
  this.r = 3.0;
}

Mover.prototype.run = function() {
  this.render();
  this.edges();
  this.update();
}

Mover.prototype.update = function() {
  this.vel.add(this.acc);
  this.vel.limit(this.maxS);
  this.loc.add(this.vel);
  this.acc.mult(0);
}

Mover.prototype.render = function() {
  fill(228, 107, 232);
  strokeWeight(3);
  stroke(218,224,105);
  ellipse(this.loc.x, this.loc.y, 50, 50);
}

Mover.prototype.edges = function() {
  if (this.loc.x < -this.r)  this.loc.x = width +this.r;
  if (this.loc.y < -this.r)  this.loc.y = height+this.r;
  if (this.loc.x > width +this.r) this.loc.x = -this.r;
  if (this.loc.y > height+this.r) this.loc.y = -this.r;
}

function Ball(x,y) {
  this.force = createVector(0,0);
  this.vel = createVector(random(-2,2),random(-2,2));
  this.loc = createVector(random(width),random(height));
  this.acc = createVector(random(-1,1),random(-1,1));
  this.maxS = 3;
  this.r = 3.0;
}

Ball.prototype.run = function() {
  this.render();
  this.edges();
  this.update();
}
Ball.prototype.update = function() {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.acc.mult(0);
}

Ball.prototype.render = function() {
  fill(107, 228, 232);
  strokeWeight(3);
  stroke(218,224,105);
  ellipse(this.loc.x, this.loc.y, 10, 10);
}

Ball.prototype.edges = function() {
  if (this.loc.x < -this.r)  this.loc.x = width +this.r;
  if (this.loc.y < -this.r)  this.loc.y = height+this.r;
  if (this.loc.x > width +this.r) this.loc.x = -this.r;
  if (this.loc.y > height+this.r) this.loc.y = -this.r;
}
