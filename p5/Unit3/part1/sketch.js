let cars = [];
var c = 'lightBlue';
let img;

function preload() {
  img = loadImage('assets/tank1.png');
}

function setup() {
  createCanvas(2880/2, 2100/2);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  noStroke();
}

function draw() {
  background(c);
  image(img, 0, 0, 2880/2, 2100/2);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {

  constructor() {
    //attributes
    this.pos = createVector(900, height - 400);
    this.vel = createVector(random(-.8, .8), random(-8, -3));
    this.r = 255; //random(255);
    this.g = 255; //random(255);
    this.b = 255; //random(255);
    this.a = random(200, 255);
  }
  //methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 3;

  }



}
