var ground 
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

	//Create the Bodies Here.
	ground=new Ground(750,690,1600,10)
	paper=new Paper(100,400,50)
	box1= new Dustbin(1400,670,250,20)
	box2=new Dustbin(1280,650,10,120)
	box3=new Dustbin(1530,650,10,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

