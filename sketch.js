const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
    
  ground = new Ground(240, 795, 480, 10);

  //console.log("width=" + width);
  //k is x of every divisions
  for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
    //console.log("k=" + k);
  }

    for (var j = 40; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j, 75));
    }
    for (var j = 15; j <=width-10; j=j+50)
    {
      plinkos.push(new Plinko(j, 175));
    }
    for(var j = 10; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j,275));
    }
    for (var j= -5; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j,375));
    }

    
}

function draw() {
  background(1,1,1); 
  Engine.update(engine);
  ground.display(); 
  
  for (i=0; i < divisions.length; i++){
    divisions[i].display();
  } 

  for (i=0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount%60===0){
    var r = random(width/2-10, width/2+10);
    //console.log("r=" + r)
    particles.push(new Particle(r, 10, 10))
}

  //console.log("particles=" + particles.length);
  for (i=0; i< particles.length; i++){
    particles[i].display();
  }

 

  drawSprites();
}