function Attractor() {
  this.force = createVector(0, 0);
  this.acc = createVector(random(.1, .9), random(-.9, .1));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(random(width), random(height));
  
  this.render = function() {
    push();
    fill(218, 224, 105);
    strokeWeight(3);
    stroke(228, 107, 232);
    imageMode(CENTER);
    image(lopezH, this.loc.x, this.loc.y, 70, 70);
    pop();
  }
}