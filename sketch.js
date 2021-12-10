var ball


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

	engine = Engine.create();
	world = engine.world;
	ball = add.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	Matter.Bodies.circle(120, 200, 20, ball_options, 1)
		
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  drawSprites();
 
}

function keyPressed() 
{

	if (keyCode === UP_ARROW) 
	{
		ball.velocityX += 10
	}

}