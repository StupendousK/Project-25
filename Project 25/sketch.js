
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var dustbin;

var ground;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(170, 600, 40);

	dustbin = new Dustbin(1000, 630);
	ground = new Ground(800, 650, 1600, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paper.body, paper.body.position,{x:340, y:-340});

	}
}



