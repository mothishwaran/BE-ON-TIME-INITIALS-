
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var initial_mothish;
var running_mothish;
var jumping_mothish;
var falling_mothish;

var mothish;


function preload()
{
	
  initial_mothish=loadAnimation("MOTHISH-INITIAL/22.png","MOTHISH-INITIAL/21.png","MOTHISH-INITIAL/20.png","MOTHISH-INITIAL/19.png",
  "MOTHISH-INITIAL/18.png","MOTHISH-INITIAL/17.png","MOTHISH-INITIAL/16.png","MOTHISH-INITIAL/15.png","MOTHISH-INITIAL/14.png",
  "MOTHISH-INITIAL/13.png","MOTHISH-INITIAL/12.png","MOTHISH-INITIAL/11.png","MOTHISH-INITIAL/10.png","MOTHISH-INITIAL/9.png",
  "MOTHISH-INITIAL/8.png","MOTHISH-INITIAL/7.png","MOTHISH-INITIAL/6.png","MOTHISH-INITIAL/5.png","MOTHISH-INITIAL/4.png",
  "MOTHISH-INITIAL/3.png","MOTHISH-INITIAL/2.png","MOTHISH-INITIAL/1.png","MOTHISH-INITIAL/1.png","MOTHISH-INITIAL/1.png");
	
  running_mothish=loadAnimation("MOTHISH-RUNNING/8.png","MOTHISH-RUNNING/7.png","MOTHISH-RUNNING/6.png",
  "MOTHISH-RUNNING/10.png","MOTHISH-RUNNING/3.png");

  jumping_mothish=loadAnimation("JUMPING-MOTHISH/7.png","JUMPING-MOTHISH/6.png",
  "JUMPING-MOTHISH/5.png","JUMPING-MOTHISH/4.png","JUMPING-MOTHISH/3.png","JUMPING-MOTHISH/2.png","JUMPING-MOTHISH/1.png");

  falling_mothish=loadAnimation("FALLING-MOTHISH/2.png","FALLING-MOTHISH/2.png","FALLING-MOTHISH/1.png","FALLING-MOTHISH/1.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	mothish=createSprite(400,350,40,40)
	mothish.addAnimation("walking",falling_mothish)
	mothish.scale=0.2;



	

	Engine.run(engine);
  
}


function draw() {
  
  background(225);
 
  
  drawSprites();
 
}


