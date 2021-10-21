const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,40,ball_options);
	World.add(world,ball);

	//write the code to make the ground object and the leftSide ground object
	groundObj = new ground(width/2,670,width,20)
	leftSide = new ground(1100,600,20,120)
	
	rightSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


//write the code to display the ball on the screen
	ball.display()
	
	
	
//write the code to display the ground and leftSide 
  leftSide.display();
  rightSide.display();
	groundObj.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
		//Matter.applyForce(ball.position,{x:85,y:-85});
		//Matter.Body.ApplyForce(ball,ballPosition,{x:85,y:-85});
		//Matter.body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
