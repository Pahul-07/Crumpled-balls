
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(800,685,1600,20);

	dustbin1= new Dustbin(900,670,215,20);
	dustbin2= new Dustbin(810,635,20,200);
	dustbin3= new Dustbin(1030,635,20,200);

    paper= new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();
}

function keyPressed () {
   if(keyCode === UP_ARROW){
	  Matter.Body.applyForce (paper.body, paper.body.position, {x: 80, y: -80})
	}
}


