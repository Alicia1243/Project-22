const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var bobs = new Group();


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	rope1 = new rope();
	rope2 = new rope();
	rope3 = new rope();
	rope4 = new rope();
	rope5 = new rope();

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bobs_options={
		isStatic:true,
		restitution: 0.9,
		frictionAir: 3
		
	}
	bobs.add(bob1, bob2, bob3, bob4, bob5)
	bobs = Bodies.circle(545, 300, 3, bobs_options);
	World.add(world, bobs);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  display(rope);

  
  //create ellipse shape for multiple bobs here
ellipse(bob1, bob2, bob3, bob4, bob5);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if(keycode == UP_ARROW){
bob1.applyForce({x:0, y:0}, {x:0, y:0.05})
}
