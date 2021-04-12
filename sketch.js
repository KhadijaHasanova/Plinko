const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  //create the canvas
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  //create the ground
  ground = new Ground(width/2,height,width,20);

  //create the divisions
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create the plinkos
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
}


function draw() {
  //set the background color
  background("black");

  Engine.update(engine);
 
  //display the plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //create the particles
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  //display the particles
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }
  
  //display the divisions
  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display();
  }
}