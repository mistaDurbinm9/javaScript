function Mover() {
  this.force = createVector(random(.03), random(.03));
  this.acc = createVector(random(.3), random(.3));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(random(width), random(height));
  this.r = 3.0;
}

Mover.prototype.run = function() {
  this.render();
  this.update(this.force);
  this.edges();
}

Mover.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Mover.prototype.render = function(force) {
  fill(228, 107, 232);
  strokeWeight(3);
  stroke(218, 224, 105);
  ellipse(this.loc.x, this.loc.y, 50, 50);
}

Mover.prototype.update = function(force) {
  this.force = force;
  this.applyForce(force);
  this.vel.add(this.acc);
  this.vel.limit(1);
  this.loc.add(this.vel);
}

Mover.prototype.edges = function() {
  if (this.loc.x < -this.r) this.loc.x = width + this.r;
  if (this.loc.y < -this.r) this.loc.y = height + this.r;
  if (this.loc.x > width + this.r) this.loc.x = -this.r;
  if (this.loc.y > height + this.r) this.loc.y = -this.r;
}