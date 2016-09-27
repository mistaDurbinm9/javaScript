function Boid() {
  this.force = createVector(0, 0);
  this.acc = createVector(random(.1, .9), random(-.9, .1));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(random(width), random(height));



  this.render = function() {
    push();
    fill(107, 228, 232);
    strokeWeight(3);
    stroke(218, 224, 105);
    imageMode(CENTER);
    image(timb, this.loc.x, this.loc.y, 30, 30);
    pop();

  }



  this.update = function(force) {
    this.force = force;
    this.force2 = force;

    this.fear = random(100, 200);

    this.force = p5.Vector.sub(this.loc, r.loc);
    this.force2 = p5.Vector.sub(this.loc, a.loc);

    this.force.normalize();
    this.force.mult(.1);

    this.force2.normalize();
    this.force2.mult(.1);

    if (this.loc.dist(r.loc) < 50) {
      push();
      strokeWeight(3);
      stroke(255, 0, 0);
      line(this.loc.x, this.loc.y, r.loc.x, r.loc.y);
      pop();
      this.applyForce(this.force);
      this.vel.add(this.force);
      this.vel.limit(random(3, 6));
    } else if (this.loc.dist(r.loc) < 90) {
      push();
      strokeWeight(3);
      stroke(255, 0, 0);
      line(this.loc.x, this.loc.y, r.loc.x, r.loc.y);
      pop();
      this.applyForce(this.force);
      this.vel.add(this.force);
      this.vel.limit(random(1, 2));
    } else if (this.loc.dist(a.loc) < 100) {
      push();
      strokeWeight(3);
      stroke(0, 255, 0);
      line(this.loc.x, this.loc.y, a.loc.x, a.loc.y);
      pop();
      this.applyForce(this.force2);
      this.vel.add(this.force2.mult(-2));
      this.vel.limit(random(3, 6));
    } else if (this.loc.dist(a.loc) < 90) {
      push();
      strokeWeight(3);
      stroke(0, 255, 0);
      line(this.loc.x, this.loc.y, a.loc.x, a.loc.y);
      pop();
      this.applyForce(this.force2);
      this.vel.add(this.force2.mult(-1));
      this.vel.limit(random(1, 2));
    } else {
      this.vel.limit(1);
    }
    this.loc.add(this.vel);
    this.acc.mult(0);
    this.checkEdges();
  }

  this.checkEdges = function() {
    if (this.loc.x > width || this.loc.x < 0) this.vel.x *= -1;
    if (this.loc.y > height || this.loc.y < 0) this.vel.y *= -1;
  }
}