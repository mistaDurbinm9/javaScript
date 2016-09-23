function Attractor() {
  this.force = createVector(0, 0);
  this.acc = createVector(random(.1, .9), random(-.9, .1));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(random(width), random(height));
  
  this.render = function() {
    fill(218, 224, 105);
    strokeWeight(3);
    stroke(228, 107, 232);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}